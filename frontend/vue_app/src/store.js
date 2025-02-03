import { reactive } from 'vue'
  // firebase
  import { initializeApp } from 'firebase/app'
  import { getFirestore, collection, doc, addDoc, getDoc, setDoc, updateDoc, serverTimestamp, getCountFromServer } from 'firebase/firestore'
  import { getAuth, signInAnonymously, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"

export const state = reactive({
  page: 'home',
  created: new Date(),
  withAHook: false,
  hook: {id: "", brand: "", status: undefined},
  demo_mode: false,
  progressbar: false,
  fbIsReady: false,
  db_connection: undefined,
  app: undefined,
  auth: undefined,
  currentUser: undefined,
  isGuest: undefined,
  loggedIn: false,
  uid: undefined,
  dataPresent: false,
  isNewUser: true,
  login_email: undefined, // for the sign-up process
  user_email: undefined, // for user profile when logged in
  user_displayemail: undefined,

  extensionInstalled: false,
  createdDateTime: Date.now(),
  push(path) {
    // Save the current search string
    const currentSearchString = window.location.search;
    console.log('push', path, currentSearchString)



    // Change path to new address without changing search parameters:
    history.pushState({  }, null, (path === 'home' ? '/' : '/'+path) + currentSearchString);
    // paths: /, /demo, /dashboard, /add, /login, /logout, /privacy, /about
    this.page = path;
  },
  async updateUserProfile(user) {
    this.currentUser = user
    this.uid = user.uid
    this.loggedIn = true
    this.isGuest = user.isAnonymous
    this.user_email = user.email
    // console.log('Log state changes - user email', user.email)
    if (user.email) {
      let emailParts = user.email.split('@');
      let obfuscatedUsername = emailParts[0].length > 2 ? emailParts[0].substr(0, 2) + '*'.repeat(emailParts[0].length - 2) : emailParts[0];
      this.user_displayemail = obfuscatedUsername + '@' + emailParts[1];
    } 
    const cnt = await this.countUserReceipts(user.uid); console.log('cnt receipts ', cnt, cnt>0)
    this.dataPresent = cnt > 0

    let firestore_user_record = doc(this.db_connection, "users", user.uid)
    let user_profile = await getDoc(firestore_user_record)
    if (!user_profile.exists()) {
      console.log('new user - creating', user_profile)
      await setDoc(firestore_user_record, { 
        authID: user.uid, 
        type: this.isGuest? "anonymous" : "permanent", 
        email: this.isGuest ? "" : user.email,
        created_date: serverTimestamp(), 
        last_log: serverTimestamp() })
    } else {
      console.log('existing user - updating', user_profile)
      await updateDoc(firestore_user_record, { last_log: serverTimestamp() })
      console.log('updated')
    }
    console.log('user profile updated')

  },
  initFirebase(config) {

    const app = initializeApp(config)
    this.app = app
    this.db_connection = getFirestore(app)
    this.auth = getAuth(app)


    this.auth.onAuthStateChanged(async (user)=>{
        console.log('auth state changed to', user)
        if (user) {
            // console.log('loginpane: user logged in', user)
              // this.currentUser = user
              // this.uid = user.uid
              // this.loggedIn = true
              // this.isGuest = user.isAnonymous
              // this.user_email = user.email
              // // console.log('Log state changes - user email', user.email)
              // if (user.email) {
              //   let emailParts = user.email.split('@');
              //   let obfuscatedUsername = emailParts[0].length > 2 ? emailParts[0].substr(0, 2) + '*'.repeat(emailParts[0].length - 2) : emailParts[0];
              //   this.user_displayemail = obfuscatedUsername + '@' + emailParts[1];
              // } 
              // this.dataPresent = await this.countUserReceipts(user.uid) > 0
            this.updateUserProfile(user)
            this.fbIsReady = true
        } else {
            // console.log('loginpane: user logged out')
            this.currentUser = undefined
            this.uid = undefined
            this.loggedIn = false
            this.isGuest = undefined
            this.user_email = undefined
            this.dataPresent = false
            this.fbIsReady = true
            this.user_displayemail = undefined
        }
    })
  },
  async signAsGuest() {
      let user = await signInAnonymously(this.auth)
      console.log('signed in anonymously', user)
      console.log('new user after login', this.auth.currentUser.uid)
      // await this.updateUserProfile(user)
      return true
  },
  async signInFlowStep1(email, payload, callbacks={}) {
    // this.flowStatus = {}
    // this.loginFlowOn = true
  
    // create a search string from payload object
    let search_string = ''
    for (const [key, value] of Object.entries(payload)) {
      search_string += '&' + key + '=' + encodeURIComponent(value)
    }
  
    this.login_email = email;
      // send email
    console.log('login: sending email', search_string=="" ? 'https://'+window.location.host+'/login' : 'https://'+window.location.host+'/login?' + search_string)
      
    sendSignInLinkToEmail(this.auth, email, 
      {
        url: search_string=="" ? 'https://'+window.location.host+'/login' : 'https://'+window.location.host+'/login?' + search_string,
        handleCodeInApp: true,
      }
      ).then(
          () => {
            console.log('loginpane: email sent')
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
  
            window.localStorage.setItem('emailForSignIn', email)
  
            if (callbacks?.success) callbacks.success()
  
        }).catch((error) => {
            console.log('loginpane: error sending email', error)
            if (callbacks?.error) callbacks.error()
  
            // this.flowStatus  = {text: 'Error sending sign-in email happened. Let us know about it, and we will fix it asap', color: 'error'}
        });
  
  },
  async deleteDataRequest(delete_account=false) {
    await addDoc(
      collection(this.db_connection, "users", this.uid, "user_requests"), 
      { action: "deleteAll", delete_account: delete_account, action_timestamp: serverTimestamp()}
    )
    return true
  },
  async deleteData(_this) {
    console.log('deletingData', this.currentUser)

    await this.deleteDataRequest(_this.dialogs.delete_account)

    if (_this.dialogs.delete_account) { 
      console.log('delete account ', this.currentUser)
      this.currentUser.delete();     
    }

    _this.receipts_raw = [];
    _this.items_raw = [];
    _this.uploads_raw = [];
    _this.loading.delete_data=false;
    _this.dialogs.delete = false;
    return true
  }
  ,
  async countUserReceipts() {
    try {
      const res = await getCountFromServer(collection(this.db_connection, 'users', this.uid, 'receipts'))
      console.log('countUserReceipts', res.data().count)
      return res.data().count
    } catch (res_1) {
      console.log('issues to get data from firestore (probably empty)', res_1)
      return 0
    } // (async () => {return await getCountFromServer(collection(this.db_connection,'user', userId, 'receipts')) })()
    return 0
  },
  supportedPlatform () {
    console.log(navigator.userAgent, navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('mobile'))
    return navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('mobile')
  },
  async signOutHandler(deleteFirst=false) {

    if (this.isGuest) {
      console.log('signOutHandler: deletefirst? ' + deleteFirst)
      // handle delete data
      if (deleteFirst) { await this.deleteDataRequest(true); await this.auth.currentUser.delete() }
      else {
        await this.auth.currentUser.delete()
      }
    } else {
      await this.auth.signOut()
    }

  },
})
// TODO: error handler/logger



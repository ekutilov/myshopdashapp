<script>
    import { toRaw } from 'vue'
    import { state } from '../store.js'
    import { getApp } from 'firebase/app'
    // import { getFirestore } from 'firebase/firestore'
    import { getAuth, signInAnonymously,
        sendSignInLinkToEmail, 
        // isSignInWithEmailLink, signInWithEmailLink 
    } from "firebase/auth"

    export default {
    name: 'loginpane',
        data () {
            return {
            state, 
            showEmailDialog: false,
            loginFlowOn: false,
            flowStatus: {}, // {color: 'error', text: undefined},
            msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            loginFlow() {
                // console.log('loginpane: loginFlow')
                this.flowStatus = {}
                this.loginFlowOn = true
                // check if email is valid
                let email = this.state.email;
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(String(email).toLowerCase())) { 
                    // console.log('loginpane: email is valid')
                    // send email
                    // console.log('loginpane: sending email', 'https://'+window.location.host+'/login?url=' + window.location.href,)
                    sendSignInLinkToEmail(state.auth, email, {
                        url: 'https://'+window.location.host+'/login?url=' + window.location.href,
                        handleCodeInApp: true,
                    }).then(() => {
                        // console.log('loginpane: email sent')
                        // The link was successfully sent. Inform the user.
                        // Save the email locally so you don't need to ask the user for it again
                        // if they open the link on the same device.
                        window.localStorage.setItem('emailForSignIn', email);
                        this.flowStatus = {text: 'Sign-in email sent. Please check your inbox', color: 'success'}
                        // ...
                    }).catch((error) => {
                        console.log('loginpane: error sending email', error)
                        this.flowStatus  = {text: 'Error sending sign-in email happened. Let us know about it, and we will fix it asap', color: 'error'}
                        // Some error occurred, you can inspect the code: error.code
                    });
                    setTimeout(()=>{
                    
                    }, 20000)
                } else {
                    this.flowStatus = {text: 'Please enter a valid email address', color: 'error'}
                    this.loginFlowOn = false
                    console.log('loginpane: email is NOT valid')
                }
            },
            signInAnonymously,
                
        },
        watch: {
            'state.auth': { deep: true,
                handler(newVal) {
                    //console.log('loginpane: auth state changed to', newVal)
                    if (this.state.auth) this.state.auth.onAuthStateChanged((user)=>{
                        // console.log('loginpane: auth state changed to', user)
                        if (user) {
                            // console.log('loginpane: user logged in', user)
                        } else {
                            // console.log('loginpane: user logged out')
                        }
                    }
                    ) // : console.log('loginpane: auth state changed to', newVal)

                    // console.log('new user before login', this.state.auth.currentUser?.uid)
                    // let t = getAuth()
                    // console.log(t.keys)
                    // signInAnonymously(t).then((user)=>{
                    //     console.log('signed in anonymously', user)
                    //     console.log('new user after login', this.state.auth.currentUser.uid)
                    // }).catch((error)=>{
                    //     console.log('error signing in anonymously', error)
                    // })
                }, 
            }
        },
        async mounted() {
        },
        async created() {
        },
    }
</script>

<template>
<v-row class="px-0">
    <v-col>
      <v-card class="d-flex flex-wrap justify-space-around" v-if="state.fbIsReady">
        <v-card flat class="">
          <v-card-title class="text-grey-darken-3 font-weight-thin mb-1 text-h4 mt-1" ></v-card-title>
          <v-card-text>
            Login: current user is {{ state.loggedIn ? state.uid : 'not logged' }} ({{ state.user_email }})
          </v-card-text>
          <v-btn  :disabled="state.loggedIn" :loading="loginFlowOn" @click="showEmailDialog=true">Login</v-btn>
          <!-- run modal with email dialog -->
          <v-dialog v-model="showEmailDialog" max-width="500px">
            <v-card>
              <v-card-title class="headline">Use as a modal</v-card-title>
              <v-card-text>
                <v-text-field v-model="state.email" label="Email"></v-text-field>

                <span :class="'text-'+flowStatus.color" v-if="flowStatus">{{ flowStatus.text }}</span>

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="showEmailDialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text :loading="loginFlowOn" @click="loginFlow">Save</v-btn>
              </v-card-actions>
            </v-card>
            </v-dialog>

            <v-btn  :disabled="state.loggedIn" @click="signInAnonymously(state.auth)">Anonymous</v-btn>

        </v-card>
        <v-card flat class="">
          <v-card-title class="text-grey-darken-3 font-weight-thin mb-1 text-h4 mt-1" ></v-card-title>
          <v-card-text>
            <v-btn  @click="state.auth.signOut()" :disabled="!state.loggedIn" >Logout</v-btn>
          </v-card-text>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<template>
    <msdCard>
        <template #header>New Shopping Data Upload</template>

        <v-overlay
        v-model="overlay_on"
        persistent
        class="align-center justify-center"
        >
    <v-row><v-col cols="1" sm="1" md="2" lg="3"></v-col><v-col cols="10" sm="10" md="8" lg="6">
        <v-card class="px-3 py-5" >
            <div v-if="!state.fbIsReady">
            <Spinner  />
            </div>
            <div v-else-if="!state.hook.status">
                <v-row><v-col>
                    <v-card flat class="py-3">
                    Something went wrong or you are at this page by mistake. Please, click 
                    here to return to the main page: <a href="#" @click='state.push("home")'>home</a>
                    </v-card>
                </v-col></v-row>
            </div>
            <div v-else>
                <v-card flat class="py-4 px-6 mx-3">
                    <v-row>
                        
                        <v-col cols="12" class=''>
                            <v-card flat>
                                <v-row >
                                    <v-col class="d-flex justify-center">
                                        <v-avatar color="success" :icon="mdiCheck" ></v-avatar>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col></v-col>
                                    <v-col class="d-flex justify-center" cols="12" sx="12" sm="12" md="8" lg="6" xl="6">
                                        <p class='text-center text-h5'>Your shopping data from {{ titleCase(state.hook.brand) }} 
                                        has been captured by the extension and about to be added to your dashboard.</p>
                                    </v-col>
                                    <v-col></v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        
                    </v-row>
                    <!-- current sign status -->
                    <span v-if="state.loggedIn">

                        <v-row class="d-flex">
                            <v-col class="d-flex flex-column align-center">
                                <v-card variant="outlined bg-green-lighten-5" style='border-color: green;'>
                                    <v-card-text  class="pa-3 d-flex flex-column w-100 h-100 align-center justify-center">
                                    <div class="text-subtitle-1 text-center">
                                        <p class="py-1">You currently signed in as 
                                            <span class="text-primary">{{ state.isGuest ? "Guest" : state.user_displayemail }}</span>.</p>
                                        
                                    <p class="py-1">Your data will be added to your current sign-in account. </p>
                                    
                                    <p class="py-1">Do you want to continue?</p>
                                    </div>
                                <v-card-actions> 
                                    <v-btn @click="loggedAdd" color="green" variant="flat" size="large">Proceed</v-btn>
                                </v-card-actions></v-card-text>
                                
                               </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col  class="d-flex flex-column align-center justify-center" >
                                <v-card flat class="d-flex flex-column align-center w-100 h-100" variant="" style="opacity:0.7">
                                    <div class='text-center my-auto'>If your want to sign-out of your current accout first: </div>
                                        <!-- sign state management pane-->
                                        <v-dialog  max-width="500px">
                                            <template v-slot:activator="{ props }">
                                                <v-btn v-bind="props" variant="tonal">Sign Out<LogoutDialog /></v-btn>
                                            </template>
                                            <!-- <template v-slot:default="{ isActive }">
                                            <v-card>
                                                <v-card-title>Sign Out</v-card-title>
                                                <v-card-text>
                                                    <p>Are you sure you want to sign out?</p>
                                                    <span v-if="state.isGuest&&state.dataPresent">
                                                        <p>You are signed in as a Guest and have some data 
                                                            uploaded to your dashboard. Do you want to delete 
                                                            your data too?
                                                        </p>
                                                        <v-checkbox v-model="deleteFirst" label="Delete data"></v-checkbox>
                                                    </span>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="green darken-1" text @click="isActive.value=false">Cancel</v-btn>
                                                    <v-btn color="red darken-1" text @click="signOutHandler(this.deleteFirst);isActive.value=false">Confirm</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                            </template> -->
                                        </v-dialog>


                                    <!-- divider -->
                                </v-card>
                            </v-col>
                        </v-row>
                        
                    </span>
                    <!-- if not SIGNED IN -->
                    <!-- if not SIGNED IN -->
                    <!-- if not SIGNED IN -->
                    <span v-else>
                        <v-row class="py-4">
                            <v-col  class="d-flex flex-column align-center">
                                <div><v-avatar color="success" size="x-large" @click="signInStarted=true" >
                                    <v-icon size='x-large'>{{ mdiLogin }}</v-icon>
                                </v-avatar></div>
                                <div  class="py-4" ><v-btn @click="signInStarted=true" v-if="!signInStarted" variant="tonal">Sign Me In (or Up)</v-btn></div>
                                <div class='text-center text-h6 py-2' v-if="!signInStarted" >
                                    Add data to your personal account so you can access it later 
                                </div>
                                
                                <div class='w-100 py-2' v-if="signInStarted">Sign In/Up with your email: <LoginDialog :payload="login_object" />
                                A sign in link will be sent to this address.</div>
                                <!-- v-card v-if="signInStarted" class='w-100 w-xl-50' flat>
                                    <v-text-field label="email">
                                    </v-text-field>
                                    <v-btn variant="tonal">Sign</v-btn>
                                </v-card -->
                                <div class="text-caption">If you already do not have an account it will be created for you.
                                    You will only need an email address - we do not ask a password and do not send spam</div>
                            </v-col>
                            <v-col  class="d-flex flex-column align-center" v-if="!signInStarted">
                                        <div><v-avatar color="grey" size="x-large" @click="anonAdd" >
                                            <v-icon size="x-large">{{  mdiIncognito }}</v-icon>
                                             </v-avatar></div>
                                             <div class="py-4"><v-btn @click="anonAdd" variant="tonal" :loading="anon_loading">Continue as a guest</v-btn></div>
                                <div class="text-h6 py-2">Continue as a Guest</div> 
                                <div class='text-center  text-caption'>
                                    You will be able to see your downloaded data
                                    in a dashboard, manage your data and access it as long
                                    as you access it from the same device and browser. Your data will only be available to you. 
                                    If your want to save your data for future use and aggregate data from different retailers, sign in at the left.</div>
                                <div></div>

                            </v-col>
                            
                        </v-row>
                        
                    </span>
                </v-card>

            </div>
        </v-card>
    </v-col><v-col cols="1" sm="1" md="2" lg="3"><v-btn @click="this.state.push('home');" rounded="xl" :icon="mdiClose"></v-btn></v-col></v-row>
 </v-overlay>
    </msdCard>
</template>

<script>
import { state } from "/src/store.js"
import Spinner from '/src/components/Spinner.vue'
import LoginDialog from '/src/components/LoginDialog.vue'
import LogoutDialog from '/src/components/LogoutDialog.vue'
import msdCard from '/src/components/MsdCard.vue'
import { mdiCheck, mdiIncognito, mdiLogin, mdiClose  } from '@mdi/js'
import {encrypt, decrypt} from '/src/components/secure.js'
import { emailValidation } from '/src/helpers.js'
import {  addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default {
    name: 'Add',
    components: {
        Spinner,
        msdCard,
        LoginDialog,
        LogoutDialog,
    },
    data() {
        return {
            // Your data properties go here
            state,
            // withAHook: false,
            // hook: {id: "", brand: "", status: undefined},
            deleteFirst: false,
            signInStarted: false,
            mdiCheck, mdiIncognito, mdiLogin, mdiClose,
            overlay_on: true,
            login_object: async (email) => {
                const enc = await encrypt(this.state.hook.brand+'/'+this.state.hook.id, email); 
                return {hookenc: enc.message, random: enc.iv, redirect: "add", silent: "yes"}
            },
            init: true,
            anon_loading: false,
            // hook_id: {},
        };
    },
    methods: {
        // Your methods go here
        titleCase(str) {
            return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },
        // async signOutHandler(deleteFlag) {
        //     if (deleteFlag) {
        //         console.log('signOutHandler - deleting')
        //         await state.deleteUser();
        //     }
        // },
        async loggedAdd() {
            console.log('loggedAdd')
            // write to /users/{uid}/uploads 
            console.log('adding to ',state.db_connection, 'users/'+state.uid+'/uploads')
            const docRef = await addDoc(collection(state.db_connection, 'users/'+state.uid+'/uploads'), 
                {
                    upload_id: this.state.hook.id, 
                    metabrand: this.state.hook.brand, 
                    status: 'pushed', 
                    timestamp: serverTimestamp(),
                })
            state.push('dashboard')

        },
        async anonAdd() {
            this.anon_loading=true
            console.log('anonAdd - signing')
            await this.state.signAsGuest()
            console.log('anonAdd - signed')

            console.log('anonAdd - adding')
            await this.loggedAdd()
            console.log('anonAdd - added')
            //
        },
        signInStart() {
            console.log('signInStart')
            
        },
    },
    watch: {
//         watch: {
//     question: {
//       handler(newQuestion) {
//         // this will be run immediately on component creation.
//       },
//       // force eager callback execution
//       immediate: true
//     }
//   }



        'state.fbIsReady': { 
            async handler(v) {
                console.log('fb is ready ', v)
            if ( v && this.init) {
                let prm = new URLSearchParams(window.location.search);

                console.log( 'Add.vue created, prms: ', prm.toString(), prm , 'winloc:', window.location.pathname)

                if (prm.has("hook")) {
                    this.state.withAHook = true
                    this.state.hook = {id: prm.get("hook"), brand: prm.get("brand"), status: 'pending'}
                    if (!this.state.hook.brand) this.state.hook.brand = "woolworths"
                    console.log( 'Add.vue found and saved the hook ', this.state.hook )
                    prm.delete('hook'); prm.delete('brand')
                    const new_string = prm.toString().length>0 ? window.location.pathname + '?' + prm.toString() : window.location.pathname
                    
                    console.log('new_string', new_string)

                    window.history.replaceState({}, '', new_string)
                }  
                console.log('emails', state.login_email, state.user_email)

                if (prm.has("hookenc") && state.user_email) {
                    console.log('email', state.login_email, state.user_email)
                    this.state.withAHook = true
                    // console.log('hookenc', decodeURIComponent(prm.get("hookenc")))
                    // console.log('random', prm.get("random"))
                    // console.log('key email', state.user_email)
                    const hookdec = await decrypt(prm.get("hookenc"), state.user_email, prm.get("random"))
                    const hook = hookdec.split('/')
                    this.state.hook = {id: hook[1], brand: hook[0], status: 'pending'}
                    // console.log('Add.vue decrypted the hook ', this.hook)
                    if (!this.state.hook.brand) this.state.hook.brand = "woolworths"
                    prm.delete('hookenc'); prm.delete('random')
                    const new_string = prm.toString().length>0 ? window.location.pathname + '?' + prm.toString() : window.location.pathname
                    
                    window.history.replaceState({}, '', new_string)
            }                
            if (prm.get('silent')=='yes') {
                    console.log('silent processing')
                    prm.delete('silent')
                    const new_string = prm.toString().length>0 ? window.location.pathname + '?' + prm.toString() : window.location.pathname
                    window.history.replaceState({}, '', new_string)
                    await this.loggedAdd()
        }
            this.init = false;

                }
            }, immediate: true
        }
    },
    async created() {


    },
};
</script>

<style scoped>
/* Your styles go here */
</style>
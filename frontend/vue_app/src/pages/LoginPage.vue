<template>
    <div>
        <Msdcard>
            <template #header>
                Sign In
            </template>

            <div>
                <v-row class="pa-4" v-if="!deepLinkState&&state.fbIsReady&&!state.loggedIn">
                    <v-col>
                        <div>Enter your email address to sign in. A sign-in link will be sent to your email address. Check your spam folder if you don't see the email.
                        </div><LoginDialog />
                        <div>If you see this page when trying to sign in using email link, something went wrong. Try again, and if doesn't work, let us know.</div>
                    </v-col>
                </v-row>
                <v-row class="pa-4" v-else-if="!deepLinkState&&state.fbIsReady&&state.loggedIn">
                    <v-col>
                        <div>You are already logged in as {{ state.isGuest ? "Guest" : state.user_displayemail }}. </div>
                        <div>Click <v-btn @click="state.push('dashboard')" variant='text'>here</v-btn> to go to your dashboard.</div>
                        <div>Click 
                            <v-btn variant='text' >here<LogoutDialog ></LogoutDialog></v-btn> to log out.</div>
                    </v-col>
                </v-row>
                <v-row class="pa-4" v-else-if="deepLinkState&&state.fbIsReady&&emailRequired">
                    <v-col>
                        <div>We are trying to sign you in using email link...</div>
                        <div>For security reasons, we need you to enter your email address again to complete the sign in process. It may happen if you
                            opened the link on different device or browser than the one you used to request the link.
                        </div>
                        <v-form @submit.prevent="finishSignIn" v-model="isFormValid">
                            <v-text-field v-model="email" :rules="rules" label="Email" required></v-text-field>
                            <v-btn type="submit" variant="tonal" :icon="mdiCheck" :disabled="!isFormValid"></v-btn>
                        </v-form>
                    </v-col>
                </v-row>
                <v-row class="pa-4" v-else>
                    <v-col>
                        <Spinner />
                    </v-col>
                </v-row>
            </div>

        </Msdcard>
    </div>
</template>

<script>

import { state } from "/src/store.js"
import { emailValidation } from '/src/helpers.js'
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import LoginDialog from '/src/components/LoginDialog.vue'
import Msdcard from '/src/components/MsdCard.vue'
import Spinner from '/src/components/Spinner.vue'
import { mdiCheck } from '@mdi/js'
import LogoutDialog from '/src/components/LogoutDialog.vue'

export default {
    components: {
        LoginDialog, Msdcard, Spinner, emailValidation, LogoutDialog
    },
    data() {
        return {
            state,
            deepLinkState: true,
            emailRequired: false,
            email: '',
            rules: [
                v => emailValidation(v) || 'Email must be valid',
            ], 
            isFormValid: false,
            mdiCheck
        };
    },
    methods: {
        async finishSignIn() {
         // The client SDK will parse the code from the link for you.
         signInWithEmailLink(this.state.auth, this.email, window.location.href)
            .then((result) => {

              // Clear email from storage for safety
              window.localStorage.removeItem('emailForSignIn')

              this.state.user = result.user
              if (result.user.isNewUser) {
                state.isNewUser = true
                console.log('new user')
              }

              let prm = new URLSearchParams(window.location.search);

              if (prm.has('redirect')) {
                console.log('redirect found', prm.get('redirect'))
                this.state.push(prm.get('redirect'))
              } else this.state.push('dashboard')

            })
            .catch((error) => {
                console.log('error signing in ', error)
                // write handler!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
            });
        },
    },
    computed: {
    },
    async mounted() {
        if (isSignInWithEmailLink(this.state.auth, window.location.href)) {
            console.log("trying to login: deep link provided")
            let email = window.localStorage.getItem("emailForSignIn");
            if (!email) {
                this.emailRequired = true
                // email = window.prompt('Please provide your email for confirmation');
            } else {
                this.email = email
                this.finishSignIn()
            }
 
        } else {
            this.deepLinkState = false
            console.log('trying to login: no correct deep link provided. The page will handle login state still')
        }
    },
};
</script>

<style scoped>
</style>
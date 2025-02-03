<template>

  <v-app id="application" >

    <v-main class="bg-grey-lighten-4">
      <v-banner lines="one" position="sticky" style="z-index:999;background:rgba(41, 127, 196, 0.80);" 
          class="py-0 my-0" color="blue-darken-3" density="compact" v-if="demo_mode">
          <v-container class="py-0 my-0">
          
            <v-banner lines="two" position="sticky" style="background:rgba(0, 0, 0, 0);" class="pa-2 text-white" 
              color="blue-darken-3" :icon="mdiMessageText" density="compact">
              <v-banner-text class="text-subtitle-1" >
                You are currently in a Demo Mode. Click the button to return to standard mode, 
                and download and visualise your own shopping data.
              </v-banner-text>
              <template v-slot:actions><v-btn @click="demo_mode = false; state.push('home');" color="white" 
                :prepend-icon="mdiClose" variant="tonal" >Return to Standard Mode</v-btn>
              </template>
            </v-banner>
          </v-container>
      </v-banner>
      <v-progress-linear
        :active="state.progressbar"
        color="grey"
        height="6"
        indeterminate
        style="position: fixed; z-index:999"
      ></v-progress-linear>
      <v-snackbar v-model="showSnackbar"
        :timeout="-1"
        :multi-line="true"
        :vertical="true"
        :z-index="999"
        min-width="75%"
        color="rgba(0, 0, 0, 0.60)"
        >
        <template #text>
          <div class='text-body-1'>
          You are currently signed in as <b>{{ this.state.isGuest ? 'a Guest' : this.state.user_displayemail }}</b>
          and have shopping data in your dashboard. You can continue with your dashboard and manage your data at the link below.</div>
        </template>
        <template #actions>
          <v-btn color="white" text @click="state.push('dashboard')">Go to Dashboard</v-btn>
          <v-btn color="white" text @click="state.auth.signOut()" v-if="!state.isGuest">Sign out</v-btn>
          <v-btn color="white" text @click="showSnackbarFlag = false">Dismiss</v-btn>
        </template>
      </v-snackbar>

      <Myshopdash>

        <!-- template #login>
          <loginpane />
        </template -->

        <v-container class="mt-0 pt-0 mx-0 px-0">
          <Dash v-if="state.page==='dashboard'" :uid="uid" />
          <About v-else-if="state.page==='about'" />
          <Privacy v-else-if="state.page==='privacy'" />
          <Promo v-else-if="state.page==='home'" />
          <Add v-else-if="state.page==='add'" />
          <Loginpage v-else-if="state.page==='login'" />
          <P404 v-else />
        </v-container>

      </Myshopdash>

    </v-main>
  </v-app>
</template>

      <!-- 

      <v-container class="mt-0 pt-0">
        <Promo v-if="(!loggedIn||(loggedIn&&nodata))&&!withAHook"
          :supportedplatform="supportedPlatform" 
          :extensioninstalled="extensionInstalled" 
          @demo-mode-on="demo_mode=!demo_mode" 
          @show-privacy-policy="dialogs.about=false;dialogs.privacy=true;" 
        ></Promo>
        <Ww v-else-if="!nodata" 
          :receipts="receipts" :items="items" :demo_mode="demo_mode" :updating="updating"
        ></Ww>
        <SpinnerFull v-else></SpinnerFull>
      </v-container>

      -->

<script>
  // required vue components
  import { defineAsyncComponent } from 'vue'

  import { mdiMessageText, mdiClose } from '@mdi/js'

  // state management
  import { state } from '/src/store.js'

  // visual components
  import Loginpane from '/src/components/LoginPane.vue'
  import Loginpage from '/src/pages/LoginPage.vue'
  import Myshopdash from '/src/components/msdTemplate.vue'
  import SpinnerFull from '/src/components/SpinnerFull.vue'
  import Promo from '/src/pages/Promo.vue' // main page without data
  import Add from '/src/pages/Add.vue' // add a new receipt
  import P404 from '/src/pages/404.vue' // 404 page
  // import Spinner from './components/Spinner.vue'


  // ============= start of Vue component definition
  export default {
    components: { 
        Myshopdash, // Page Template
        Dash: defineAsyncComponent({ loader: () => import('/src/pages/Dash.vue'), loadingComponent: SpinnerFull, delay: 100, }),
        About: defineAsyncComponent({ loader: () => import('/src/pages/About.vue'), loadingComponent: SpinnerFull, delay: 100, }), 
        Privacy: defineAsyncComponent({ loader: () => import('/src/pages/Privacy.vue'), loadingComponent: SpinnerFull, delay: 100, }),
        Promo, Add, Loginpage, P404, // pages
        SpinnerFull, 
        Loginpane,
    },

    data() {
      return { 
        state, 
        msdExtensionId: "kjnoihdmllddkmfhikjlkbfcdcmghhji",
        showSnackbarFlag: true,
        mdiMessageText, mdiClose,
        uid: undefined,
      }
    },

    methods: {

    },

    computed: {
      showSnackbar() {
        return this.state.loggedIn && this.state.page!=="dashboard" && this.state.dataPresent && this.showSnackbarFlag
      },
      demo_mode: {
        get() { return this.state.demo_mode },
        set(val) { this.state.demo_mode = val }
      },
    },

    // ================ watchers =================
    watch: {
      // 'state.uid': function() {
      //   console.log('data_present: ', this.state.dataPresent)
      //   if (this.state.loggedIn &&  this.state.page!=="dashboard") {
      //     this.showSnackbar = true
      //   } else 
      //     this.showSnackbar = false
      // },
    },
    
    // ============ hooks lifecycle methods ============
    
    async created() {   

        try {

          chrome.runtime.sendMessage(this.msdExtensionId, { msdVerRequest: 'v231225' },     
            (response) => {
                if (response.msdExtensionVer!== undefined) {
                  this.state.extensionInstalled = true
                } else {
                  this.state.extensionInstalled = false
                }
            }
          )
        } catch (e) { 
          console.log('Having trouble commnicating with extension', e)
          this.state.extensionInstalled = false 
        }
      let prm = new URLSearchParams(document.location.search);

    if (prm.has("uid")) {
          this.uid = prm.get("uid")
        }



      // ========= initialize firebase ==========

      const init = await fetch('/__/firebase/init.json')
      const init_resp = await init.json()
      
      this.state.initFirebase(init_resp)

      let path = window.location.pathname,
      // use regex to extract the first component:
          match = path.match(/\/([^\/]+)\/?/);
        console.log("page match", match)
      if (match) {
        this.state.push(match[1]);
      } else {
        this.state.push('home');
      }  
    },
    beforeUpdate() {
    },
    update() { 
    },
    mounted() {
    },
    beforeDestroy() {
    },
  }

</script>


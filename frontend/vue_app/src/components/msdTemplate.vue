<script>

import { state } from '/src/store.js'
import LogoutDialog from '/src/components/LogoutDialog.vue'

export default {
  name: 'myshopdash',
  components: {
    LogoutDialog
  },
  data () {
    return {
      state, 
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    installationStatus() { 
        return this.state.extensionInstalled ? 'installed' : 'NOT installed' 
      },
  }
}

</script>


<template>
    
      <!-- HEADER -->
      <v-row>
        <v-col>
          <div style="background:#EE9B37;box-shadow: inset 0px 10px 40px rgba(255, 255, 255, 0.28);">
            <v-container>
              <div class="d-flex flex-row">
                <div class="ma-1" height="60"><v-img src='/img/cheese_outline.png' max-height="60" width="80" class="my-auto" @click="state.push('home')" style="  cursor: pointer;"></v-img></div>          
                <div class="ma-1 justify-center">
                  <div style="font-weight: 700;font-size: 32px;line-height: 40px;color: rgba(255, 255, 255, 0.75);text-shadow: 0px 3px 12px rgba(0, 0, 0, 0.25);">
                    Your Personal Shopping Dashboard
                  </div>
                  <div style="font-weight: 300;font-size: 16px;line-height: 20px;color: #FFFFFF;text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);">
                    Download your data and visualise your grocery spendings in a click: Woolworths, BWS, Coles and more
                  </div>
                </div>
              </div>

            </v-container>
          </div>
        </v-col>
      </v-row>

      <v-container>


      <slot name="login"></slot>
      <slot>

        Hello! Something went wrong here..

      </slot>
      <!-- The location is {{ state.page }}<br/> -->
      <!-- 
      <v-banner lines="one" position="sticky" style="z-index:999;background:rgba(41, 127, 196, 0.80);" 
          class="py-0 my-0" color="blue-darken-3" density="compact" v-if="demo_mode">
          <v-container class="py-0 my-0" >
            <v-banner lines="two" position="sticky" style="background:rgba(0, 0, 0, 0);" class="pa-2 text-white" 
              color="blue-darken-3" :icon="mdiMessageText" density="compact">
              <v-banner-text class="text-subtitle-1" >
                You are currently in a Demo Mode. Click the button to return to standard mode, 
                and download and visualise your own shopping data.
              </v-banner-text>
              <template  v-slot:actions><v-btn @click="demo_mode = false" color="white" 
                :prepend-icon="mdiClose" variant="tonal" >Return to Standard Mode</v-btn>
              </template>
            </v-banner>
          </v-container>
      </v-banner>

      -->

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
      </v-container>
      <!-- FOOTER -->
      <v-footer color="grey-darken-2" class="mt-8 mb-0">
        <v-row>
          <!-- v-col cols="1"></v-col -->
          <v-col>
            <p class="text-center">
            <v-btn @click="state.push('home')" variant="plain">Home</v-btn>
            |  <v-btn @click="state.push('privacy')" variant="plain">Privacy</v-btn> 
            |  <v-btn @click="state.push('about')" variant="plain">About</v-btn>
            <span v-if="!state.loggedIn">| <v-btn @click="state.push('login')" variant="plain">Login</v-btn></span>
            <span v-if="state.loggedIn&&!state.isGuest"> |  <v-btn variant="plain"><LogoutDialog />Logout</v-btn>
            
            </span>
            </p>
            <p class="text-center">
              <v-btn @click="state.demo_mode = !state.demo_mode; state.push('dashboard')" 
                :variant="!state.demo_mode ? `outlined` : `tonal`" 
                class="text-red-lighten-4 pa-2" 
                size="regular" 
                :rounded="1"
              >DEMO MODE</v-btn>
            </p>


            <v-sheet width="50%" class="mx-auto my-2 text-grey-lighten-2 text-caption text-center" color="rgba(0,0,0,0)">
              This is an experiment with the goal to make the data collected by businesses more accessible 
              to the customers it belongs to. The customers have to be able easily access, transform, store, transmit, share and analyse their data. 
              Agree? 
            </v-sheet>
            <p class="text-grey-lighten-2 text-caption text-center">
              <a href="https://www.thedataschool.com.au/profile/eugene-kutilov/" class="text-grey-lighten-2">Blog</a> | 
              <a href="https://github.com/ekutilov/wooliesR"  class="text-grey-lighten-2">GitHub</a> | 
              <a href="https://au.linkedin.com/in/ekutilov"  class="text-grey-lighten-2">Resume</a>
            </p>
            <p class="text-grey-lighten-2 text-caption text-center">
              ~ user: <a href="/login">{{ state.isGuest? 'guest ('+state.uid+')' : state.user_displayemail }}</a> ~ 
            </p>
            <p class="text-grey-lighten-2 text-caption text-center" >
              <a href='https://chrome.google.com/webstore/detail/myshopdata-for-everyday-r/kjnoihdmllddkmfhikjlkbfcdcmghhji'  class="text-grey-lighten-2">Extension</a> is {{ installationStatus }}
            </p>

          </v-col>
        </v-row>
      </v-footer>

</template>
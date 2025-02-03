<template>
  <v-app>
    <v-main>
      <Teleport :to="placementNodeName" v-if="appearance.shown">        
        <v-hover
          v-slot="{ isHovering, props }"
          >
          <v-card 
            :style="{ position: 'fixed' , bottom: '50px' , left: '80px', opacity: isHovering ? 1.0 : 0.5,}" class="d-flex align-center"
            v-bind="props"
            variant="flat" color="rgba(0,0,0,0.1)" rounded="pill"
            >
            <div style='overflow-x: hidden; width:80px;'>
              <div 
                class="d-flex align-center" :style="{height: '80px', width: '160px' }">
                <div 
                  style="z-index:1000020; width:80px; height:80px; position:relative;" class="ma-auto d-flex">
                  <v-hover
                    v-slot="{ isHovering, props }"
                    >                      
                    <v-tooltip
                        activator="parent"
                        location="top"
                        :close-on-content-click="false" :close-delay="200" :open-on-hover="true"
                        >{{ appearance.main_button.tooltip_text }}
                      <span v-if="appearance.main_button.tooltip_text2">{{ appearance.main_button.tooltip_text2 }}</span></v-tooltip>
                      
                    <v-btn
                      class="ma-auto" :size="isHovering ? `62px` : `58px`" rounded="pill"
                      :color="appearance.main_button.color"
                      :disabled="!appearance.main_button.active"
                      @click="click" 
                      >
                      <v-img src='https://myshopdash.app/img/sicon48.png' width="30px" />
                    </v-btn>
                  </v-hover>
                </div>
              
                <div 
                  :style="{ 'z-index':1000010, position:'relative', left:'-80px', height:'80px', overflow: 'hidden'}" class="d-flex align-center"
                  >
                  <v-progress-circular 
                    size="80" width="10" color="red"
                    :model-value="appearance.main_button.pc" 
                    :style="{ visibility: appearance.main_button.wheel ? 'visible' : 'hidden' }"
                    :indeterminate="appearance.main_button.indeterminate"
                    >
                  </v-progress-circular>
                </div>
              </div>
            </div>
            
            <v-expand-transition>
              <div class="mx-3" v-if="appearance.show_side_buttons">

                <v-hover v-slot="{ isHovering, props }">
                  <v-btn 
                      icon rounded="pill" class="ma-2" size="65" :elevation="isHovering ? '5' : '1'" v-bind="props" 
                      :color="appearance.button1.color"
                      :loading="appearance.button1.loading"
                      :disabled="!appearance.button1.active"
                      @click="button1_click" 
                    >
                    <!-- v-progress-circular model-value="0"><v-icon :icon="mdiOpenInApp"></v-icon></v-progress-circular -->
                    <v-icon :icon="mdiOpenInApp" size="40"></v-icon>
                    <v-tooltip
                      activator="parent"
                      location="top"
                      :close-on-content-click="true"
                      >
                      {{ appearance.button1.tooltip_text }}<br />
                      <span v-if="appearance.button1.tooltip_text2">{{ appearance.button1.tooltip_text2 }}</span>
                    </v-tooltip>
                  </v-btn>
                </v-hover>

                <v-hover v-slot="{ isHovering, props }">
                  <v-btn icon rounded="pill" class="ma-2" :elevation="isHovering ? '5' : '1'" v-bind="props"
                    :loading="appearance.button2.loading"
                    :disabled="!appearance.button2.active"
                    @click="button2_click" 
                    >
                    <!-- v-progress-circular model-value="0"><v-icon :icon="mdiOpenInApp"></v-icon></v-progress-circular -->
                    <v-icon :icon="mdiCodeJson" size="large"></v-icon>
                    <v-tooltip
                      activator="parent" location="top" :close-on-content-click="true"
                      >
                      {{ appearance.button2.tooltip_text }}<br />
                      <span v-if="appearance.button2.tooltip_text2">{{ appearance.button2.tooltip_text2 }}</span>
                    </v-tooltip>
                  </v-btn>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }">

                  <v-btn icon rounded="pill" class="ma-2" :elevation="isHovering ? '5' : '1'" v-bind="props"
                    @click="reset" 
                    >
                    <v-icon :icon="mdiClose"></v-icon>
                    <v-tooltip
                      activator="parent" location="top" :close-on-content-click="true"
                      >
                      {{ appearance.button3.tooltip_text }}
                    </v-tooltip>
                  </v-btn>
                </v-hover>
              </div>
            </v-expand-transition>

          </v-card>

        </v-hover>
      </Teleport>

    </v-main>
  </v-app>
</template>

<script>
  import { mdiAlert, mdiCodeJson, mdiOpenInApp, mdiClose } from '@mdi/js'
  import { mainClickHandler, button1ClickHandler, button2ClickHandler, startup, close_box } from './components/handlers.js'
  import merge from 'lodash.merge'

  const appearanceDefault = { 
    shown: false,
    main_button: { 
      wheel: false, 
      pc: 0, 
      color: 'success', 
      tooltip_text: 'MyShopDash Button: click to download all your eReceipts',
      tooltip_text2 : null,
      show_tooltip: true,
      active: false,
      indeterminate: false,}, 
    show_side_buttons: false,
    button1: { 
      color: 'orange-lighten-1', 
      tooltip_text: "Make it a dashboard",
      tooltip_text2 : "(your data will be securely transferred and displayed in your personal shopping dashboard at myshopdash.app)",
      show_tooltip: true,
      loading: false,
      active: true,},
      button2: { 
        color: 'orange-lighten-1', 
        tooltip_text: 'Download your data as a JSON file',
        tooltip_text2 : null,
        show_tooltip: true,
        loading: false,
        active: true,},
      button3: {
        color: 'orange-lighten-1', 
        tooltip_text: 'Close panel (downloaded data will not be saved)',
        show_tooltip: true,
        loading: false,
        active: true,},
    }

  export default {
    name: 'msdInterBox',
    components: { 
       mainClickHandler, button2ClickHandler, button1ClickHandler, startup, appearanceDefault, close_box
    },
    data: () => ({
      mdiAlert, mdiCodeJson, mdiOpenInApp, mdiClose,
      appearance: appearanceDefault,

      // placementNodeName: "#angular-view-div",
      placementNodeName: "body",

      }),
      computed: {

      },
      watch: {

      },
      mounted() {

        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
          console.log('request', request)

          if (request.target == "ibox" && request.subject == 'appearance') {
            // this.appearance = {...this.appearance, ...request.content }
            this.appearance = merge(this.appearance, request.content)
          }
          if (request.target == "ibox" && request.subject == 'error') {
            this.error_state = true
            this.error_message = request.content
          }
          if (request.target == "ibox" && request.subject == 'alert') {
            this.alert_state = true
            this.alert_message = request.content
          }
          if (request.target == "ibox" && request.subject == 'placementNodeName') {
            this.placementNodeName = request.content
          }
          sendResponse({ status: 'ok' })
        })

        startup()
      },
      methods: {
        // main button click
        click() { 
          if (!this.appearance.main_button.active) return 
          mainClickHandler();
        }, 
        async button1_click() {
          await button1ClickHandler();
        },
        async button2_click() {
          await button2ClickHandler();
        },
        async reset() {  
          await close_box()
        }
      } ,
  }
</script>

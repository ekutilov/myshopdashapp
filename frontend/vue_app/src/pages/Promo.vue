<script>
  import { mdiGestureTap, mdiOpenInNew, mdiInformationOutline, mdiAlertBox } from '@mdi/js'
    import { state } from '/src/store.js'
  export default {
    name: 'Promo',
    components: {  },
    props: {
      supportedplatform: {type: Boolean, default: true},
      showdemobutton: {type: Boolean, default: true} 
    },
    data() {
      return {
        mdiGestureTap,mdiOpenInNew,mdiInformationOutline,mdiAlertBox,
        state
      }
    },
    mounted() {
        let vimeoScript = document.createElement('script')
            vimeoScript.setAttribute('src', 'https://player.vimeo.com/api/player.js')
            document.head.appendChild(vimeoScript)
    },
    computed: {
      
    },
    emits: ['demoModeOn', 'showPrivacyPolicy'],
  }
  </script>

<template>
    <v-sheet max-width="1480px" class="mx-auto" style="background-color: rgba(0, 0, 0, 0);">
    <v-row class="d-flex flex-row mt-8 mb-5">
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pa-8">
            <v-img src="/img/main_promo_image.png" max-width="100%" style="-webkit-filter: drop-shadow(12px 12px 60px rgba(0, 0, 0, 0.2));filter: drop-shadow(12px 12px 60px rgba(0, 0, 0, 0.2));" />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pa-8">
            <div class="text-h2 font-weight-black mb-8" 
            style="color: #ED9F0A;text-shadow: 5px 5px 20px rgba(0, 0, 0, 0.05);">
            Opt in for Woolies and Coles electronic receipts? Take it to the next level!
        </div>
            <div class="text-h6 font-italic text-grey-darken-2">
                <p class="my-2 text-subtitle-1">Check your shopping apps (like Everyday Rewards and Coles apps): your in-store grocery receipts may be already there</p>
                <p class="my-2">And now you can aggregate all your shopping data together, download and analyse it! 
                    Not just collect your receipts, but get insights about your shopping habits, expences, keep tax records, and more!</p>
                <p>All you need is to scan your loyalty card every time and install this magic button for downloading the receipts</p>
            </div>
        </v-col>
    </v-row></v-sheet>
    <v-row class="d-flex " >
        <v-col cols="0" xs="0" sm="1" md="1" lg="2" xl="3"></v-col>
        <v-col>
            <v-sheet class="mx-auto" color="rgba(0,0,0,0)">
                <v-card><v-sheet style="background: #F29D38;
box-shadow: inset 12px 12px 40px rgba(255, 255, 255, 0.2);
border-radius: 5px;">
                    <!-- v-card-item >
                        <v-card-title class="text-h5" -->
                            <div class="w-100 d-flex">
                            <div class="ma-5 " ><v-icon :icon="mdiGestureTap"
                                size="50"
                                color="white"
                                ></v-icon></div> 

    <div class="ma-5 text-h4 text-white font-weight-bold ">Create your own shopping dashboard with your Woolies, BWS or Coles eReceipts</div></div>
                        <!-- /v-card-title>
                        </v-card-item --></v-sheet>

                        <v-card-text class="mt-5">
                            <v-sheet class='mt-1 mb-10' >
                                <div style="padding:56.25% 0 0 0;position:relative;border:1px black;"><iframe src="https://player.vimeo.com/video/901135655?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Myshopdash.app rundown"></iframe></div>
                            </v-sheet>
                            <v-timeline side="end" align="start" truncate-line="both">
                            <v-timeline-item  width="100%">
                        <div :style="state.extensionInstalled?'opacity:0.5;':'opacity:1.0;'">
                                <p class="text-h6 font-weight-regular text-grey-darken-1">
                                    Install the free browser extension from Chrome Web Store 
                                    <a href="https://chrome.google.com/webstore/detail/myshopdata-for-everyday-r/kjnoihdmllddkmfhikjlkbfcdcmghhji"  
                                    target="popup" 
                                    onclick="window.open('https://chrome.google.com/webstore/detail/myshopdata-for-everyday-r/kjnoihdmllddkmfhikjlkbfcdcmghhji','popup','width=1024,height=600'); return false;"><v-icon :icon="mdiOpenInNew" size="x-small" color="#297FC4"></v-icon></a>
                                </p>
                                <a href="https://chrome.google.com/webstore/detail/myshopdata-for-everyday-r/kjnoihdmllddkmfhikjlkbfcdcmghhji"  
                                    target="popup" 
                                    onclick="window.open('https://chrome.google.com/webstore/detail/myshopdata-for-everyday-r/kjnoihdmllddkmfhikjlkbfcdcmghhji','popup','width=1024,height=600'); return false;">
                                    <v-sheet style="border: 1px solid rgba(0, 0, 0, 0.25);
                                box-shadow: inset -12px -12px 60px rgba(0, 0, 0, 0.05);
                                border-radius: 10px;background-color: rgba(0,0,0,0.05);" class="my-5">
                                <v-img src="/img/hint1.png" style="position: relative; z-index: -1"></v-img>
                            </v-sheet></a>
                        </div>
                            <!-- v-if="extensioninstalled" -->
                            <p class="text-green-darken-2 text-h6 my-3" v-if="state.extensionInstalled">Yay! We detected that the extension is already installed!</p>
                            
                            <p class="text-grey-darken-2 my-3">This extension will only work in desktop versions of Google Chrome browser (other compatible browsers, i.e. MS Edge, expected to work, but no guarantee). 
                            Mobile browsers and non-Chromium browsers (Safari, Mozilla etc) are not supported at the moment.</p>
                            <div class="d-flex my-3" v-if="!supportedplatform"><div class="me-3 my-1"><v-icon :icon="mdiAlertBox" color="red" size="large"></v-icon></div>
                            <div>
                            <p class="text-red-darken-2  text-subtitle-1"> <!-- v-if="!supportedplatform"> -->
                                We have detected you are using a mobile or other non-compatible browser now (i.e. Safari or Mozilla). 
                                Please, use a desktop Chrome to install the "magic button" to download your receipts. You still can check out Demo Mode (see the button below).</p></div>
                        </div>
                            
                            <div class="mb-5"></div>

                            </v-timeline-item>
                            <v-timeline-item  width="100%">
                                <p class="text-h6 font-weight-regular text-grey-darken-1">
                                    After the install complete, log in into your stores' accounts to download the receipts: 
                                    <ul><li>for <b>Woollies and BWS</b>: head to <a href="https://woolworthsrewards.com.au" target="_blank">Woolworths Rewards</a></li>
                                    <li>for <b>Coles</b>: <a href="https://coles.com.au" target="_blank">coles.com.au</a></li></ul>
                                    After login your <i>Magic Download Button</i> which will be added there for you:
                                </p>
                                
                                <v-sheet class="my-5" style="background-color: rgba(0,0,0,0);">
                                    <div style="box-shadow: inset -12px -12px 60px rgba(0, 0, 0, 0.05);
                                background-color: rgba(0,0,0,0.05);border-radius: 10px;border: 1px solid rgba(0, 0, 0, 0.25); " >
                                <v-img src="/img/hint2.png" style="position: relative; z-index: -1; border-radius: 10px;"></v-img>
                            </div>
                            </v-sheet>
                            <div class="mb-5"></div>

                            </v-timeline-item>
                            <v-timeline-item width="100%">
                                <p class="text-h6 font-weight-regular text-grey-darken-1">
                                    After the data download is complete, follow prompts to redirect and open your data here
                                </p>
                            <v-sheet style="border: 1px solid rgba(0, 0, 0, 0.25);
                                box-shadow: inset -12px -12px 60px rgba(0, 0, 0, 0.05);
                                border-radius: 10px;background-color: rgba(0,0,0,0.05);"  class="my-5">
                                <v-img src="/img/hint3.png" style="position: relative; z-index: -1; border-radius: 10px;"></v-img>
                            </v-sheet>
                            <p class="text-h6 font-weight-regular text-grey-darken-1">
                                    You can repeat it a few times to get your receipts from different retailers to the same dashboard
                                </p>
                            </v-timeline-item>
                            </v-timeline>
                            <div class="d-flex justify-center mt-8 mb-3"><div class="mx-3"><v-icon :icon="mdiInformationOutline" color="#F29D38" size="x-large"></v-icon></div>
                            <div class="mx-3 text-grey">
                            You dashboard will not be available to anyone except you even in 'Guest mode', and will be accessible only from the browser 
                            you create it in (unless you choose to sign up for a permanent account).  
                            Your data is not shared with anyone. You will be able to delete your data from this service at any moment. 
                            See <a href="javascript:{}" @click="$emit('showPrivacyPolicy')">Privacy Statement</a> for more details. 
                            By using the extension and the 'magic button' you accept the conditions described in the Privacy Statement.
                            </div>
                            </div>
                            </v-card-text>


                </v-card>
            </v-sheet>

            <v-sheet max-width="400" class="mx-auto text-center mt-5 mb-5" style="background-color: rgba(0,0,0,0);" v-if="showdemobutton">
                <v-btn
        size="x-large"
        color="success"
        @click="state.demo_mode=true;state.push('dashboard')" class="custom-transform-class text-none font-weight-regular text-left" :prepend-icon="mdiGestureTap">
          or Check it out <br />in Demo Mode now!</v-btn>
    </v-sheet>


        </v-col>
        <v-col cols="0" xs="0" sm="1" md="1" lg="2" xl="3"></v-col>
    </v-row>
</template>

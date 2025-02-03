<script>
  import SpinnerFull from '/src/components/SpinnerFull.vue'
  import { defineAsyncComponent 
  } from 'vue'

export default 
{name: 'About',
emits:['showPrivacyPolicy'],
components: { 
        Promo: defineAsyncComponent({ loader: () => import('/src/pages/Promo.vue'), loadingComponent: SpinnerFull, delay: 100, }),
    },}
</script>

<template>
    
    <h1 class='mt-4 text-primary'>Getting started</h1>
    <h4 class='mt-0 mb-4 text-secondary'>with my Shopping Data browser extension and my Shopping Dash viewer web app</h4>
    <dl class='row'>
      <dt class='col-3'>
        <h3 class='text-info'>Quick Start</h3>
      </dt>
      <dd class='col-9'>
        <Promo :showdemobutton="false" @show-privacy-policy="$emit('showPrivacyPolicy')"/>
      </dd>
      <dt class='col-3'>
        <h3 class='text-info'>About this site</h3>
      </dt>
      <dd class='col-9'>
          <p>This site is a simple visual dashboard
          that allows you to view your shopping habits. It uses data from Everyday Rewards
          e-Receipts feature.
          If you opt-in to receive your shopping receipts in the Everyday Rewards app, your e-receipts from Woolworths, BigW and BWS 
          are saved there and on the ER website. By default, you can only see individual receipts. Besides, they disappear after 14 months.
          Now with my help you can download all your e-receipts in one click, break it down into separate items, 
          open in Excel etc.</p>
        <p><small class='text-secondary'><div>
          This site is not affiliated with Woolworths. (It is just me, loving data and sharing some neat tech.)
          All thademarks belong
          they respective owners. It is not
          intended to infringe IP or endanger data security at
          Woolworths. It uses a publicly available API access point (therefore, it does nothing any user can't do with a web browser).
          A disclamer about user's data privacy is <v-btn @click="$emit('showPrivacyPolicy')" variant="text">here</v-btn>.</div></small></p>
        </dd>
        <dt class='col-3'>
          <h3  class='text-info'>Why</h3>
        </dt>
        <dd class='col-9'>
          <p>You may need aggregated info about your supermarket buys
            for different purposes:
          </p>
          <ol>
          <li><p>
            You may see how, where and what you spend most of your
            groceries expences on. Probably, want to optimise it, like
            buying things in bulk.</p></li>
          <li><p>You may see prices on individual products and how they change over time.</p></li>
          <li><p>You may have a separate loyalty account for your
            taxable expences, and you can export you expences directly
            to your accounting software.</p></li>
          <li><p>You may save your data for future reference, as eReceipts
            on Everyday Rewards
            website are saved only for 14 months.</p></li>
          </ol>
        </dd>
        <dt class='col-3'>
          <h3 class='text-info'>How to use it</h3>
        </dt>
        <dd class='col-9'>


          <!-- div id="manualCarousel" class="carousel slide" data-ride="carousel" data-interval='false'>
            <ol class="carousel-indicators">
              <li data-target="#manualCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#manualCarousel" data-slide-to="1"></li>
              <li data-target="#manualCarousel" data-slide-to="2"></li>
              <li data-target="#manualCarousel" data-slide-to="3"></li>
              <li data-target="#manualCarousel" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/img/slide1.png" class="d-block w-100" alt="download the Extension">
                <div class="carousel-caption d-none d-md-block  ">
                  <h5 class='font-weight-bolder'>Download Extension</h5>
                  <p>Install <a class='text-light'
                    href='https://chrome.google.com/webstore/detail/kjnoihdmllddkmfhikjlkbfcdcmghhji'><u>
                      myShopData for Everyday Rewards Chrome extension</u></a> from Chrome Web Store.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="/img/slide2.png" class="d-block w-100" alt="Navigate to Everyday Rewards">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class='font-weight-bolder'>Navigate to Everyday Rewards</h5>
                  <p>Open your <a class='text-light' href='https://www.woolworthsrewards.com.au/index.html#/my-activity'>
                    <u>account's activity page</u></a> at the Everyday Rewards website, log in with your
                    login, password or one-time code.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="/img/slide3.png" class="d-block w-100" alt="Run the Extension">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class='font-weight-bolder'>Launch the Extension</h5>
                  <p>Click the Extension's icon in your browser's extension shelf, provide nessesary permissions.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="/img/slide4.png" class="d-block w-100" alt="Follow prompts">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class='font-weight-bolder'>Follow prompts</h5>
                  <p>Follow the prompts in the extension's interface to complete the downloading process.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="/img/slide5.png" class="d-block w-100" alt="Open data in Viewer">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class='font-weight-bolder'>Open data in Viewer</h5>
                  <p class='text-light'>Finally, at the last screen click 'Open Viewer' if you want your data opened in myShopDash dashboard.</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#manualCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#manualCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div -->
          <h4 class='mt-3 text-primary'>Install Chrome Extension</h4>
          <p>You will need to use specialised free Chrome Extension:
            <a href='https://chrome.google.com/webstore/detail/kjnoihdmllddkmfhikjlkbfcdcmghhji'>myShopData</a>.
          It is available only for Google Chrome at this stage and available from official Chrome Web Store.
          It will securely bulk-download your eReceipts for you and help to
          send this data to myShopDash in one file.</p>
            <h4 class='mt-3 text-primary'>Apply the Extension on the Everyday Rewards website</h4>
          <p>When installed, navigate to Everyday Rewards website and
          log in there. Then run the Extension by pressing the button in the left bottom corner.  If the button is not shown, try granting access to the extension
        by fingind the extension icon in Chrome extensions pane and right-click.</p>
          <h4  class='mt-3 text-primary'>Save your data or send into the web viewer</h4>
          <p>The Extension guides you through the process.
          You will be able to choose from two options: save your
        data onto your computed directly from the ER website (as an encoded file) <span class='text-secondary'>
        (for experts: it is actually a json file
        with all the information API provides)</span> or upload it
        onto myShopDash viewer in one click. The Extension will not
        pass your data to this website until you press the button. 
        You have choice to save your data securely on your computer
        without sending it over the internet.</p>
        <h4  class='mt-3 text-primary'>View your data</h4>
        <p>If you choose to upload your data on myShopDash: you will be redirected onto
        the dashboard immediately. Your data will be temporarily saved
        on this server. Nobody will be able to see your data except for you. 
        Your view will be accessible only from your current browser
        and only for a limited time (your data will be deleted after 30 days of inactivity). </p>

        <p>From this dashboard you will also be able download your decoded data on your computer as an
        Excel file. </p>
        <p>IMPORTANT: If you try to scrape your data from Everyday Rewards and pass it onto the dashboard while 
          you already have data there from the previous download, the new data will be merged with the existing data without duplication. 
          I.e. new receipts will be added to your dashboard preserving the old ones. 
        </p>
        <h4  class='mt-3 text-primary'>Delete your data from myShopDash</h4>
        <p>You can delete all your data from the server at any time by pressing
        the red button at the bottom of the page.</p>
        <p>If you navidated from the Dashboard very recently and didn't
          delete your data, you can return back to the dashboard
          and continue your session.</p>
        <p>If you forget to delete your data, myShopDash deletes it
          automatically no later than 30 days
          after your visit.</p>
          </dd>
          <dt class='col-3'>
            <h3 class='text-info'>Features and issues</h3>
          </dt>
          <dd class='col-9'>
            <p>It is not unexpected if this service does not work exactly as
              described. I will be grateful for
              detailed bug reports, so bugs can be fixed. </p>
            <!-- p>The most typical expected problem, that your eReceipts
            are not parced/decoded properly, so they are shown
            corrupted or break the dashboard completely. If this happens,
            consider sending me your JSON file, downloaded directly from myShopData Extension.
            I can guarantee confidentiality of your shopping details.</p --> 
            <p>New features (including other stores!) will be being added as we go,
              and any suggestions are appreciated. If something looks broken in the meantime, drop me a message. </p>
            <!-- p>As myShopDash (or, rather, the browser extension) uses
            a Woolworths' corporate program interface that is not
            oficially documented, some issues might arise if modification
            to the protocol are introduced by the company.
            So if something looks broken, drop me a message.</p -->
            </dd>

            <dt class='col-3'>
              <h3 class='text-info'>Contacts</h3>
            </dt>
            <dd class='col-9'>
              <p><a href='mailto:eugene@myshopdash.app'>eugene@myshopdash.app</a> or<a href="https://github.com/ekutilov/wooliesR">github.com/ekutilov/wooliesR</a>.
              </p>
            </dd>
          </dl>

</template>
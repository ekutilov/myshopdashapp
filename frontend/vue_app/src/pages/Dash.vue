<script>
  import { mdiArrowDownBold, mdiArrowUpBold, mdiClose, mdiFileDownload, mdiAlert, mdiCalendar} from '@mdi/js'
  import { 
    departmentsTop, 
    chart_dataset, 
    productTop10, 
    productTop10byN, 
    storesTop10, 
    dayOfWeekTop10, 
    categoriesTopN, 
    overallSpendYear, 
    overallSpend12W 
  } from '/src/components/dashboard_compute.js'

  import { tidy, groupBy, max, summarize, mutate, arrange, desc, select, 
    map, filter, slice, innerJoin, fullJoin, rowNumber, mutateWithSummary, sum, mean } from '@tidyjs/tidy'

  import { useDate } from 'vuetify'

  import { 
    aud, aud_s, 
    csv_download, 
    dateFormatter,
    readMSDData,
    subscribe_uploads,
    capitalizeFirstLetter
  } from '/src/helpers.js';

  import { state } from '/src/store.js'
  
  import BarChartHorizontal from '/src/components/BarChartHorizontal.vue'
  import BarChartStacked from '/src/components/BarChartStacked.vue'
  import ReceiptsCards from '/src/components/ReceiptsCards.vue'
  import Spinner from '/src/components/Spinner.vue'
  import Map from '/src/components/Map.vue'
  import DateInput from '/src/components/DateField.vue'
  import LoginDialog from '/src/components/LoginDialog.vue'
  import LogoutDialog from '/src/components/LogoutDialog.vue'

  export default {
    name: 'Dash',
    components: { 
      BarChartHorizontal, BarChartStacked, ReceiptsCards, Spinner, Map, DateInput, LoginDialog, LogoutDialog
    },
    props: {
      demo_mode: { 
        type: Boolean, 
        default: false
      },
      uid: {
        type: String, 
        default: undefined
      },
    },
    data() {
      return { 
        mdiArrowDownBold, mdiArrowUpBold, mdiClose, mdiFileDownload, mdiAlert, mdiCalendar,
        filters: {
          dates: { 
            start: undefined, 
            end: undefined },
          brands: [],
        },
        dialogs: { 
          delete: false, 
        },

        showTopN: 3,
        showTopNstores: 10,
        categoriesTopNselector: 10,

        rid: "",
        receiptId: "",

        // receipts: [], 
        // items: [],
        // uploads: [],
        uploads_raw: [],
        receipts_raw: [], 
        items_raw: [],
        query_filters: {
          exclude_brands: ['Big W']
        },
        state,
        fetching_fl: false,
        uploads_unsubscribe: ()=>{},

        // filter_brands: [], // form input
        adapter: useDate(),
        updating: false,
        loading: {delete_data: false, }, // loading statuses for different objects: 
        lazy_components: { },
        login_dialog: false,
      }
    },
    methods: {
      // formatters for inline usage
      dateFormatter, aud, aud_s, csv_download,
      barclickhandler(receiptId) {
        if (receiptId) { 
          this.receiptId = receiptId; // document.getElementById('scroller').scrollTop = document.getElementById(rid).offsetTop
        }
      },
      async fetchData() {
        if (state.loggedIn||state.demo_mode) {
          this.fetching_fl = true

          let data = await readMSDData(this.state.demo_mode ? 'demo_data' : (this.uid ? this.uid : this.state.uid), this.query_filters);
          this.receipts_raw = data.receipts; this.items_raw = data.items

          this.fetching_fl = false
        } 
      },
      async subscribeToUploads() {
        await subscribe_uploads(this)
        // console.log('uploads:', this.uploads)
      },
    },
    computed: {
      // apply filters here
      uploads() { 
        return this.uploads_raw.filter(e=>this.query_filters.exclude_brands.includes(e.metabrand)===false).filter(e=>e.status==='ok')
      },
      current_upload() { 
        return this.uploads_raw.filter(e=>e.upload_id===this.state.hook.id)[0]
      },
      receipts() {
        const r_s = this.receipts_raw.filter(
          (receipt)=>{
            // console.log('receiptDate ', receipt.Date, '>=',  this.filters.dates.start ,'?', receipt.Date >= this.filters.dates?.start )
            // console.log('receiptDate ', receipt.Date, '<=',  this.filters.dates.end,'?', receipt.Date <= this.filters.dates?.end)
            return this.filters.brands.includes(receipt.metabrand+"|"+receipt.Brand) && receipt.Date >= this.filters.dates?.start && receipt.Date <= this.filters.dates?.end
          }
        ).map(
          d=>({...d, Store: (d.Brand==='Supermarkets' ? capitalizeFirstLetter(d.metabrand) : d.Brand)+' '+ d.Store.replace(capitalizeFirstLetter(d.metabrand)+" ", "") })
        )
        return r_s
      },
      items() {
        let receiptIds = this.receipts.map(receipt => receipt.recordId);
        return this.items_raw.filter(item => receiptIds.includes(item?.recordId));
      },
      allBrands() { 
        const list = this.uploads.map(
          (d)=>{
            return d.summary?.brands.map(
              (e)=>{
                return {
                  metabrand: d.metabrand, 
                  brand: e, 
                  brand_key: d.metabrand + "|" + e,
                  name: e
                }
              }
            )
          }
        ).flat().filter((d)=>{return d?!this.query_filters.exclude_brands.includes(d.brand):false})
        console.log("allBrands: ", [...new Set(list.map(x=>JSON.stringify(x)))].map(x=>JSON.parse(x)))
        return [...new Set(list.map(x=>JSON.stringify(x)))].map(x=>JSON.parse(x))
          // names: [...new Set(list.map((d)=>{return d.name}))]
        ;
      },
      brands_list() { 
        let brandstring = ""
        for (let i=0; i<this.filters.brands.length; i++) {
          brandstring += this.allBrands.filter((d)=>{return d.brand_key===this.filters.brands[i]})[0].name
          if (i<this.filters.brands.length-2) {
            brandstring += ", "
          } else if (i<this.filters.brands.length-1) {
            brandstring += " and "
          }
        }
        return brandstring
      },
      min_date() { 
        return new Date(Math.min(...this.uploads.map(
          (d)=>{
            return d.summary.start_date.toDate()
          }
        ).flat()))
      },
      max_date() { 
        return new Date(Math.max(...this.uploads.map(
          (d)=>{
            return d.summary.end_date.toDate()
          }
        ).flat()))
      },
      reload() {
        window.location.reload();
      },
      nodata() { return this.uploads.filter(e=>(e.status==='ok'||e.status==='pushed')).length===0 },
      departmentsTop() { return departmentsTop(this) },
      chart_dataset() { return chart_dataset(this) },
      productTop10() { return productTop10(this) },
      productTop10byN() { return productTop10byN(this) },
      storesTop10() { 
        const a = storesTop10(this) 
        console.log('storesTop10', a)
        return a
      },
      dayOfWeekTop10() { return dayOfWeekTop10(this) },
      categoriesTopN() { return categoriesTopN(this) },
      anchorDate() {
        const max_date = this.receipts ? tidy(this.receipts, mutate((el)=>{return {Date: new Date(el.seconds*1000), ...el}}), summarize({max_date: max('Date')}))[0].max_date : new Date()
        return max_date ? max_date : new Date()
      },
      anchorDateMinus12M() {
        return this.anchorDate.getTime ? new Date((this.anchorDate).getTime()).setFullYear((this.anchorDate).getFullYear()-1):null
      },
      anchorDateMinus12W() {
        return this.anchorDate.getTime ? new Date((this.anchorDate).getTime()-7257600000):null
      },
      overallSpendYear() { return overallSpendYear(this) },
      overallSpend12W () { return overallSpend12W(this) },
      averageSpend() { return averageSpend(this) },
      averageWeeklySpend() { return 0 },
      demo_mode: {
        get() { return this.state.demo_mode },
        set(val) { this.state.demo_mode = val }
      },
    },

    // ================ watchers =================
    watch: {
      'state.uid': {
        handler: async function (val, oldVal) {
          console.log('uid changed ', val, oldVal)
          if (val) {

            await this.subscribeToUploads();
            console.log("uploads now: ", this.uploads)

            await this.fetchData();

            this.filters = { 
              brands: this.allBrands.map((d)=>{return d.brand_key}),
              dates: {
                start: this.min_date, 
                end: this.max_date
              }
            };
          }
        },
        immediate: true
      },
      uid: {
        handler: async function (val, oldVal) {
          console.log('uid changed ', val, oldVal)
          if (val) {

            await this.subscribeToUploads();
            console.log("uploads now: ", this.uploads)

            await this.fetchData();

            this.filters = { 
              brands: this.allBrands.map((d)=>{return d.brand_key}),
              dates: {
                start: this.min_date, 
                end: this.max_date
              }
            };
          }
        },
        immediate: true
      },
      'state.demo_mode': {
        handler: async function (val, oldVal) {
          console.log('demo mode new value ', val, oldVal)

            await this.subscribeToUploads();
            console.log("uploads now: ", this.uploads)

            await this.fetchData();

            this.filters = { 
              brands: this.allBrands.map((d)=>{return d.brand_key}),
              dates: {
                start: this.min_date, 
                end: this.max_date
              }
            };
          
        },
        immediate: true
      },
      uploads_raw: {
        handler: async function (val, oldVal) {
          console.log('uploads changed ', val, oldVal)
          if (val) {

            await this.fetchData();

            this.filters = { 
              brands: this.allBrands.map((d)=>{return d.brand_key}),
              dates: {
                start: this.min_date, 
                end: this.max_date
              }
            };
          }
        }, deep: true
      },
    },
    
    // ============ hooks lifecycle methods ============
    
    created() {   
    },
    beforeUpdate() {
    },
    update() { 
    },
    mounted() {
    },
    async beforeDestroy() {
      await uploads_unsubscribe()
    },
  }

</script>

<template>
  <!-- Big Numbers Row -->

  <v-row v-if="!state.loggedIn&&!state.demo_mode">
    <v-col><v-card class='text-center pa-6 h-100'>You are not signed in and do not have any data uploaded. Click here to learn how to upload data: 
      <v-btn color="primary" variant='text' @click="state.push('about')">About</v-btn> or sign in here if you have an account: 
      <v-btn color="primary" variant='text' @click="this.login_dialog=true" v-if="!this.login_dialog">Sign In</v-btn>
      <LoginDialog v-if="this.login_dialog"></LoginDialog>
    </v-card></v-col>  
  </v-row>

  <v-row v-else-if="current_upload&&current_upload?.status!=='error'&&current_upload?.status!=='ok'">
    <v-col><v-card class='text-center pa-6 h-100'>
      <Spinner />
              <p class="text-center my-2 text-disabled">Your uploaded data is currently being prepared. It takes 1-2 minutes. If it takes too long, try to refresh</p>
    </v-card></v-col>
  </v-row>
  <v-row v-else-if="current_upload?.status==='error'">
    <v-col><v-card class='text-center pa-6 h-100 text-error'>Something went wrong when processing your data. We are sorry
      about it. Do not worry, we are already on it. Please try again later. 
      <div v-if="state.dataPresent">Hit <v-btn @click="this.state.hook={};">here</v-btn> to see your previously loaded data.</div> 
    </v-card></v-col>
  </v-row>
  <v-row v-else-if="fetching_fl">
    <v-col><v-card class='text-center pa-6 h-100'><Spinner />Your data is being fetched from the server. Please wait.</v-card></v-col>
  </v-row>
  <v-row v-else-if="nodata">
    <v-col><v-card class='text-center pa-6 h-100'>No data uploaded yet into the dashboard. Click here to learn how to do it: 
      <v-btn color="primary" variant='text' @click="state.push('about')">About</v-btn>
    </v-card></v-col>
  </v-row>
  <div v-else>
  <v-row>
    <v-col>
      <div class="mt-5 text-grey-darken-2 font-weight-bold text-h4">
        Your Shopping Summary
      </div>
    </v-col>
  </v-row>

  <v-row class="px-0">
    <v-col>
      <v-card >
        <v-row><v-col class="d-flex flex-wrap justify-space-around">
        <v-card flat class="">
          <v-card-title class="text-grey-darken-3 font-weight-thin mb-2 text-h4 mt-4" >
            Total Annual Spend
          </v-card-title>
          <v-card-text>
            <div>
              <span class="font-weight-bold text-h4" style="color:#297FC4;opacity:0.6;">$</span>
              <span class="font-weight-bold text-h2" style="color:#297FC4;">
                {{ aud_s(overallSpendYear, 0)}}
              </span>
            </div>
            <div class="text-h5 " style="color:#297FC4;opacity: 0.5;">
              or <small>$</small>{{aud_s(overallSpendYear/52.14)}} a week
            </div>
          </v-card-text>
        </v-card>
        <v-card flat class="">
          <v-card-title class="text-grey-darken-3 font-weight-thin mb-2 text-h4 mt-4" >
            Last 12 weeks
          </v-card-title>
          <v-card-text>
            <div>
              <span class="font-weight-bold text-h4" style="color:#297FC4;opacity:0.6;">$</span>
              <span class="font-weight-bold text-h2" style="color:#297FC4;">{{aud_s(overallSpend12W, 0)}}</span>
            </div>
            <div class="text-h5 " style="color:#297FC4;opacity: 0.5;">
              or <small>$</small>{{aud_s(overallSpend12W/12)}} a week
            </div>
          </v-card-text>
        </v-card>
      </v-col></v-row>

      <v-expansion-panels variant="popout">
  <v-expansion-panel
 >
 <v-expansion-panel-title>Includes: transactions at {{  brands_list }} on dates from {{ dateFormatter(filters.dates.start )}} 
  to {{ dateFormatter(filters.dates.end) }} (click to change)</v-expansion-panel-title>
<v-expansion-panel-text>
      <v-row class="px-6 d-flex flex-wrap justify-start">
        <v-col class="d-flex flex-row flex-wrap justify-start" cols="12" sm="6">
          <v-card flat class="pa-3 align-self-center d-flex flex-row flex-nowrap" style="text-overflow: ellipsis ellipsis;">Brands </v-card>
          <v-card flat class="pa-1 align-self-center">
            <v-select
              v-model="filters.brands"
              :items="allBrands"
              item-title="name"
              item-value="brand_key"
              density="compact"
              multiple
              variant="outlined"
              hide-details
              >
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index < 2">
                  <span>{{ item.title }}</span>
                </v-chip>
                <span
                  v-if="index === 2"
                class="text-grey text-caption align-self-center"
                >
                  (+{{ filters.brands.length - 2 }} others)
                </span>
              </template>
            </v-select>
          </v-card>
        </v-col>
        <v-col class="d-flex flex-row flex-wrap justify-start" cols="12" sm="6">
          <v-card flat class="pa-3 d-flex align-self-center">Dates:</v-card>
          <v-card flat class="pa-1 d-flex flex-row flex-wrap align-self-center">
            <DateInput v-model="filters.dates.start" :min_date="min_date" :max_date="filters.dates.end"></DateInput>
              <v-card class="pa-1 align-self-center" flat>-</v-card>
          <!-- /v-card> 
          <v-card flat class="pa-1 align-self-center">-</v-card>
          <v-card flat class="pa-1 align-self-center" -->
            <DateInput v-model="filters.dates.end" :min_date="filters.dates.start" :max_date="max_date"></DateInput>
          </v-card>
        </v-col>  
      </v-row>
</v-expansion-panel-text>
    </v-expansion-panel>
</v-expansion-panels>



      </v-card>
      <!-- div class="text-caption text-disabled">
        {{ allBrands }} {{dateFormatter(filters_values.dates.start)}}-{{dateFormatter(filters_values.dates.end)}} : all {{allBrands}} : filter vls {{filters_values}} : {{ dateFormatter(min_date)}} {{dateFormatter(max_date)}}
      </div -->
    </v-col>
  </v-row>


  <v-row>
    <v-col>
      <div class="mt-5 text-grey-darken-2 font-weight-bold text-h4">
        Your Spending in Detail
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card >
        <v-card variant="flat" class="my-0 py-0">
          <v-card-title class="text-grey-darken-3 font-weight-thin mb-2 text-h4 mt-4" >
            Aisles
          </v-card-title>
          <v-card-text class="text-body-2 my-0 py-0" v-if="departmentsTop[0]?departmentsTop[0].Department:false">
            <div v-if="departmentsTop.length>0&&!nodata">
              <span>In last 12 months you spent most in the {{departmentsTop[0].Department}} department</span>
              <span v-if="departmentsTop.length>1">, followed by {{departmentsTop[1].Department}}</span>. 
              <span v-if="categoriesTopN[0].Category">Most popular category was {{categoriesTopN[0].Category}}.</span>
            </div>
          </v-card-text>
        </v-card>
        <v-row class="py-1 px-0 mx-1 my-0 d-flex flex-wrap" v-if="departmentsTop[0] ? departmentsTop[0].Department : true">
          <v-col class="ma-0 px-3" xs="12" sm="12"  md="12" lg="6" xl="6">
            <v-card variant="flat" class="my-0 py-0">
              <div class="pt-0 mt-0 text-grey-darken-2 font-weight-bold text-h6">
                Departments
              </div>
              <v-card variant="flat" v-if="!nodata" color="#FFE4AF" class="h-100 my-0" style="">
                <div class="pa-1 h-100" :style="{'box-shadow': 'inset -120px -60px 180px rgba(255, 255, 255, 0.4)', opacity: updating ? 0.4 : 1 }">
                  <v-lazy
                    v-model="lazy_components['departments']"
                    :options="{
                      threshold: .25
                    }"
                    min-height="320"
                    transition="fade-transition"
                  >
                    <BarChartHorizontal :dataset="departmentsTop" height="420" xkey="total" ykey="Department"  />
                  </v-lazy>
                </div>
            </v-card>
            <v-card height='200' class='d-flex align-center justify-center' v-else>No Data</v-card>
          </v-card>
          </v-col>
          <v-col class="ma-0 px-3" xs="12" sm="12"  md="12" lg="6" xl="6">
            <v-card variant="flat" class="my-0 py-0">
              <div class="pt-0 mt-0 text-grey-darken-2 font-weight-bold text-h6">
                Categories
              </div>
              <v-card variant="flat" v-if="!nodata" color="#FFE4AF" class="h-100 my-0" style="">
                <div  class="pa-1 h-100" :style="{'box-shadow': 'inset -120px -60px 180px rgba(255, 255, 255, 0.4)', opacity: updating ? 0.4 : 1 }">
                  <v-lazy
                    v-model="lazy_components['categories']"
                    :options="{
                      threshold: .25
                    }"
                    min-height="320"
                    transition="fade-transition"
                  >
                    <BarChartHorizontal :dataset="categoriesTopN" height="420" xkey="total" ykey="Category"   />
                  </v-lazy>
                </div>
              </v-card>
            <v-card height='200' class='d-flex align-center justify-center' v-else>No Data</v-card>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="py-1 px-0 mx-1 my-0 d-flex flex-wrap" 
        v-else
        ><v-col class="ma-0 px-3">
            <div>
              <Spinner />
              <p class="text-center my-2 text-disabled">Data is being prepared</p>
            </div>
          </v-col>
        </v-row>

        <v-card variant="flat" class="my-0 py-0">
          <v-card-title class="text-grey-darken-3 font-weight-thin mb-2 text-h4 mt-4" >Products</v-card-title>
          <v-card-text class="text-body-2 my-0 py-0">
          </v-card-text>
        </v-card>

        <!-- v-row class="py-1 px-0 mx-1 my-0" v-if="departmentsTop[0]?departmentsTop[0].Department:false">
          <v-col class="ma-0 px-3" lg="6" md="12" -->

        <!-- v-card variant="flat" class="mx-0 px-0"><v-card-text -->
          <v-row class="mx-1 px-0 d-flex flex-wrap">
            <v-col class="mx-0 px-3" xs="12" sm="12"  md="12" lg="6" xl="6">
              <v-card variant="flat" class="pa-0 h-100">
                <div class="pt-0 mt-0 text-grey-darken-2 font-weight-bold text-h6">Products most spent on</div>
                <v-table v-if="!nodata" class="bg-grey-lighten-3">
                  <thead>
                    <tr>
                      <th>#</th><th>Product</th><th>Spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in productTop10" :key="item.Product">
                      <td>{{item.row}}</td>   <td>{{item.Product}}</td>    <td>{{item.total}}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-card height='100' class='d-flex align-center justify-center bg-grey-lighten-3' v-else variant="flat" >No Data</v-card>

              </v-card>
            </v-col>

            <v-col class="mx-0 px-3"  xs="12" sm="12"  md="12" lg="6" xl="6">
                <v-card variant="flat"  class="pa-0 h-100">
                  <div class="pt-0 mt-0 text-grey-darken-2 font-weight-bold text-h6">Products most often bought</div>
                <v-table v-if="!nodata" class="bg-grey-lighten-3">

                  <thead>
                    <tr>
                      <th>#</th><th>Product</th><th>Bought, times</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in productTop10byN" :key="item.Product">
                      <td>{{item.row}}</td>   <td>{{item.Product}}</td>    <td>{{item.total}}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-card height='100' class='d-flex align-center justify-center bg-grey-lighten-3' v-else variant="flat">No Data</v-card>

                </v-card>
            </v-col>
          </v-row>
          <v-row>

            <v-col class="text-center">
              <v-btn variant="text" @click="showTopN===3?showTopN=10:showTopN=3"   
              :prepend-icon="showTopN===3?mdiArrowDownBold:mdiArrowUpBold" 
              :append-icon="showTopN===3?mdiArrowDownBold:mdiArrowUpBold">
                <span v-if="showTopN===3"  style="text-decoration: underline; text-decoration-style: dotted;">Show More</span>
                <span style="text-decoration: underline; text-decoration-style: dotted;" v-else>Show Less</span></v-btn>
            </v-col>

          </v-row>
        <!-- /v-card-text></v-card -->
      </v-card>
    </v-col>
  </v-row>

  <v-row><v-col><div class="mt-5 text-grey-darken-2 font-weight-bold text-h4">Your Shopping Habits</div></v-col></v-row>
           
  <v-card >
    <v-card variant="flat" class="my-0 py-0">
      <v-card-title class="text-grey-darken-3 font-weight-thin mb-2 text-h4 mt-4" >
        Where and when you shop
      </v-card-title>
      <v-row class="mx-1 px-0 d-flex flex-wrap">
        <v-col class="mx-0 px-3" cols="12" xs="12" sm="12" md="7" lg="6" xl="6">
          <v-card variant="flat" class="pa-0 h-100">
            <div class="pt-0 mt-0 text-grey-darken-2 font-weight-bold text-h6">Your stores on the map</div>
            <v-card min-height="480" class="h-100">
              <div class="h-100" v-if="!nodata">
                <Map 
                  :markers="this.storesTop10.filter((d)=> !(isNaN(d.Store_Latitude)||isNaN(d.Store_Longitude))).map(e => { return { lat_lng: [e.Store_Latitude, e.Store_Longitude], size: e.total, Store: e.Store, total: aud(e.total) } })"
                >
                </Map>
              </div>
              <div class="d-flex align-center justify-center" v-else>No Data</div>
            </v-card>
          </v-card>
        </v-col>

        <v-col class="mx-0 px-3" cols="12" xs="12" sm="12" md="5" lg="6" xl="6">
          <v-card variant="flat"  class="pa-0 h-100">
            <div class="pt-0 mt-0 text-grey-darken-2 font-weight-bold text-h6">Stores most spent in</div>
              <v-table v-if="!nodata" class="bg-grey-lighten-3">
                <thead>
                  <tr>
                    <th>#</th><th>Store</th><th>Spent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="store in storesTop10" :key="store.Store">
                    <td>{{ store.row }}</td>   <td>{{ store.Store }} <span class="text-grey">{{ store["Store Number"]=='0000' ? '' : store["Store Number"] }}</span></td>     <td>{{ aud(store.total) }}</td>
                  </tr>
                </tbody>
              </v-table>
              <v-card height='100' class='d-flex align-center justify-center bg-grey-lighten-3' v-else variant="flat">
                No Data
              </v-card>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mx-1 my-3 px-0 d-flex flex-wrap">
        <v-col class="mx-0 px-3" xs="12" sm="12"  md="12" lg="6" xl="6">
          <div class="pt-0 mt-0 text-grey-darken-2 font-weight-bold text-h6">Days of week you shop</div>
          <v-card variant="flat" class="pa-0">
            <div class="pa-1" :style="{'box-shadow': 'inset -120px -60px 180px rgba(0, 0, 0, 0.1)', opacity: updating ? 0.4 : 1 }" v-if="!nodata">
              <BarChartHorizontal 
                    :dataset="dayOfWeekTop10" height="420" ykey="dayOfWeek" xkey="total" :showlabels="true" chart-id="bar3" :show-main-axis="false"
                    color='grey'
                    font-color='black' />
            </div>
            <v-card height='200' class='d-flex align-center justify-center' v-else>No Data</v-card>
          </v-card>
        </v-col>
        <v-col >
          <div class="h-100 d-flex flex-wrap justify-center align-center ">
            <div class="text-center">More coming soon!</div>
          </div>
        </v-col>
      </v-row>


    </v-card>
  </v-card>

  
  <div class="mt-6 text-grey-darken-2 font-weight-bold text-h4">Browse your eReceipts</div>
    <v-card class="my-3 pa-5">
      <v-card flat v-if="!nodata" color="#297FC4" >
        <div  class="pa-3" style="box-shadow: inset -120px -60px 180px rgba(0, 0, 0, 0.2);">
          <v-lazy
                    v-model="lazy_components['barchart']"
                    :options="{
                      threshold: .25
                    }"
                    min-height="200"
                    transition="fade-transition"
                  >
            <BarChartStacked :dataset="chart_dataset"  @bar-chart-click="barclickhandler"  height="200" />
          </v-lazy>
        </div>
      </v-card>
      <v-card height='200' class='d-flex align-center justify-center' v-else>No Data</v-card>
      <v-card flat><div class="text-center text-caption text-disabled">Click a bar to display the receipt</div></v-card>
      <v-card variant="outlined" class="my-2 mx-0" style="border-color: #297FC4;">
        <v-lazy
                    v-model="lazy_components['receiptscards']"
                    :options="{
                      threshold: .25
                    }"
                    min-height="400"
                    transition="false"
                    v-if="!nodata" >
        <v-responsive class="overflow-y-auto" max-height="400" id="scroller" style="scroll-behavior: smooth;">
          
            <ReceiptsCards :dataset="{receipts: receipts, items: items}" :rid="receiptId" />
        </v-responsive>
        </v-lazy> 

        <v-card height='200' class='d-flex align-center justify-center' v-else>No Data</v-card>
      </v-card>

    </v-card>


    <div class="mt-5 text-grey-darken-2 font-weight-bold text-h4">Manage Your Data</div>
    <v-card class="ma-0 pa-2">
      <v-row class=" d-flex flex-wrap" dense>
        <v-col>
          <v-card flat><v-card-text><p class='text-h6'>You are currently logged in 
            as <b class="text-secondary">{{ state.demo_mode? "Demo User" : (state.isGuest ? "Guest" : state.user_displayemail) }}</b> 
            <v-btn v-if="!state.isGuest" class="mx-2"><LogoutDialog />Sign Out</v-btn></p>
          <p v-if="state.isGuest" class="text-disabled">As a guest user, only you can see this dashboard and only in your current browser. Your data will be 
          preserved for you in this browser even if you close it, but will not be shared anywhere else. 
          If you want to access your data from another browser or device, you need to create an registered account and download your data again.
          You can choose to delete your data from this guest account (see the button below).</p>
          </v-card-text></v-card>
          
        </v-col>
        </v-row><v-row class=" d-flex flex-wrap" dense>
          <!-- Download card -->
          <v-col class="" xs="12" sm="6" md="9" lg="9" xl="9" cols="12">
            <v-card class="h-100 d-flex flex-column"  style="border-color:grey;" variant="outlined">
              <v-card-text class="align-start px-3 ma-0">Download data about your shopping as a csv file you can open with MS Excel or Google Spreadsheets.</v-card-text>
              <v-card-actions class="align-end justify-end" >
                  <v-btn @click="csv_download(this)"  color="grey" class="pa-2" 
                  :loading="loading[2]" :disabled="nodata||demo_mode" :prepend-icon="mdiFileDownload" variant="flat">Download</v-btn>
              </v-card-actions> 
            </v-card>
          </v-col>

          <!-- Delete card -->
          <v-col xs="12" sm="6" md="3" lg="3" xl="3" cols="12">
            <v-card class="h-100 d-flex flex-column"  style="border-color:#B00" variant="outlined">
              <v-card-text class="align-start px-3 ma-0">Delete all your data from this server.</v-card-text>
              <v-card-actions class="align-end justify-end" >
                <v-btn @click="dialogs.delete = true" :disabled='nodata||demo_mode' color="error" :prepend-icon="mdiAlert" class="pa-2"
                variant="flat"
                >Delete data</v-btn>

                <!-- Delete modal -->
                <v-dialog
                  v-model="dialogs.delete"
                  width="50%"
                >
                  <v-card class="pa-2">
                    <v-card-title class="text-h4 pa-2 text-error">Delete your shopping data   
                      <v-btn class='float-right'  @click="dialogs.delete = false" size="small" variant='outlined' color="grey"
                    :icon="mdiClose"
                      
                    ></v-btn></v-card-title>
                    <v-card-text class="pa-2">
                      <div class='text-h6 text-error'>If you click "Delete" all your shopping data will be deleted from MyShopDash service.</div>

                      Your data stored at Woolworths will NOT be affected. If in future you want to display your 
                      shopping data again you will need to download your shopping data from Everyday Rewards website again. 
                      If you do not visit this website for 6 months, your data will be deleted automatically.
                      <div v-if="!state.isGuest"><p class="py-2 text-primary">You are currently signed 
                      in as {{state.user_displayemail}}</p><p class="text-caption text-disabled">Click the checkbox 
                        if you want also delete your account (your sign-in details and email address). 
                      You will need to sign up again next time you want to use the service</p></div>
                      <v-checkbox v-model="dialogs.delete_account" label="Delete my account on myShopDash too" ></v-checkbox>
                      
                      
                    </v-card-text>
                    <v-card-actions class="text-h4 pa-2">
                      <v-btn color="error" variant="flat" @click="loading.delete_data=true;state.deleteData(this)" :loading="loading.delete_data">Delete</v-btn>
                      <v-btn color="grey" variant="flat" @click="dialogs.delete = false">Keep for now</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- ================== -->

              </v-card-actions> 
            </v-card>
          </v-col>
      </v-row>
    </v-card>

</div>
</template>
  


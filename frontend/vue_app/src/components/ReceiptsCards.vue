<script>
  import { tidy, map, 
  //  mean, 
    arrange, desc, filter, 
  //  groupBy, summarize, sum, mutateWithSummary,rowNumber, slice, mutate
  } from '@tidyjs/tidy'
  import {  aud, aud_s } from '/src/helpers.js';

  
  export default {
    name: 'ReceiptsCards',
    components: {  },
    methods: {  aud, aud_s, tidy, arrange, desc, filter, map,
 },

    props: {

 
      dataset: {
        type: Object,
      },
      rid: {
        type: String,
        default: ''}
    },
    data() {
      return {
        isActive: {},
        
      }
    },
    computed: {
      receipts: function() {
        return this.dataset.receipts.map((d)=>{ d.recordId = d.id; 
          return d })
      },
      // receipt: function() {
      //   return this.dataset.receipts.filter((d)=>d.recordId==this.rid)[0]
      // },
      selected_date: function() {

        if (this.rid) {
          let date = this.dataset.receipts.filter((d) => d.recordId == this.rid)[0]?.wk;

          return date;
        }
      },
      items: function() {
        return this.dataset.items
      },

    },
  }
  </script>

  <template>

    <div v-for="receipt in receipts.filter(e=>e.wk.getTime()===this.selected_date?.getTime())"
                  :key="receipt.id" :id="receipt.id">

                   <!-- <v-lazy
      v-model="isActive[receipt.id]"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"> -->

    <v-row
                  >
                  <v-col class="ma-2">
                    <v-card class="" v-if="receipt!==undefined">
                      <v-card-title>{{receipt.Store}}<div class="float-right">{{aud(receipt['Receipt Total'])}}</div></v-card-title>
                      <v-card-subtitle>{{Intl.DateTimeFormat('en-AU', {dateStyle: 'short', timeStyle: 'short'}).format(receipt.Date)}}</v-card-subtitle>
                      <v-card-text>
                        <v-table>
                      <tr v-for="item in tidy(items, filter((d)=>d.recordId==receipt.recordId), map((d)=>{ d.nn = Number(d.nn); return d }), arrange('nn'))" class=" " >
                        <td class="px-1 ">{{item.nn}}</td>
                        <td class="pa-1 ">{{item.Product}}</td>
                        <td class="pa-1 text-right">{{item.Quantity}}{{item.Unit}}</td>
                        <td class="pa-1 text-right">{{aud_s(item['Price Per Unit'])}}</td>
                        <td class="pa-1 text-right">{{aud_s(item['Price Total'])}}</td>
                        </tr>
                    </v-table>
                      </v-card-text>
                    </v-card>
                    <v-card class="ma-2" v-else>
                      <v-card-text><div class="text-center text-caption text-disabled">Click a bar to display the receipt</div></v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              <!-- </v-lazy>  -->
             </div>


    <!-- v-row
                  v-for="receipt in tidy(receipts, arrange(desc('Date')))"
                  :key="receipt.id">
                  <v-col>
                    {{receipt.Store}} 
                    | {{Intl.DateTimeFormat('en-AU', {dateStyle: 'short', timeStyle: 'short'}).format(receipt.Date)}}
                    | {{aud(receipt['Receipt Total'])}}
                    <v-table>
                      <tr v-for="item in tidy(items, filter((d)=>d.rid==receipt.id), map((d)=>{ d.sid = Number(d.sid); return d }), arrange('sid'))">
                        <td>{{item.sid}}</td>
                        <td>{{item.Product}}</td>
                        <td>{{item.Quantity}}</td>
                        <td>{{item.Unit}}</td>
                        <td>{{item['Price Per Unit']}}</td>
                        <td>{{item['Price Total']}}</td>
                        </tr>
                    </v-table>
                  </v-col>
                </v-row -->
  </template>
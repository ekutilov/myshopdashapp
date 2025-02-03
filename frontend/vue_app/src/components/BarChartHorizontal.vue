<script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale, Filler } from 'chart.js'
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import 'chartjs-adapter-moment'
  import { aud } from '@/helpers';

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale, Filler, 
  ChartDataLabels
  )

  
  export default {


    name: 'BarChartHorizontal',
    components: { Bar, ChartJS },
    created() {  
      ChartJS.defaults.font.family = `"Fira Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`
    },
    watch: {
    },
    props: {
      chartId: {
        type: String,
        default: 'bar-chart-2'
      },
      // paused: {
      //   type: Boolean,
      //   default: false
      // },
      datasetIdKey: {
        type: String,
        default: 'label-2'
      },
      ykey: {type: String, default: 'y'},
      xkey: {type: String, default: 'x'},
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: String,
        default: "400"
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Object,
        default: () => {}
      },
      dataset: {
        type: Object,
        default:[]
      },
      showLabels: {
        type: Boolean,
        default: false
      },
      showMainAxis: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: 'RGBA(237,159,10,0.6)'
      },
      fontColor: {
        type: String,
        default: 'RGBA(237,159,10,1)'
      },
    },
    data() {
      return {
      chartOptions: {
          indexAxis: 'y',
          scales: {
            x: {
              border: {
                    display:true, 
                    color:'white'
                },
                grid: {
                    display: true,
                    // drawTicks: false,
                   // drawOnChartArea: true,
                     color: 'white'
                },
                ticks: {
                    display:this.showMainAxis,
                    maxTicksLimit:10,
                    color: this.fontColor // "#ED9F0A"
                },
            },
            y: {
              grid: {display: false, color: '#ED9F0A'},
              //ChartJS.defaults.borderColor='white'
              //ChartJS.defaults.color = '#ED9F0A'
              // border: {display: false},
              ticks: {
                    maxTicksLimit:0,
                    color: this.fontColor // color: '#DD8F0A'
                },
            },
          },
          elements: {
            bar: {
              borderWidth:{bottom:1, right:1},
              borderRadius: {bottomLeft: 0, bottomRight: 4, topLeft: 0, topRight: 4},
            },
          },
          barPercentage:1,
          categoryPercentage:0.5,
          maintainAspectRatio: false,
          parsing: {
            xAxisKey: this.xkey,
            yAxisKey: this.ykey
          },
          responsive: true,
          plugins: {
            legend: {
                display: false
            },
            datalabels: { formatter: (value, context)=>{return value.total===0 ? '$-.--' : aud(value.total)}, display: this.showlabels, align: 'right', anchor:'end', clamp: true, offset: 1 }
        }
        }
      
    
      }
    },
    computed: {
      // datasetCached() {
      //   return this.paused ? this.cachedData : this.dataset
      // },
      chartData() { 
        //ChartJS.defaults.borderColor='white'
        //ChartJS.defaults.color = '#ED9F0A'
        console.log(     this.dataset.map(d=>d.total))

        return {
          datasets: [{
            label: "Spendings",
            fill: true, 
            backgroundColor: this.color,
            color: this.fontColor,
            data:  this.dataset, 
          }] 
          }
      },
    }
  }
  </script>

<template>
  <Bar
    :options="chartOptions"
    :data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="+width"
    :height="+height"
  />
</template>

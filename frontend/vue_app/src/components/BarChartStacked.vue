<script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale } from 'chart.js'
  import 'chartjs-adapter-moment'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale)
  
  export default {
    name: 'BarChartStacked',
    components: { Bar, ChartJS },
    props: {
      chartId: {
        type: String,
        default: 'bar-chart'
      },
      // paused: {
      //   type: Boolean,
      //   default: false
      // },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
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
      }
    },
    data() {
        ChartJS.defaults.borderColor='rgba(255, 255, 255, 0.0)'
        ChartJS.defaults.color = 'rgba(255, 255, 255, 0.7)'
        ChartJS.defaults.font.family = `"Fira Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`

      return {
        // cachedData: JSON.parse(JSON.stringify(this.dataset)),
        gradient: {},
        chartOptions: {
          onClick: (_, active)=>{console.log(active[0].element.$context.raw.recordId); this.$emit('barChartClick', active ? active[0].element.$context.raw.recordId : false)},
          interaction: {
              mode: 'point'
          },
          borderWidth:{top:2},
          barPercentage:1,
          categoryPercentage:0.9,
          maintainAspectRatio: false,
          scales: {              
            x: {
              type: 'time',
              stacked: true,
              border: {display:true, color:'white'},
              time: {
                tooltipFormat: 'DD MM YY',
                unit: 'month',
                isoWeekday: true,
                displayFormats: {
                        week: 'MMM YY',
                        month: 'MMMYY'
                    },
                round: false
              },
              grid: {
                display:true,
                tickWidth:1,
                drawOnChartArea: false,
                color: 'rgba(255, 255, 255, 0.4)'
              },
              ticks: {
                source: 'data',
                minRotation:0,
                maxRotation:50,
                crossAlign :'near',
                includeBounds:  false,
                align: 'center',
                labelOffset: 0
            //     callback: function(value, index, ticks) {
            //         console.log(ticks)
            //     return value //new Intl.DateTimeFormat(undefined, {dateStyle: 'short'}).format(new Date(ticks[index].value))
            // }
              }
            },
            y: {
                border: {
                    display:true, 
                    color:'white'
                },
                stacked: true,
                grid: {
                    drawTicks: false,
                    drawOnChartArea: true,
                    color: 'rgba(255, 255, 255, 0.4)'
                },
                ticks: {
                    maxTicksLimit:6,
                },

            }
          },
          parsing: {
            xAxisKey: 'wk',
            yAxisKey: 'Receipt Total'
          },
          responsive: true,
          
          plugins: {
            legend: {
                display: false
            },
            datalabels: {display: false},
            tooltip: {
                displayColors: false,
                callbacks: {
                    label: function(context) {
                        let label = ''
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat(undefined, { style: 'currency', currency: 'AUD' }).format(context.parsed.y);
                        }
                        return label;
                    },
                    title: function(item) {
                        return item[0].raw.Store
                    },
                    afterTitle: function(item) {
                        return new Intl.DateTimeFormat(undefined, {dateStyle: 'medium', timeStyle: 'short'}).format(item[0].raw.Date)
                    }
                }
            
        }
    }
        }
      }
    },
    methods: {
        
    },
    computed: {
    
      // datasetCached() {
      //   return this.paused ? this.cachedData : this.dataset
      // },
      chartData() { 

        return {
          datasets: this.dataset.map((el)=>{
            return {
                label: String(el[0].stack),
                fill: false,
                data: el,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderColor: 'rgba(255, 255, 255, 0.8)'
            }
          })
        }
        }
    },
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
    :width="width"
    :height="+height"
  />

</template>

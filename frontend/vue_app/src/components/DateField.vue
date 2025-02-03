<template>
    <div>
        <v-menu
        v-model="menu"
        :close-on-content-click="false"
        location="end"
        >
            <template v-slot:activator="{ props }">
                <v-text-field
                density="compact"
                readonly
                variant="outlined"
                :label="label"
                hide-details
                >
                    {{ dateFormatter(date_select)  }}
                    <template #append-inner>
                        <v-icon v-bind="props">
                            {{mdiCalendar}}
                        </v-icon>
                    </template>
                </v-text-field>
            </template>
            <v-card >
                <v-date-picker
                    v-model="date_select"
                    @update:model-value="menu = false"
                    :min="min_date"
                    :max="max_date"
                    :hide-header="true"
                    
                ></v-date-picker>
            </v-card>
        </v-menu>
    </div>
  </template>

  <script>
    import { mdiCalendar } from '@mdi/js'
    import { dateFormatter } from '/src/helpers.js'
    
    export default {
        props: {
            modelValue: Date, 
            min_date: Date, 
            max_date: Date,
            label: String,
            },
        data: ()=> { 
            return {
                menu: false,
                mdiCalendar,
            }
        },
        methods: {
            dateFormatter,
        },
        computed: {
            date_select: {
                    get() {
                    return this.modelValue
                },
                set(value) {
                    this.$emit('update:modelValue', value)
                }
            }
        },
        mounted() {
        },
        watch: {
        },
    }   

  </script>
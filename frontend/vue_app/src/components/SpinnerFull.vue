<script>
export default {
    name: 'SpinnerFull',
    props: {
        text: {
            type: Boolean,
            default: false
        }
    },
}
</script>
<template>
  
  <v-row class="w-100 mx-auto" >
    <v-col class="" >
       <v-responsive aspect-ratio="16 / 9" class="width-100">  
          <v-card height="60vh" color="rgba(0,0,0,0)" class="d-flex flex-column justify-center align-center">
            
            <div><v-progress-circular
      class="mx-auto"
      :size="70"
      :width="10"
      indeterminate
      color="orange"
    ></v-progress-circular></div>
    <div class="w-sm-100 w-lg-50 w-md-75 w-xl-50 text-center text-grey">It may take a minute or so to prepare your data. If it takes too long, hit Refresh</div>
  </v-card>
       </v-responsive>
  </v-col>
  </v-row>

</template>
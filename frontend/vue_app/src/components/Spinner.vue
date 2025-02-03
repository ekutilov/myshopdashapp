<script>
export default {
    name: 'Spinner',
}
</script>
<template>
  <v-row>
    <v-col cols="1"></v-col><v-col class="">
      <div class="width-100 d-flex justify-center">
    
       <v-progress-circular
      class="mx-auto"
      indeterminate
      color="grey lighten-5"
    ></v-progress-circular></div></v-col><v-col cols="1"></v-col>
  </v-row>
</template>
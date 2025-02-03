<template>
    This page does not exist, sorry. <br/>
    <v-btn @click="state.push('home')">Go to main page</v-btn>
</template>

<script>

import { state } from "/src/store.js"

export default {
  name: '404',
  data () {
    return {
      msg: '404',
      state
    }
  }
}
</script>
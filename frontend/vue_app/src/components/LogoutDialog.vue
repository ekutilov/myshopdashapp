<template>
    <v-dialog  max-width="500px"
        v-model="dialog"
        activator="parent"
        width="auto"
      >
        <template v-slot:default="{ isActive }">
        <v-card>
            <v-card-title>Sign Out</v-card-title>
            <v-card-text>
                <p>Are you sure you want to sign out?</p>
                <span v-if="state.isGuest&&state.dataPresent">
                    <p>You are signed in as a Guest and have some data 
                        uploaded to your dashboard. As a guest, after you are signed out you will not be able to sign in into the same account again. 
                        Do you want to delete your guest account data first?
                    </p>
                    <v-checkbox v-model="deleteFirst" label="Delete data" ></v-checkbox>
                </span>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="isActive.value=false">Cancel</v-btn>
                <v-btn color="red darken-1" text @click="this.state.signOutHandler(this.deleteFirst);isActive.value=false">Confirm</v-btn>
            </v-card-actions>
        </v-card>
        </template>
    </v-dialog>
</template>

<script>
    import { state } from '/src/store.js'
    export default {
        data: () =>{return {
            deleteFirst: false,
            state,
            dialog: false,
        }},
    }
</script>
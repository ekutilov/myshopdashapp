<template>
    <div v-if="formstate?formstate=='idle':true">
        <v-form  @submit.prevent="submit" v-model="isFormValid">
            <v-row>
                <v-col>
                    <v-text-field label="email" v-model='email' :rules="rules" density="compact"
                    >
                        <template v-slot:append-inner>
                            <v-btn type="submit" variant="plain" :icon="mdiArrowRight" :disabled="!isFormValid" @click="submit">
                            </v-btn> 
                        </template>
                    </v-text-field>
                </v-col>
                <!-- <v-col cols="2">
                    <v-btn type="submit" variant="plain" :icon="mdiArrowRight" :disabled="!isFormValid" size="small"></v-btn>
                </v-col> -->
            </v-row>
        </v-form>
    </div>
    <div v-else-if="formstate?formstate=='process':false"><Spinner /></div>
    <div v-else-if="formstate?formstate=='success':false">
        <v-card flat>
            <v-card-title>Check your email</v-card-title>
            <v-card-text>
                <div>We have sent you an email with a link to sign in</div>
                <div>Click on the link to sign in</div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

import { mdiArrowRight } from '@mdi/js'
import Spinner from '/src/components/Spinner.vue'
import { emailValidation } from '/src/helpers.js'
import { state } from '/src/store.js'

export default {
    components: {
        Spinner,
    },
    props: {
        payload: { 
            type: [Object, Function],
            required: false,
            default: {}
        },
        callbacks: {
            type: Object,
            required: false,
        }
    },
    data() {
        return {
            // Your data properties go here
            mdiArrowRight,
            email: '',
            rules: [
                v => emailValidation(v) || 'Email must be valid',
            ],
            isFormValid: false,
            formstate: 'idle',
            state,
            // state: 'idle',

        };
    },
    methods: {
        async submit() {
            console.log('submit')
            console.log('pl', this.payload)
            this.formstate = 'process'

            const payload = (typeof this.payload === 'function') ? await this.payload(this.email) : this.payload
            
            console.log('payload', payload)

            await this.state.signInFlowStep1(this.email, payload, this.callbacks)
            console.log('success')
            this.formstate = 'success'
        },
        // Your methods go here
    },
    computed: {
    },
};
</script>

<style scoped>
    /* Your CSS styles go here */
</style>
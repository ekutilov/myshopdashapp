<template>
    <v-row>
        <v-col>
            <div class="mt-5 text-grey-darken-2 font-weight-bold text-h4"><slot name="header"></slot></div>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-card >
                <slot></slot>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            // Your data properties go here
        };
    },
    methods: {
        // Your methods go here
    },
    computed: {
        // Your computed properties go here
    },
    // Other options like `props`, `watch`, `mounted`, etc. go here
};
</script>

<style scoped>
    /* Your CSS goes here */
</style>
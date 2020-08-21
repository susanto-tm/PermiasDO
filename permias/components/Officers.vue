<template>
    <section class="officer-profiles">
        <template v-for="officer in officerList">
            <div :key="officer.id">
                <Officer :officer="officer" />
            </div>
        </template>
    </section>
</template>

<script>
    import Officer from '@/components/Officer';
    export default {
        name: "Officers",
        components: {
            Officer
        },
        async asyncData({ $axios, params }) {
            try {
                let officerList = await $axios.$get('/officers/');
                console.log("got list");
                return { officerList };
            } catch(e) {
                return { officerList: [] };
            }
        },
        data() {
            return {
                officerList: []
            }
        }
    }
</script>

<style scoped>
    .officers {
        height: 100vh;
        width: 100%;
    }
</style>
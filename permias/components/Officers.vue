<template>
    <section class="officer-profiles">
        <template v-for="officer in officerList">
            <Officer :officer="officer" :key="officer.id" />
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
        async asyncData({ $axios }) {
            try {
                let officerList = await $axios.$get('/officers/');
                console.log(officerList);
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
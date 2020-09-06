<template>
    <div>
        <nuxt-link ref="linkToTest2" to="/test2">Hi</nuxt-link>
        <div class="last" style="height: 100vh; width:100%; background: #272635;">
            Last page
        </div>
        <div class="trigger_scroll" style="height:100px; visibility:hidden;"></div>
    </div>
</template>

<script>
    export default {
        name: "test",
        mounted() {
            let pageRefs = this.$refs;
            let router = this.$router;
            let trigger = $('.trigger_scroll').offset().top;

            $(window).scroll(function() {
                if (($(window).scrollTop() + $(window).innerHeight()) > trigger + 50) {
                    router.push('/test2');
                }

            });
        }
    }
</script>

<style scoped>

</style>
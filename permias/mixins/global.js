export default {
    data() {
        return { isMobile: false }
    },
    mounted() {
        this.isMobile = window.innerWidth < 900;
    }
}
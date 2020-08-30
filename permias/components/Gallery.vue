<template>
    <section class="gallery-view">
        <div class="gallery-slide">
            <template v-for="event in gallery">
                <div class="galleryEvent">
                    <img v-for="eventImage in event.images" :src="'http://localhost:8000' + eventImage.image"/>
                </div>
            </template>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Gallery",
        props: ["gallery"],
        mounted() {
            $('.galleryEvent').flickity({
                fullscreen:true,
                imagesLoaded:true,
                draggable:true,
                pageDots: false,
                prevNextButtons: false
            })
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 100%;
    }
</style>
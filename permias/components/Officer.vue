<template>
    <div class="officer-img-profile">
        <div class="officer-img">
            <h1 class="img" :style="{backgroundImage: 'url(' + officer.picture + ')'}"></h1>
            <div class="profile">
                <div class="officer-container">
                    <div class="cross icon"></div>
                    <div class="profile-container">
                        <h1 class="name">{{ officer.first_name }} <span>{{ officer.last_name }}</span></h1>
                        <p class="rank">{{ officer.rank }}</p>
                        <p class="desc">{{ officer.profile }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="below-profile">
            <h1 class="name">{{ officer.first_name }} <span>{{ officer.last_name }}</span></h1>
            <p class="rank">{{ officer.rank }}</p>
            <div class="profile-button">Read Profile</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Officer",
        props: ['officer']
    }
</script>

<style scoped>

</style>
<template>
    <div :class="['officer ' + officer.rank.substring(0, 4).toLowerCase()]">
        <div class="officer-img-profile">
            <div class="officer-img">
                <h1 class="img" :style="{backgroundImage: 'url(' + officer.picture + ')'}"></h1>
                <div class="profile" ref="profile">
                    <div class="officer-container">
                        <div class="cross icon" @click="closeProfile"></div>
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
                <div class="profile-button" @click="showProfile">Read Profile</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OldOfficer",
        props: ['officer'],
        methods: {
            showProfile() {
                this.profile = $(this.$refs["profile"]);
                this.profile.fadeTo('fast', 1);
            },
            closeProfile() {
                this.profile.fadeToggle("fast");
            }

        }
    }
</script>

<style lang="scss" scoped>
    .officer {
        width: 27vw;
        height: 800px;
        margin-right: 40px;
    }
    .officer-img-profile {
        height: 100%;
    }
    .officer-img {
        height: 75%;
        position: relative;
        h1 {
            height: 100%;
            width: 100%;
        }
    }

    $ranks: pres, vice, advi, secr, trea, publ, webm;
    $pos: -41.5rem, -2.5rem, -14rem 0.5px, -28rem, -40rem -15rem, -16rem, -28rem -10rem;
    $size: 100rem, 40rem, 60rem, 80rem, 100rem, 65rem, 90rem;
    h1.img {
        @for $i from 1 through length($ranks) {
            .#{nth($ranks, $i)} & {
                @include profilePosSize(nth($pos, $i), nth($size, $i));
            }
        }
    }

    .officer-img .profile {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        transition: background-color 200ms ease-in-out;
        display: none;
        background-color: rgba(0, 0, 0, 0.8);

        .container {
            width: 100%;
            height: 100%;
        }

        .icon {
            width: 25px;
            height: 25px;
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            z-index: 2;

            &.cross:before, &.cross:after {
                content: "";
                width: 100%;
                height: 2px;
                background-color: #fff;
                position: absolute;
                left: 0;
                top: 50%;
            }

            &.cross:before {
                transform: rotate(45deg);
            }

            &.cross:after {
                transform: rotate(-45deg);
            }

        }

        .profile-container {
            padding: 55px 20px;
            position: relative;
            z-index: 1;
        }
    }

    h1.name {
        @include font-700("Montserrat");
        font-size: 40px;
        color: #fff;
        margin: 0;

        span {
            color: $blue-accent;
        }
    }

    p {
        &.rank {
            @include font-400("Montserrat");
            font-size: 20px;
            color: #fff;
            margin: 10px 0;
        }
        &.desc {
            @include font-400("Lato");
            font-size: 18px;
            line-height: 25px;
            max-width: 80%;
            color: #fff;
            margin: 10px 0;
        }
    }

    .below-profile {
        h1 {
            color: #fff;
            font-size: 35px;
        }
        p {
            color: #fff;
            font-size: 20px;
            margin: 5px 0 0;
        }
        .profile-button {
            padding: 15px 15px;
            background-color: #fff;
            border-radius: 20px;
            width: 40%;
            text-align: center;
            margin-top: 10px;
            @include font-700("Montserrat");
            font-size: 16px;
            cursor: pointer;
            color: #000;
            transition: all 400ms ease;

            &:hover {
                background-color: $blue-accent;
                color: #fff;
                transition: all 400ms ease;
            }

        }
    }

</style>
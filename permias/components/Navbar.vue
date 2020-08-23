<template>
    <nav id="nav" class="navbar">
        <div class="nav-container">
            <div class="menu-container" ref="menuContainer" data-opened="false" @click="icon_open">
                <div class="menu icon" data-background-blue="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="menu-opened" style="display: none;" ref="openedMenu">
                <div class="menu-items">
                    <div class="option">
                        <p data-scroll-to="about" class="item">About</p>
                        <p class="side-content">Who We Are</p>
                    </div>
                    <div class="option">
                        <p data-scroll-to="gallery" class="item">Gallery</p>
                        <p class="side-content">Our Past Events</p>
                    </div>
                    <div class="option">
                        <p data-scroll-to="officers" class="item">Officers</p>
                        <p class="side-content">Meet Our Executive Team</p>
                    </div>
                    <div class="option">
                        <p data-scroll-to="freshman-guide" class="item">Freshman's Guide</p>
                        <p class="side-content">For The Freshmen</p>
                    </div>
                    <div class="option">
                        <p data-scroll-to="contact" class="item">Contact</p>
                        <p class="side-content">Reach Out To Us</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import { menu, menuIconColor } from "../assets/scripts/nav.js"
    export default {
        name: "Header",
        mounted() {
          this.tlNav = gsap.timeline({paused: true});
          this.tlNav.from($('.option', this.$refs["openedMenu"]), {y: 20, duration: 1.2, opacity: 0, stagger: 0.1, ease: 'power4.inOut'});
          let menuIcon = $('.menu.icon', this.$refs["menuContainer"]);
          $(window).scroll(function() {
              menuIconColor(menuIcon);
          });
        },
        methods: {
            icon_open($event) {
                menu(this.$refs, this.tlNav);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .navbar#nav {
        width: 100%;
        height: 120px;
        position: fixed;
        z-index: 99;

        .nav-container {
            width: 100%;
            height: 100%;
            position: relative;
        }
    }

    .menu-container {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        right: 60px;
        transform: translateY(-50%);
        cursor: pointer;

        .menu.icon span {
            position: absolute;
            background-color: #000;
            width: 100%;
            height: 1.5px;
            right: 0;
            transition: width 400ms ease;
        }

        .menu.icon[data-background-blue="true"] span {
            background-color: #fff;
        }
    }

    .menu.icon {
        span:nth-child(1) {
            top: 0;
            transition: top 400ms ease;
        }
        span:nth-child(2) {
            top: 50%;
            transform: translateY(-50%);
        }
        span:nth-child(3) {
            top: 100%;
            transition: all 400ms ease;
        }
    }

    .menu-container[data-opened="false"]:hover .menu.icon {
        span:nth-child(2) {
            width: 80%;
            transition: width 400ms ease;
        }
        span:nth-child(3) {
            width: 40%;
            transition: all 400ms ease;
        }
    }

    .full-length {
        span:nth-child(2), span:nth-child(3) {
            width: 100% !important;
            transition: all 200ms ease;
        }
    }

    .combine {
        top: 50% !important;
        transition: all 400ms ease !important;
    }

    .menu-opened {
        height: 100vh;
        width: 100%;
        transition: background-color 1s ease;
    }

    .menu-items {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: flex-end;
        height: 100%;
        width: 97%;


        .option {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: flex-end;

            .item {
                color: #fff;
                @include font-700('Lato');
                font-size: 70px;
                cursor: pointer;
                margin: 0;
                line-height: 105px;
                z-index: 2;
            }

            .side-content {
                width: 100%;
                color: #fff;
                @include font-400('Montserrat');
                font-size: 20px;
                margin: 0;
                position: absolute;
                left: 4%;
                z-index: 1;
                top: 50%;
                transform: translateY(-50%);
                opacity: 0;
                cursor: default;
            }
        }
    }

    .menu-bg {
        background-color: $blue-accent;
        transition: background-color 1s ease;
    }

    .icon-color {
        background-color: #fff !important;
        transition: background-color 200ms ease;
    }
    .lock-scroll {
        overflow: hidden;
    }

</style>
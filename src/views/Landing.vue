<template>
    <div class="landing">
        <section class="showcase" :class="{ active: isOpen }">
            <header>
                <h2 class="logo" style="text-transform: lowercase;">inget.in</h2>
                <div class="toggle" @click="tglNav" :class="{ active: isOpen }"></div>
            </header>

            <div class="overlay"></div>
            <div class="text">
                <h2>MENJADI LEBIH PRODUKTIF </h2>
                <h3>BERSAMA <span style="text-transform: lowercase;">inget.in</span></h3>
                <p>Inget.in mampu membantu anda mencatat dengan baik seluruh kegiatan yang harus diselesaikan. Sehingga
                    anda
                    akan menjadi lebih produktif dengan fitur-fitur yang dapat membantu memenejement waktu dan kegiatan
                    anda. Tunggu apa lagi , mari mulai bersama kami!</p>
                <router-link to="/todo">Mulai</router-link>
            </div>
            <ul class="social">
                <li><a href="#"><img src="../assets/images/facebook.png"></a></li>
                <li><a href="#"><img src="../assets/images/twitter.png"></a></li>
                <li><a href="#"><img src="../assets/images/instagram.png"></a></li>
            </ul>
        </section>
        <div class="menu">
            <ul>
                <li>
                    <!-- <router-link to="/">Home</router-link> -->
                </li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        tglNav() {
            this.isOpen = !this.isOpen
        }
    },
}
</script>

<style src="../assets/style/landing.css" scoped>
</style>
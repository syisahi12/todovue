<template>
    <div class="landing">
        <section class="showcase">
            <header>
                <h2 class="logo" style="text-transform: lowercase;">inget.in</h2>
            </header>

            <div class="overlay"></div>
            <div class="text">
                <h2>ERROR 404.</h2>
                <h3>Page Not Found!</h3>
                <p>Back to main page.</p>
                <router-link to="/">Back</router-link>
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
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style src="../assets/style/pagenotfound.css" scoped> </style>
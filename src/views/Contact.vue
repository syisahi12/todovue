<template>
  <div class="landing">
    <header>
      <router-link to="/"
        ><h2 class="logo" style="text-transform: lowercase">
          inget.in
        </h2></router-link
      >
    </header>
    <div class="overlay">
      <div class="contact-section">
        <h1>Contact Us</h1>
        <div class="border"></div>
        <form class="contact-form">
          <input type="text" class="contact-form-text" placeholder="Nama" >
          <input type="email" class="contact-form-text" placeholder="Email" >
          <input type="text" class="contact-form-text" placeholder="No.telp" >
          <textarea class="contact-form-text" placeholder="Pesan"></textarea>
          <input type="submit" class="contact-form-btn" value="Kirim" >
        </form>
      </div>
    </div>
    <div class="about-section-row">
      <div class="about-section-col">
        <ul class="social">
          <li>
            <a href="#"><img src="../assets/images/facebook.png" ></a>
          </li>
          <li>
            <a href="#"><img src="../assets/images/twitter.png" ></a>
          </li>
          <li>
            <a href="#"><img src="../assets/images/instagram.png" ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style src="../assets/style/contact.css" scoped>
</style>
<script lang="ts" setup>
import PrimaryBtn from "../utils/buttons/PrimaryBtn.vue";
import SecondaryBtn from "../utils/buttons/SecondaryBtn.vue";
</script>
<template>
  <div class="home-about">
    <div class="home-about-container">
      <div class="image-container">
        <img src="../../assets//images/MyImage.jpg" alt="my-image" />
      </div>
      <div class="text-container">
        <h1 class="title">Hi I'm Mohab Mohamed</h1>
        <p class="subtitle">
          As a passionate Front-End Developer, I specialize in creating dynamic
          and responsive web applications using React.js, HTML, and CSS. With a
          keen eye for design and a commitment to user experience
        </p>
      </div>
      <div class="home-buttons">
        <a
          href="https://drive.google.com/file/d/1JW2khkxzc8zu6kL4Y49m4iQHr8RMsMJO/view?usp=drive_link"
          download
          target="_blank"
        >
          <PrimaryBtn label="Download Resume" />
        </a>

        <a href="https://www.linkedin.com/in/mohab-mohamed-a5121024b/" target="_blank">
          <SecondaryBtn label="Get in Touch" />
        </a>
      </div>
      <div class="home-compaines">
        <p class="title">Companies I worked with</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-about {
  background-image: url("../../assets/images/image.png");
}
</style>
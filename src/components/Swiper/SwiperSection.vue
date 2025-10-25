<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { computed, ref } from "vue";

const props = defineProps<{
  buttons: boolean;
  data?: any[];
  slidesNumber?: number;
  loop?: boolean;
  autoplay?: boolean;
  delay?: number;
}>();

const SwiperModuls = ref(props?.autoplay ? [Autoplay, Navigation] : []);
const SwiperAutoplay = computed(() =>
  props.autoplay
    ? { delay: props?.delay || 3000, disableOnInteraction: false }
    : false
);
</script>

<template>
  <div class="swiper-section">
    <ClientOnly>
      <Swiper
        :modules="SwiperModuls"
        :autoplay="SwiperAutoplay"
        :loop="props.loop || false"
        :breakpoints="{
          500: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: props.slidesNumber || 3, spaceBetween: 50 },
        }"
        :navigation="props.buttons || false"
      >
        <SwiperSlide v-for="(item, index) in props.data" :key="index">
          <slot :item="item" :index="index" />
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>
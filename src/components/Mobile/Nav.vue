<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const menuItems = computed(() => {
  const baseItems = [
    { text: "About", icon: "pi-book", route: "/about" },
    { text: "Home", icon: " pi-home", route: "/" },
    { text: "", icon: "", route: "/" },
    { text: "Contact", icon: "pi-megaphone", route: "/contact" },
    { text: "Projects", icon: " pi-info-circle", route: "/projects" },
  ];

  return [...baseItems];
});

const isActive = (itemRoute: string) => {
  const found = menuItems.value.some((item) => item.route === route.path);
  return found ? route.path === itemRoute : itemRoute === "/";
};

const NavVisable = ref(true);

// onMounted(() => {
//   updateNavVisibility();
// });

// watch(() => router.currentRoute.value.path, () => {
//   updateNavVisibility();
// });

// const handleLogout = () => {
//   localStorage.removeItem("auth");
//   localStorage.removeItem("user");
// };

// function updateNavVisibility() {
//   const currentPath = router.currentRoute.value.path;
//   if (currentPath.startsWith("/login") || currentPath.startsWith("/Auth")) {
//     NavVisable.value = false;
//   } else {
//     NavVisable.value = true;
//   }
// }
</script>

<template>
  <div class="navigation" :class="NavVisable == true ? '' : 'nav-visable'">
    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{ list: true, active: isActive(item.route) }"
      >
        <router-link :to="item.route">
          <span class="text">{{ item.text }}</span>
          <span class="icon">
            <i :class="`pi ${item.icon}`"></i>
          </span>
        </router-link>
        <!-- <a v-else href="#" @click.prevent="handleLogout">
          <span class="icon">
            <i :class="`pi ${item.icon}`"></i>
          </span>
          <span class="text">{{ item.text }}</span>
        </a> -->
      </li>
      <div class="indicator"></div>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  z-index: 9999;
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  box-shadow: -1px -10px 0 0 var(--primary-color);
  font-family: "Regular";

  @media (max-width: 768px) {
    display: flex;
  }
}

.nav-visable {
  display: none !important;
}

.navigation ul {
  display: flex;
  width: 350px;
}

.navigation ul li {
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
}

.navigation ul li a,
.navigation ul li .quick-search-mobile {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

.navigation ul li a .icon,
.navigation ul li .quick-search-mobile .icon {
  position: relative;
  display: block;
  line-height: 50px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  color: var(--primary-color);
}

.navigation ul li:nth-child(3) a .icon {
  line-height: 75px;
}

.navigation ul li.active a .icon {
  transform: translateY(-32px);
  color: #000;
}

.navigation ul li.active p {
  transform: translateY(-25px);
  color: #000;
  font-size: 16px;
}

.navigation ul li.active .quick-search-mobile .icon {
  transform: translateY(-32px);

  svg {
    path {
      stroke: #fff;
    }
  }
}

.navigation ul li a .text,
.navigation ul li .quick-search-mobile .text {
  position: absolute;
  color: var(--primary-color);
  font-weight: 400;
  font-size: 0.8em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 1;
  transform: translateY(20px);
}

.navigation ul li.active a .text,
.navigation ul li.active .quick-search-mobile .text {
  opacity: 1;
  transform: translateY(10px);
}

.indicator {
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 6px solid var(--primary-color);
  transition: 0.5s;
}

.indicator::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-right-radius: 20px;
  box-shadow: 1px -10px 0 0 var(--primary-color);
}

.indicator::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-left-radius: 20px;
  box-shadow: -1px -10px 0 0 var(--primary-color);
}

/* Indicator Transitions */
.navigation ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(70px * 0));
}

.navigation ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(70px * 1));
}

.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(70px * 2));
}

.navigation ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(70px * 3));
}

.navigation ul li:nth-child(5).active ~ .indicator {
  transform: translateX(calc(70px * 4));
}
</style>
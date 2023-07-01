<template>
  <theme-provider :theme="theme">
    <!-- difference in colour near middle of page due to each div creating a new gradient => gradients dont line up, fix later -->
    <div class = "div-main">
      <div id = "app">
      <Slide>
        <router-link to='/'>
          <span>Home</span>
        </router-link>
        <router-link to='About'>
          <span>About</span>
        </router-link>
        <router-link to='Contact'>
          <span>Contact</span>
        </router-link>
      </Slide>

      <card-container id="products">
          <card class = "card"
            v-for="(product, index) in products.featured" :key="index"
            v-bind:name="product.name"
            v-bind:medium="product.medium"
            v-bind:summary="product.summary"
            v-bind:copy="product.copy"
            v-bind:links="product.links"
            v-bind:images="product.images"
          />
        </card-container>
        <foot v-bind:author="author" v-bind:footer="footer" class = "footer"/>
        <light-toggle v-on:click="toggleTheme()"><span v-if="!isDark" >💡</span><span v-if="isDark">💡</span></light-toggle>
      </div>
    </div>
  </theme-provider>
</template>

<script>
import Vue from 'vue'
import styled from 'vue-styled-components'
// import Hero from './Hero.vue'
import Card from './Card2.vue'
// import MinorCard from './MinorCard.vue'
// import LogoCard from './LogoCard.vue'
import Foot from './Foot.vue'
import { ThemeProvider, injectGlobal } from 'vue-styled-components'
// import { MainTitle } from './styles/Text.ts'
import baseData from '@/data/about.ts'
import light from '@/themes/light.ts'
import dark from '@/themes/dark.ts'
//Hamburger Menu
import { Slide } from 'vue-burger-menu';


const localStore = Vue.observable({
  dark: false
})
const mutations = {
  toggleDark() {
    localStore.dark = !localStore.dark
  },
  setDark(isDark) {
    localStore.dark = isDark
  }
}

// Hack until createGlobalStyles comes to vue-styled-components
const adjustTheme = () => {
  if (localStore.dark) {
    document.documentElement.style.setProperty("--main-color", dark.color.text)
    document.documentElement.style.setProperty("--main-background-color", dark.color.background)
    document.documentElement.style.setProperty("--fallback-background-color", dark.color.fallbackBackground)
    document.documentElement.style.setProperty("--link-color", dark.color.link)
  } else {
    document.documentElement.style.setProperty("--main-color", light.color.text)
    document.documentElement.style.setProperty("--main-background-color", light.color.background)
    document.documentElement.style.setProperty("--fallback-background-color", light.color.fallbackBackground)
    document.documentElement.style.setProperty("--link-color", light.color.link)
  }
}
if (window.matchMedia) {
  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if(e.matches) {
          localStore.dark = true
        } else {
          localStore.dark = false
        }
        adjustTheme()
    })
  } catch(e) {
    console.error(e)
  }
}

const setup = () => {
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStore.dark = true
  } else {
    localStore.dark = false
  }
  adjustTheme()

  var html = document.getElementsByTagName('html')[0]
  html.style.setProperty("transition", "0.3s color, 0.3s background")
  var body = document.getElementsByTagName('body')[0]
  body.style.setProperty("transition", "0.3s color, 0.3s background")
}

injectGlobal`
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 400;
    src: url("/fonts/SFProDisplay-Regular.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 700;
    src: url("/fonts/SFProDisplay-Bold.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 300;
    src: url("/fonts/SFProDisplay-Light.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 400;
    font-style: italic;
    src: url("/fonts/SFProDisplay-RegularItalic.ttf");
  }
  html {
    font-family: 'SF Pro Display', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 18px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  body {
    margin: 0px;
  }
  html {
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
    position: relative;
  }
`

const CardContainer = styled.div`
  display: flex;
  
  margin-top: auto;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: auto;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    margin-top: -48px;
  }
`


const LightToggle = styled.button`
  border: none;
  background: transparent;
  position: sticky;
  float: right;
  bottom: 20px;
  right: 20px;
  margin-top: -40px;
  padding: 5px;
  font-size: 24px;
  text-decoration: none;
  transform: translateY(0px);
  transition: 0.3s transform ease-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    transition: 0.2s transform ease-out;
  }
`

export default {
  name: 'App',
  components: {
    Card,
    Foot,
    ThemeProvider,
    CardContainer,
    LightToggle,
    Slide
  },
  computed: {
    theme() {
      return localStore.dark ? dark : light
    },
    isDark() {
      return localStore.dark
    }
  },
  methods: {
    toggleTheme: () =>{
      mutations.toggleDark()
      adjustTheme()
    },
  },
  data: () => ({
    ...baseData,
  }),

}
setup()
</script>

<!-- <style lang="scss">
  .vnb {
    .button-red {
      background: #ff3b30;

      &:hover {
        background: darken(#ff3b30, 10%);
      }
    }
  }
</style> -->

<style>
/* Hack until createGlobalStyles comes to vue-styled-components */
 html {
  /* var(--main-background-color) creates color gradient */
  /* Ensures no white "bar" at bottom of page, white bar appears if background removed */
  background: var(--main-background-color);
  background-color: var(--fallback-background-color);
}
.footer{
  position: fixed;
   bottom: 0;
   margin-left: auto;
}
.centered{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-left: auto;
}
/* provides uniform gradient background for larger div container holding navbar and main text*/
.div-main{
  background: var(--main-background-color);
  background-color: var(--fallback-background-color); 
  margin:0;
}
.card
{
  display: flex;
  margin-top: 8%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}

body {
  color: var(--main-color);
  margin: 0;
  padding: 0;
}
.main
{
 background-color: var(--main-background-color);
 color: var(--main-background-color);
 background: var(--main-background-color);
 
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;

}
a {
  color: var(--link-color);
}
.app{
  background-color: var(--main-background-color);
  color: var(--main-background-color);
} 
.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #ffffff;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      /* background-color: rgb(63, 63, 65); Black */
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    /* .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    } */
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 25px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>
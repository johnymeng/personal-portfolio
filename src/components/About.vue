<template>
  <div id = "app" class = "no-margin">
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

      <div class = "no-margin">
        <h1 class = "no-gap">‎ </h1>

          <p>This is a Yui Fan-page</p>
          <img src="/logos/yui_yuigahama_fan_art____at_least_i_tryed____by_ren_u_dbai7i5-400t.jpg" alt = "Yui">
          <p>Look at this picture of Yui! Isn't Yui Yuigahama so pretty!</p>
          
         
            <!-- <div>
              <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="Horizontal Card">
                      <b-card-text>
                        This is a wider card with supporting text as a natural lead-in to additional content.
                        This content is a little bit longer.
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div> -->

      </div>
  </div>  
</template>



<script>
import { Slide } from 'vue-burger-menu';

export default {
  name: 'About', //this is the name of the component
  components: {
    Slide
  }
}
</script>
<style>
.app{
  text-align: center;
}
.no-gap{
  margin: 0px;
}
.no-margin{
  text-align: center;
  margin: 0px;
  background: var(--main-background-color);
  background-color: var(--fallback-background-color);
  height: 100%;
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
      background-color: #373a47;
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
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
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

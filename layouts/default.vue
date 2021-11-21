<template>
  <div class="layout" :class="{pageItem:getPageItem}">

    <header class="siteHeader">
      <h1>The daily Nasa <strong>Fun Pictures</strong></h1><br/>
      <div class="baseline">Everyday a picture from the sky</div>
    </header>
    <main>
      <Nuxt/>
    </main>
    <footer class="siteFooter"> Test pour Dernier Cri - Alexandre Bellot</footer>

  </div>
</template>

<script>

  import { ParallaxComponent,SmoothScroll } from "~/plugins/para.js";
  import { mapGetters } from 'vuex'

  export default {
    name: 'App',
    data () {
      return {
        parallax : {
          smooth       : 0.1,
          vph          : (this.$isServer) ? 0 : window.innerHeight,
          scrollPercent: 0,
          y            : 0,
          enabled      : false,
          scrollEvent  : 'apy.scroll'
        }

      }
    },
    computed : {
      ...mapGetters(['getPageItem']),
    },
    mounted () {
      window.parallax = this.parallax;
      this.$store.commit('setParallaxComponant',  new ParallaxComponent({
        'breakpoint' : window.innerWidth > 1024
      }))

      var apySmoothScroll = new SmoothScroll('main, header, footer', '.container');
      apySmoothScroll.init();
    }

  }

</script>

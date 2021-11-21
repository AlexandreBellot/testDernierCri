<template>
   <article :class="{visited:isVisited}">
     <NuxtLink :to="item.date">
        <h2 class="item-title"><span>{{ item.title }}</span></h2>
        <div class="item-content">
          <div class="item-copyright">{{ item.copyright }}</div>
          <div class="item-date">{{ item.date }}</div>
        </div>
        <div class="item-img">
          <img v-if="item.url.includes('image')" :src="item.url" />
          <iframe v-else-if="item.url.includes('youtube')"  type="text/html" width="640" height="360" :src="item.url" frameborder="0"></iframe>
        </div>
      </NuxtLink>
      <span v-if="isVisited" class="ico-visited"><font-awesome-icon :icon="['fas', 'check']"/></span>
     </article>  
</template>

<script>
  import { ParallaxMove } from "~/plugins/para.js";
  import { mapGetters } from 'vuex'
  export default {
    name: "itemList",
    props: {
      item: { type: Object, required: true }
    },
    data () {
      return {
        isVisited: false,
      }
    },
    computed : {
      ...mapGetters(['getParallaxComponant']),
    },
    watch   : {
      getParallaxComponant(val) {
        if (val.enabled) {
          this.lanchPara()
        }
      }
    },
    methods: {
        lanchPara() {
          let move  = new ParallaxMove('.item', {translateX: [-50, 50],rotationZ: [3, -3]}, [0,1])
          move.load()
        },
    },
    mounted () {
       if (this.getParallaxComponant.enabled) {
          this.lanchPara()
        }
        if (localStorage.visited) {
            this.isVisited = JSON.parse(localStorage.visited).includes(this.item.date)
        } 
    }
  }
</script>

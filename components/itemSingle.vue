<template>
    <div class="item-wrapper">
        <NuxtLink class="back-home btn-primary" to="/"><font-awesome-icon :icon="['fas', 'arrow-circle-left']"/> Back home</NuxtLink><br/>
        <h2 class="item-title">{{ item.title }}</h2>
        <div class="item-img">
            <div class="item-content">
                <div class="item-copyright">{{ item.copyright }}</div>
                <div class="item-date">{{ item.date }}</div>
            </div>
            <img v-if="item.url.includes('image')" :src="item.url" />
            <iframe v-else-if="item.url.includes('youtube')"  type="text/html" width="640" height="360" :src="item.url" frameborder="0"></iframe>
        </div>
        <div class="item-desc"><h3>Info :</h3>{{ item.explanation}}</div>
    </div>
</template>


<script>
  export default {
    name: "itemSingle",
    props: {
      item: { type: Object, required: true }
    },
    data () {
      return {
        isVisited: false,
      }
    },
    mounted () {
        if (localStorage.visited) {
            this.isVisited = JSON.parse(localStorage.visited).includes(this.item.date)
        } 
    }
  }
</script>
<template>
    <section v-if="item" class="single-picture">
      <itemSingle :item="item"/>
    </section>
    <section class="loading" v-else>
      Loading ...
    </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "singleItem",
    data () {
      return {
        picture: null,
        item: null
      }
    },
    async fetch() {
      console.log(this.getData.filter(pic => (pic.date === this.$router.currentRoute.params.item)))
      if(this.getData.length && this.getData.filter(pic => (pic.date === this.$router.currentRoute.params.item) )){
        const data = this.getData.filter(pic => (pic.date === this.$router.currentRoute.params.item))
        this.item = data[0]
      } else {
        const data = await this.$http.$get(this.getUrl(this.$router.currentRoute.params.item))
        this.item = data[0]
      }
    },
    computed : {
      ...mapGetters(['getUrl','getData'])
    },
    mounted () {
        this.$store.commit('setPageItem',true)
        if (localStorage.visited) {
            const local = JSON.parse(localStorage.visited);
            localStorage.visited = JSON.stringify([...local,this.$router.currentRoute.params.item])
        } else {
            localStorage.visited = JSON.stringify([this.$router.currentRoute.params.item]);  
        }
    }
  }
</script>


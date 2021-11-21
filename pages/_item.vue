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
      const data = await this.$http.$get(this.getUrl(this.$router.currentRoute.params.item))
      this.item = data[0]
    },
    computed : {
      ...mapGetters(['getUrl'])
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


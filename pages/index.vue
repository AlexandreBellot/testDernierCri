<template>
   <section v-if="pictures" class="list-picture">
        <itemList v-for="item in pictures" :key="item.title" class="item" :item="item"/>
    </section>
    <section class="loading" v-else>
      Loading ...
    </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    data () {
      return {
        data: [],
        pictures: null
      }
    },
    async fetch() {
      this.pictures = await this.$http.$get(this.getUrl(null))
    },
    computed : {
      ...mapGetters(['getUrl'])
    },
    mounted() {
      this.$store.commit('setPageItem',false)
    }
  }
</script>


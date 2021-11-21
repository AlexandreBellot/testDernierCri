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
      console.log(this.getData.length)
      if(this.getData.length){
        this.pictures = this.getData
      } else {
        this.pictures = await this.$http.$get(this.getUrl(null))
        this.$store.commit('setData',this.pictures)
      }
    },
    computed : {
      ...mapGetters(['getUrl','getData'])
    },
    mounted() {
      this.$store.commit('setPageItem',false)
    }
  }
</script>


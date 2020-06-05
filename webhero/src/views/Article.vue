<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-Back text-blue"></div>
      <strong class="flex-1 text-blue pl-2">
        {{model.title}}
      </strong>
      <div class="text-gery fs-xs">
        {{model.updatedAt | date}}
      </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <strong class="text-blue fs-lg ml-1">
          相关资讯
        </strong>
      </div>
      <div class="pt-2">
        <router-link
        class="py-1"
        tag="div" v-for="item in model.related" :key="item.id" :to="`/articles/${item._id}`">
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import dayis from 'dayjs'
export default {
  props: {
    id: {required: true}
  },
  filters: {
    date(val) {
      return dayis(val).format('YYYY-MM-DD')
    }
  },
  data () {
    return {
      model: null
    }
  },
  created() {
    this.fetch()
  },
  watch: {
    // id: 'fetch',简写
    id() {
      this.fetch()
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  }
}

</script>
<style lang="scss">
  .page-article {
    .icon-Back {
      font-size: 1.692308rem;
    }
    .body {
      img {
        max-width: 100%;
        height: auto;
      }
      iframe {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
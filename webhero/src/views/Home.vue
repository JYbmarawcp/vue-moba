<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/d411082d0e26beff00d039e4abdeec73.jpeg" alt="">
        </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/d6cf0acd5c7b7236d96f3f2cbcc7f39d.jpeg" alt="">
        </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/fe07c226ba6f34584dbe268c34535b6c.jpeg" alt="">
        </swiper-slide>
        <div class="swiper-pagination pagination-home text-right px-3 pb-2" 
        slot="pagination"></div>
    </swiper>
    <!-- end end end -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-items mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>

      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <!-- end of nav icons -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template v-slot:items="category">
        <router-link tag="div" :to="`/articles/${news._id}`"
        class="py-2 fs-lg d-flex" v-for="(news, i) in category.category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}] </span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipses pr-2">{{news.title}}</span>
          <span class="text-gery-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template v-slot:items="category">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <router-link tag="div" :to="`/heroes/${hero._id}`"
          class="p-2 text-center"
          style="width: 20%;"
          v-for="(hero, i) in category.category.heroList" :key="i">
            <img class="w-100" :src="hero.avatar" alt="">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template v-slot:items="category">
        <div class="py-2 fs-lg d-flex" v-for="(news, i) in category.category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}] </span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipses pr-2">{{news.title}}</span>
          <span class="text-gery-1 fs-sm">{{news.createdAt | date}}</span>
        </div>
      </template>
    </m-list-card>


  </div>
</template>

<script>
import dayis from 'dayjs'
export default {
  filters: {
    date(val) {
      return dayis(val).format('MM/DD')
    }
  },
  name: 'home',
  data() {
    return {
      swiperOptions: {
        autoplay: {delay: 2000},
        loop: true,
        pagination: {
          el: '.pagination-home'
        },
        // Some Swiper option/callback...
      },

      newsCats: [],
      heroCats: []
    }
  },
  created() {
    this.fetchNewsCats(),
    this.fetchHeroCats()
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
.pagination-home {
  .swiper-pagination-bullet {
    opacity: .9;
    border-radius: .153846rem;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-items {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n+1) {
      border-left: none;
    }
  }
}
</style>
<template>
  <v-container>
    <v-main>
      <v-subheader>Posts</v-subheader>
      <v-list>
        <v-hover v-for="(item,cursor) in getPosts" :key="cursor">
          <v-list-item slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
          >
            <v-list-item-avatar>
                <v-img :src="`https://avatars.githubusercontent.com/u/${item.userId}`" />
              </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
              <v-list-item-subtitle v-if="false">Subtitle</v-list-item-subtitle>
            </v-list-item-content>
            <v-btn>
              <nuxt-link :to="`/posts/${item.id}`" prefetch>
                Read more...
              </nuxt-link>
            </v-btn>
          </v-list-item>
        </v-hover>
        <v-divider />
      </v-list>
    </v-main>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  
  async asyncData({store, $axios}) {
    const result = await $axios.$get('https://jsonplaceholder.typicode.com/posts');
    store.commit('setPosts', result);
  },
  components: {

  },
  computed: {
    ...mapGetters(["getPosts"]),
  }
}
</script>

<style scoped>
  .v-list-item {
    transition: opacity .4s ease-in-out;
  }
  .v-list-item:not(.on-hover) {
    opacity: 0.9;
  }
</style>
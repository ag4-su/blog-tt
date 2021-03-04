<template>
  <v-container>
    <v-main>
      <v-list-item >
        <span class="title font-weight-light">Post #{{getCurrentPostData.id}}</span>
        <v-spacer></v-spacer>
        <span class="title font-weight-light"><nuxt-link to="/">Posts list</nuxt-link></span>
      </v-list-item>
      <v-card
        class="mx-auto"
      >
        <v-card-title class="justify-center">
          <span class="title font-weight-light"> {{getCurrentPostData.title}}</span>
        </v-card-title>

        <v-card-text class="font-weight-bold text-pre-wrap ml-8">{{getCurrentPostData.body}}</v-card-text>

        <v-list-item>
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              :src="`https://avatars.githubusercontent.com/u/${getCurrentPostData.userId}`"
            ></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>{{getCurrentUserData.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>

      <v-subheader>Comments {{getCurrentCommentsData.length}}</v-subheader>
        <v-list>
          <v-list-item class="mt-1 mx-auto" v-for="(item, cursor) in getCurrentCommentsData" :key="cursor">
            <v-avatar></v-avatar>
            <v-card
              elevation="2"
              outlined
              shaped
            >
              <v-card-title>
                <span class="subtitle-1">{{item.name}}</span>
              </v-card-title>
              <v-card-text>{{item.body}}</v-card-text>
              <v-card-actions > 
                <span class="caption">{{item.email}}</span>
                <v-spacer></v-spacer>
                <span class="caption">#{{item.id}}</span>
              </v-card-actions>
            </v-card>
          </v-list-item>
        </v-list>
    </v-main>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    async asyncData({store, $axios, params}) {
        const postData = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id);
        const commentData = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id + '/comments');
        const userData = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + postData.userId);
        store.commit('setCurrentPostData', postData);
        store.commit('setCurrentCommentsData', commentData);
        store.commit('setCurrentUserData', userData);
    },
    computed: {
      ...mapGetters(["getCurrentPostData", "getCurrentCommentsData", "getCurrentUserData"]),
    }
}
</script>


<template>
  <div class="articles-Area">
    <article-meta
      v-for="(element, ind) in articles"
      :article="element"
      :key="ind"
      class="article"
    />
  </div>
</template>

<script>
import articleMeta from "./articleMeta.vue";
export default {
  props: {
    articles: Array,
  },
  components: {
    articleMeta,
  },
};
</script>
articleMeta
<style scoped>
.articles-Area {
  overflow-y: scroll;
  height: 90%;
}
.articles-Area::-webkit-scrollbar {
  background: rgba(255, 255, 255, 0.096);
  width: 0.5em;
}
.articles-Area::-webkit-scrollbar-thumb {
  background: rgba(31, 29, 29, 0.692);
  border-radius: 5px;
}
</style>

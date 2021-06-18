<template>
  <div class="tab-content">
    <articles-list :articles="articles" />
    <add-article-form @addArticle="addItem($event)" />
  </div>
</template>

<script>
import articlesList from "./articlesList.vue";
import addArticleForm from "./addArticleForm.vue";

export default {
  props: {
    articles: {
      require: true,
      type: Array,
    },
  },
  emits: ["addArticle"],
  methods: {
    addItem(ev) {
      this.$emit("addArticle", ev);
    },
  },
  components: {
    articlesList,
    addArticleForm,
  },
};
</script>

<style></style>

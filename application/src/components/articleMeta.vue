<template>
  <div>
    <img :src="article.image" alt="" />
    <div class="article-content">
      <h2>{{ article.header }}</h2>
      <div class="article-info">
        <div class="article-date-add">добавлено: {{ article.addDate }}</div>
        <div class="article-source">источник:{{ article.src }}</div>
      </div>
      <h3>
        {{ article.text }}
      </h3>
      <div class="article-tags">
        <div class="tag" v-for="tag in article.tags" :key="tag">
          {{ tag }}
        </div>
      </div>
      <div class="button-group">
        <button class="add-in-read ">
          {{ article.read ? "Прочитано" : "Отметить как прочитанное" }}
        </button>
        <a :href="article.src"><button class="go-to-source">Перейти</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      require: true,
    },
  },
};
</script>

<style scoped>
.article-tags {
  display: flex;
  gap: 0 10px;
  text-align:middle;
}
</style>

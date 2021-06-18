<template>
  <div class="application">
    <div class="nav-bar">
      <h1>Список для чтения</h1>
      <div class="nav-setting">
        <span
          class="iconify"
          data-inline="false"
          data-icon="zmdi:settings"
          style="color: #ffffff; font-size: 28px;"
        ></span>
      </div>
    </div>
    <div class="tab">
      <header>
        <div class="tab-header-element">Все</div>
        <div class="tab-header-element focus">Актуальное</div>
        <div class="tab-header-element">Прочитаное</div>
      </header>
      <div class="tab-body">
        <div class="tab-filter">
          <div class="tab-filter-section">
            <h2>Раздел</h2>
            <div class="section-elelments">
              <div
                v-for="(item, ind) in section"
                :key="ind"
                class="tab-filter-section-elelment"
              >
                {{ item }}
              </div>
              <div class="tab-filter-section-elelment tab-filter-section-add">
                +
              </div>
            </div>
          </div>
          <div class="tab-filter-category">
            <h3>Категория</h3>
            <div class="category-elements">
              <div
                v-for="(item, ind) in category"
                :key="ind"
                class="tab-filter-category-element"
              >
                {{ item }}
              </div>
              <div class="tab-filter-category-element tab-filter-category-add">
                +
              </div>
            </div>
          </div>
        </div>
        <content-component @addArticle="addItem($event)" :articles="allArray" />
      </div>
    </div>
  </div>
</template>

<script>
import { getMetaFromURl, getArticles } from "./api.js";
import contentComponent from "./components/contentComponent.vue";
export default {
  // name: "reading-list",
  data() {
    return {
      allArray: [],
      section: ["web", "JS", "frontend", "clear code"],
      category: ["дизайн", "ai", "vue.js"],
    };
  },
  components: {
    contentComponent,
  },
  async mounted() {
    this.allArray = await getArticles();
  },
  methods: {
    addItem(ev) {
      this.allArray.push({
        image: ev,
        header: "null",
        tags: [],
        read: false,
      });
      // this.allArray.push({
      //   image: this.text,
      //   addDate: new Date().toLocaleDateString(),
      // });
      getMetaFromURl(ev);
    },
  },
};
</script>

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
                                @click="check(ind)"
                                :class="{ activeCheck: !item.state }"
                            >
                                {{ item.name }}
                            </div>
                            <div
                                class="tab-filter-section-elelment tab-filter-section-add"
                            >
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
                            <div
                                class="tab-filter-category-element tab-filter-category-add"
                            >
                                +
                            </div>
                        </div>
                    </div>
                </div>
                <content-component
                    @addArticle="addItem($event)"
                    :articles="filteredArticles"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { getMetaFromURl, getArticles } from './api.js'
import contentComponent from './components/contentComponent.vue'
export default {
    // name: "reading-list",
    data() {
        return {
            allArray: [],
            section: [
                { name: 'web', state: false },
                { name: 'JS', state: false },
                { name: 'frontend', state: false },
                { name: 'clear code', state: false }
            ],
            category: ['дизайн', 'ai', 'vue.js']
        }
    },
    components: {
        contentComponent
    },
    async mounted() {
        this.allArray = await getArticles()
    },
    methods: {
        async addItem(ev) {
            this.allArray.push({})
            const endItemIndex = this.allArray.length - 1
            const metaData = await getMetaFromURl(ev)
            if (Object.keys(metaData).length !== 0) {
                this.allArray[endItemIndex] = {
                    image: metaData.image?.url,
                    header: metaData.title,
                    tags: [],
                    read: false,
                    text: metaData.description
                }
                return
            }
            this.allArray[endItemIndex].pop()
        },
        check(index) {
            this.section[index].state = !this.section[index].state
        }
    },
    computed: {
        filteredArticles: function() {
            return this.allArray.filter(el =>
                el.tags.some(el => this.getSectionFilter.includes(el))
            )
        },
        getSectionFilter: function() {
            return this.section.filter(el => el.state).map(el => el.name)
        }
    }
}
</script>

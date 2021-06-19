<template>
  <div class="tab-form">
    <textarea
      type="text"
      @keydown.enter="addItem"
      name="inputURL"
      placeholder="укажите сслыку"
      id="addItem"
      v-model="text"
      rows="auto"
    ></textarea>
    <button type="button" @keydown.enter="addItem" @click="addItem">=></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  emits: ["addArticle"],
  methods: {
    addItem() {
      this.$emit("addArticle", this.text.trim());
      this.text ="";
      this.text =this.text.trim();
    },
  },
};
</script>

<style scoped>
#addItem {
  width: 80%;
  height: fit-content;
}
</style>

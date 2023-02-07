<template>
  <div class="wrap">
    <div class="container">
      <h2 class="title">todoList</h2>
      <div class="head">
        <el-input v-model="title"></el-input>
        <el-button class="addBtn" @click="addTodo" type="primary"><img class="img" src="./assets/add.png" /></el-button>
      </div>
      <div v-for="(item, index) in listData">
        <ListItem class="list" v-model="listData[index]" @on-delete="handleDelte(index)">
        </ListItem>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ElInput, ElButton } from "element-plus";
import ListItem from "./components/ListItem.vue";

const listData = ref<{ text: string, isCheck: boolean }[]>([]);
const title = ref("");

const addTodo = () => {
  title.value && listData.value.push({ text: title.value, isCheck: false });
};

const handleDelte = (index: number) => {
  listData.value.splice(index, 1);
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  padding: 10vh 0;
  display: grid;
  align-items: start;
  justify-items: center;
  background: rgb(216, 223, 255);
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 24px;
  background-color: rgb(245, 246, 252);
  border-radius: 24px;
  padding: 48px 28px;
}

.img {
  color: white;
  width: 20px;
  height: 20px;
}

.head {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  .addBtn {
    margin-left: 16px;
    margin-right: 8px;
  }
}
</style>

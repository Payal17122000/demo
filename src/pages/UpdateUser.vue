<template>
  <div><UpSert :user="user.data" />{{ user }}</div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import UpSert from "@/components/UpSert.vue";
import axios from "axios";
import { useRoute } from "vue-router";

const id = useRoute().params;
console.log(id);

let user = ref();
onBeforeMount(() => {
  console.log(user.value);
  getUser();
});

const getUser = () => {
  axios.get(`http://localhost:5000/users/${id.id}`).then((res) => {
    user.value = res;

    return res;
  });
};
</script>

<style></style>

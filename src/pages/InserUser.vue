<template>
  <div><UpSert :user="user" /></div>
</template>

<script setup>
import { ref } from "vue";
import UpSert from "@/components/UpSert.vue";
let user = ref({
  id: 0,
  email: "",
  username: "",
  password: "",
  name: {
    firstname: "",
    lastname: "",
  },
  address: {
    city: "",
    street: "",
    number: 0,
    zipcode: "",
    geolocation: {
      lat: 0,
      long: 0,
    },
  },
  phone: "",
});
console.log(user.value);
</script>

<style></style>

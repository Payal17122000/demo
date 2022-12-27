<template>
  <div>
    id:{{ user.data.id }}<br /><br />
    email:{{ user.data.email }}<br /><br />
    username:{{ user.data.username }}<br /><br />
    password:{{ user.data.password }}<br /><br />
    name:<br /><br />
    firstname:{{ user.data.name.firstname }}<br /><br />
    lastname:{{ user.data.name.lastname }}<br /><br />
    address:<br /><br />
    city:{{ user.data.address.city }}<br /><br />
    street:{{ user.data.address.street }}<br /><br />
    number:{{ user.data.address.number }}<br /><br />
    zipcode:{{ user.data.address.zipcode }}<br /><br />
    geolocation:<br /><br />
    latitude:{{ user.data.address.geolocation.lat }}<br /><br />
    longitude:{{ user.data.address.geolocation.long }}<br /><br />
    phone number:{{ user.data.phone }}<br /><br />
    <button @click="$router.push(`/users/${user.data.id}/edit`)">Edit</button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
// import { useRoute } from "vue-router";
const id = useRoute().params;
console.log(id);

let user = ref();

// const route = useRoute();

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

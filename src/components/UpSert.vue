<template>
  <div>
    id:<input type="textbox" v-model="user.id" disabled /><br /><br />
    email:<input type="textbox" v-model="user.email" /><br /><br />
    username:<input type="textbox" v-model="user.username" /><br /><br />
    password:<input type="textbox" v-model="user.password" /><br /><br />
    name:<br /><br />
    firstname:<input type="textbox" v-model="user.name.firstname" /><br /><br />
    lastname:<input type="textbox" v-model="user.name.lastname" /><br /><br />
    address:<br /><br />
    city:<input type="textbox" v-model="user.address.city" /><br /><br />
    street:<input type="textbox" v-model="user.address.street" /><br /><br />
    number:<input type="textbox" v-model="user.address.number" /><br /><br />
    zipcode:<input type="textbox" v-model="user.address.zipcode" /><br /><br />
    geolocation:<br /><br />
    latitude:<input
      type="textbox"
      v-model="user.address.geolocation.lat"
    /><br /><br />
    longitude:<input
      type="textbox"
      v-model="user.address.geolocation.long"
    /><br /><br />
    phone number:<input type="textbox" v-model="user.phone" /><br /><br />
    <button @click="Done">Submit</button>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
const id = useRoute().params;
const router = useRouter();
const props = defineProps(["user"]);
console.log(props.user);

let user = ref({
  id: props.user.id,
  email: props.user.email,
  username: props.user.username,
  password: props.user.password,
  name: {
    firstname: props.user.name.firstname,
    lastname: props.user.name.lastname,
  },
  address: {
    city: props.user.address.city,
    street: props.user.address.street,
    number: props.user.address.number,
    zipcode: props.user.address.zipcode,
    geolocation: {
      lat: props.user.address.geolocation.lat,
      long: props.user.address.geolocation.long,
    },
  },
  phone: props.user.phone,
});

const Done = async () => {
  if (id.id == undefined) {
    console.log("hii", user.value);
    await axios.post("http://localhost:5000/users", user.value);
    router.push("/users");
  } else {
    console.log("hii", user.value);
    await axios.put(`http://localhost:5000/users/${id.id}`, user.value);
    router.push("/users");
  }
};
</script>

<template>
  <div>
    id:{{ getUser.id }}<br /><br />
    email:{{ getUser.email }}<br /><br />
    username:{{ getUser.username }}<br /><br />
    password:{{ getUser.password }}<br /><br />
    name:<br /><br />
    firstname:{{ getUser.name.firstname }}<br /><br />
    lastname:{{ getUser.name.lastname }}<br /><br />
    address:<br /><br />
    city:{{ getUser.address.city }}<br /><br />
    street:{{ getUser.address.street }}<br /><br />
    number:{{ getUser.address.number }}<br /><br />
    zipcode:{{ getUser.address.zipcode }}<br /><br />
    geolocation:<br /><br />
    latitude:{{ getUser.address.geolocation.lat }}<br /><br />
    longitude:{{ getUser.address.geolocation.long }}<br /><br />
    phone number:{{ getUser.phone }}<br /><br />
    <button
      class="btn btn-success"
      @click="$router.push(`/users/${getUser.id}/edit`)"
    >
      Edit
    </button>
  </div>
</template>

<script setup>
import { onBeforeMount, computed } from "vue";
import { useUserStore } from "../store/users";
import { useRoute } from "vue-router";

const id = useRoute().params.id;

const store = useUserStore();

const getUser = computed(() => {
  return store.getUser;
});

onBeforeMount(() => {
  store.fetchUser(id);
});
</script>

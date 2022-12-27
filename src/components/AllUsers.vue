<template>
  <div>
    <table>
      <tr>
        <td rowspan="2">id</td>
        <td rowspan="2">email</td>
        <td rowspan="2">username</td>
        <td rowspan="2">password</td>
        <td colspan="2">name</td>
        <td colspan="4">address</td>
        <td colspan="2">geolocation</td>
        <td rowspan="2">phone</td>
        <td rowspan="2">View</td>
        <td rowspan="2">Update</td>
        <td rowspan="2">Delete</td>
      </tr>
      <tr>
        <td>firstname</td>
        <td>lastname</td>
        <td>city</td>
        <td>street</td>
        <td>number</td>
        <td>zipcode</td>
        <td>latitude</td>
        <td>longitude</td>
      </tr>
      <tr v-for="u in users.data" :key="u.id">
        <td>{{ u.id }}</td>
        <td>{{ u.email }}</td>
        <td>{{ u.username }}</td>
        <td>{{ u.password }}</td>
        <td>{{ u.name.firstname }}</td>
        <td>{{ u.name.lastname }}</td>
        <td>{{ u.address.city }}</td>
        <td>{{ u.address.street }}</td>
        <td>{{ u.address.number }}</td>
        <td>{{ u.address.zipcode }}</td>
        <td>{{ u.address.geolocation.long }}</td>
        <td>{{ u.address.geolocation.lat }}</td>
        <td>{{ u.phone }}</td>
        <td @click="$router.push(`/users/${u.id}`)" style="cursor: pointer">
          View
        </td>
        <td
          @click="$router.push(`/users/${u.id}/edit`)"
          style="cursor: pointer"
        >
          Update
        </td>
        <td @click="deleteUser(u.id)" style="cursor: pointer">Delete</td>
      </tr>
    </table>
    <button class="add-button" @click="$router.push(`/users/add`)">
      Add New User
    </button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
// import { useRoute } from "vue-router";

let users = ref();

// const route = useRoute();

onBeforeMount(() => {
  console.log(users.value);
  getUsers();
});

const getUsers = () => {
  axios.get(`http://localhost:5000/users`).then((res) => {
    users.value = res;

    return res;
  });
};

const deleteUser = async (id) => {
  await axios.delete(`http://localhost:5000/users/${id}`);
  location.reload();
};
</script>

<style>
tr,
td,
th {
  border: 1px solid black;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
}

.add-button {
  margin-top: 30px;
  height: 40px;
  width: 200px;
}
</style>

<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th rowspan="2" scope="col">id</th>
          <th rowspan="2" scope="col">email</th>
          <th rowspan="2" scope="col">username</th>
          <th rowspan="2" scope="col">password</th>
          <th colspan="2" scope="col">name</th>
          <th colspan="4" scope="col">address</th>
          <th colspan="2" scope="col">geolocation</th>
          <th rowspan="2" scope="col">phone</th>
          <th rowspan="2" scope="col">View</th>
          <th rowspan="2" scope="col">Update</th>
          <th rowspan="2" scope="col">Delete</th>
        </tr>
        <tr>
          <th scope="col">firstname</th>
          <th scope="col">lastname</th>
          <th scope="col">city</th>
          <th scope="col">street</th>
          <th scope="col">number</th>
          <th scope="col">zipcode</th>
          <th scope="col">latitude</th>
          <th scope="col">longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in getUsers" :key="u.id">
          <th scope="row">{{ u.id }}</th>
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
          <td @click="$router.push(`/users/${u.id}`)" class="links">View</td>
          <td @click="$router.push(`/users/${u.id}/edit`)" class="links">
            Update
          </td>
          <td @click="deleteUser(u.id)" class="links">Delete</td>
        </tr>
      </tbody>
    </table>
    <button
      class="btn btn-success add-button"
      @click="$router.push(`/users/add`)"
    >
      Add New User
    </button>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useUserStore } from "../store/users";

const store = useUserStore();

const getUsers = computed(() => {
  return store.getUsers;
});

onMounted(() => {
  setTimeout(store.fetchUsers, 50);
});

const deleteUser = async (id) => {
  store.deleteUser(id);
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

.links:hover {
  color: blue !important;
  cursor: pointer;
}
</style>

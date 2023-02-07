import { createRouter, createWebHistory } from "vue-router";
import AllUsers from "@/components/AllUsers.vue";
import ViewUsers from "@/components/ViewUser.vue";
import InserUser from "@/pages/InserUser.vue";
import UpdateUser from "@/pages/UpdateUser.vue";
import RootPath from "@/components/RootPath.vue";

const routes = [
  {
    path:"/",
    component: RootPath,
    name:"root",
  },
  {
    path: "/users",
    component: AllUsers,
    name: "users",
  },
  {
    path: "/users/:id",
    component: ViewUsers,
    name: "view",
  },
  {
    path: "/users/:id/edit",
    component: UpdateUser,
    name: "update",
  },
  {
    path: "/users/add",
    component: InserUser,
    name: "insert",
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;

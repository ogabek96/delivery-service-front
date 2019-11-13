import router from "./router";
import store from "./store";
import { getToken } from "./utils/token";
const whiteList = ["/login", "/auth-redirect"];

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else if (to.path === "/") {
      return store.dispatch("GetUserInfo").then(user => {
        if (user.roleCode === "SUPER_ADMIN") {
          next({ path: "/orders" });
        } else {
          next({ path: "orders/available" });
        }
      });
    } else {
      return store.dispatch("GetUserInfo").then(() => {
        next();
      });
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

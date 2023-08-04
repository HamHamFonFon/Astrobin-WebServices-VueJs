// source: https://codesandbox.io/p/sandbox/github/yangjiakai/lux-admin-vuetify3/tree/main
// https://codesandbox.io/p/sandbox/vuetify-8hq5v5?file=%2Fsrc%2Fconfigs%2Findex.ts%3A1%2C1
import menuDashboard from "@/configs/menu/menuDashboard";
import menuPages from "@/configs/menu/menuPages";

export default {
    menu: [
        {
            text: "",
            items: menuDashboard
        },
        {
            text: "Pages",
            items: menuPages
        }
    ]
}
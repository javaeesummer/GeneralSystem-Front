<template>
    <div class="d2-layout-main-menu-side">
        <el-menu :collapse="collapse" :unique-opened="true" :default-active="active" ref="menu" @select="handleMenuSelect">
            <template v-for="(menu, menuIndex) in menus">
                <d2-layout-main-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex" />
                <d2-layout-main-menu-sub v-else :menu="menu" :key="menuIndex" />
            </template>
        </el-menu>
        <div v-if="menus.length === 0 && !collapse" class="menu-empty">
            <d2-icon name="hdd-o" />
            <span>当前目录没有菜单</span>
        </div>
    </div>
</template>

<script>
import { side } from "@/menu/index.js";
import menuMixin from "../mixin/menu";
// 组件
import d2LayoutMainMenuItem from "../-menu-item/index.vue";
import d2LayoutMainMenuSub from "../-menu-sub/index.vue";
// 插件
import BScroll from "better-scroll";
import Vue from "vue";

export default {
    name: "d2-layout-main-menu-side",
    mixins: [menuMixin],
    components: {
        "d2-layout-main-menu-item": d2LayoutMainMenuItem,
        "d2-layout-main-menu-sub": d2LayoutMainMenuSub
    },
    props: {
        collapse: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            menus: [],
            active: "",
            asideHeight: 300,
            BS: null
        };
    },
    watch: {
        // 折叠和展开菜单的时候销毁 better scroll
        collapse(val) {
            this.scrollDestroy();
            setTimeout(() => {
                this.scrollInit();
            }, 500);
        },
        "$route.matched": {
            handler(val) {
                var path = val[0].path;
                var _side = side.filter(menu => menu.path === path);

                if (val[0].name === "activity") {
                    let activityId = this.getParam(
                        window.location.href,
                        "activityId"
                    );
                    path = val[0].path;
                    let signIndex = path.indexOf("=");
                    path = path.slice(0, signIndex);
                    signIndex = path.indexOf("/");
                    path = path.slice(signIndex);

                    _side = side.filter(menu => {
                        return menu.path.indexOf(path) >= 0;
                    });

                    if (_side.length > 0) {
                        _side[0] = this.generateDynamicPath(
                            _side[0],
                            "activityId",
                            activityId
                        );
                    }
                }

                this.menus = _side.length > 0 ? _side[0].children : [];
                this.active = val[val.length - 1].path;
                this.$nextTick(() => {
                    if (this.menus.length > 0) {
                        this.$refs.menu.activeIndex = this.active;
                     
                    }
                });
            },
            immediate: true
        },
        menus(){
            console.log("menus",this.menus);
        }
    },
    mounted() {
        this.scrollInit();
    },
    beforeDestroy() {
        this.scrollDestroy();
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        scrollInit() {
            this.BS = new BScroll(this.$el, {
                mouseWheel: true,
                scrollbar: {
                    fade: true,
                    interactive: false
                }
            });
        },
        scrollDestroy() {
            if (this.BS) {
                this.BS.destroy();
            }
        },
        getParam(string, name) {
            var start = string.indexOf("activityId");
            var midle = string.indexOf("=", start);
            var end = string.indexOf("/", midle);
            return string.slice(midle + 1, end);
        },
        generateDynamicPath(routeObject, oldVal, newVal) {
            let signIndex = routeObject.path.indexOf("/");
            routeObject.path = routeObject.path.slice(signIndex);
            var startIndex = routeObject.path.indexOf(oldVal) + oldVal.length;
            var endIndex = routeObject.path.indexOf("/", startIndex);
            oldVal = routeObject.path.slice(startIndex, endIndex + 1);

            routeObject.path = routeObject.path.replace(oldVal, newVal);

            if (routeObject.children.length > 0) {
                routeObject.children.forEach(element => {
                    let title = element.title;
                    if (title === "活动信息") {
                        element.path = "index";
                    } else if (title === "评委管理") {
                        element.path = "judge";
                    } else if (title === "作品管理") {
                        element.path = "work";
                    }else if (title === "参赛者管理") {
                        element.path = "accept";
                    }
                });
            }
            return routeObject;
        }
    }
};
</script>

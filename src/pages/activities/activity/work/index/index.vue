<template>
    <d2-container type="full">
        <template slot="header">作品管理</template>

        <button @click="toOneWork"> 1</button>
    </d2-container>
</template>

<script>
export default {
    methods: {
        toOneWork() {
            this.$router.push({
                name: "activity-onework",
                params: { workId: 123 }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
</style>


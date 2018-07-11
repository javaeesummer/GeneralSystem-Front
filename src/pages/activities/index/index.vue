<template>
    <d2-container type="full">
        <d2-demo-page-cover>
            <router-link :to="{ name: 'activity', params: { activityId: 123 }}">
                <el-button type="primary">主要按钮</el-button>
            </router-link>
            <p>这是活动管理</p>
        </d2-demo-page-cover>
    </d2-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>



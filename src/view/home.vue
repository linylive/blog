<template>
    <el-container>
        <el-header height="40px" class="nav-header">
            <div class=""></div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                aside
            </el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .nav-header {
        background: rgba(40,42,44,.6);

    }
</style>
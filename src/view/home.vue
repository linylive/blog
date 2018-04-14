<template>
    <el-container>
        <el-header>
            <div class="nav-bar">

            </div>
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
        name: "home"
    }
</script>

<style scoped>
    .nav-bar {
        width: 100%;
        height: 5px;
    }
</style>
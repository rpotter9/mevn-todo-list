<template>
    <b-navbar class="is-primary">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <div>
                <img alt="Vue logo" src="@/assets/logo.png">
            </div>
                Todo List
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ name: 'Tasks'}">
                Tasks
            </b-navbar-item>  
        </template>

        <template slot="end">
         <!--   <b-navbar-item tag="div">
                <div class="buttons">
<a class="button is-primary">
    <strong>Sign up</strong>
</a>
<a class="button is-light">
    Log in
</a>
                </div>
            </b-navbar-item>-->
        </template>
    </b-navbar>

</template>

<style lang="scss">
.navbar-brand {
    margin-left: 0 !important
}
</style>
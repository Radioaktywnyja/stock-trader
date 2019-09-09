<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/" exact="true">Stock Trader</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/portfolio" class="mx-2">Portfolio</b-nav-item>
                <b-nav-item to="/stocks" class="mx-2">Stocks</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item class="mx-2">End Day</b-nav-item>
                <b-nav-item-dropdown text="Save & Load" class="mx-2" right>
                    <b-dropdown-item>Save Data</b-dropdown-item>
                    <b-dropdown-item>Load Data</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item class="mx-2">Funds:$10.000</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
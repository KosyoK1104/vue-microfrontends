<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/app-one">App one</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/app-two">App two</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style>
.navbar{
  border: 1px solid orangered;
  position:relative;
}

.navbar:before{
  content: 'Navbar';
  position: absolute;
  top: 0;
  left: 0;
  color: orangered;
  font-size: 11px;
}
</style>

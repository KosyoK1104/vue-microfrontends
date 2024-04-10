<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <span class="nav-link active" aria-current="page" @click="navigateTo('/app-one')">Home</span>
          </li>
          <li class="nav-item">
            <span class="nav-link active" aria-current="page">Home</span>
          </li>
          <li class="nav-item">
            <span class="nav-link active" aria-current="page">Home</span>
          </li>
          <li class="nav-item">
            <span class="nav-link active" aria-current="page">Home</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {navigateTo} from "@kkostadinov/root-config";

</script>

<style>
</style>

<template>
  <div>
    <header class="header">
      <h1 class="header__title">Kookcalc</h1>
    </header>
    <ul class="foods">
      <li class="foods__item" v-for="food in foods">
        <food v-bind:food="food"></food>
      </li>
    </ul>
  <div>
</template>

<script>
import { mapGetters } from 'vuex';
import Food from './food.vue';
import '../styles/base.scss';
import '../styles/header.scss';
import '../styles/foods.scss';

export default {
  name: 'app',
  computed: mapGetters([
    'foods',
  ]),
  components: { Food }
};
</script>

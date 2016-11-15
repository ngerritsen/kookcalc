<template>
  <form class="food">
    <h2 class="food__title">{{ food.name }}</h2>
    <div class="food__input-container">
      <input class="food__weight-input" type="number" name="weight" placeholder="Weight" v-model="weight">
      <select class="food__pan-select" name="pan" v-model="weight">
        <option value="100">Small</option>
        <option value="200">Small</option>
        <option value="300">Small</option>
      </select>
    </div>
  </form>
</template>

<script>
import '../styles/food.scss';

export default {
  name: 'food',
  props: ['food']
};
</script>

import riot from 'riot';
import FoodStore from './food-store';
import RiotControl from 'riotcontrol';
import app from './app';

let foodStore = new FoodStore();
RiotControl.addStore(foodStore);
riot.mount('app');
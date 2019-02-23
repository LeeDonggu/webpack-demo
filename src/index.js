// var _ = require('lodash'); // ES5
import _ from 'lodash'; //  ES6
import './style.css';
import './hello.scss';
import {area, circumference} from './js/circle';

import cube from './js/cube';


function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('webpack dev server is running');

console.log(area(5), circumference(5));

console.log(cube(10));


// Created by: Mark Palfi
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {

document.getElementById('area').innerHTML = '<p>area = ' + (6 + 5) + '</p>'
  document.getElementById('perimeter').innerHTML = '<p>perimeter =  ' + ((5 + 3) * 2) + '</p>'
  document.getElementById('multiply-math').innerHTML = '<p>3 + 4 × 2 = ' + (3 + 4 * 2) + '</p>'
  document.getElementById('divide-math').innerHTML = '<p>(4 ÷ 2) + 3 = ' + ((4 / 2) + 3) + '</p>'
  document.getElementById('exponent-math').innerHTML = '<p>5 + 2³ = ' + (5 + 2 ** 3) + '</p>'
}
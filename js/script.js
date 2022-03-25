// Created by: Mark Palfi
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  // input
  const street_name = document.getElementById("hours").value
  const street_number = parseInt(document.getElementById("salary").value)

  // math
    document.getElementById('pay').innerHTML = '<p>pay = ' + ("hours" * "salary") * (1.00 - 0.18) + '</p>'
  document.getElementById('taxes').innerHTML = '<p>taxes =  ' + ("hours" * "salary") * (0.18)) + '</p>'    
  // output
  document.getElementById("address").innerHTML =
    "You live on: " + street_name + ", house " + street_number + "."
}

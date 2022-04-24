// Created by: Mark Palfi
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function doMathClicked() {
  const TAX_RATE = 0.18
    
  // input
  const hoursWorked = document.getElementById("hours").value
  const salaryPayed = parseInt(document.getElementById("salary").value)

  // process
  const payOfUser = (hoursWorked * salaryPayed) * (1.00 - TAX_RATE)
  const taxesPayed = (hoursWorked * salaryPayed) * (TAX_RATE)
 
  // output
  document.getElementById('pay').innerHTML = "<p>pay = $" + payOfUser.toFixed(2) + "</p>"
  document.getElementById('taxes').innerHTML = "<p>taxes = $" + taxesPayed.toFixed(2) + "</p>"   
  document.getElementById("address").innerHTML =
    "Your salary is: $" + payOfUser.toFixed(2) + ", you're taxes are $" + taxesPayed.toFixed(2) + "."
}

/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Cedric
 * Created on: Oct 2023
 * This program ...
*/

// variable
 let randomNumber: number = -1
  randomNumber = -1
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function() {
  randomNumber = randint(0, 2)
  basic.clearScreen()
})
  // if randomNumber was 0 
  if (randomNumber == 0) {
  basic.showIcon(IconNames.Scissors)
  }

  // if randomNumber was 1 
  
if (randomNumber == 1) {
basic.showLeds(`
# # # # #
# . . . #
# . . . #
# . . . #
# # # # #
`)
}

// if randomNumber was 2 

if (randomNumber == 2) {
basic.showLeds(`
. . . . .
. # # # .
. # # # .
. # # # .
. . . . .
`)

  // pause and show you are ready again
  basic.pause(1000)
  basic.showIcon(IconNames.Happy)
} 

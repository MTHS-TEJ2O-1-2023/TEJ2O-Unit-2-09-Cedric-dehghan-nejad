/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Cedric
 * Created on: Oct 2023
 * This program ...
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variable
let randomNumber: number = -1
  let scoreboard: number = 0

// increase scoreboard
input.onButtonPressed(Button.A, function () {
 scoreboard = scoreboard + 1
 basic.showIcon(IconNames.Yes)
})

//show scoreboard
input.onButtonPressed(Button.B, function () {
basic.showNumber(scoreboard)
})

input.onGesture(Gesture.Shake, function () {
  randomNumber = randint(0, 2)
  basic.clearScreen()
// if randomNumber was 0
  if (randomNumber == 0) {
  basic.showIcon(IconNames.Scissors)
 }

  // if randomNumber was 1 

 if (randomNumber == 1) {
  basic.showLeds(`
  . . . . .
  . # # # .
  . # # # .
  . # # # .
  . . . . .
  `)
 }

 // if randomNumber was 2
  if (randomNumber == 2) {
basic.showLeds(`
# # # # #
# . . . #
# . . . #
# . . . #
# # # # #
`)
  }
  // pause and show you are ready again
  basic.pause(5000)
  basic.showIcon(IconNames.Happy)
})

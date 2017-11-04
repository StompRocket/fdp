var chalk       = require('chalk')
var clear       = require('clear')
var CLI         = require('clui')
var figlet      = require('figlet')
var inquirer    = require('inquirer')
var Preferences = require('preferences')
var Spinner     = CLI.Spinner
var fs          = require('fs')

clear()
console.log(
  chalk.yellow(
    figlet.textSync('FDP', {horizontalLayout: "full"}),
    "Fairly Decent Privacy"
  )
)

function setupEncryption() {

}

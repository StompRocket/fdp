var chalk       = require('chalk')
var clear       = require('clear')
var CLI         = require('clui')
var figlet      = require('figlet')
var inquirer    = require('inquirer')
var Preferences = require('preferences')
var Spinner     = CLI.Spinner
var exec        = require('child_process').exec
var fs          = require('fs')
var keypair     = require('keypair')

var callback
clear()
console.log(
  chalk.yellow(
    figlet.textSync('FDP', {horizontalLayout: "full"}),
    "Fairly Decent Privacy"
  )
)
function fdpSetup(callback) {
  var questions = [
    {
      name: "newKeys",
      type: "input",
      message: "Would you like to create a new set of encryption keys? y/n",
      validate: function( value ){
        if (value === "y" || value === "n") {
          return true
        }
      }
    }
  ]
  inquirer.prompt(questions).then(callback)
}

fdpSetup(function() {
  console.log(JSON.stringify(arguments))
})

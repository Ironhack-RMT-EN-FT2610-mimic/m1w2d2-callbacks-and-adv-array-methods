

function greetPerson(name) {
  console.log(`Hello ${name}`)
}

function greetVipPerson(name) {
  console.log(`Hello ${name}!!`)
  console.log("Thank you for being a valued member!")
}

greetPerson("Bob")
greetPerson("Sarah")

function welcomeUser( callback, name ) {
  console.log("starting the website")
  callback(name)
  console.log("welcome to the website!")
}

welcomeUser( greetPerson, "Patrick" )

welcomeUser( greetVipPerson, "Anna" )


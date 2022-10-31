//Take in an array of pokemon and reverse it
function partyReverse(arr ){
  console.log(arr.reverse())
}

partyReverse(['bulbasaur','charmander','pikach','caterpie','squirtle','zubat'])

//take in 2 arrays  

function squareVsCubed(a,b){
  console.log(a.reduce((acc,c) => acc + c **2, 0)   > b.reduce((acc,c) => acc + c **3,0))
}

squareVsCubed([2,2,2],[2,2,2])

squareVsCubed([5,1,1],[2,2,2])

/* 

Return a new array consisting of elements  which are a multiple of their own index in input array (length > 1)

[22,-6,32,82,9,25] => [-6,32,25]

[68,-1,1,-7,10,10] => [-1,10]

*/

function checkMultiple(arr){
  return arr.filter((e,i) => e % i === 0 )
}

console.log(checkMultiple([22,-6,32,82,9,25]))

console.log(checkMultiple([68,-1,1,-7,10,10]))

// Given an array of strings and numbers, return the sum of the array values as if it were all numbers. Return your answer as a number

function sumOfValues(a){
 console.log(a.reduce((acc, c) => acc + Number(c),0))
}

sumOfValues([5,'3',2,'1'])


/*

OOP

Objects are a collection of functions and variables

They store keyed collections

These represent the attributes and behavior of something used in the program

Object variables are called properties and the functions are called methods

*/

let ninja = {}
ninja.dance = function(){
  console.log('Hammer time')
}

ninja.color = 'red'
ninja.skillLvl = 'Master'
ninja.style = ['muy thai', 'grappling','kicking']
ninja.speed = 10
ninja.power = 7

ninja.lvlUp = function(num){
  ninja.power = ninja.power + num
  ninja.speed = ninja.speed + num
  console.log(`Ninja now has ${ninja.power} power and ${ninja.speed} speed `)
}

ninja.lvlUp(5)

/*

To make many objects at once we could use a constructor

*/

function MakeSneaker(sneakerBrand,sneakerSize,sneakerColor,sneakerPrice){
  this.brand = sneakerBrand
  this.size = sneakerSize
  this.color = sneakerColor
  this.price  = sneakerPrice
  this.run = function(){
      alert('We outttttt')
    } 
  }


let NMD = new MakeSneaker('Addidas',[9,12,14],'beige',220)

NMD.run()

console.log(NMD.price)

//Classes are more up to date. Got syntactical sugar

class MakeCar{
  constructor(carMake,carColor,carModel,numOfDoors){
    this.make = carMake
    this.color = carColor
    this.model = carModel
    this.doors = numOfDoors
  }
  honk(){
    console.log('Beep,beep, motherfucker!!')
  }
  lock(){
    console.log(`Locked ${this.doors} doors`)
  }
}

let hondaCivic = new MakeCar('Honda','Silver','Civic',4)

hondaCivic.honk()
hondaCivic.lock()

hondaCivic.drift = function(){
  console.log('Tokyo, drift, drift')
}

hondaCivic.drift()


class MakeExpressoMachine{
  constructor(machineBrand,machineSize,machineColor,machineCups){
    this.brand = machineBrand
    this.size = machineSize
    this.color = machineColor
    this.cups = machineCups
  }
  grind(){
    console.log('whirring noises begin')
  }
  cupsPlease(){
    console.log(`This machine makes ${this.cups} cups of coffee`)
  }
  brew(){
    console.log('Hot coffee coming right up')
  }
}

let expressoMaster = new MakeExpressoMachine('Walmart','XL','black',16)

expressoMaster.grind()
expressoMaster.cupsPlease()
expressoMaster.price = 225

/*

But WHY??

As our codebase gets larger and more folks are on the team, it becomes harder to keep the code organized

is it easy to add new features and functionality?

What if there was a system, a paradigm, a set of rules to help us organize our code better?

Thats OOP


let hourlyRate = 250
let hours = 8
let taxRate = .35

function calculateProfit(rate,numOfHours,taxes){
  return rate * numOfHours * (1 - taxes)
}

let profit = calculateProfit(hourlyRate,hours,taxRate)

console.log(profit)

*/

// OOP Baby - we have now encapsulated out data into the leonNoel object and that function is tied to it

function AgencyContractor(hourlyRate,hours,taxRate){
  this.hours = hours
  this.taxRate = taxRate
  let rate = hourlyRate
  let calculateProfit = function(){
  return this.hours * rate * (1 - this.taxRate)
  }
  this.invoiceClient = function(){
    console.log(`Your total invoice is ${rate * this.hours}`)
  }
}

let leonNoel = new AgencyContractor(250,40,.35)
leonNoel.invoiceClient()
/*

---Encapsulation

Fusing data and functionality into one object


--- Abstraction

Process of removing or generalizing physical,spatial, or temporal details or attributes in the study of objects or systems to focus attentionon details of greater importance


Inheritance

Make a class from another class for a hierarchy of classes that share a set of properties and methods

Polymorphism
*/

//Lets start a farm

class Animal{
  constructor(name){
    this.name = name
  }
  speak(){
    console.log(`${this.name} makes a sound`)
  }
}

class Dog extends Animal{
  constructor(name,breed){
    super(name)
    this.breed = breed
  }
}

let simba = new Dog('Simba','Shepherd')
let logan = new Dog('Logan','Pitbull')

console.log(simba.name)
console.log(simba.breed)
logan.speak()
console.log(logan.name)

/*

If you find yourself starting to create a number of objects that have similar features, then creating a generic object type to contain all the shared functionality and inheriting those features in more specialized object types can be convenient and useful

*/

class SugarGlider extends Animal{
  constructor(name,flightTime,isAdorable){
  super(name)
  this.glide = flightTime
  this.isCute = isAdorable
  }
}

let gonzo = new SugarGlider('Gonzo','15',true)

console.log(gonzo.name)
console.log(gonzo.glide)
console.log(gonzo.isCute)

/* But how could we signify that certain properties should not be updated? We use the convention on adding an underscore before the property key and then adding a get to route it. Developers use the underscore semantically to 
denote that a property is private

*/

class Student{
  constructor(name,creditsAttained,enrolledClasses,idNumber,salutation){
    this._name = name
    this._id = idNumber
    this.salutation = salutation
    this.classes = enrolledClasses
    this.credits = creditsAttained
  }
  get name(){
    return this._name
  }
  get id(){
    return this._id
  }
  creditCheck(){
    if(this.credits < 0){
      console.log('Invalid credit balance. Please see bursar immediately!')
    } else if (this.credits >= 120){
      console.log('You are ready to graduate. Congratulations')
    } else {
      console.log(`You have ${this.credits} credits. Keep going!`)
    }
  }
  checkIn(){
    console.log(`${this._name} says ${this.salutation}`)
  }
}

let spade = new Student('Mike Spade', 215, ['Web Development', 'Industrialized IoT', 'Network Architecture'],'076807389','yerrr')

console.log(spade.classes)
console.log(spade.credits)
console.log(spade.name)
spade.name = 'Mike Geddes'
console.log(spade.name)
console.log(spade.id)
spade.creditCheck()

let dashi = new Student('Dashimir', 215,['C','Assembly'],025180900,'waddduppp')

let ian = new Student('EmanSchwa',175,['theatre', 'film history'], 123456789,'um, yelloo')

let classroom = [ dashi, ian, spade]

  for(s of classroom){
  s.checkIn()
  }

class Player{
  constructor(name,number,team,stats){
    this._name = name
    this.number = number
    this.team = team
    this.stats = stats
  }
  score(){
    console.log(`Player #${this.number} of the ${this.team},${this.name} scores`)
  }
  get name(){
    return this._name
  }
}


let lebron = new Player('Lebron James',32,'Los Angeles Lakers', [20,8,8])

lebron.score()
console.log(lebron.name)

class Contractor{
  constructor(name,role){
    this._name = name
    this._role = role
  }
  get name(){
    return this._name
  }
  get role(){
    return this._role
  }
  sayHello(){
    console.log(`Hey, my name is ${this._name} and I am on the ${this._role} team`)
  }
}

let machi = new Contractor('The Machine','Front-End')

machi.sayHello()

class Front extends Contractor{
  constructor(name,role,tech){
    super(name,role)
    this._tech = this.tech
  }
  get tech(){
    return this._tech
  }
  sayHello(){
    console.log(`Hello! It's me ${this._name} and I work on the Front-end`)
  }
}

let marcia = new Front('Miss Thang','Front-end',['react','sql'])

marcia.sayHello()


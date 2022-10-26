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

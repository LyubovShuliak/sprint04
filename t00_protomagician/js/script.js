/* 
  your code
*/
function Creature(name, age, species){
this.name = name
this.age = age
this.species = species
this.sayHello=()=>{
  console.log(`Hello, my name is ${this.name}!`);
}

}

const creature = new Creature("Linda", 22, "human" )

function Human(job){
  this.job = job
  
  }
  function Dog(color){
    this.color = color
    
    }
  
    function Vampire(title){
      this.title = title
      
      }

      const  dog = Object.assign(new Creature("ff", 3, "ffvf"), new Dog("fsdf"))
      const human = Object.assign(new Creature("ff", 3, "ffvf"), new Human("fsdf"))
      const vapire = Object.assign(new Creature("ff", 3, "ffvf"), new Human("fsdf"), new Vampire("ffsf") )
    console.log(dog);
    console.log(human);
    console.log(vapire);
const magician = {
  _hat: './assets/images/hat.png',
  _getPortrait(){
    if (this._portrait) return this._portrait;
    else return './assets/images/magician.png';
  },
  'do magic'(){
    console.log(`ABRACADABRA
    The prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  }
};

/* 
  your code
*/

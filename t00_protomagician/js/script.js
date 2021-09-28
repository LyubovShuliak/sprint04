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



function Human(job){
  this.job = job
  
  }
  function Dog(color){
    this.color = color
    
    }
  
    function Vampire(title){
      this.title = title
      
      }

      const  dog = Object.assign(new Creature("Kennu", 3, "dog"), new Dog("white"))
      const human = Object.assign(new Creature("Linda", 26, "human"), new Human("programmer"))
      const vampire = Object.assign(new Creature("Dracula", 1666, "vampire"), new Human("collector"), new Vampire("count") )
    dog.sayHello()
    console.log(human);
    console.log(vampire);
    console.log(dog);
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

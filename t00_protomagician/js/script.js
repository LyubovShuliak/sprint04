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
      let dog, human, vampire

        dog = Object.assign(new Dog("white"), new Creature("Kennu", 3, "dog"))
       human = Object.assign(new Human("programmer"), new Creature("Linda", 26, "human"))
       vampire = Object.assign(new Vampire("count"), new Creature("Dracula", 1666, "vampire"), new Human("collector") )
   console.log(dog);
   console.log(human);
   console.log(vampire);
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

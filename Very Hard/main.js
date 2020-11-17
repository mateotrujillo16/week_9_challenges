
class Person {
  
  name;
  age;
  job;

  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  exercise() {
    console.log(`Running is fun - said no one ever!`)
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}`)
  }
}

class Programmer extends Person {


  constructor(name,job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }

  completeTask() {
    this.busy = false;
  }

  acceptNewTask() {
    this.busy = true;
  }

  offerNewTask() {
    if (this.busy) {
      console.log(`${this.name} can't accept any new tasks right now`)
    } else {
      console.log(`${this.name} would love to take on a new responsability`)
    }
  }

  learnLanguage(newLanguage) {
    this.languages.push(newLanguage);
  }

  listLanguages() {
  //   for (var x = 0; x < this.languages.length; x++){
  //     console.log(this.languages[x])
  //   }
    
    console.log(this.languages);
  }
}

let p2 = new Programmer("Jordan", "mechanic", 25, ["JavaScript"]);

p2.exercise();
console.log(p2.busy);
p2.completeTask();
console.log(p2.busy);
p2.acceptNewTask();
console.log(p2.busy);
p2.completeTask();
p2.offerNewTask();
console.log(p2.languages);
p2.learnLanguage("mySQL");
p2.listLanguages();

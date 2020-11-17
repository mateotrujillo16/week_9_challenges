

// function pii(firstName, lastName, ssn) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   function getFullName() {
//     getFullName = firstName + " " + lastName;
//     return fullName;
//   }

//    // private function 
//   var privateSocialSecurityNum = function () {
//     privateSocialSecurityNum = ssn;

//     return privateSocialSecurityNum;
//   }
// }

// let john = new pii("John", "Smith", 123456789)
// console.log(john);


class pii {

  #name;
  #ssn;

  constructor(name) {
    this.#name = name;
    this.#ssn = "000-00-0000";
  }

  getName() {
    return this.#name;

  }
}

let person = new pii("John Doe");



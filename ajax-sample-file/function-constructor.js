
		// function Person(name, age) {
		//     this.name = name;
		// 	this.age = age;
		// }

		// Person.prototype.country = "India";

		// const p = new Person("Pankaj", 27);
		// const q = new Person("John", 20);
		// console.log(p.country);
		// console.log(q.country);

		// delete Person.prototype.country;

		// console.log(p.country);
		// console.log(q.country);
		class Human {
			species = "Homo sapien";
		}

		class Person {
			constructor(name, age){
				this.name = name;
				this.age = age;
			}

			tellMyName() {
				console.log("Hi your name is ", this.name);
			}
		}

		var p1 = new Person("Shiv", 21);
		var p2 = new Person("Ramesh", 10);

        console.log(p1)
        console.log(p2)
		p1.tellMyName();
		p2.tellMyName();

		var h = new Human();
		console.log(h.species);
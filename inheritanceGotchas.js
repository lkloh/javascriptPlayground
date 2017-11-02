
class Parent {

	constructor(firstname, lastname, age, bankBalance) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
		this.bankBalance = bankBalance;
	}

	goShopping(itemValue) {
		this.updateBankBalance(itemValue, '-');
		this.updateBankBalance(itemValue * 0.05, '+');

		this.age += 10;
	}

	updateBankBalance(delta, operator) {
		if (operator === '+') {
			this.bankBalance += delta;
		} else if (operator === '-') {
			this.bankBalance -= delta;
		} else {
			throw new Exception('invalid operator');
		}
	}

}

class ChildForeverRich extends Parent {

	constructor(firstname, lastname, age, bankBalance) {
		super(firstname, lastname, age, bankBalance);
	}

	goShopping(itemValue) {
		var FOREVER_RICH = 1000;
		Parent.prototype.goShopping.call(this, itemValue);
		this.bankBalance = FOREVER_RICH;
	}
}

class ChildNotSoRich extends Parent {

	constructor(firstname, lastname, age, bankBalance) {
		super(firstname, lastname, age, bankBalance);
	}

	goShopping(itemValue) {
		var FOREVER_RICH = 1000;
		this.bankBalance = FOREVER_RICH;
		Parent.prototype.goShopping.call(this, itemValue);
	}
}



alice = new ChildForeverRich('Alice', 'ForeverRich', 21, 100);
bob = new ChildNotSoRich('Bob', 'NotSoRich', 21, 100);

console.log('\nBEFORE');
console.log(alice);
console.log(bob);

alice.goShopping(10);
bob.goShopping(10);

console.log('\nAFTER');
console.log(alice);
console.log(bob);











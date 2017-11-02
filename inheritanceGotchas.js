
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

class Child extends Parent {

	constructor(firstname, lastname, age, bankBalance) {
		super(firstname, lastname, age, bankBalance);
	}

	goShopping(itemValue) {
		var originalAge = this.age;
		Parent.prototype.goShopping.call(this, itemValue);
		this.age = originalAge;
	}
}

alice = new Child('Alice', 'Anderson', 21, 100);
alice.goShopping(10);
console.log(alice);

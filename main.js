/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// TODO
function Animal(){
  
    this.name=""
    this.age=0
    this.isMammal=true

}

function Rabbit(){
	this.isMammal=true
}
Rabbit.prototype=new Animal()
Rabbit.prototype.eat=function(){
	return this.name +" sedang makan!"
}

const myRabbit = new Rabbit()
console.log(myRabbit)
myRabbit.name="Labi"
myRabbit.age=2
console.log(myRabbit.eat())
console.log(myRabbit.name)
console.log(myRabbit.age)

function Eagle(){
	this.isMammal=false
}
Eagle.prototype=new Animal()
Eagle.prototype.fly=function(){
	return this.name +" sedang terbang!"
}

const myEagle=new Eagle()
console.log(myEagle)
myEagle.name="Elo"
myEagle.age=4
console.log(myEagle.fly())

/**
 * Jangan hapus kode di bawah ini
 */

module.exports = {
  Animal, Rabbit, Eagle, myRabbit, myEagle,
};

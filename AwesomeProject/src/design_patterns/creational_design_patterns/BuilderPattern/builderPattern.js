class Person{
    constructor(name,gender,age,height,weight){
        this.name =  name;
        this.gender = gender;
        this.age = age;
        this.height= height;
        this.weight = weight;
    }
}


class PersonBuilder {
    constructor(name,gender){
        this.name = name;
        this.gender= gender
        this.height= undefined
        this.weight = undefined;
        this.age = undefined
    }
    setHeight(height){
        this.height = height
        return this
    }
    getHeight(){
        return this.height
    }
    setWeight(weight){
        this.weight =  weight;
        return this
    }
    getWeight(){
        return this.weight
    }
    setAge(age){
        this.age = age
        return this
    }

    getAge(){
        return this.age
    }

    build(){
        return new Person(this.name, this.gender,this.age,this.height, this.weight)
    }
}


const newPerson1 = new PersonBuilder("suraj desai","Male").setAge(25).setHeight(10).setWeight(80).build()
console.log(newPerson1)

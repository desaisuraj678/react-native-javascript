/*
 - The builder pattern is a creational pattern which allows to create complex objects step by step.
- It’s especially useful when you need to create an object with lots of possible configuration options


*/

class Person {
  name: string;
  gender: string;
  age?: number;
  height?: number;
  weight?: number;
  constructor(
    name: string,
    gender: string,
    age?: number,
    height?: number,
    weight?: number,
  ) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
}

class PersonBuilder {
  private person: Person; // make this private 

  constructor(name: string, gender: string) {
    this.person = new Person(name, gender);
  }

  setHeight(height: number) {
    this.person.height = height;
    return this // return this
  }

  getHeight(): number | undefined {
    return this.person.height;
  }

  setWeight(weight: number) {
    this.person.weight = weight;
    return this
  }

  getWeight(): number | undefined {
    return this.person.weight;
  }

  setAge(age: number) {
    this.person.age = age;
    return this
  }

  getAge(): number | undefined {
    return this.person.age;
  }

  build() { // optional
    return this
  }

}

const newPerson1 = new PersonBuilder('suraj desai', 'Male').setHeight(33).build()

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature,
//  яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()).
// Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

class Key {
  private signature: number
  constructor() {
    this.signature = Math.random()
  }
  getSignature() {
    return this.signature
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key
  }
  getKey() {
    return this.key.getSignature()
  }
}

abstract class House {
  door: boolean
  key: Key
  tenants: Person[] = []
  constructor(key: Key) {
    this.door = false
    this.key = key
  }
  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person)
    }
  }
  public abstract openDoor(keySignature: number): boolean
}

class MyHouse extends House {
  openDoor(enteredKeySignature: number): boolean {
    if (enteredKeySignature === this.key.getSignature()) {
      this.door = true
      return true
    }
    return false
  }
}
const key = new Key()

const house = new MyHouse(key)
const person = new Person(key)

house.openDoor(person.getKey())

house.comeIn(person)

export {}

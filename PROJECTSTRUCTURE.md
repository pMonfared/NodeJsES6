###Composition means `HAS A`
###Inheritance means `IS A`

Example: `Car` has a `Engine` and `Car` is a `Automobile`

In programming this is represented as:

```javascript
class Engine{
   constructor(){
    this.exam = "Engine started...!"
   }
}

class Automobile{

}

class Car extends Automobile{
   constructor(engine){
     super()
     this.engine = engine
   }
  
   startEngine(){
     console.log(this.engine.exam)
   }
}


const car = new Car(new Engine())
car.startEngine()
```

printed in console:
```
Engine started...!
```
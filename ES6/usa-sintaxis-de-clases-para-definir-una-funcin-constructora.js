// Usa la palabra clave class y escribe un constructor para crear la clase Vegetable.

// La clase Vegetable te permite crear un objeto vegetal con una propiedad name que es pasada al constructor.


// Cambia solo el código debajo de esta línea
class Vegetable{
  constructor (name){
    this.name = name;
  }

}
// Cambia solo el código encima de esta línea

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'{}
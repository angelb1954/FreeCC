Use la palabra clave delete para eliminar las propiedades del objeto

Ahora ya sabes qué son los objetos y sus características y ventajas básicas. En resumen, son almacenes de clave-valor que proporcionan una forma flexible e intuitiva de estructurar datos y proporcionan un tiempo de búsqueda muy rápido. A lo largo del resto de estos desafíos, describiremos varias operaciones comunes que puede realizar en objetos para que pueda sentirse cómodo aplicando estas estructuras de datos útiles en sus programas.

En desafíos anteriores, hemos agregado y modificado los pares clave-valor de un objeto. Aquí veremos cómo podemos eliminar un par clave-valor de un objeto.

Revisemos nuestro foodsejemplo de objeto por última vez. Si quisiéramos eliminar la applesclave, podemos eliminarla usando la deletepalabra clave como esta:

delete foods.apples;
Utilice la palabra clave delete para eliminar las claves oranges, plumsy strawberriesdel foodsobjeto.





let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);
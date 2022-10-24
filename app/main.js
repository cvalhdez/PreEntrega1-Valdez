alert("BIENVENIDO AL ÁREA DE COMPRAS DE CERVEZA TEXCOCO");
let valor;
let variedad;
let cantidad;
let precio;
do {
  valor = prompt(
    "Menu de Cerveza Texcoco \n1 - Sweet Stout -> $45\n2 - Pale Ale -> $50\n3 - Porter -> $40"
  );
  switch (valor) {
    case "1":
      alert("Cerveza Texcoco Sweet Stout");
      variedad = "Sweet Stout";
      cantidad = prompt("¿Cuantas cervezas quieres?");
      precio = 45 * cantidad;
      break;
    case "2":
      alert("Cerveza Texcoco Pale Ale");
      variedad = "Pale Ale";
      cantidad = prompt("¿Cuantas cervezas quieres?");
      precio = 50 * cantidad;
      break;
    case "3":
      alert("Cerveza Texcoco Porter");
      variedad = "Porter";
      cantidad = prompt("¿Cuantas cervezas quieres?");
      precio = 40 * cantidad;
      break;
    default:
      alert("No seleccionaste ninguna cerveza");
      break;
  }
} while (valor == false || valor > 3 || valor < 1);

function venta(variedad, cantidad, precio) {
  alert(
    "Compraste " + cantidad + " cervezas " + variedad + " .Tu cuentas es de $" + precio + " pesos"
  );
}
venta(variedad, cantidad, precio);

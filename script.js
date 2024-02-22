//alert("Hola este es mi Javascript");

let nombres = "Arito";

var nombre1 = "Arito";

const nombre2 = "Arito";

console.log(nombres)
console.log(nombre1)
console.log(nombre2)

let gusto1 = "Volar"
let gusto2 = "Muerte"
let bobada = "el asesino"

let parrafo = document.querySelector(".parrafo1")

function cambiarTexto(gusto1,gusto2,bobada){
    let contenido = `Mis intereses se posan en el ${gusto1} y la ${gusto2}, sobre todo la musical y la literaria, teniendo de fondo un auta de ambicion extrema para con ambas, siendo ${bobada} de mis metas mas ansiadas y motivos de las mismas; vivo y muero una y otra vez por esta eleccion divina. Otros de mis pasatiempos son el estudiar sobre las cosas que me vayab interesando en el momento, aportandome conocimiento y temas para charlas aleatorias con las demas personas del mundo. Ah, los videojuegos tambien lo son.`
    return contenido;
}

parrafo.InnerText = cambiarTexto(gusto1,gusto2,bobada)

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});


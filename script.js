const d = document;
const $foto = d.querySelector("#foto");
const $emailDatos = d.querySelector("#emailDatos");
const $address = d.querySelector("#address");
const $phone = d.querySelector("#phone");
const $nombre = d.querySelector("#nombre");
const $country = d.querySelector("#country");
const $genero = d.querySelector("#genero");
const $ubicacion = d.querySelector("#ubicacion");
const $edad = d.querySelector("#edad");
const $emailLink = d.querySelector("#emailLink");
const $telefono = d.querySelector("#telefono");

let url = "https://randomuser.me/api/";
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error));

function mostrarData(data) {
  /*Datos del perfil */
  perfil(data, $nombre, $foto);
  /*Datos Personales */
  datosPersonales(
    data,
    $emailDatos,
    $country,
    $address,
    $phone,
    $genero,
    $edad
  );

  /*Links */
  link(data, $ubicacion, $emailLink, $telefono);
}

function perfil(data, nombre, foto) {
  nombre.innerHTML = ` ${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last} `;
  foto.src = ` ${data.results[0].picture.thumbnail} `;
}

function datosPersonales(data, email, pais, direccion, telefono, genero, edad) {
  email.innerHTML = `Email: ${data.results[0].email} `;
  pais.innerHTML = `Pais: ${data.results[0].location.country} `;
  direccion.innerHTML = `Direccion: ${data.results[0].location.street.name}.  N°${data.results[0].location.street.number}. ${data.results[0].location.city} `;
  telefono.innerHTML = `Numero telefono: ${data.results[0].phone} `;
  genero.innerHTML = `Genero: ${data.results[0].gender} `;
  edad.innerHTML = `Edad: ${data.results[0].dob.age} `;
}

function link(data, ubicacion, email, telefono) {
  ubicacion.setAttribute(
    "href",
    `https://www.google.com.ar/maps/place/${data.results[0].location.country} ${data.results[0].location.city} ${data.results[0].location.street.name} ${data.results[0].location.street.number}`
  );
  email.setAttribute("href", `mailto:${data.results[0].email}.com `);
  telefono.href = `tel:${data.results[0].phone} `;
}

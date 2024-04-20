import {propiedadesAlquiler} from './data/propiedades_alquiler.js'

let cardAlquiler = document.querySelector('.card-container-alquiler')
let cardAlquilerDos = document.querySelector('.card-container-alquiler-dos')

let template = ''
let templateDos = ''

propiedadesAlquiler.forEach((propiedad)=>{
  if(propiedad.id <= 3){
    template +=`
    <div class="card flex-column" id="${propiedad.id}">
      <div class="img-container">
        <img class="card-img" src="../${propiedad.src}">
      </div>
      <div class="card-content flex-column">
        <h3 class="card-title">${propiedad.nombre}</h3>
        <p class="card-description">${propiedad.descripcion}</p>
        <p class="card-para">
          <i class="fa-solid fa-location-dot"></i>
          Ubicación: ${propiedad.ubicacion}
        </p>
        <p class="card-para">Habitaciones: ${propiedad.habitaciones}</p>
        <p class="card-para">Precio: $${propiedad.costo}</p>
        ${propiedad.pets === true ? '<p class="card-para-true"><i class="fa-solid fa-paw"></i>Se permiten animales</p>':'<p class="card-para-false"><i class="fa-solid fa-ban"></i>No se permiten animales</p>'}
        ${propiedad.smoke === true ? '<p class="card-para-true"><i class="fa-solid fa-smoking"></i>Se permite fumar</p>':'<p class="card-para-false"><i class="fa-solid fa-ban-smoking"></i>Prohibido Fumar</p>' }
      </div>
    </div>
    `
    cardAlquiler.innerHTML = template
  }else{
    templateDos +=`
    <div class="card flex-column" id="${propiedad.id}">
      <div class="img-container">
        <img class="card-img" src="../${propiedad.src}">
      </div>
      <div class="card-content flex-column">
        <h3 class="card-title">${propiedad.nombre}</h3>
        <p class="card-description">${propiedad.descripcion}</p>
        <p class="card-para">
          <i class="fa-solid fa-location-dot"></i>
          Ubicación: ${propiedad.ubicacion}
        </p>
        <p class="card-para">Habitaciones: ${propiedad.habitaciones}</p>
        <p class="card-para">Precio: $${propiedad.costo}</p>
        ${propiedad.pets === true ? '<p class="card-para-true"><i class="fa-solid fa-paw"></i>Se permiten animales</p>':'<p class="card-para-false"><i class="fa-solid fa-ban"></i>No se permiten animales</p>'}
        ${propiedad.smoke === true ? '<p class="card-para-true"><i class="fa-solid fa-smoking"></i>Se permite fumar</p>':'<p class="card-para-false"><i class="fa-solid fa-ban-smoking"></i>Prohibido Fumar</p>' }
      </div>
    </div>
    `
    cardAlquilerDos.innerHTML = templateDos
  }
})
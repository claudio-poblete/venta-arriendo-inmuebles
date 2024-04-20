import {propiedadesVentas} from './data/propiedades_ventas.js'
import {propiedadesAlquiler} from './data/propiedades_alquiler.js'

//Variables globales
let cardVentas = document.querySelector('.card-container')
let cardAlquiler = document.querySelector('.card-container-alquiler')
const verVentas = document.querySelector('#ver-ventas')
const verAlquiler = document.querySelector('#ver-alquiler')
let containerVentas = document.querySelector('#container-ventas')
let containerAlquiler = document.querySelector('#container-alquiler')

//Se llena con datos las 6 card del index
let template = ""
let templateDos = ""

propiedadesVentas.forEach((propiedad)=>{
  if(propiedad.id <= 3){
    template +=`
    <div class="card flex-column" id="${propiedad.id}">
      <div class="img-container">
        <img class="card-img" src="${propiedad.src}">
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
  }
})

propiedadesAlquiler.forEach((propiedad)=>{
  if(propiedad.id <= 3){
    templateDos +=`
    <div class="card flex-column" id="${propiedad.id}">
      <div class="img-container">
        <img class="card-img" src="${propiedad.src}">
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
  }
})

cardVentas.innerHTML = template
cardAlquiler.innerHTML = templateDos

//funciones para mostrar/remover los departamentos en venta
const onApartmentSale = () =>{
  containerVentas.innerHTML = ''
  let templateTres = ''
  propiedadesVentas.forEach((propiedad)=>{
    if(propiedad.id > 3){
      templateTres = `
      <div class="card flex-column" id="${propiedad.id}">
        <div class="img-container">
          <img class="card-img" src="${propiedad.src}">
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
          ${propiedad.pets === true ? '<p class="card-para-true"><i class="fa-solid fa-paw"></i>Se permiten animales</p>' : '<p class="card-para-false"><i class="fa-solid fa-ban"></i>No se permiten animales</p>'}
          ${propiedad.smoke === true ? '<p class="card-para-true"><i class="fa-solid fa-smoking"></i>Se permite fumar</p>':'<p class="card-para-false"><i class="fa-solid fa-ban-smoking"></i>Prohibido Fumar</p>' }
        </div>
      </div>
      `
    }
    containerVentas.innerHTML += templateTres
  })
}

const offApartmentSale = () => containerVentas.innerHTML = ''

const toggledAparmentSale = ()=>{
  if(containerVentas.innerHTML === ''){
    onApartmentSale()
  }else{
    offApartmentSale()
  }
}

verVentas.addEventListener('click', toggledAparmentSale)

//funciones para mostar/remover los departamentos en alquiler
const onApartmentRent = ()=>{
  containerAlquiler.innerHTML = ''
  let templateTres = ''
  propiedadesAlquiler.forEach((propiedad)=>{
    if(propiedad.id > 3){
      templateTres = `
      <div class="card flex-column" id="${propiedad.id}">
        <div class="img-container">
          <img class="card-img" src="${propiedad.src}">
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
          ${propiedad.pets === true ? '<p class="card-para-true"><i class="fa-solid fa-paw"></i>Se permiten animales</p>' : '<p class="card-para-false"><i class="fa-solid fa-ban"></i>No se permiten animales</p>'}
          ${propiedad.smoke === true ? '<p class="card-para-true"><i class="fa-solid fa-smoking"></i>Se permite fumar</p>':'<p class="card-para-false"><i class="fa-solid fa-ban-smoking"></i>Prohibido Fumar</p>' }
        </div>
      </div>
      `
    }
    containerAlquiler.innerHTML += templateTres
  })
}

const offApartmentRent = () => containerAlquiler.innerHTML= ''

const toggledAparmentRent = () =>{
  if(containerAlquiler.innerHTML === ''){
    onApartmentRent()
  }else{
    offApartmentRent()
  }
}

verAlquiler.addEventListener('click', toggledAparmentRent)
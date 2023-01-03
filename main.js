import './style.css'

import { productoTemplate } from './templates/producto';
import { modal } from './templates/modal';

//datos
const productos = [
    {
        name: 'Perifericos'
    },
    {
        name: 'Laptop'
    }
];

//insercion de la lista de productos con su categoria
document.querySelector('#productos').innerHTML = (
    productos.map((producto, i) => productoTemplate(producto.name, i)).join('')
)

//Insercion del modal
let modalDOM = document.querySelector('#modal-CardInfo');
modalDOM.innerHTML = modal();

//evento del modal
document.querySelectorAll('.card-imgProduct').forEach(img => {
    img.addEventListener('click', () => {
        modalDOM.style.display = 'block';
    })
});

//cerrar modal
document.querySelector('.btn-close-modal').addEventListener('click', () => {
    modalDOM.style.display = 'none';
});
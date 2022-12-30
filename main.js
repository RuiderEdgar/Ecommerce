import './style.css'

import { productoTemplate } from './templates/producto';

const productos = [
    {
        name: 'Perifericos'
    },
    {
        name: 'Laptop'
    }
];

document.querySelector('#productos').innerHTML = (
    productos.map((producto, i) => productoTemplate(producto.name, i)).join('')
)


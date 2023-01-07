import './style.css'
import './js/dataList.js'
import { productoTemplate } from './templates/producto';
import { modal } from './templates/modal';
import { addProduct, deleteProduct } from './js/dataList.js';
import { listaCarrito } from './templates/listaCarrito';

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

//-----------ventana de la lista del carrito-------
//abrir ventana
document.querySelector('#carrito-nav').addEventListener('click', () => {

    let carritoDOM = document.querySelector('#carrito-nav');
    if (carritoDOM.style.color === 'var(--white)') {
        carritoDOM.style.color = 'var(--blue-accent-dark)'
    } else if (carritoDOM.style.color === 'var(--blue-accent-dark)') {
        carritoDOM.style.color = 'var(--white)'
    } else {
        carritoDOM.style.color = 'var(--blue-accent-dark)'
    }

    let ventana = document.querySelector('#listaCarrito');
    if (ventana.style.display === 'none') {
        ventana.style.display = 'block';
    } else if (ventana.style.display === 'block') {
        ventana.style.display = 'none';
    } else {
        ventana.style.display = 'block';
    }
})

//actualizar el numero de productos en la ventana
const actualizarLista = () => {
    document.querySelector('#listaCarrito').innerHTML = (
        listaCarrito()
    );
    //Para añadir el evento de borrar del carrito cuando se agregue un producto nuevo
    document.querySelectorAll('.borrar').forEach(iconBorrar => {
        iconBorrar.addEventListener('click', () => {
            deleteProduct();
            //funcion recursiva
            actualizarLista();
        })
    })
}
// Añadiendo de nuevo los addEventListener cuando se recarge la pagina y no pierda los eventos
window.addEventListener('load', () => {
    document.querySelectorAll('.borrar').forEach(iconBorrar => {
        iconBorrar.addEventListener('click', () => {
            deleteProduct();
            actualizarLista();
        })
    })
})
document.querySelector('#listaCarrito').innerHTML = (
    listaCarrito()
);

//Para añadir al carrito
document.querySelector('.addCartModal').addEventListener('click', () => {
    addProduct();
    modalDOM.style.display = 'none';
    actualizarLista();
})
document.querySelectorAll('.addCart').forEach(iconCart => {
    iconCart.addEventListener('click', () => {
        addProduct();
        actualizarLista();
    })
})


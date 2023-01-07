import { listProduct } from "../components/listProduct";

const visited = localStorage.getItem('visited');
let listaProductos = [];

if (!visited) {
    localStorage.setItem('visited', true);
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
} else {
    listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
}

localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

export const addProduct = () => {
    listaProductos.push(listProduct());
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
}
export const deleteProduct = () => {
    listaProductos.pop();
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
}
export const limpiar = () => {
    listaProductos = [];
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
}


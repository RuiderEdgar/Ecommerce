import '../css/productoTemplate.css'
import { cardProduct } from '../components/cardProduct';

export const productoTemplate = (categoria, i) => {
    //Template producto
    return (`
        <section id='${categoria}-container' class='producto-container ${i % 2 != 0 ? 'par' : 'non'}'>
            <h3>Productos</h3>
            <h2>${categoria}</h2>
            <section class='cards-container'>
                ${cardProduct()}
                ${cardProduct()}
                ${cardProduct()}
                ${cardProduct()}
                ${cardProduct()}
                ${cardProduct()}
            </section>
        </section>
    `)
}
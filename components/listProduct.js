import '../css/listProduct.css'
export const listProduct = () => {
    return (`
        <article class='productInCart'>
            <picture class='imagenProducto'>
                <img src="./images/producto.jpg" alt="imagen prodcuto" />
            </picture>
            <section>
                <h2>Product name</h2>
                <span>$200.00</span>
            </section>
            <picture class='borrar'>
                <img src="./icons/borrar.png" alt="icono eliminar" />
            </picture>
        </article>
    `)
}
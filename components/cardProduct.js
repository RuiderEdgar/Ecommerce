import '../css/cardProduct.css'
export const cardProduct = () => {
    //Tarjeta del producto
    return (`
        <article class='card-product'>
            <picture class='container-imgProduct'>
                <img src="./images/producto.jpg" alt="foto producto" />
            </picture>
            <header class='container-header'>
                <h2>Name Product</h2>
            </header>
            <section class='container-info'>
                <div>
                    <h1>$00,0</h1>
                </div>
                <picture>
                    <img src="./icons/cart.png" alt="icono carrito" />
                </picture>
            </section>
        </article>
    `)
}
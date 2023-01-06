import '../css/listaCarrito.css'
export const listaCarrito = () => {
    const dataCart = JSON.parse(localStorage.getItem('listaProductos'));
    if (dataCart.length === 0) {
        return (`
            <section class='cart-container void'>
            <img src="./icons/alerta.png" alt="icono alerta" />
                <span>Añada productos al carrito</span>
            </section>
        `)
    } else {
        return (`
            <section class='cart-container'>
                ${dataCart.map(producto => producto).join('')}
                <button class='btn-buy-cart'>
                    <img src="./icons/bolsa.png" alt="icono bolsa" />
                    <span>
                        Comprar
                    </span>
                </button>
            </section>
        `)
    }

}
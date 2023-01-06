import '../css/modal.css'
export const modal = () => {
    return (`
    <article class='modal-content'>
        <picture>
            <img src="./images/producto.jpg" alt="foto producto" />
            <div class='effect-vanish'></div>
            <button class='btn-close-modal' id='btn-close-modal'>
                <img src="./icons/cerrar.png" alt="foto producto" />
            </button>
        </picture>
        <section class='info-container'>
            <header>
                <h2>Descripcion</h2>
            </header>
            <main>
                <ul>
                    <li>Text 1</li>
                    <li>Text 2</li>
                    <li>Text 3</li>
                    <li>Text 4</li>
                    <li>Text 5</li>
                </ul>
            </main>
            <footer>
                <button class='btn-buy'>
                    <img src="./icons/bolsa.png" alt="icono bolsa" />
                    <span>
                        Comprar
                    </span>
                </button>
                <button class='btn-add addCartModal'>
                    <img src="./icons/cart.png" alt="icono carrito" />
                    <span>
                        Carrito
                    </span>
                </button>
            </footer>
        </section>
    </article>
    `);
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function m(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=m(o);fetch(o.href,r)}})();const g=()=>`
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
    `,y=localStorage.getItem("visited");let c=[];y?c=JSON.parse(localStorage.getItem("listaProductos")):(localStorage.setItem("visited",!0),localStorage.setItem("listaProductos",JSON.stringify(c)));localStorage.setItem("listaProductos",JSON.stringify(c));const d=()=>{c.push(g()),localStorage.setItem("listaProductos",JSON.stringify(c))},u=()=>{c.pop(),localStorage.setItem("listaProductos",JSON.stringify(c))},f=()=>{c=[],localStorage.setItem("listaProductos",JSON.stringify(c))};const a=()=>`
        <article class='card-product'>
            <picture class='container-imgProduct'>
                <img class='card-imgProduct' src="./images/producto.jpg" alt="foto producto" />
            </picture>
            <header class='container-header'>
                <h2>Name Product</h2>
            </header>
            <section class='container-info'>
                <div>
                    <h1>$00,0</h1>
                </div>
                <picture>
                    <img class='addCart' src="./icons/cart.png" alt="icono carrito" />
                </picture>
            </section>
        </article>
    `,h=(t,e)=>`
        <section id='${t}-container' class='producto-container ${e%2!=0?"par":"non"}'>
            <h3>Productos</h3>
            <h2>${t}</h2>
            <section class='cards-container'>
                ${a()}
                ${a()}
                ${a()}
                ${a()}
                ${a()}
                ${a()}
            </section>
        </section>
    `;const b=t=>`
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
                <button class='btn-buy' onclick="window.location.assign('./router/thankYou.html')">
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
    `;const p=()=>{const t=JSON.parse(localStorage.getItem("listaProductos"));return t.length===0?`
            <section class='cart-container void'>
            <img src="./icons/alerta.png" alt="icono alerta" />
                <span>Añada productos al carrito</span>
            </section>
        `:`
            <section class='cart-container'>
                ${t.map(e=>e).join("")}
                <button class='btn-buy-cart'>
                    <img src="./icons/bolsa.png" alt="icono bolsa" />
                    <span>
                        Comprar
                    </span>
                </button>
            </section>
        `},S=[{name:"Perifericos"},{name:"Laptop"}];document.querySelector("#productos").innerHTML=S.map((t,e)=>h(t.name,e)).join("");let s=document.querySelector("#modal-CardInfo");s.innerHTML=b();document.querySelectorAll(".card-imgProduct").forEach(t=>{t.addEventListener("click",()=>{s.style.display="block"})});document.querySelector(".btn-close-modal").addEventListener("click",()=>{s.style.display="none"});document.querySelector("#carrito-nav").addEventListener("click",()=>{let t=document.querySelector("#carrito-nav");t.style.color==="var(--white)"?t.style.color="var(--blue-accent-dark)":t.style.color==="var(--blue-accent-dark)"?t.style.color="var(--white)":t.style.color="var(--blue-accent-dark)";let e=document.querySelector("#listaCarrito");e.style.display==="none"?e.style.display="block":e.style.display==="block"?e.style.display="none":e.style.display="block"});const n=()=>{document.querySelector("#listaCarrito").innerHTML=p(),document.querySelectorAll(".borrar").forEach(t=>{t.addEventListener("click",()=>{u(),n()})}),document.querySelector(".btn-buy-cart").addEventListener("click",()=>{f(),window.location.assign("./router/thankYou.html"),n()})};window.addEventListener("load",()=>{document.querySelectorAll(".borrar").forEach(t=>{t.addEventListener("click",()=>{u(),n()})})});document.querySelector("#listaCarrito").innerHTML=p();document.querySelector(".addCartModal").addEventListener("click",()=>{d(),s.style.display="none",n()});document.querySelectorAll(".addCart").forEach(t=>{t.addEventListener("click",()=>{d(),n()})});

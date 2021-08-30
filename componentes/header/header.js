function header (el) {
    var header = document.createElement("div");
    header.innerHTML = `<header class="header">
            
    <img class="header__logo" src="../images/marce.png" alt="">
    <div class="header__menu-hamburguesa">
        <div class="header__menu-hamburguesa-open">
            <img src="./images/cruz.png" alt="" class="header__icono-menu-hamburguesa-cerrar">
            <div class="header__contenedor-redirecciones">
                <a href="./portfolio.html" class="header__redireccion-portfolio">Portfolio</a>
                <a href="./servicios.html" class="header__redireccion-servicios">Servicios</a>
                <a href="./contacto.html" class="header__redireccion-contactos">Contacto</a>
            </div>
        </div>
        <div class="header__icono-menu-hamburguesa">
            <span class="header__barra-menu"></span>
            <span class="header__barra-menu"></span>
            <span class="header__barra-menu"></span>
        </div>

        <div class="header__contenedor-links">
            <a href="./portfolio.html" class="header__redireccion">Portfolio</a>
            <a href="./servicios.html" class="header__redireccion">Servicios</a>
            <a href="./contacto.html" class="header__redireccion">Contacto</a>
        </div>
    </div>
</header>`

  el.appendChild(header)

  function abrirVentanaMenu(){
    const iconoVentanaAbrirEl = document.querySelector(".header__icono-menu-hamburguesa");
    const menuAbiertoEl = document.querySelector(".header__menu-hamburguesa-open");

    iconoVentanaAbrirEl.addEventListener("click", ()=>{
        menuAbiertoEl.style.display = "inherit"
    })

}

function cerrarVentanaMenu(){
    const iconoVentanaCerrarEl = document.querySelector(".header__icono-menu-hamburguesa-cerrar");
    const menuAbiertoEl = document.querySelector(".header__menu-hamburguesa-open");

    iconoVentanaCerrarEl.addEventListener("click", ()=> {
        menuAbiertoEl.style.display = "none"
    })
}

abrirVentanaMenu()
cerrarVentanaMenu()
}




   

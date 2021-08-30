function inbox (el) {
    var contenedorInboxEl = document.createElement("div");
    contenedorInboxEl.innerHTML = ` <h3 class="form__subtitulo">Escribime</h3>
    <form action="" method="post" class="form">
    <div class="form__fieldset">
       <label for="nombre" class="form__label" for="nombre">NOMBRE</label>
       <input class="form__input" id="nombre" name="nombre" type="text">
    </div>
    <div class="form__fieldset">
        <label for="email" class="form__label" for="email">EMAIL</label>
        <input class="form__input" id="email" name="email" type="email">
    </div>
    <div class="form__fieldset">
        <label class="form__label" for="mensaje">Mensaje</label>
        <textarea class="form__input-mensaje" name="mensaje" id="mensaje"></textarea>
    </div>
    <button type="submit" class="form__boton">Enviar</button>
    </form>`

  el.appendChild(contenedorInboxEl)
}

function enviarForm() {
    const formEl = document.querySelector(".form");
    
    
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());
      
            

        fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                "to":"juli-colombo@hotmail.com",
                "message": `Has recibido un mensaje de: ${value.nombre}. Su mail es: ${value.email}. Su mensaje es: ${value.mensaje}`
            }),
        });
        alert("El mensaje se envió correctamente.")

        formEl.reset()
    })
}




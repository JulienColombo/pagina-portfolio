function mostrarResultado(results){
    const contenedor = document.querySelector(".contenedor-trabajos-portfolio")
    const template = document.querySelector('#template-trabajo-portfolio');

    for (const r of results){
     const nombreDelProductoEl = template.content.querySelector(".titulo-trabajo-portfolio");
      nombreDelProductoEl.textContent = r.fields.titulo
     const descripcionDelProductoEl = template.content.querySelector(".descripcion-trabajo-portfolio");
      descripcionDelProductoEl.textContent = r.fields.descripcion
     
     const clone = document.importNode(template.content, true);
     contenedor.appendChild(clone)
     
     
    }   
}

function main(){
    fetch('https://cdn.contentful.com/spaces/1szg6teguakv/environments/master/entries?access_token=iNZcCaoE7pr5Nuj-9flaKY670q3Mo2EJlqz2UsH40vk&content_type=portfolio').then(function (res) {
        const respuestaJson = res.json();

        respuestaJson.then(function(json){
            productos = json.items;
         
            mostrarResultado(productos);
        })
    })

    const headerEl = document.querySelector(".header__componente")
    header(headerEl)

    const footerEl = document.querySelector(".footer__componente")
    footer(footerEl)

   
    
    
}

main();
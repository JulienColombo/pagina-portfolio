function footer (el) {
    var contenedorFooter = document.createElement("div");
    contenedorFooter.innerHTML = ` <div class="footer__contenedor">
    <div class="footer__contenedor-logo">
       <img class="footer__logo" src="./images/MARCE.png" alt="">
    </div>
    <div class="footer__redes">
        <div class="footer__red-social">
            
            <h6 class="footer__red-instagram">Instagram</h6>
            <img class="footer__logo-instagram" src="./images/instagram.png" alt="">
         </div>
        <div class="footer__red-social">
           
            <h6 class="footer__red-linkedin">Linkedin</h6>
            <img class="footer__logo-linkedin" src="./images/linkedin.png" alt="">
         </div>
        <div class="footer__red-social">
          
            <h6 class="footer__red-github">Github</h6>
            <img class="footer__logo-github" src="./images/github.png" alt="">
         </div>
    </div>
  </div>`

  el.appendChild(contenedorFooter)
}
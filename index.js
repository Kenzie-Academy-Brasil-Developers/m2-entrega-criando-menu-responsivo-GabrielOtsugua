function fazCaixaAparecer() {

    const abrir = document.querySelector(".btnAbrirCaixa")
    const fechar = document.querySelector(".btnFecharCaixa")
    const caixa = document.querySelector(".caixa")

    abrir.addEventListener("click", () => {
        
        abrir.style.display = "none"
        fechar.style.display = "block"
        caixa.style.display = "block"
    })
}
fazCaixaAparecer()


function fazCaixaFechar() {

    const fechar = document.querySelector(".btnFecharCaixa")
    const abrir = document.querySelector(".btnAbrirCaixa")
    const caixa = document.querySelector(".caixa")

    fechar.addEventListener("click", () => {

        fechar.style.display = "none"
        abrir.style.display = "block"
        caixa.style.display = "none"
    })
}
fazCaixaFechar()
// Aguarda até o que o conteudo da página estaja totalmente carregado.

document.addEventListener("DOMContentLoaded", () => {

    // Seleciona todos os elementos com a classe "contador".
    const contadores = document.querySelectorAll(".contador");

    // Itera/Incrementa sobre cada elemento de contadores aplicando a animação da contagem.
    contadores.forEach(contador => {

        // Valor inicial do contador.
        contador.innerText = "0";

        // Função que faz o contador aumentar gradativamente até o "data-alvo".
        const atualizarContador = () => {
            const alvo = +contador.getAttribute("data-alvo");
            const contagem = +contador.innerText;

            // Define o incremento que é uma fração do valor alvo para garantir uma rolagem mais suave.
            const incremento = alvo / 2000;

            if (contagem < alvo) {
                contador.innerText = Math.ceil(contagem + incremento);
                setTimeout(atualizarContador, 20);
            } else {
                contador.innerText = alvo;
            }
        };
        atualizarContador();
    })
})

function darkMode(){
    document.body.classList.toggle("dark-theme")
}

//------------------------------------------------------------------------//


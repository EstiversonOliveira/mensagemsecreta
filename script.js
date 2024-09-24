
function exibirAlerta() {
    const mensagemSecreta = "Ao ser confrontado o zelador confessou que o roubou para proteger seu conteúdo valioso antes que a biblioteca passasse por uma atualização que poderia apagá-lo. deveriam eles explorar essa nova descoberta ou informar as autoridades sobre o roubo? A escolha poderia alterar o destino do zelador e o futuro da biblioteca para sempre.";
    const elemento = document.querySelector(".texto");
    elemento.classList.add("texto-secreto");
    elemento.innerHTML = mensagemSecreta;
    document.querySelector("button").classList.add("remove");
}

const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");
const tituloListaComprados = document.getElementById("titulo-lista-comprados");

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

export function verificaListaVazia() {
    mensagemListaVazia.style.display = "none";
    tituloListaComprados.style.display = "block";
    if (listaDeCompras.querySelectorAll("li").length === 0) {
        mensagemListaVazia.style.display = "block";
    }
    if (listaComprados.querySelectorAll("li").length === 0) {
        tituloListaComprados.style.display = "none";
    }
}
import { verificaListaVazia } from "./verificaListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

let contador = 0;

export function criaContainerNomeCompra(item, itemDaLista) {
    const containerNomeCompra = document.createElement("div");
    containerNomeCompra.classList.add("container-nome-compra");

    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", (evento) => {
        mudaItemDeLista(evento, itemDaLista);
    });

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado")

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    checkboxContainer.appendChild(checkboxLabel);
    containerNomeCompra.appendChild(checkboxContainer);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item.value;
    containerNomeCompra.appendChild(nomeDoItem);

    return containerNomeCompra;
}

function mudaItemDeLista(evento, itemDaLista) {
    const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
    const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
    const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

    checkboxCustomizado.classList.remove("checked");
    itemTitulo.style.textDecoration = "none";
    listaDeCompras.appendChild(itemDaLista);
    verificaListaVazia();
    if (checkboxInput.checked) {
        checkboxCustomizado.classList.add("checked");
        itemTitulo.style.textDecoration = "line-through";
        listaComprados.appendChild(itemDaLista);
        verificaListaVazia();
    }
}
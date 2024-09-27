import { criaContainerBotoes } from "./criaContainerBotoes.js";
import { criaContainerNomeCompra } from "./criaContainerNomeCompra.js";

export function exibeItemListaContainer(item, itemDaLista) {
    const itemListaContainer = document.createElement("div");
    itemListaContainer.classList.add("item-lista-container");

    const containerNomeCompra = criaContainerNomeCompra(item, itemDaLista);
    const containerBotoes = criaContainerBotoes(itemDaLista);

    itemListaContainer.appendChild(containerNomeCompra);
    itemListaContainer.appendChild(containerBotoes);

    return itemListaContainer;
}
import { exibeData } from "./exibeData.js";
import { exibeItemListaContainer } from "./exibeItemListaContainer.js";

export function criarItemDaLista(item) {
    const itemDaLista = document.createElement("li");

    const itemListaContainer = exibeItemListaContainer(item, itemDaLista);
    const itemData = exibeData();
    
    itemDaLista.appendChild(itemListaContainer);
    itemDaLista.appendChild(itemData);
    
    return itemDaLista;
}
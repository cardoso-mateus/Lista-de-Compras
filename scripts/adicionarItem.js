import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificaListaVazia } from "./verificaListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault();
    if (item.value.trim()) {
        const itemDaLista = criarItemDaLista(item);
        listaDeCompras.appendChild(itemDaLista);
        verificaListaVazia();
    }
    item.value = "";
}
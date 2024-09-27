import { exibeData } from "./exibeData.js";

const editarItem = (elemento) => {
    let novoItem = prompt("Novo item");
    if (novoItem.trim()) {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const dataAtualizada = exibeData().textContent;
        const itemDataAtualizada = elemento.querySelector(".item-lista-texto");
        itemDataAtualizada.textContent = dataAtualizada;

        // const estavaComprado = elemento.querySelector(".checkbox-input").checked;

        // if (estavaComprado) {
        //     elemento.querySelector(".checkbox-input").checked = true;
        //     elemento.querySelector(".checkbox-customizado").classList.add("checked");
        //     itemTextoAtualizado.styel.textDecoration = "line-through";
        // }
    }
}

export { editarItem };
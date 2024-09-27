import { excluirItem } from "./excluirItem.js";
import { editarItem } from "./editarItem.js";

export function criaContainerBotoes(itemDaLista) {
    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("container-botao-acao");

    const botaoDelete = document.createElement("button");
    const imagemDelete = document.createElement("img");
    botaoDelete.classList.add("botao-acao");
    imagemDelete.src = "./img/delete.svg";
    imagemDelete.alt = "botão delete";

    botaoDelete.addEventListener("click", () => {
        excluirItem(itemDaLista);
    })

    botaoDelete.appendChild(imagemDelete);

    const botaoEdit = document.createElement("button");
    botaoEdit.classList.add("botao-acao");
    const imagemEdit = document.createElement("img");
    imagemEdit.src = "./img/edit.svg";
    imagemEdit.alt = "botão edit";

    botaoEdit.addEventListener("click", () => {
        editarItem(itemDaLista);
    })

    botaoEdit.appendChild(imagemEdit);

    containerBotoes.appendChild(botaoDelete);
    containerBotoes.appendChild(botaoEdit);
    return containerBotoes;
}
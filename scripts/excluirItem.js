import { verificaListaVazia } from "./verificaListaVazia.js"

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir este item?");
    if (confirmacao) {
        elemento.remove();
        verificaListaVazia();
    }
}

export { excluirItem };
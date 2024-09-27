import { adicionarItem } from "./scripts/adicionarItem.js";

const botaoSalvarItem = document.getElementById("botao-adicionar");
botaoSalvarItem.addEventListener("click", adicionarItem);
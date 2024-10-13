//PASSO 1
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//PASSO 2
listaSelecaoPokedevs.forEach((pokedev) => {
  pokedev.addEventListener("click", () => {
    //PASSO 3
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");

    //PASSO 4
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(
      idDoCartaoPokedevParaAbrir
    );
    cartaoPokedevParaAbrir.classList.add("aberto");

    //PASSO 5
    const pokedevNaListagem = document.querySelector(".ativo");
    pokedevNaListagem.classList.remove("ativo");

    //PASSO 6
    const pokedevSelecionadoNaListagem =
      document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
  });
});

const btnOrdernarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdernarPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    return exibirLivrosNaTela(livrosOrdenados);
}
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementeBtn = document.getElementById(this.id)
    const categoria = elementeBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirLivrosNaTela(livrosFiltrados)
}
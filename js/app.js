let valorTotal;
limpar();

function adicionar () {
    //recuperar valores nome do produto, valor e quantidade
    let produto = document.getElementById ('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnidade = produto.split('R$')[1];
    let quantidade = document.getElementById ('quantidade').value;
    let preco = quantidade * valorUnidade;
    //listar produtos selecionados no carrinho de compras
    let listaProdutos = document.getElementById ('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
    //calcular valor total da compra
    valorTotal = valorTotal + preco;
    let precoTotal = document.getElementById('valor-total');
    precoTotal.textContent = `R$ ${valorTotal}`;
    quantidade = document.getElementById ('quantidade').value = '';

}
function limpar () {
    valorTotal = 0;
    document.getElementById ('produto').value = '';
    document.getElementById ('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}


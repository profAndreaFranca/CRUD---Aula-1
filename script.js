let produtos = [];

const formProduto = document.getElementById("formProduto");
const listaProdutos = document.getElementById("lista-produtos");
const totalProdutos = document.getElementById("total-produtos");

function formatarPreco(valor) {
  const numero = Number(valor) || 0;

  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function atualizarTotalProdutos() {
  totalProdutos.textContent = produtos.length;
}

function mostrarProdutos(lista) {
  listaProdutos.innerHTML = "";

  lista.forEach(function (produto) {
    listaProdutos.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100">
          <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text">${produto.descricao}</p>
            <p class="preco">${formatarPreco(produto.preco)}</p>
            <button class="btn btn-primary botao-comprar">Comprar</button>
          </div>
        </div>
      </div>
    `;
  });

  atualizarTotalProdutos();
}

formProduto.addEventListener("submit", function (event) {
  event.preventDefault();

  const produto = {
    nome: document.getElementById("nomeProduto").value.trim(),
    descricao: document.getElementById("descricaoProduto").value.trim(),
    categoria: document.getElementById("categoriaProduto").value,
    preco: document.getElementById("precoProduto").value,
    imagem: document.getElementById("imagemProduto").value.trim(),
  };

  produtos.push(produto);
  mostrarProdutos(produtos);
  formProduto.reset();
});

mostrarProdutos(produtos);

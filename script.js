const btnCadastrar = document.getElementById('btnCadastrar')
const listaProdutos = document.getElementById("lista-produtos");

btnCadastrar.addEventListener('click',function(){
    console.log("Clicou!")
})


function mostrarProdutos(lista) {
  listaProdutos.innerHTML = "";
  lista.forEach(function (produto) {
    listaProdutos.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100">
          <img 
            src="${produto.imagem}" 
            class="card-img-top"
          >
          <div class="card-body">
            <h5 class="card-title">
              ${produto.nome}
            </h5>
            <p class="card-text">
              ${produto.descricao}
            </p>
            <p class="preco">
              ${produto.preco}
            </p>
            <button class="btn btn-primary botao-comprar">
              Comprar
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

mostrarProdutos(produtos);
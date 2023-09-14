console.log("tá funcionando!");

//1 e 2: adicionando link para nova página

// selecionando a lista de links
let listaMenu = document.querySelector("header .menu nav ul");

// criando o novo elemento
let novoItemMenu = "<li> <a href='quem-somos.html'> Quem Somos </a> </li>";

// adicionando o novo link no HTML
listaMenu.innerHTML += novoItemMenu;

// 3 - alterar texto

// selecionando elemento
let tituloReceitasPrincipais = document.querySelector(
  ".receitas-principais h2"
);

if (tituloReceitasPrincipais) {
  // alterando texto
  tituloReceitasPrincipais.innerText = "receitas de sucesso";
}

// 4 - alterar style dos botões

// selecionando os botões
let botoesReceitas = document.querySelectorAll(".lista-receitas article a");

// verificando se o elemento existe
if (botoesReceitas.length) {
  // testando se selecionamos os elementos corretos
  // console.log(botoesReceitas);

  // adicionando border-radius em cada botão encontrado
  // forEach significa "para cada", ou seja, para cada botão, altere o style.borderRadius
  botoesReceitas.forEach((botao) => {
    botao.style.borderRadius = "30px";
  });
}

// 5 - alterar cor dos títulos

// selecionando os titulos
let titulosPaginaInterna = document.querySelectorAll(
  ".container-receita-interna h1, .container-receita-interna h2"
);

// verificando se selecionei os elementos corretamente
// console.log(titulosPaginaInterna);

titulosPaginaInterna.forEach((titulo) => {
  titulo.style.color = "#FFA000";
});

// 6 - adicionando conteudo dinamico
let novasReceitas = [
  {
    titulo: "Carbonara",
    imagem:
      "https://static.itdg.com.br/images/1200-675/00476ffdd307a762beb387d9f3da0ae1/321428-original.jpg",
    link: "receita.html",
  },
  {
    titulo: "Brownie",
    imagem:
      "https://www.cozinhatecnica.com/wp-content/uploads/2019/10/brownie.jpg",
    link: "receita.html",
  },
  {
    titulo: "Acarajé",
    imagem:
      "https://assets.delirec.com/images/jrll1HtWA3bnm8lUmAkEsV2l2rk1/recipe/9ca2d722-53ca-441f-adb4-fa5bdfaca496-Acaraj%C3%A9-da-Bahia-gallery-0",
    link: "receita.html",
  },
];

let novasReceitasHtml = "";

novasReceitas.forEach((receita) => {
  novasReceitasHtml += `
        <article>
            <div class="thumb" style="background-image: url(${receita.imagem});"></div>
            <h3>${receita.titulo}</h3>
            <a href="${receita.link}">conferir</a>
        </article>
    `;
});

let containerReceitasPrincipais = document.querySelector(
  ".receitas-principais .lista-receitas"
);

if (containerReceitasPrincipais) {
  containerReceitasPrincipais.innerHTML = novasReceitasHtml;
}
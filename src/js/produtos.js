


// MODAL



//seleciona o fundo do modal
const fade = document.querySelector(".fade");

//cria a função de abrir e fechar modal
function toggleModal(id){

    //seleciona o modal clicado (parametro da função fica no onclick do HTML)
    const modal = document.getElementById(id);
    
    //se o modal estiver fechado, então vai tirar a classe que o esconde
    //se o modal estiver aberto, vai colocar a div que o esconde
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
    //Obs: nunca estarão 2 modais abertos, então o fade não precisa ser criado em cada modal, basta ter 1 dentro da página que quando for chamada a função, seja ativado
}



// CARDS



//declara em uma coleção cada um das categorias do menu
const cafe = document.getElementsByClassName("cafe");
const acc = document.getElementsByClassName("acc");
const others = document.getElementsByClassName("others");

//declara os botões que irão abrir cada coleção
const openCafe = document.getElementById("open1");
const openAcc = document.getElementById("open2");
const openOthers = document.getElementById("open3");

//adiciona os eventos para o click em cada um das divs
openCafe.addEventListener("click", () => showCard(openCafe, cafe));
openAcc.addEventListener("click", () => showCard(openAcc, acc));
openOthers.addEventListener("click", () => showCard(openOthers, others));

function showCard(btn, tag) {

    //reseta todos os botões para não ter 2 botões ativos ao mesmo tempo
    document.querySelectorAll("#open1, #open2, #open3").forEach(button => button.classList.remove("active"));

    //desabilita todas as categorias para não haver conflito
    const classes = [...cafe, ...acc, ...others];
    classes.forEach(element => element.classList.remove("active"));
    //OBS: cada uma das categorias são Coleções HTML, logo, para poder se colocar ou retirar é preciso coloca-lás num array e usar o for each para retirar em cada uma, o ... antes dos nomes tranforma a coleção em array para isso, fazendo com que a variável classes seja um array com todos as categorias, permitindo o for each de remover a classe active de todos

    //adiciona a classe active para o botão clicado
    btn.classList.add("active");
    //adiciona a classe active para todos os elementos da categoria
    Array.from(tag).forEach(element => element.classList.add("active"));
    //OBS: Array.from() serve para transformar a coleção de HTML em um array, onde cada elemento ocupa uma posição, e o forEach() entra em cada uma dessas posições e adiciona a classe active
}



// PREÇOS E NUMERADOR MODAL



//declara uma variável que contem todos os modais
const modals = document.querySelectorAll(".modal");

    //modals é um array, logo o for each entra em cada um desses modais e executa a função
    modals.forEach(modal => {

        //declara as variáveis principais: preço, numerador e botões mais e menos.
        const price = modal.querySelector(".price-value");
        const num = modal.querySelector(".n-card");
        const minus = modal.querySelector(".minus");
        const plus = modal.querySelector(".plus");

        //define que a quantidade inicial sempre será 1
        let quantity = 1;

        //cria a variável preço base, que será definido pelo atributo preço base do HTML, setado em cada modal
        const baseprice = parseFloat(modal.getAttribute('base-price'));

        //cria a função principal, que atualiza o preço do modal
        function uptdPrice (){
            //define que o conteudo do preço é o preço base multiplicado pela quantiadade, e tofixed(2) define que sempre haverá duas casas após a vírgula
            price.textContent = (baseprice * quantity).toFixed(2);
        };

        //cria um evento de click para o botão menos
        minus.addEventListener("click", () => {
            //só ocorrerá se a quantidade for de 1 para cima, para evitar que o cliente coloque 0 ou valores negativos, o que quebraria o calculo do carrinho
            if(quantity > 1){
                //diminui a quantidade
                quantity--;
                //altera o conteudo do preço e executa a função
                num.textContent = quantity;
                uptdPrice();
            }
        });

        //cria um evento de click para o botão mais
        plus.addEventListener("click", () =>{
            //aumenta a quantidade, muda o conteudo do numerador e executa a função de mudar o preço
            quantity++;
            num.textContent = quantity;
            uptdPrice();
        });

        //sempre executará esta função quando se carregar o site, para garantir que não haja nenhum erro de geração. Então os preços são colocados quando esta função for executada
        uptdPrice();
    });

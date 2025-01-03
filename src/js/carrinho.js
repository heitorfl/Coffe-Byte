



// ADICIONAR AO CART




function addCart(id, nome){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const modal = document.getElementById(id);
    const priceElement = modal.querySelector('.price-value');
    const price = parseFloat(priceElement.textContent);

    const product = {id, nome, price};

    const produtoExistente = cart.find(item => item.id === id);
    if(produtoExistente){
        alert(`Você já adicionou ${nome} ao carrinho`);
        return;
    }

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${nome} foi adicionado ao carrinho!`)
}

function loadCart(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSection = document.getElementById('section-cart');
    cartSection.innerHTML = '';

    if(cart.length === 0){
        const cartVazio = document.createElement('p');
        cartVazio.classList.add('empty-cart');
        cartVazio.textContent = "O carrinho está vazio.";
        cartSection.appendChild(cartVazio);
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-cart');
        itemDiv.innerHTML = `
            <div class="product-text">
                <h3 class="product-title">${item.nome}</h3>
                <p class="product-price-text">Preço:<span class="product-price"> R$${item.price}</span></p>
            </div>
            <div class="product-btn">
                <button class="remove-cart"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        const removeBtn = itemDiv.querySelector('.remove-cart');
        removeBtn.addEventListener('click', () => removeCart(item.id));

        cartSection.appendChild(itemDiv);
    });
    cartPrice();
}

if (window.location.pathname.includes('carrinho.html')) {
    loadCart();
}

function removeCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const updCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updCart));
    loadCart();
    cartPrice();
    alert(`Produto removido do carrinho.`);
}

function cartPrice(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let allPrices = 0;

    cart.forEach(item => {
        
        allPrices += item.price;

    })

    allPrices = parseFloat(allPrices.toFixed(2))

    const priceDiv = document.getElementById("priceDiv");
    priceDiv.innerHTML = `${allPrices}`
}
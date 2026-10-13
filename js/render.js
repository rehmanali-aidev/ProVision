function elementMaker(tag, className, text) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

export function renderCard(product) {
    const card = elementMaker('li', 'product-card');
    
    const productimg = elementMaker('img', 'product-image');
    productimg.src = product.image;
    productimg.alt = product.name;
    
    const productName = elementMaker('h2', 'productName', product.name);
    const productCategory = elementMaker('h3', 'productCategory', `Category: ${product.category}`);
    const productPrice = elementMaker('p', 'productPrice', `$${product.price}`);
    const productSpecs = elementMaker('p', 'productSpecs', product.specs);
    
    const footer = elementMaker('div', 'pfooter');
    footer.append(productSpecs, productPrice);
    card.append(productimg, productName, productCategory, footer);
    return card;
}

export function renderProducts(productsArray,cardcontainer) {
    const cards = productsArray.map((renderCard));

    cardcontainer.replaceChildren(...cards)
}
export function renderCategories(productsArray, selectedElement) {
    const rawCategories = productsArray.map(product => product.category);
    const uniqueCategories = [...new Set(rawCategories)];
    const options = uniqueCategories.map(category => {
        const opt = elementMaker('option', 'categories-opt', category);
        opt.value = category.toLowerCase(); 
        return opt;
    });
    selectedElement.append(...options);
}
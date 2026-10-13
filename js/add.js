import { fetchProducts } from './api.js';

export function setupAdminForm(formElement) {
    formElement.addEventListener('submit', async (event) => {
       try{
         event.preventDefault();

        const products = await fetchProducts();
        const input_value = document.querySelector('#p-name').value;
        const img_value = document.querySelector('#p-image').value;
        const specs_value = document.querySelector('#p-specs').value;
        const price_value = document.querySelector('#p-price').value;
        const category = document.querySelector('#p-category').value;
        
        const newProduct = {
            id: Date.now(),
            name: input_value.trim(),
            category: category.trim(),
            price: Number(price_value),
            image: img_value || 'https://picsum.photos/seed/100/800/600',
            specs: specs_value.trim(),
        };

        products.push(newProduct);
        localStorage.setItem('proVision-product', JSON.stringify(products));

        formElement.reset();
        alert('Product added successfully!');
       }catch(error){
        console.log('Facing',error)
       }
    });
}
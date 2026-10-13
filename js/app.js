import { fetchProducts } from './api.js';
import { renderProducts, renderCategories } from './render.js';
import { filteringfunc } from './filter.js';
import { setupAdminForm } from './add.js';


const adminForm = document.querySelector('#add-product-form');
const ul = document.querySelector('.products');

let products = [];

async function initApp() {
    try{
        products = await fetchProducts()
        if(ul){
            const input = document.querySelector('#search')
            const select = document.querySelector('#cate')
            const sort = document.querySelector('#sort')
            renderProducts(products,ul)
            renderCategories(products,select)
            function updateView(){
                const visibleproduct = filteringfunc(products,input.value,select.value,sort.value)
                renderProducts(visibleproduct,ul)
            }
            input.addEventListener('input',updateView)
            select.addEventListener('change',updateView)
            sort.addEventListener('change',updateView)
        }
        if(adminForm){
            setupAdminForm(adminForm)
        }
    }catch{
        throw new Error('error')
    }
}

initApp();
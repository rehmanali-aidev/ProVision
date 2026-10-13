export async function fetchProducts(){
    const storedproducts = localStorage.getItem('proVision-product');
    if(storedproducts){
        return JSON.parse(storedproducts)
    }
    const response = await fetch('./data/product.json');
    const data = await response.json();
    localStorage.setItem('proVision-product',JSON.stringify(data))
    return data;
}
export function filteringfunc(product, inputvalue, selectvalue, sortvalue) {
    let visibleproduct = [...product];

    const normalizedinput = inputvalue.trim().toLowerCase();

    if (normalizedinput !== '') {
        visibleproduct = visibleproduct.filter((item) => {
            return item.name.toLowerCase().includes(normalizedinput);
        });
    }
    if (selectvalue !== 'all') {
        visibleproduct = visibleproduct.filter((item) => {
            return item.category.toLowerCase() === selectvalue.toLowerCase();
        });
    }
    if (sortvalue === 'price-desc') {
        visibleproduct.sort((a, b) => b.price - a.price);
    } else if (sortvalue === 'price-asc') {
        visibleproduct.sort((a, b) => a.price - b.price);
    }
    return visibleproduct;
}

export const fetchProducts = async () => await fetch("https://5fc9346b2af77700165ae514.mockapi.io/products").then(res => res.json());
export const fetchProduct = async (id: number) => await fetch(`https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`).then(res => res.json());

function showData(data) {
    // El for itera sobre los elementos del array
    for (const product of data) {
    const mostrar = document.getElementById("Mostrarfetch");
    mostrar.innerHTML += ` <h5> ${product.name}-${product.currency} ${product.cost}</h5> <img width="300"src="${product.image}"/> ${product.description} ${product.soldCount} vendidos<hr>` ;
    }
    }
    async function loadData() {
    let response = await fetch('https://japceibal.github.io/emercado-api/cats_products/101.json');
    let data = await response.json();
    showData(data.products);
    
    }
    
    loadData();
    
    
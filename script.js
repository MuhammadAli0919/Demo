document.addEventListener('DOMContentLoaded', () => {
    loadFurniture();
    loadConstruction();
    loadArchitecture();
});

function loadFurniture() {
    const furnitureContainer = document.getElementById('furniture-container');
    furnitureData.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price}</p>
        `;
        furnitureContainer.appendChild(productDiv);
    });
}

function loadConstruction() {
    const constructionContainer = document.getElementById('construction-container');
    constructionData.forEach(package => {
        const packageDiv = document.createElement('div');
        packageDiv.classList.add('package');
        packageDiv.innerHTML = `
            <h3>${package.name}</h3>
            <p>${package.description}</p>
            <p>Price: $${package.price}</p>
        `;
        constructionContainer.appendChild(packageDiv);
    });
}

function loadArchitecture() {
    const architectureContainer = document.getElementById('architecture-container');
    architectureData.forEach(service => {
        const designDiv = document.createElement('div');
        designDiv.classList.add('design');
        designDiv.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p>Price: $${service.price}</p>
        `;
        architectureContainer.appendChild(designDiv);
    });
}

function showAllFurniture() {
    alert("Redirecting to Furniture Store page...");
    // Add redirect or load more content
    window.location.href = "#furniture";
}

function requestQuote() {
    alert("Redirecting to quote request form...");
    // Redirect or open quote request form
}

function scheduleConsultation() {
    alert("Redirecting to consultation scheduling...");
    // Redirect or open scheduling form
}

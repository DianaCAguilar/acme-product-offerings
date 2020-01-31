let productsArr = [];


const offerings = fetch('https://acme-users-api-rev.herokuapp.com/api/offerings')
    .then(response => response.json())

const companies = fetch('https://acme-users-api-rev.herokuapp.com/api/companies')
    .then(response => response.json())

const products = fetch('https://acme-users-api-rev.herokuapp.com/api/products')
    .then(response => response.json())

const data = Promise.all([offerings, companies, products])
    .then(result => {
        const [offerings, companies, products] = response;
        const processed = products.map(product => {
            product.offerings = offerings.filter(offering => offering.productId === product.id);
            product.offerings.forEach(offering => {
                const company = companies.find(company => company.id === offering.companyId)
                pfferong.company = company;
            })
            return product;
        })
        return processed;
    }
)

let card = {
    name: products.name,
    description: products.description,
    offerings: [offerings.productId]
}


// console.log(card);

const productsList = document.querySelector('#products')

const renderProduct = (products) => {
    const html = products.map((product) => {
        return `<li >${product.name}</li>`
    }).join('');
    productsList.innerHTML = html;
}

 console.log(products[0])



//  /////
//  const companiesPromise = fetch(`API/companies`)
//     .then(response => response.json());
// companiesPromise.then(companies => console.log(companies))
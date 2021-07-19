const productsAdd = [
    {
        name: "Ring",
        price: '10000',
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/502112FUSAL48_1.jpg?impolicy=pqmed&imwidth=640',

    },
    {
        name: 'Ring',
        price: '8999',
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/741188FWEAE38_1.jpg?impolicy=pqmed&imwidth=640',

    },
    {
        name: 'Ring',
        price: '9893',
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/502112FUPAW48_1.jpg?impolicy=pqmed&imwidth=640',

    },
    {
        name: 'Ring',
        price: '10098',
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/501053FAHAN63_1.jpg?impolicy=pqmed&imwidth=640',

    },
    {
        name: 'Ring',
        price: '100001',
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/501145FSMAR42_1.jpg?impolicy=pqmed&imwidth=640',

    },
    {
        name: 'Ring',
        price: '100347',
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/502112FUKAC51_1.jpg?impolicy=pqmed&imwidth=640',

    },
    {
        name: 'Ring',
        price: '10004',
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/501090FGFAT55_1.jpg?impolicy=pqmed&imwidth=640',

    },
    {
        name: 'Ring',
        price: '92839',
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/501090FKRAX67_1.jpg?impolicy=pqmed&imwidth=640',

    }
]
//console.log("productsAdd", productsAdd);

if (localStorage.getItem("productsAdd") == null) {
    localStorage.setItem("productsAdd", JSON.stringify("productsAdd"));
}


function showproducts(d) {
    let products = d;
    let products_div = document.getElementById("product");
    products_div.innerHTML = null;

    productsAdd.forEach(function (el) {
        let div = document.createElement("div");
        let p_name = document.createElement('p');
        p_name.innerText = el.name;

        let p_price = document.createElement('p');
        p_price.innerHTML = `Rs: ${el.price}`;
        //console.log(p_price);

        let img = document.createElement("img");
        img.src = el.img;

        let btn = document.createElement("button");
        btn.innerHTML = `Add to Cart`;

        div.append(img, p_name, p_price, btn);
        products_div.append(div);

    });
}
showproducts(JSON.parse(localStorage.getItem("productsAdd")));

function sortLH() {
    let products = JSON.parse(localStorage.getItem("productsAdd"));
    products = productsAdd.sort(function (a, b) {
        return a.price - b.price;
    })
}


function sortHL() {
    let products = JSON.parse(localStorage.getItem("productsAdd"));
    products = products.sort(function (a, b) {
        return b.price - a.price;
    })
}




	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.98,
		organic: false,
		image: "broccoli.jpg",
		type: "fruit"
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		price: 1.5,
		organic: true,
		image: "apple.jpg",
		type: "fruit"
	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		price: 0.75,
		organic: true,
		image: "banana.jpg",
		type: "fruit"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: false,
		image: "bread.jpg",
		type: "grain"
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		price: 4.25,
		organic: false,
		image: "pasta.jpg",
		type: "grain"
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		price: 3.50,
		organic: false,
		image: "cheese.jpg",
		type: "dairy"
	},
	{
		name: "chocolate",
		vegetarian: true,
		glutenFree: false,
		price: 0.99,
		organic: false,
		image: "chocolate.jpg",
		type: "other"
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		price: 5.00,
		organic: true,
		image: "chicken.jpg",
		type: "protein"
	},
	{
		name: "egg",
		vegetarian: true,
		glutenFree: true,
		price: 3.00,
		organic: true,
		image: "egg.jpg",
		type: "protein"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: false,
		image: "salmon.jpg",
		type: "protein"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	let filteredProducts = filterProducts(restrictions);

	//sort by price
	filteredProducts.sort((a, b) => (a.price > b.price) ? 1 : -1);


	let product_names = [];
	let product_prices = [];
	let product_img = [];
	let product_type = [];
	for (let i=0; i<filteredProducts.length; i+=1) {
		product_names.push(filteredProducts[i].name);
		product_prices.push(filteredProducts[i].price);
		product_img.push(filteredProducts[i].image);
		product_type.push(filteredProducts[i].type)
	}
	return [product_names, product_prices, product_img, product_type];
}


//filters with all restrictions and returns array of filtered products
function filterProducts(restrictions) {
	let filteredProducts = [];
	let flag = true;

	for(let i = 0; i < products.length; i+=1){
		for(let j = 0; j < restrictions.length; j+=1){
			if(!products[i][restrictions[j]]){
				flag = false;
			}
		}

		if(flag){
			filteredProducts.push(products[i]);
		}

		flag = true;
	}

	return filteredProducts;
}
// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function getPrice(name) {
	for (let i=0; i<products.length; i+=1) {
		if (products[i].name === name){
			return products[i].price;
		}
	}
}

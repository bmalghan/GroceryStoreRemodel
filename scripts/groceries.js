	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: false,
		image: "broccoli.jpg"
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true,
		image: "apple.jpg"
	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true,
		image: "banana.jpg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: false,
		image: "bread.jpg"
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		price: 4.00,
		organic: false,
		image: "pasta.jpg"
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		price: 4.50,
		organic: false,
		image: "cheese.jpg"
	},
	{
		name: "chocolate",
		vegetarian: true,
		glutenFree: false,
		price: 0.99,
		organic: false,
		image: "chocolate.jpg"
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		price: 5.00,
		organic: true,
		image: "chicken.jpg"
	},
	{
		name: "egg",
		vegetarian: true,
		glutenFree: true,
		price: 3.00,
		organic: true,
		image: "egg.jpg"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: false,
		image: "salmon.jpg"
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
	for (let i=0; i<filteredProducts.length; i+=1) {
		product_names.push(filteredProducts[i].name);
		product_prices.push(filteredProducts[i].price);
		product_img.push(filteredProducts[i].image);
	}
	return [product_names, product_prices, product_img];
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

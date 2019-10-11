function countProfit(shoppers) {
	let listBarang = [
		['Sepatu Stacattu', 1500000, 10],
		['Baju Zoro', 500000, 2],
		['Sweater Uniklooh', 175000, 1],
	];

	if (shoppers[0] === undefined) {
		return [];
	}

    //creat object Shoes, Shirt, and Sweater
	var shoes = {};
	var shoesShoppers = [];
	var shoesAmount = 0;
	var shoesLeft = listBarang[0][2];

	var shirt = {};
	var shirtShoppers = [];
	var shirtAmount = 0;
	var shirtLeft = listBarang[1][2];


	var sweater = {};
	var sweaterShoppers = [];
	var sweaterAmount = 0
	var sweaterLeft = listBarang[2][2];

	//tampung semuah nilai object
	var result = [];

	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < shoppers.length; j++) {
			//looping untuk object shoes
			if (i === 0) {
				shoes.product = listBarang[i][0];
				//console.log(shoes.product);
				if (shoppers[j].product === 'Sepatu Stacattu') {
					if (shoppers[j].amount <= shoesLeft && shoppers[j].amount > 0) {
						shoesShoppers.push(shoppers[j].name);
						shoesAmount = shoesAmount + shoppers[j].amount;
						shoesLeft = shoesLeft - shoppers[j].amount;
					}
				}
				shoes.shoppers = shoesShoppers;
				shoes.leftOver = shoesLeft;
				shoes.TotalProfit = listBarang[0][1] * shoesAmount;
			} else if (i === 1) {
				//looping untuk object shirt
				shirt.product = listBarang[i][0];
				//console.log(shirt.product);
				if (shoppers[j].product === 'Baju Zoro') {
					if (shoppers[j].amount <= shirtLeft && shoppers[j].amount > 0) {
						shirtShoppers.push(shoppers[j].name);
						shirtAmount = shirtAmount + shoppers[j].amount;
						shirtLeft = shirtLeft - shoppers[j].amount;
					}
				}
				shirt.shoppers = shirtShoppers;
				shirt.leftOver = shirtLeft;
				shirt.TotalProfit = listBarang[1][1] * shirtAmount;
			} else if (i === 2) {
				sweater.product = listBarang[i][0];
				//console.log(sweater.product);
				if (shoppers[j].product === 'Baju Zoro') {
					if (shoppers[j].amount <= sweaterLeft && shoppers[j].amount > 0) {
						sweaterShoppers.push(shoppers[j].name);
						sweaterAmount = sweaterAmount + shoppers[j].amount;
						sweaterLeft = sweaterLeft - shoppers[j].amount;
					}
				}
				sweater.shoppers = sweaterShoppers;
				sweater.leftOver = sweaterLeft;
				sweater.TotalProfit = listBarang[2][1] * sweaterAmount;
			}
		}
	}
	result.push(shoes, shirt, sweater);
	//console.log(result);
	return result;
}

// TEST CASES
console.log(
	countProfit([
		{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
		{ name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
		{ name: 'Rani', product: 'Sweater Uniklooh', amount: 2 },
	])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
	countProfit([
		{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
		{ name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
		{ name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
		{ name: 'Devi', product: 'Baju Zoro', amount: 1 },
		{ name: 'Lisa', product: 'Baju Zoro', amount: 1 },
	])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
	countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]

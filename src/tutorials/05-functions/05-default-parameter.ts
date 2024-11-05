function calcPrice(price: number, discount: number = 0): number {
	return price - discount;
}

const finalPrice = calcPrice(100, 20);
console.log(finalPrice);

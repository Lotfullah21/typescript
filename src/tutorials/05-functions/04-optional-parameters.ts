function calcPrice(price: number, discount?: number): number {
	return price - (discount || 0);
}

const finalPrice = calcPrice(100, 20);
console.log(finalPrice);

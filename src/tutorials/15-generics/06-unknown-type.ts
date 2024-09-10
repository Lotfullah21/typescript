interface StoreData<T = any> {
	data: T[];
}

const storeRandomData: StoreData = {
	data: [1, 2, 3],
};

console.log(storeRandomData);

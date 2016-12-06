function findSum() {
	var i, sum = 0;
	for(i = 0; i < arguments.length; i++) {
		sum+=arguments[i];
	}
	return sum;
}

var output1 = findSum(10, 20, 30);
console.log(output1);

var output2 = findSum(1, 2, 3, 4, 5);
console.log(output2);
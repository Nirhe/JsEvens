var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,  51,80, 100] ;

function removeOdd(arr, i) {
 
  if (i === undefined) {
		i = 0;
		return removeOdd(arr,i);
	}
	if (i === arr.length){
		
		return arr;
	}
	 if (arr[i] % 2 !== 0) {
		arr.splice(i,1);
	
		return removeOdd(arr, i);
	}
	return removeOdd(arr, i+1);
}

removeOdd(numbers);

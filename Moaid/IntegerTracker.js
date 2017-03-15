var IntegerTracker = function(){
	this.array = [];
	this.mean = 0;


}

IntegerTracker.prototype.insert = function(input){
	this.array.push(input);
	sort(array);
	return;


}

IntegerTracker.prototype.get_mean = function(){
	var count = 0;

	for (var i = 0; i < this.array.length-1; i ++){
		count += this.array[i];

	}

	var result = count / this.array.length;
	return result;

}


IntegerTracker.prototype.get_max = function (){
	return this.array[this.array.length-1];
}
IntegerTracker.prototype.get_min = function(){
	if (this.array[0]){


	return this.array[0]
	}
}



IntegerTracker.prototype.sort = function (input){

	var swap = function (index1, index2){
      var temp = input[index1];
      input[index1] = input[index2];
      input[index2] = temp;
    }

	var recurse = function(start, end){
	  if (end - start <= 0){
	    return;
	  }
	   var pivot = end;
	   var high = pivot - 1;
	   var low = start;

	   while (input[low] < input[pivot]){

	    if (low < end){
	    low++;
	    } 
	    else break;
	   }

	   while(input[high] > input[pivot]){
	    if(high > start){
	    high--;
	    }
	    else break;
	   }

	   if (high != low){
	    swap(high,low);

	   }

	   if (low >= high){
	    swap(pivot,low);
	   }

	   recurse(start,low);
	   recurse(low,end);
	}

	return recurse(0,input.length-1);




}

console.log(IntegerTracker.insert(5));
console.log(IntegerTracker.insert(20));
console.log(IntegerTracker.insert(3));
console.log(IntegerTracker.insert(45));
console.log(IntegerTracker.insert(6));
console.log(IntegerTracker.get_min());



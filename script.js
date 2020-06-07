let counter = document.querySelector('.counter');
let upCount = document.querySelector('#upperCountBtn');
let downCount = document.querySelector('#lowerCountBtn');


let count =0;

upCount.addEventListener('click', incrementCounter);
downCount.addEventListener('click', decrementCounter);

function incrementCounter(){
	count++;
	counter.innerHTML = count;

	if(counter.innerHTML >'0'){
		counter.style.color = '#f15025';
	} else if(counter.innerHTML ==='0'){
		counter.style.color ='#fff';
	} 

	counter.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration:1000, fill:'forwards'});

	

}

function decrementCounter(){
	count--;
	counter.innerHTML = count;

	if(counter.innerHTML <'0'){
		counter.style.color = '#b0070d';
	} else if(counter.innerHTML ==='0'){
		counter.style.color ='#fff';
	} 

	counter.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration:1000, fill:'forwards'});

}
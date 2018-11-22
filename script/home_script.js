let menu = document.querySelector('.menu');
let headerNav = document.querySelector('.nav');

let navStatus = false;

menu.addEventListener('click' , function(){
	if(navStatus == false){
		headerNav.setAttribute('style' , 'visibility : visible ; opacity : 1  ');
		navStatus = true;
	}else if(navStatus == true){
		headerNav.setAttribute('style' , 'visibility : hidden ; opacity : 0 ');
		navStatus = false;
	}
	
});


let logOut = document.querySelector('.log-out').firstChild;
logOut.addEventListener('click' , function(){
	location.href = 'index.html';
})

let headingDetails = document.querySelector('.heading-details');
let headingBtn = document.querySelector('.heading-btn');
let headingSeeMore = document.querySelector('.heading-seemore');
let headingStatus = false;

headingBtn.addEventListener('click' , function(){
	if(headingStatus == false){
		headingDetails.setAttribute('style' , 'height : 130px');
		headingBtn.innerHTML = 'Hide'
		headingSeeMore.setAttribute('style' , 'opacity : 1');
		headingStatus = true;
	}else if(headingStatus == true){
		headingDetails.setAttribute('style' , 'height : 46px');
		headingBtn.innerHTML = 'See more'
		
		headingSeeMore.setAttribute('style' , 'opacity : 0 ');
		headingStatus = false;
	}
})

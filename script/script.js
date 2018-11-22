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

let username = 'admin';
let logBtn	= document.getElementById('log-btn');
let deniedLog = document.querySelector('.denied-log');


logBtn.addEventListener('click' , function(){
	let logUsername	= document.getElementById('log-username').value;
	let logPassword = document.getElementById('log-password').value;
	
	if(logUsername == null || logUsername == ""){
		alert('* Username required');
	}else if(logPassword == null || logPassword == ""){
		alert('* Password required');
	}
	else if(logUsername == 'admin' && logPassword == 'admin'){
		location.href='home.html';
	}else if(logUsername != 'admin' || logPassword != 'admin'){
		deniedLog.setAttribute('style' , 'visibility : visible');
	}
});


let deniedReg = document.querySelector('.denied-reg');
let regBtn = document.querySelector('#reg-btn');

regBtn.addEventListener('click' , function(){
	deniedReg.setAttribute('style' , 'visibility : visible');
})

let about = document.querySelector('.about');

about.children[0].addEventListener('click' , function(){ window.scrollTo({ top : 900, behavior : 'smooth' }); });






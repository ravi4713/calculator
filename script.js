var cal="";//global variable to hold number and operators

function addClick(){
	var btn;
	for (var i=0;i<16;i++){
		btn=document.getElementById("id-"+i)
		btn.addEventListener("click",function() {
			getValue(this);
		} );
	}
}
//addClick function to add eventlistener click 
//when user click update value in cal

function getValue(box){
	var number=box.innerHTML;
	if (number == "/"){
		cal+="/";
		show(cal);
	}else if (number == "*"){
		cal+="*";
		show(cal);
	}
	else if (number == "-"){
		cal+="-";
		show(cal);
	}else if (number == "+"){
		cal+="+";
		show(cal);
	}
	else if (number == "."){
		cal+=".";
		show(cal);
	}
	else if (number == "="){
		
		
		calculate(cal);
	}else{
		cal+=number;
		show(cal);
	}
	
}
//getvalue function to get value and update in cal

function show(msg){
	document.getElementById("screen").innerHTML=msg;
}
//show function for showing message on screen
function calculate(num){
	
	var output = eval(num);
	show(output);
	cal=output;
	
}
//for calculation
document.getElementById("btn").addEventListener("click",reset);

function reset(){
	cal="";
	show(" ");
}
// for reset ,of screen
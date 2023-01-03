document.querySelector("#convert-btn").addEventListener("click",CaseStyle);

function CaseStyle(){
	document.querySelector("#pascal-case").innerHTML = get_text_pascal();
	document.querySelector("#camel-case").innerHTML = get_text_camel();
	document.querySelector("#snake-case").innerHTML = get_text_snake();
	document.querySelector("#screaming-snake-case").innerHTML = get_text_Screaming();
	document.querySelector("#kebab-case").innerHTML = get_kebab_Text();
	document.querySelector("#screaming-kebab-case").innerHTML = get_kebab_case();
}
function get_text_camel(){

	var input_text = document.querySelector("#text").value;
	return input_text
	.toLowerCase()
	.split(" ")
	.map((a)=>a.trim())
	.map((a)=>a[0].toUpperCase() + a.substring(1))
	.join("")
}

function get_text_pascal(){
	var input_text = document.querySelector("#text").value;
	return input_text
	.split(" ")
	.map((a)=> a.trim())
	.map((a)=>a[0].toUpperCase()+a.substring(1))
	.join("")
}
function get_text_snake(){
	var input_text = document.querySelector("#text").value;
	return input_text[0].toLowerCase() + input_text.slice(1).split(" ").join("_");
}
function get_text_Screaming(){
	var input_text_screaming = document.querySelector("#text").value;
	return input_text_screaming
	.toUpperCase()
	.split(" ")
	.join("_")
}
function get_kebab_Text(){
var input_kebab_text = document.querySelector("#text").value;
return input_kebab_text
.toLowerCase()
.split(" ")
.join("_")

}
function get_kebab_case(){
	var input_text_kebab = document.querySelector("#text").value;
	return input_text_kebab
	.toUpperCase()
	.split(" ")
	.join("_")
}

var one=document.querySelector("#one");
var two=document.querySelector("#two");
var plr1=document.querySelector("#plr1");
var plr2=document.querySelector("#plr2");
var reset=document.querySelector("#reset");
var p11=0;
var p12=0;
var ws=document.querySelector("#ws");
one.addEventListener("click", function(){
if(ws.textContent>p11)	
	{
		p11++;
	//console.log(p11);
	plr1.textContent=p11;
}
else
plr1.style.font})
two.addEventListener("click", function(){
if(ws.textContent>p12)
	{	
	p12++;
	//console.log(p11);
	plr2.textContent=p12;
}})

reset.addEventListener("click", function(){
	//p12++;
	//console.log(p11);
	p11=0;
	p12=0;
	plr1.textContent=0;
	plr2.textContent=0;
})
if(ws.textContent==p11)
{
	document.span.style.background="green";
	//="green";
}
if(ws.textContent==p12)
{
	plr2.style.background="green";
}
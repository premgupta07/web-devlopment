/*var fname=prompt("What is your first name?");
var lname=prompt("What is your last name?");
var age=prompt("What is your age?");
alert("Welcome to our website "+fname+" "+lname);
alert("You are "+age+" years old brat.");
console.log("Welcome to our website "+fname+" "+lname+" \nYou are "+age+" years old brat.");
*/
/*
var t=prompt("What would you like to do with the list\n 1.new\n2.list\n3.quit\n");
var list=["yo"];
while(t!="quit")
{
if (t=="new")
 	{
		var listed=prompt("Enter your todo");
		list.push(listed); 
	}
else 
	if (t=="list") 
	{
		console.log(list);
	}
	else if (t=="delete") 
	{
		list.pop(listed);
	}
	t=prompt("What would you like to do with the list\n 1.new\n2.list\n3.quit\n");
}
	console.log("It was good meeting you.");
*/
/*
var colors=["red","orange","yellow","green"];

colors.forEach(function(color){
	console.log(color);
});
*/
//console.log("connected");
/*function isUniform(arr){
	var first = arr[0];
	var flag=0;
	for(var i=1;i<arr.length;i++){
		if(arr[i]!==first) 
		{
			//console.log("false\n");
			flag=1;
		}
	}
	if(flag==0)
		console.log("true\n");
	else
		console.log("false");
}
isUniform([1,2,2,3,1]);
isUniform([1,2,3,1]);
isUniform([1,1,1]);
*/
/*
function sA(arr)
{
	var total=0;
	for (var i = 0; i < arr.length; i++) {
		total=total+arr[i];
	}
	console.log(total);
}
sA([1,2,2,3,1]);
sA([1,2,2,2,1]);
*/
/*
function max(arr)
{
	var max=arr[0];
	for (var i = 1; i < arr.length; i++) {
		console.log(arr[i]);
		if(arr[i]>max)
		{
			max=arr[i];
		}
	}
	console.log(max);
}
var t=prompt("Enter the numbers of numeric data to be compared");
var arr=[0];
for (var i = 0; i < t; i++) {
	var listed=prompt("Enter your data");
		arr.push(listed); 
}
max(arr);
*/
var movies=[
	{
		title:"interstellar",
		done:true,
		rating: 4.5
	},
	{	
		title:"gravity",
		done:false,
		rating: 4.2
	}
]
var chunnilal;
movies.forEach(function(lol)
	{
		if(lol.done)
		{
			chunnilal="watched";
		}
		else
		{
			chunnilal="not watched";
		}
		console.log("You have: "+chunnilal+" "+lol.title);
	})
//phoad(movies);
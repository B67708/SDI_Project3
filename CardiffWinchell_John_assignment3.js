// Author John Cardiff-Winchell
// Date 2/20/2013
// Class Scalable Data Infastructures
//Project 3 -  Picking a place to go out and eat, revised and extended.

// Variables

var cash = 30;
var waitTime = 30;
var fastFoodArray = ["Mcdonald's", "Taco Bell", "Burger King", "Wendy's", "Rally's"];
var sitDownRest = ["Pizza Hut", "Applebee's", "Tony's", "Don Pablo's", "Bennigan's"];
var question1 = "Do you want to go out for dinner tonight?";
var money = "yes";
var answer = true


	
	
// function asks if I have money.

var goOut = function ()
{
	var haveMoney = "";
	if (money === "yes"){haveMoney = true;}	
	
	else	
	{haveMoney = false;}
	 return haveMoney;		
};
console.log("Do I have money?" + " " + goOut() + ".");
 
	if(goOut() === true)
{
	console.log("I have" + " " + cash + " " + "dollars");
}
	else
{
	console.log("I am broke");
}

//This function asks if she wants to go out to dinner.
	var wantTo = function()
{
	var go = question1 + " " + "I have " + cash + " dollars."
	return go
}	
 console.log(wantTo());

 
//This function determines her answer.
	
var answer1 = function()
{
	if (answer === true)
	{
		var comment1 = "You do? Let's do it then!";
	}
	else
	{
		if (answer === false)
	{
		var comment1 = "Alright, I will start cooking"};
	}
		return comment1;
}
	console.log(answer1());
 
 
 // function decides if we eat at a fast food or sit down restaurant.
 // I have 30 dollars. if a sit down will cost more than that, we will need to eat fast food.
 


var cost = function ()
{
	var sitDown = 29;
	var leftOverCash = cash - sitDown;
	if (sitDown <= cash)
	{
		console.log("Since we have enough money, we will eat at a sit down restaurant");
	}
	else
	{
		console.log("We are too poor, we will eat fast food");
	}
	return leftOverCash;
}

console.log("When we are done eating, we will have " + cost() + " dollar left.")
console.log("We need to decide what we want to eat.");
	
var info = {
	handleData: function(json){
		for(i=0; i < json.restaurant.length;i++){
			var restaur = json.restaurant[i];
			console.log(restaur.mainDish);
		} 
	}
};
info.handleData(json2)
 // function decides if we have are willing to wait 30 minutes or less to be seated at a restaurant
 // if less than 30 minutes we eat here if more than 30 minutes we eat somewhere else.
 
var wait = function (howLong)
{
 	var result;
	var time = 25;
	
	if (time <= howLong)
	{
		result = true;
	}
	else
	{
		result = false;
	}
	return result;
}

console.log("Are we going to stay if there is less than 30 minute wait?");
		
	if (wait(waitTime) === true)	
	{
		console.log("There is a 25 minute wait. We can handle that.");
	}
	else
	{
		console.log("We will try another restaurant");	
	}
	
 // This is the array function. it decides which place we eat at.
 console.log("Places we can go");
var placesWeCanEat = function ()
	
{	
	for (i = 0; i < sitDownRest.length; i++)
	{}	
		return sitDownRest
		
	
	
}	
console.log(placesWeCanEat())
console.log(sitDownRest[3] + ( " is where we are having dinner"));


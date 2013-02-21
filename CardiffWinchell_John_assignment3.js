// Author John Cardiff-Winchell
// Date 2/20/2013
// Class Scalable Data Infastructures
//Project 3 -  Picking a place to go out and eat, extended.

// Variables

var cash = 30;
var waitTime = 30;
	
var fastFoodArray = ["Mcdonald's", "Taco Bell", "Burger King", "Wendy's", "Rally's"];

var sitDownRestaurauntArray = ["Pizza Hut", "Applebee's", "Tony's", "Don Pablo's", "Bennigan's"];
var arrayItem = "Bennigan's";

var question1 = " Do you want to go out for dinner tonight?"


	
	
// function asks if I have money. If so, we can go out. If not, I cook.

var doIHaveMoney = function (money)
{
	if (cash === 30)	
	{
		console.log("We can go out to eat");
	}
	else
	{
		console.log("Thats alright, I'll cook something for us.");
	}		
}
 console.log("If I have money" + " we can go out to eat.");
 console.log("I have" + " " + cash + " " + "dollars");
 doIHaveMoney(true);


//This function determines if she wants to go out to dinner.
	
var doYouWantTo = function (answer)
{
 	var result;
	if (answer === true)
	{
		result = true;
		console.log("You do? Let's do it then!");
	}
	else
	{
		result = false;
		console.log("Alright, I will start cooking");
	}
	return result;
}
 console.log("Hey Ashley?" + question1);
 doYouWantTo(true);
 
 // function decides if we eat at a fast food or sit down restaurant.
 // I have 30 dollars. if a sit down will cost more than that, we will need to eat fast food.
 
var cost = function (howMuch)
{
 	var result;
	var sitDown = 30, cash= 30;
	
	if (sitDown <= cash)
	{
		result = true;
	}
	else
	{
		result = false;
	}
	return result;
}
console.log("We need to decide where we want to eat.");
	
	if (cost(cash) === true)
	{
		console.log("Since we have enough money, we will eat at a sit down restaurant");
	}	
	else
	{
		console.log("We are too poor, we will eat fast food");
	}



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
var placesWeCanEat = function (sitDownRestaurauntArray, arrayItemNumber)
	
{	console.log("Places we can go");
	for (i = 0; i < 5; i++)
	{	
		console.log(sitDownRestaurauntArray[i]);
	}	
	
	return sitDownRestaurauntArray,[arrayItemNumber];
}	

console.log(placesWeCanEat(sitDownRestaurauntArray, arrayItem) + ( " is where we are having dinner"));
	
	
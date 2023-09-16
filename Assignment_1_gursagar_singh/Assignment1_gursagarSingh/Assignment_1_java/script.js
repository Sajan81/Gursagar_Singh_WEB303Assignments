/********** 
	WEB 303 Assignment 1 - jQuery
	{Gursagar Singh}
***********/
$(document).ready(function()
  {

	$("input").keyup(function() 
{
 
	let Salary= $("#yearly-salary").val();
 let percent= $("#percent").val();


 let result=((Salary*percent)/100).toFixed(2); 
 $("#amount").text("$"+result);

});
});


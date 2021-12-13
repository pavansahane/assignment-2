$(document).ready(function(){
   $(".butn").click( function(){
       $(this).nextAll(".menu").toggle(100);
   });
});



function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
    document.getElementById('welcomeDiv-2').style.display = "none";
    document.getElementById('welcomeDiv-3').style.display = "none";
    document.getElementById('welcomeDiv-4').style.display = "none";
    document.getElementById('welcomeDiv-5').style.display = "none";

 }
 function showDiv2() {
    document.getElementById('welcomeDiv-2').style.display = "block";
    document.getElementById('welcomeDiv').style.display = "none";
    document.getElementById('welcomeDiv-3').style.display = "none";
    document.getElementById('welcomeDiv-4').style.display = "none";
    document.getElementById('welcomeDiv-5').style.display = "none";

 }
 function showDiv3() {
    document.getElementById('welcomeDiv-3').style.display = "block";
    document.getElementById('welcomeDiv').style.display = "none";
    document.getElementById('welcomeDiv-2').style.display = "none";
    document.getElementById('welcomeDiv-4').style.display = "none";
    document.getElementById('welcomeDiv-5').style.display = "none";

 }
 function showDiv4() {
    document.getElementById('welcomeDiv-4').style.display = "block";
    document.getElementById('welcomeDiv').style.display = "none";
    document.getElementById('welcomeDiv-2').style.display = "none";
    document.getElementById('welcomeDiv-3').style.display = "none";
    document.getElementById('welcomeDiv-5').style.display = "none";


 }
 function showDiv5() {
    document.getElementById('welcomeDiv-5').style.display = "block";
    document.getElementById('welcomeDiv').style.display = "none";
    document.getElementById('welcomeDiv-2').style.display = "none";
    document.getElementById('welcomeDiv-3').style.display = "none";
    document.getElementById('welcomeDiv-4').style.display = "none";

 }
 $("#subject").focus();


 
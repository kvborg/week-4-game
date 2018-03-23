
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game between 19 and 120
  
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  
  var crystal1= Math.floor(Math.random()*11+1) 
  var crystal2= Math.floor(Math.random()*11+1) 
  var crystal3= Math.floor(Math.random()*11+1) 
  var crystal4= Math.floor(Math.random()*11+1)
  // Setting up random numbers for each crystal between 1 and 12
  
  var totalScore= 0; 
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
$('#totalWins').text(wins);
$('#totalLosses').text(losses);
//resets the game
//when we reset the game we need to rerun randomNumber and RandomCrystalNumber 
//totalScore also needs to be set to 0	
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      crystal1= Math.floor(Math.random()*11+1);
      crystal2= Math.floor(Math.random()*11+1);
      crystal3= Math.floor(Math.random()*11+1);
      crystal4= Math.floor(Math.random()*11+1);
      totalScore= 0;
      $('#totalScore').text(totalScore);
  
} 
//create function that occurs when a user wins
//adds the wins to the totalScore
function win(){
alert("Congrats, you won!");
  wins++; 
  $('#totalWins').text(wins);
  reset();
}
//create function that occurs when a user looses
//adds the losses to the userLosses
function loser(){
alert ("Sorry, you lost!");
  losses++;
  $('#totalLosses').text(losses);
  reset()
}
//apply click listeners to each jewel 
//when a user clicks on jewel 1	
  $('#one').on ('click', function(){
    totalScore = totalScore + crystal1;
    console.log("New totalScore= " + totalScore);
    $('#totalScore').text(totalScore); 
          //sets win/lose conditions
        if (totalScore == Random){
          win();
        }
        else if ( totalScore > Random){
          loser();
        }   
  })  
//when a user clicks on jewel 2	
  $('#two').on ('click', function(){
    totalScore = totalScore + crystal2;
    console.log("New totalScore= " + totalScore);
    $('#totalScore').text(totalScore); 
        if (totalScore == Random){
          win();
        }
        else if ( totalScore > Random){
          loser();
        } 
  }) 
//when a user clicks on jewel 3
  $('#three').on ('click', function(){
    totalScore = totalScore + crystal3;
    console.log("New totalScore= " + totalScore);
    $('#totalScore').text(totalScore);
//sets win/lose conditions
          if (totalScore == Random){
          win();
        }
        else if ( totalScore > Random){
          loser();
        } 
  })  
//when a user clicks on jewel 4	
  $('#four').on ('click', function(){
    totalScore = totalScore + crystal4;
    console.log("New totalScore= " + totalScore);
    $('#totalScore').text(totalScore); 
      
          if (totalScore == Random){
          win();
        }
        else if ( totalScore > Random){
          loser();
        }
  });   
}); 
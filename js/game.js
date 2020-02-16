const numDivs = 36;
const maxHits = 11;

let hits = 1;
let firstHitTime = 0;
let miss = 0

function startgame () {
$(".game-field").click(handleClick);
round()
}

function round() {
$(".game-field").text("");    
$(".game-field").removeClass('target');  
$(".game-field").removeClass('miss'); 
  let divSelector = randomDivId();
  if (hits-miss <=10) {
    $(divSelector).text(hits);
    $(divSelector).addClass("target");
  }
  else {
   $(divSelector).text(""); 
  }

  if (hits == 1) {
    firstHitTime = getTimestamp()
  } 
    

  if (hits - miss === maxHits) {
    endGame();
  }
}

function endGame() {
  $(".game-field").hide('1', function() {
    
  });

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
$("#total_miss").text(miss);
  $("#win-message").removeClass("d-none");
$("#button-start").hide('fast', function() {
  
});
}

function handleClick(event) {
 
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    $(event.target).text("")
    round();
  } else  {
    $(event.target).addClass('miss')
    miss = miss + 1;
    $(event.target).text("-1");
  }
 
}

function init() {
 
  $("#button-start").click(startgame);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);

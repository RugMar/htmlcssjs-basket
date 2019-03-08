// var ALPH = "ABCDEFGHILMNOPQRSTUVZ"

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;

}

function getRandomChar() {

  var rndInt = getRandom(65, 90);
  var rndChar = String.fromCharCode(rndInt);
  return rndChar;

  // var rndInd = getRandom(0, ALPH.length)
  // var rndChar = ALPH[rndInd]
  //
  // return rndChar
}

function getRandomId() {

  var rndChars = "";
  var rndVals = "";

  for (var i = 0; i < 3; i++) {

       rndChars +=  getRandomChar();
       rndVals += getRandom(0,9);
  }

       var rndId = rndChars + rndVals;

       return rndId;
  }

function getRandomPlayer() {
  //PLAYER =
  //"ID", "POINTS", "BOUNCE"
  var twoPerc = getRandom(0, 100);

  var threePerc = 100 - twoPerc;

  var player = {
    "id" : getRandomId(0, 100),
    "points" : getRandom(0, 100),
    "bounces" : getRandom(0, 500),
    "mistake" : getRandom(0, 50),
    "twoPerc" : twoPerc,
    "threePerc" : threePerc,
  }
  return player;
}

function isPresent(player, players) {
   var finded = false;
   for (var i = 0; i < players.length; i++) {
     if (player.id == players[i].id) {
       finded = true;

     }

   }
   return finded;
}

function getPlayerById(id, players) {
  var player;
  for (var i = 0; i < players.length; i++) {
    if (players[i].id == id){
      player = players[i];
    }
  }
    return player;
}

function getRandomPlayers() {

    var players = [];
    // while (players.length < 10000) {

    // }
    for (var i = 0; i < 10; i++) {
      var player = getRandomPlayer();

      if (!isPresent(player,players)) {

        players.push(player);
      } else {
        i--;
      }
    }

    return players;
}

function updateUI(players) {

    for (var i = 0; i < players.length; i++) {
      var player = players[i]

      var opt = document.createElement("option");
      opt.value = player.id;

      var datalist = $("#players");
      datalist.append(opt);


    }
}

function clearClick() {
  var inputText = $("#usr-input");
  inputText.val("");
  idDom.val("");
  pointDom.val("");
  bouncesDom.val("");
  mistakeDom.val("");
  twoPercDom.val("");
  threePercDom.val("");
}

function playerSelection(players) {
  var me = $("#usr-input")
  var selectedId = me.val()
  var player = getPlayerById(selectedId, players)

//son tutte var = $("#id  > span.content")
  var idDom = $("#id > span.content")
  var pointDom = $("#points > span.content")
  var bouncesDom = $("#bounces > span.content")
  var mistakeDom = $("#mistake > span.content")
  var twoPercDom = $("#twoPerc > span.content")
  var pointDom = $("#threePerc > span.content")


  idDom.text(player.id);
  pointDom.text(player.points);
  bouncesDom.text(player.bounces);
  mistakeDom.text(player.mistake);
  twoPercDom.text(player.twoPerc + "%");
  threePercDom.text(player.threePerc + "%");
}


function init() {

  var players = getRandomPlayers();
  updateUI(players)

  var clearBtn = $("#clear-btn")
  clearBtn.click(clearClick)

  var inputText = $("#usr-input");
  inputText.on("change", function () {
    playerSelection(players)
  })

}


$(document).ready(init)

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
  var twoPerch = getRandom(0, 100);

  var threePerch = 100 - twoPerch;

  var player = {
    "id" : getRandomId(0, 100),
    "point" : getRandom(0, 100),
    "bounce" : getRandom(0, 500),
    "mistake" : getRandom(0, 50),
    "twoPerch" : twoPerch,
    "threePerch" : threePerch,
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
  //QUI INSERISCI idDom.val("")
}

function playerSelection(players) {
  var me = (this)
  var selectedId = me.val()
  var player = getPlayerById(selectedId, players)

//son tutte var = $("#id  > span.content")
  var idDom = $(#lini > span.content)
  "point" : getRandom(0, 100),
  "bounce" : getRandom(0, 500),
  "mistake" : getRandom(0, 50),
  "twoPerch" : twoPerch,
  "threePerch" : threePerch,

  idDom.text(player.id)
  pointDom.text(player.points)
  twoPerch.text(player.twoPerch + "%")
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

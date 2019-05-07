// https://codepen.io/chrisgresh/pen/aNjovb?editors=1111 -- random gradient generator


document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('start');
    startButton.addEventListener('click', function () {
        start();
    });
});


function start()
{
    // Make new tab
    chrome.tabs.create({ url: "http://google.com" }, function(tab){
    	

    });
}

function generate() {

  var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  
  function populate(a) {
    for ( var i = 0; i < 6; i++ ) {
      var x = Math.round( Math.random() * 14 );
      var y = hexValues[x];
      a += y;
    }
    return a;
  }
  
  var newColor1 = populate('#');
  var newColor2 = populate('#');
  var angle = Math.round( Math.random() * 360 );
  
  var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
  
  document.getElementById("container").style.background = gradient;
  
}

document.onload = generate();
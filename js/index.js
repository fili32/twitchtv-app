  var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getChannels(){
  channels.forEach(function(channel){
    function newURL( type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/'+ type + '/' + name +  '?callback=?';
    }; 
    //function tvCall(link) {
  // $(".displayResults").html(""); //clears display for each new call
  //$("#tv").append("<br>");
  $.getJSON( newURL( 'streams', channel), function(searchResults) {
     var game, status;
    if (searchResults.stream === null) {
        game = "Offline";
        status = "offline";
      } else if (searchResults.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = searchResults.stream.game;
        status = "online";
      };
  
    $.getJSON( newURL( 'channels', channel), function(searchResults) {
      //for (var i = 0; i < myArray.length; i++) {
var logo = searchResults.logo != null ? searchResults.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
          name = searchResults.display_name != null ? searchResults.display_name : channel,
         description = status === "online" ? searchResults.game + ': ' + searchResults.status : "offline";
      
        $("#tv").append('<div class="row searchResultsContainer"><div class="col-xs-2 col-sm-1"><img src="'+ logo + '" alt="'+ name + '"></div><div class="col-xs-10 col-sm-3" id="nameS"><a href="' + searchResults.url + '" target="_blank">' + searchResults.display_name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">' + description + '</div></div>');
        $("#tv").append("<br>");
     }); 
   }); 
 });  
}
var tvLink=getChannels();
console.log(tvLink);
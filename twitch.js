var channels = ["freecodecamp","test_channel","ESL_SC2"];
// var channels = ["ESL_SC2"];

function getChannelInfo() {
  channels.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    };
    $.getJSON(makeURL("streams", channel), function(data) {
      console.log("streams data", data);
      console.log("streams data.stream ", data.stream);
      // data.stream
      // data.stream.game // "starcraft"
      // data.stream.stream.type // "live"
      // data.stream.preview // preview image

      // data.stream.channel
      // data.stream.channel.display_name // 'ESL_SC2'
      // data.stream.channel.game // 'starcraft'
      // data.stream.channel.logo // "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg"
      // data.stream.channel.status // "RERUN: INnoVation vs. TaeJa - Group C - WCS Season 2 Finals"

      var dataStream = data.stream;
    
      $.getJSON(makeURL("channels", channel), function(data) {
      	console.log("channels data", data);
      	console.log("channels data.url", data.url);
        console.log("channels data.status", data.status);
      	// data.banner // big better image
      	// data.video_banner // big image
      	// data.status // "RERUN: INnoVation vs. TaeJa - Group C - WCS Season 2 Finals"

        var containers = $('<div>');
        containers.attr("class", "notlive");

        var logo = data.logo;
        var img = $('<img>');
        img.attr('src', logo);
        
        var display_name = data.name;
        var url = data.url
        var link = $('<a>');
        link.text(display_name);
        link.attr('href', url);
        link.attr('target', '_blank');

        var game = data.game;
        var status = data.status;
        // var info = $("<p:contains(game), :contains(status)>");
        var info = $('<p>')
        

        if (dataStream !== null) {
          console.log("dataStream stream Type, ", dataStream.stream_type);
          info.text(game + ": " + status);


          if (dataStream.stream_type = "live") {
            containers.attr("class", "live");
          }
        } 
        if (logo === null) {
          img.attr('src', './test1.jpg');
        }
        

        containers.append(img).append(link).append(info);
        $(".streams").append(containers);


      });
    });
  });
};

$(document).ready(function() {
	getChannelInfo();

  $(".all").click(function(){
    console.log("i'm in yall");
    $(".streams .live").show();
    $(".streams .notlive").show();
  });

  $(".online").click(function(){
    console.log("i'm in yall");
    $(".streams .live").show();
    $(".streams .notlive").hide();
  });

  $(".offline").click(function(){
    console.log("i'm in yall");
    $(".streams .live").hide();
    $(".streams .notlive").show();
  });

});


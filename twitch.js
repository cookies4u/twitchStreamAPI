// var channels = ["freecodecamp","test_channel","ESL_SC2"];
var channels = ["ESL_SC2"];

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

    
      $.getJSON(makeURL("channels", channel), function(data) {
      	console.log("channels data", data);
      	console.log("channels data.url", data.url);
      	// data.banner // big better image
      	// data.video_banner // big image
      	// data.status // "RERUN: INnoVation vs. TaeJa - Group C - WCS Season 2 Finals"
      });
    });
  });
};

$(document).ready(function() {
	getChannelInfo();
});
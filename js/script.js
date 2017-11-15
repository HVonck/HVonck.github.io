var channelId = 'UC8C7ncaMYnXyu-pRU0S9FLg';
var videoWidth = 500;
var videoHeight = 400;
var maxVideoResults = 10;

$(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/channels", {
      part: 'contentDetails',
      id: channelId,
      key: 'AIzaSyBj4NR2ccKANrB7X85GvG5pcfUyKlWyMus' },
      function(data){
        $.each(data.items, function(i, item){
          console.log(item);
          pId = item.contentDetails.relatedPlaylists.uploads;
          getVideos(pId);
        })
      }
  );

  function getVideos(pId) {
    $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems", {
        part: 'snippet',
        maxResults: maxVideoResults,
        playlistId: pId,
        key: 'AIzaSyBj4NR2ccKANrB7X85GvG5pcfUyKlWyMus' },
        function(data){
          var output;
          $.each(data.items, function(i, item){
            console.log(item);
            videoTitle = item.snippet.title;
            videoId = item.snippet.resourceId.videoId;
            videoDescription = item.snippet.description;

            output  = '<li>';
            output += '<iframe width="' + videoWidth + '" height="' + videoHeight + '" src=\"//www.youtube.com/embed/' + videoId + '\">';
            output += '</iframe>';
            output += '<p>';
            output += videoDescription;
            output += '</p>';
            output += '</li>';

            $('#results').append(output);
          })
        }
    );
  }
});

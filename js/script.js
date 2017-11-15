var channelId = 'UC8C7ncaMYnXyu-pRU0S9FLg';

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
        maxResults: 10,
        playlistId: pId,
        key: 'AIzaSyBj4NR2ccKANrB7X85GvG5pcfUyKlWyMus' },
        function(data){
          var output;
          $.each(data.items, function(i, item){
            console.log(item);
            videoTitle = item.snippet.title;

            output = '<li>' + videoTitle + '</li>';

            $('#results').append(output);
          })
        }
    );
  }
});

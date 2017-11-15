var channelName = 'Hilze Vonck';

$(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/channels", {
      part: 'contentDetails',
      forUsername: channelName,
      key: 'AIzaSyBj4NR2ccKANrB7X85GvG5pcfUyKlWyMus' },
      function(data){
        $.each(data.items, function(i, item){
          console.log(item);
        })
      }
  );
});

$(document).ready(function(){
    $('button').on('click', function() {
        $("#gifs").empty();
        var show = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {
                var results = response.data;
                
                for (var i = 0; i < results.length; i++) {
                    var emotionDiv = $('<div>');
                    var emotionImage = $('<img>');
                    emotionImage.attr('src', results[i].images.fixed_height.url);
                    emotionDiv.append(emotionImage);
                    emotionDiv.prependTo($('#gifs'));
                }
                });
            });
    });



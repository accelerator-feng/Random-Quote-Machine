var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = '',
    currentAuthor = '';

function getQuote() {
    $.ajax({
        headers: { "X-Mashape-Key": "MLHtOdrnY5mshXxPTKg6YoqX0LBPp1Ywu3mjsnj8236K9zbKiI" },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(response) {
            var r = JSON.parse(response); 
            currentQuote = r.quote;
            currentAuthor = r.author;
            $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
            $(".content").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('.content').text(r.quote); 
                });
            $(".author").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('.author').text(r.author);
                });
            var color = Math.floor(Math.random() * colors.length);
            $("body").css({
                backgroundColor: colors[color],
                color: colors[color]
            });
            $(".button").css({
                backgroundColor: colors[color]
            });
        }
    });
}
$(function() {
    getQuote();
    $('#new-quote').click(getQuote);
    $('#tweet-quote').click(function() {
        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    });
});

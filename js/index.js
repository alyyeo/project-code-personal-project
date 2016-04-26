var recipe_list = ["smorkie.html", "chocolate_graham_crackers.html", "orange_chocolate_bread.html"];
// var random_recipe = recipe_list[Math.floor(Math.random() * recipe_list.length - 1)];

// $('#random_recipe_link').attr('href', random_recipe);

$(document).ready(function() {
    $('#menu-button').hover(
        function() {
            $('nav').animate({top: '+=60px'}, 500);
            // $('#menu-button').animate({top: '+=60px'}, 500);
        }, function() {
            $('nav').animate({top: '-=60px'}, 500);
            // $('#menu-button').animate({top: '-=60px'}, 500);
        }
    );
    
    $('#random_recipe_link_div').click(function() {
        var random_recipe = recipe_list[Math.floor(Math.random() * (recipe_list.length - 1))];
        $('#random_recipe_link').attr('href', random_recipe);
    });
});
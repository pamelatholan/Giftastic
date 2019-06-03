// function to start once the page loads
$(function(){
  populateButtons(topics, 'searchButton', '#buttonsArea');
  console.log("Page Loaded");
})    

var topics = ["Grateful Dead", "Tom Waits", "Phish", "Bob Marley", "Childish Gambino", "Phil Collins", "David Bowie", "Lynyrd Skynyrd", "Danny Brown", "Run The Jewels", "Blondie", "Elvis", "Pink Floyd", "Wu Tang", "Henry Rollins"];
 
// Add buttons to page after searching
 function populateButtons(topics, classToAdd, areaToAddTo){
  $(areaToAddTo).empty();
  for(var i = 0; i < topics.length; i++){
      var a = $('<button>');
      a.addClass(classToAdd);
      a.attr('data-type', topics[i]);
      a.text(topics[i]);
      $(areaToAddTo).append(a);
  }
}

 // Call to Giphy API
 $(document).on('click', '.searchButton', function(){
  $('#searches').empty();
  var type = $(this).data('type');
  var searchInput = $("#search-input").val();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=vkAw3Ysf1ygFhvL0gfeeD6XwHzxEH5gU&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
   // Log rating, pause and start image tags, image and rating uploaded to html
   .done(function(response){
    console.log(response.data);
    for(var i = 0; i < response.data.length; i++){
        var searchDiv = $('<div class="search-item">');
        var rating = response.data[i].rating;
        var p = $("<p>").text('Rating: ' + rating);
        var animated = response.data[i].images.fixed_height.url;
        var still = response.data[i].images.fixed_height_still.url;
        var image = $('<img>');
        image.attr('src', still);
        image.attr('data-still', still);
        image.attr('data-animated', animated);
        image.attr('data-state', 'still');
        image.addClass('searchImage');
        // append the rating and image to the page
        searchDiv.append(p);
        searchDiv.append(image);
        $('#searches').append(searchDiv);
      }
    })

  })

   // Pause and Start 
 $(document).on('click', '.searchImage', function(){
  var state = $(this).attr('data-state');
  if(state == 'still'){
      $(this).attr('src', $(this).data('animated'));
      $(this).attr('data-state', 'animated');
  } else{
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
  }
})
// New button for search entry
$('#addSearch').on('click', function(){
  var newSearch = $('input').eq(0).val();
  topics.push(newSearch);
  populateButtons(topics, 'searchButton', '#buttonsArea');
  return false;
})
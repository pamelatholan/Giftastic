$("button").on("click", function() {
    var topics = ["Grateful Dead", "Tom Waits", "Phish", "Bob Marley", "Creedence Clearwater Rival", "Phil Collins", "David Bowie", "Lynyrd Skynyrd", "REM", "The B 52s"];

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + band + "&api_key=vkAw3Ysf1ygFhvL0gfeeD6XwHzxEH5gU&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
})
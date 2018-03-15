  // NOTE- If you guys look in the object that it spits out from console.log on chrome, we can pick different weatehr elements to display (by that i mean response.element we want). stuck with what example already had though, but doesnt matter we can switch it up too

    //Also note -- commented out a version2  queryURLTWO that takes lat and lon, instead of string that is city (coordinates are for Miami, it works if you comment out v1 queryURL) 

    //so we need an if var lat and lon exists, then queryURLTWO, otherwise, queryURL for city-string. **if i feed queryURLTWO lat lon AND city, it defaults to city just FYI 

    // from styling standpoint, just need to float it over top i would gthink, or insert as div that is header to where google maps API spits out its window on the page 


    // This is our API key 
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    // will be from text input, default to USA only for now 
    var city = "Seattle";
    // latittude input from userlocation -- this example is for Miami 
    var lat = 25.7617;
    // longitude input from userlocation
    var lon = -80.1918;


    // separated from city-string input queryURLTWO bc if city exists, and lat and lon, lat and lon dont work-- defaults to city-string
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey;

    // rename to queryURL to test that it pulls city string correctly instead of lat and lon, 
    var queryURLTWO = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&appid=" + APIKey;


    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);
        console.log(response.weather[0].description);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        // added this part to city class div, description of the weather overall, i think its important one
        $(".description").text("General weather description: " + response.weather[0].description);

        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);
        // also added these to divs i added
        $(".tempmin").text("Temperature min (F): " + response.main.temp_min);
        $(".tempmax").text("Temperature max (F): " + response.main.temp_max);





        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });
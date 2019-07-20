// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
data.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  
  // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input elements and get the raw HTML node
  var inputDateElement = d3.select("#datetime");
  var inputCityElement = d3.select("#city");
  var inputStateElement = d3.select("#state");
  var inputCountryElement = d3.select("#country");
  var inputShapeElement = d3.select("#shape");
  // Get the value property of the input element
  var inputDate = inputDateElement.property("value");
  var inputCity = inputCityElement.property("value");
  var inputState = inputStateElement.property("value");
  var inputCountry = inputCountryElement.property("value");
  var inputShape = inputShapeElement.property("value");

  //Clear the old values
  tbody.html("");
 //Use a filter to filter based on the date of input
  var sightingsByDate = data.filter(dateFilter);
   // Create a custom filtering function
  function dateFilter(sighting) {
    return sighting.datetime  == inputDate && 
    sighting.city == inputCity.toString().toLowerCase() &&
    sighting.state == inputState.toString().toLowerCase() &&
    sighting.country == inputCountry.toString().toLowerCase() &&
    sighting.shape == inputShape.toString().toLowerCase();
  }
 
//Render the results to the page
  sightingsByDate.forEach(function(FilteredData) {
    console.log(FilteredData);
    var row = tbody.append("tr");
    Object.entries(FilteredData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  
  console.log(inputDate);
  console.log(inputCity);
  console.log(inputStateElement);
  // console.log(inputState);
  console.log(inputShape);
  console.log(inputCountry);

});
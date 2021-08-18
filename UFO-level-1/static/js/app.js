// from data.js
var tableData = data;

// YOUR CODE HERE!
var button =d3.select("#filter-btn");

var table =d3.select("tbody");

tableData.forEach(function(sighting){
    var row = table.append("tr");
    Object.entries(sighting).forEach(function([key, value]){
        console.log(key,value);
        var cell = table.append("td");
        cell.text(value);
    })
});


button.on("click",function(event){
    d3.event.preventDefault();
    table.html("");
    var inputElement=d3.select("#datetime");
    var inputValue=inputElement.property("value");
    var filtedData=tableData.filter(tableData => tableData.datetime === inputValue);
 
    filtedData.forEach(function(dateData){
        var row = table.append("tr");
        Object.entries(dateData).forEach(function([key, value]){
        var cell= table.append("td");
        cell.text(value);
        })
    })
});
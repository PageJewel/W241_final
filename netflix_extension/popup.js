// popup.js
// still 
var start_year = 2018;
var start_month = 3;
var start_day = 19;
var end_year = 2018;
var end_month = 4;
var end_day = 2;
var start_date = 1521417600000;
var end_date = 1522627200000;

function getNetflixData(report) {
var result;

var fetchAllViewedItems = function() {
  var deferred = jQuery.Deferred();
  var viewedItems = [];
  (function fetchPage(page) {
    jQuery.getJSON('https://www.netflix.com/api/shakti/f85b7a9e/viewingactivity?pg=' + page).done(function(json) {
      viewedItems = viewedItems.concat(json.viewedItems);
	  console.log('Running.')
      //console.log('Fetched %s viewed items', viewedItems.length);
      if (json.viewedItems.length == json.size) {
        fetchPage(++page);
      } else {
        deferred.resolve(viewedItems);
      }
    }).fail(deferred.reject);
  })(0);
  return deferred.promise();
};
fetchAllViewedItems().then(function(viewedItems) {
var totalTime = viewedItems.reduce(function(runningTotal, viewedItem) {
  if (viewedItem.date > start_date && viewedItem.date < end_date) {
	return runningTotal + viewedItem.bookmark;
  } else {
	  return runningTotal;
  }
  }, 0);
  var days = Math.floor(totalTime / 60 / 60 / 24);
  var hours = Math.floor((totalTime / 60 / 60) % 24);
  var minutes = Math.round((totalTime / 60) % 60);
  result = {"minutes": minutes,
            "hours": hours,
            "days": days};
			
  report(result)
});
};

function display_data(result){
	outdiv1 = document.getElementById("date");
    outdiv1.innerHTML = `From ${start_month}/${start_day}/${start_year} to ${end_month}/${end_day}/${end_year}`;
	outdiv2 = document.getElementById("data_report");
	outdiv2.innerHTML = `: ${result.days} days, ${result.hours} hours, and ${result.minutes} minutes.`;
}
		 	 
document.addEventListener('DOMContentLoaded', () => {   
getNetflixData(display_data);
})

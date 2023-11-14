  // Declare the dayjs variable
  var dayjs = window.dayjs;

  // Extend dayjs with plugins
  dayjs.extend(window.dayjs_plugin_advancedFormat);

  // Display the current day on the webpage
  var currentDay = dayjs();
  document.getElementById("currentDay").textContent = currentDay.format("dddd, MMMM Do");

  // Array with the hours of the day
  let hoursOfTheDay = [9, 10, 11, 12, 1, 2, 3, 4, 5];

  // Loop through the hours to render each hour
  for (let i = 0; i < hoursOfTheDay.length; i++) {
      const hour = hoursOfTheDay[i];
      // Do something with each hour
      var hourly = $("<div class='row time-block'>");
      $(".container").append(hourly);
    //   hourly.attr("data-time", hour);
    //   am or pm
    var hourSpec = $("<div class='hour col-2'>");
    if (hour >= 9 && hour <= 11) {
        hourSpec.text(hour + "am");
    } else if (hour >= 1 && hour <= 5) {
        hourSpec.text(hour + "pm");
    } else {
        hourSpec.text(hour + "pm");
    }
    hourly.append(hourSpec);
    }
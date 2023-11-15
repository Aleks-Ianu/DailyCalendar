  // Declare the dayjs variable
  var dayjs = window.dayjs;
  var currentHour = dayjs().hour();
  console.log(currentHour);

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

    var toDoText = $("<textarea class='col-9 description'>");
    // append text area to hourly div
    $(hourly).append(toDoText);

    // create a button for each hourly div
    var saveChangeBtn = $("<button class='col-1 saveBtn'><i class='fa-save fas'></i></button>");
    $(hourly).append(saveChangeBtn);

    // check for time to see if currentTime is past the time displayed, current or before
    if (currentHour === hour) {
        hourSpec.addClass("present");
    } else if (currentHour > hour) {
        hourSpec.addClass("past");
    } else {
        hourSpec.addClass("future");
    }
    

    }
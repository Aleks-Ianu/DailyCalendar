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
      $('.container').append(hour)
    }
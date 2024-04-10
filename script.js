// countdown.js
function countdown(endDate, elementId) {
  let days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
    return;
  }

  setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      seconds = parseInt(timeRemaining);

      document.getElementById(elementId).innerHTML =
        "Pozostalo: " +
        parseInt(days, 10) +
        " dni " +
        ("0" + hours).slice(-2) +
        " godzin " +
        ("0" + minutes).slice(-2) +
        " minut " +
        ("0" + seconds).slice(-2) +
        " sekund";
    } else {
      return;
    }
  }
}

// Użyj funkcji dla każdego meczu
countdown("04/12/2024 18:00:00", "match1"); // Betard Sparta Wrocław – Enea Falubaz Zielona Góra
countdown("04/12/2024 20:30:00", "match2"); // Fogo Unia Leszno – Tauron Włókniarz Częstochowa

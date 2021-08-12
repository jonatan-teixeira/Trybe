function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysId = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
    const dezDays = dezDaysList[i];
    const daysList = document.createElement('li');

    daysList.classList.add('day');
    daysList.innerHTML = dezDays;

    daysId.appendChild(daysList);
    
    if (dezDaysList[i] === 24 || dezDaysList[i] === 31)
    daysList.classList.add('day-holiday');
    else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) 
        daysList.classList.add('day-friday');
    else if (dezDaysList[i] === 25)
            daysList.classList.add('day-holiday', 'day-friday')
    };
  };

  createDaysOfTheMonth ();
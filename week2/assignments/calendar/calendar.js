// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 

const today = new Date()
const month = today.getMonth()

let days
switch (month) {
    case 1: "February";
        days = 28
        break
    case 3: "April";
    case 5: "June";
    case 8: "September";
    case 10:"November";
        days = 30
        break
    default:
        days = 31
}
document.getElementById("selectMonth")
{<option value="0">Months</option>
<option value="1">January</option>
<option value="2">February</option>
<option value="3">March</option>
<option value="4">April</option>
<option value="5">May</option>
<option value="6">June</option>
<option value="7">July</option>
<option value="8">August</option>
<option value="9">September</option>
<option value="10">October</option>
<option value="11">November</option>
<option value="12">December</option>

}

let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while ( dt < days)

const monthName = today.toLocaleDateString('default', {month:'long'})
year = today.getFullYear()
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`


const remainder = (7 - ((x + dt) % 7))
let y = 0
while ( y < remainder) {
    document.getElementById('').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}

function jump(){
    year= parseInt(monthName)
}
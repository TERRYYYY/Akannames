
function hp (){ 
    //Numeric and error variables
    let day = document.getElementById("day").value;
    let dd = parseInt(day)
    //let ErrMssg = document.getElementById('warning');
    let month = document.getElementById("month").value;
    let mm = parseInt(month)
    let year = document.getElementById('year').value;
    let yy = parseInt(year)

    
    let weekDay = new Date(yy + "/" + mm + "/" + dd);
    let output = document.getElementById("output")
    let finalResults = weekDay.getDay()
    
    //Gender and akan variables
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let maleNames=["kwasi","Kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
    let femaleNames=["Akosuo","Adwoa","Abenna","Akua","Yaa","Afua","Ama"];
    let daysOfTheWeek=["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
    if (year<1930) {
        output.innerHTML = "Hey " + " please enter a valid year" 
    }
    else if (month <1 || month > 12) { 
        output.innerHTML = "Hey " + " please enter  valid month"
    }
    else if (day <1 || day >31 ) {
        output.innerHTML = "Hey " + " please enter a valid day"
    }
else if (male.checked) {
output.innerHTML = "Hey " + " your Akan name is " + maleNames[finalResults] + " you were born on "
 + daysOfTheWeek[finalResults] 
} 
else {
    output.innerHTML = "Hey " + " your Akan name is " + femaleNames[finalResults] + " you were born on " + daysOfTheWeek[finalResults]
};
}
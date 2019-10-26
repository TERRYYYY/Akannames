
function hp (){ 
    //All variables
    let gender;
    let dd = document.getElementById("day").value;
    let ErrMssg = document.getElementById('warning');
    let mm = document.getElementById("month").value;
    let cc = document.getElementById('century').value;
    let yy = document.getElementById('year').value;
    let yearErrMssg = document.getElementById('warning');
    let maleNames=["kwasi","Kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
    let femaleNames=["Akosuo","Adwoa","Abenna","Akua","Yaa","Afua","Ama"];

    //Error message for the day and month value
    if(dd > 31 && mm > 12){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Day and Month';
    }else if(dd > 31 && mm <= 12){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Day';
    }else if(dd <= 31 && mm > 12){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Month';
    }else if(dd <= 0 && mm <= 0){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Day and Month';
    }else if(dd <= 0 && mm > 0){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Day';
    }else if(dd > 0 && mm <= 0){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Month';
    }else{
        console.log("Progress");
    }
    
    //Error message for the century and year value
    if(cc <= 0 && yy <= 0){
        yearErrMssg.style.display = 'block';
        yearErrMssg.innerHTML = '! You entered an invalid Century and Year';
    }else if(cc <= 0 && yy > 0){
        yearErrMssg.style.display = 'block';
        yearErrMssg.innerHTML = '! You entered an invalid Century';
    }else if(cc > 0 && yy <= 0){
        yearErrMssg.style.display = 'block';
        yearErrMssg.innerHTML = '! You entered an invalid Year';
    }else{
        console.log("Progress");
    }


    //var date =parseInt()
    let weekDay = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;

    document.getElementById("out").innerHTML = weekDay;


}
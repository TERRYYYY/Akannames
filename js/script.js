
function hp (){ 
    //Numeric and error variables
    let day = document.getElementById("day").value;
    let dd = parseInt(day)
    let ErrMssg = document.getElementById('warning');
    let month = document.getElementById("month").value;
    let mm = parseInt(month)
    let year = document.getElementById('year').value;
    let yy = parseInt(year)
    let yearErrMssg = document.getElementById('year-warning');
    

    //Error messages for the day and month value
    if(day > 31 && month > 12){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Day and Month';
    }else if(day > 31 && month <= 12){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Day';
    }else if(day <= 31 && month > 12){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Month';
    }else if(day < 0 && month < 0){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Day and Month';
    }else if(day < 0 && month > 0){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Day';
    }else if(day > 0 && month < 0){
        ErrMssg.style.display = 'block';
        ErrMssg.innerHTML = '! You entered an invalid Month';
    }else{
        console.log("Progress");
    }
    
    //Error messages for the century and year value
    if(yy <= 0 || yy == null){
        yearErrMssg.style.display = 'block';
        yearErrMssg.innerHTML = '! You entered an invalid Year';
    }else if(yy <= 0){
        yearErrMssg.style.display = 'block';
        yearErrMssg.innerHTML = '! You entered an invalid Year';
    }else{
        console.log("Progress");
    }

    //Final final results
    let weekDay = new Date(yy,mm,dd);

    let finalResults = weekDay.getDay()
    
    //Gender and akan variables
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let maleNames=["kwasi","Kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
    let femaleNames=["Akosuo","Adwoa","Abenna","Akua","Yaa","Afua","Ama"];


    //Give users Akan names
    let akanWrapper = document.getElementById('akan-wrapper');
    let akanName = document.getElementById('akan-name');
    let akanIntro = document.getElementById('akan-intro');

        if(finalResults === 0 && male.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on Sunday'
            akanName.innerHTML = maleNames[0];
        }else if(finalResults === 1 && male.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on monday'
            akanName.innerHTML = maleNames[1];
        }else if(finalResults === 2 && male.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on tuesday'
            akanName.innerHTML = maleNames[2];
        }else if(finalResults === 3 && male.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on Wednesday'
            akanName.innerHTML = maleNames[3];
        }else if(finalResults === 4 && male.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on Thursday'
            akanName.innerHTML = maleNames[4];
        }else if(finalResults === 5 && male.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on Friday'
            akanName.innerHTML = maleNames[5];
        }else if(finalResults === 6 && male.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on Saturday'
            akanName.innerHTML = maleNames[6];
        }if(finalResults === 0 && female.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on Sunday'
            akanName.innerHTML = femaleNames[0];
        }else if(finalResults === 1 && female.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on monday'
            akanName.innerHTML = femaleNames[1];
        }else if(finalResults === 2 && female.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on tuesday'
            akanName.innerHTML = femaleNames[2];
        }else if(finalResults === 3 && female.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on wednesday'
            akanName.innerHTML = femaleNames[3];
        }else if(finalResults === 4 && female.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on thursday'
            akanName.innerHTML = femaleNames[4];
        }else if(finalResults === 5 && female.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on friday'
            akanName.innerHTML = femaleNames[5];
        }else if(finalResults === 6 && female.checked){
            akanWrapper.style.display = 'block'
            akanIntro.innerHTML = 'Born on Saturday'
            akanName.innerHTML = femaleNames[6];
        }else{
        console.log('nothing entered')
        }
    

    document.getElementById("out").innerHTML = finalResults;




}
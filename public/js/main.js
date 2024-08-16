const submitBtn = document.getElementById('submitBtn')
const displayBox = document.getElementById('city_name')
const cityName = document.getElementById('cityName') //input field
const temp_real_val = document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status')
const dataHide = document.querySelector('.middle_layer')

getInfo = async (e) =>{
    e.preventDefault()
    let cityVal = cityName.value;
    if(cityVal === ''){
        displayBox.innerText = "Please write the city name"
        dataHide.classList.add('data_hide')
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=b6cd5a27fa21c71447a6ded422a7712a`
        const response = await fetch(url)
        const data = await response.json()
        const arrData = [data]
        displayBox.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
        // Convert temperature from Kelvin to Celsius
        const tempKelvin = arrData[0].main.temp 
        const tempCelsius = tempKelvin - 273.15;
        temp_real_val.innerText = tempCelsius.toFixed(2)
        const tempMood = arrData[0].weather[0].main //weather status
        //Condition to check sunny or cloudy
        if(tempMood === 'Clear')
        {
            temp_status.innerHTML = `<i class='fas fa-sun' style='color: #eccc68;'></i>` 
        }
        else if(tempMood === 'Clouds')
        {
            temp_status.innerHTML = `<i class='fas fa-cloud' style='color: #f1f2f6;'></i>` 
        }
        else if(tempMood === 'Rain')
        {
            temp_status.innerHTML = `<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>` 
        }
        else
        {
            temp_status.innerHTML = `<i class='fas fa-sun' style='color: #eccc68;'></i>` 
        }

        dataHide.classList.remove('data_hide')
        }
        
        catch{
            displayBox.innerText = "Please enter the city name properly"
            dataHide.classList.add('data_hide')
        }
    }
}

submitBtn.addEventListener('click' , getInfo)

//For adding day
const getCurrentDay = () => {
    let weekday = new Array(7)
    
    weekday[0] ="Sunday"
    weekday[1] ="Monday"
    weekday[2] ="Tuesday"
    weekday[3] ="Wednesday"
    weekday[4] ="Thursday"
    weekday[5] ="Friday"
    weekday[6] ="Saturday"

    let currentDate = new Date()
    let days = weekday[currentDate.getDay()]
    let day = document.getElementById('day')
    day.innerHTML = days
}

getCurrentDay()

//For adding date
const getCurrentDate = () =>{
    let currentDate = new Date()
    let date = currentDate.getDate()
    let months = new Array(`12`)
    
    months[0] ="Jan"
    months[1] ="Feb"
    months[2] ="Mar"
    months[3] ="Apr"
    months[4] ="May"
    months[5] ="Jun"
    months[6] ="Jul"
    months[7] ="Aug"
    months[8] ="Sep"
    months[9] ="Oct"
    months[10] ="Nov"
    months[11] ="Dev"

    let month = months[currentDate.getMonth()]
    let act_date = document.getElementById('today_date')
    act_date.innerHTML = `${date} , ${month}`
}

getCurrentDate()
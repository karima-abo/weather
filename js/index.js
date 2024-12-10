

async function search(a) {
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fca9760b1b6748b09d0152518241012&q=${a}&days=3`);
    if (t.ok && 400 != t.status) {
        let a = await t.json();
        displayCurrent(a.location, a.current),
        displayAnother(a.forecast.forecastday)
        

    }
}


document.getElementById("search").addEventListener("keyup", a => {
    search(a.target.value)
}
);


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function displayCurrent(a, t) {

   
    if (null != t) {
        var dateup = new Date(t.last_updated.replace(" ", "T"));
        let cartona = `<div class="forecast day col-md-4">\n  
          <div class="d-flex justify-content-between align-items-center titel-day "  id="today">\n   
           <div >${days[dateup.getDay()]}</div>\n 
              <div >${dateup.getDate() + monthNames[dateup.getMonth()]}</div>\n  
                </div> \n  
                  <div class="forecast-content" id="current">\n   
                   <div >${a.name}</div>\n  
                     <div >\n    
                         <div class="tem">${t.temp_c}<sup>o</sup>C</div>\n   
                            \n        <div >\n     
                                   <img src="https:${t.condition.icon}" alt="" width=90>\n    
                                       </div>\t\n    \n 
                                          </div>\n  
                                            <div class="custom">${t.condition.text}</div>\n  
                                              <span><img src="images/icon-umberella.png" alt="">20%</span>\n
                                              <span><img src="images/icon-wind.png" alt="">18km/h</span>\n
                                              <span><img src="images/icon-compass.png" alt="">East</span>\n    </div>\n
                                              </div>`;
        document.getElementById("forecast").innerHTML = cartona

        
        
    }
    console.log(dateup)
        console.log(t)
}

search("cairo");









function displayAnother(a) {
    let t = "";
    for (let i = 1; i < a.length; i++)
        if(i==1){
            t += `\t<div class="forecast day1 col-md-4">\n     
            <div class="" >\n       
              <div class="titel-day1">${days[new Date(a[i].date.replace(" ", "T")).getDay()]}</div>\n     
                 </div> \x3c!-- .forecast-header --\x3e\n    
                     <div class="forecast-contentc">\n         
                        <div >\n          
                              <img src="https:${a[i].day.condition.icon}" class="m-3"  alt="" width=48>\n    
                                      </div>\n            <div class="maxtep">${a[i].day.maxtemp_c}<sup>o</sup>C</div>\n      
                                            <small>${a[i].day.mintemp_c}<sup>o</sup></small>\n         
                                               <div class="custom m-3">${a[i].day.condition.text}</div>\n   
                                                    </div>\n    
                                                        </div>`;
        }
        else{
            t += `\t<div class="forecast day col-md-4">\n     
            <div >\n       
              <div class="titel-day">${days[new Date(a[i].date.replace(" ", "T")).getDay()]}</div>\n     
                 </div> \n    
                     <div class="forecast-contentc">\n         
                        <div >\n          
                              <img src="https:${a[i].day.condition.icon}" class="m-3"  alt="" width=48>\n    
                                      </div>\n            <div class="maxtep">${a[i].day.maxtemp_c}<sup>o</sup>C</div>\n      
                                            <small>${a[i].day.mintemp_c}<sup>o</sup></small>\n         
                                               <div class="custom m-3">${a[i].day.condition.text}</div>\n   
                                                    </div>\n    
                                                        </div>`;
        }
      
    document.getElementById("forecast").innerHTML += t
}





















document.querySelector(".form").addEventListener('submit',(e)=>{
       e.preventDefault();
       const location=document.querySelector(".input").value;
       if(location!=''){
       fetch(`/weather?address=${location}`).then((response)=>{
              response.json().then((data)=>{
              
                    document.querySelector(".results").classList.add("results_real");
                    document.querySelector(".results").innerHTML=`In ${location.toUpperCase()}, It is ${data.temperature}° Celsius` ;
                    document.querySelector(".header").innerHTML=`<img src="${data.weather_icons[0]}" class="image">`    
     
      })
      })
     }
     else{
          document.querySelector(".results").classList.add("results_real");
         document.querySelector(".results").innerHTML='Please Provide valid address';
     }
})
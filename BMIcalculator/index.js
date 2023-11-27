const form = document.querySelector("form");
 
      form.addEventListener("submit", function(e){
      e.preventDefault();
      const height = parseInt(document.querySelector('#height').value);
      const weight = parseInt(document.querySelector('#weight').value);
      const results = document.querySelector('#results');
      if(height===''|| height < 0 || height===NaN){
        results.innerHTML  = `Please enter a valid height, ${height} is a wrong input `;
        console.log('clicked')
      }
      else if(weight===''|| weight<0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid height, ${weight} is a wrong input `;
      }
      else{
          const bmi = (weight /((height*height)/10000)).toFixed(2);
            results.innerHTML = `Your BMI is ${bmi}`
            if(bmi< 18.6){
              results.innerHTML += ` and You are Underweight`;
            }
            else if(bmi<24.9 && bmi>18.6){
              results.innerHTML += ` and You have a Perfect BMI`;
            }
            else{
              results.innerHTML += ` and You are Overweight`;
            }
     }
    })



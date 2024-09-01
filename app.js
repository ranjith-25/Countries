function getCountry(countryName){

    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/name/'+countryName,true)
    xhr.send()
    xhr.onload=function(){
   
     let [data]=JSON.parse(xhr.responseText)

     let html=`<article class="country">
          <img class="country_img" src="${data.flags.png}" >
          <div class="country_data">
          <h3 class="country_name">${data.name.common}</h3>
          <h4 class="country_region">${data.region}</h4>
          <p class="country_row"><span class="ion-ios-people"></span>${data.population} people</p>
          <p class="country_row"><span class="ion-ios-mic"></span>${Object.values(data.languages)[0]}</p>
          <p class="country_row"><span class="ion-social-usd"></span>${Object.values(data.currencies)[0].name}</p>
          </div>
          </article>`
          document.querySelector('.container').insertAdjacentHTML('beforeend',html)
   
    }
}

getCountry('india')
getCountry('usa')
getCountry('germany')
getCountry('japan')
getCountry('russia')
getCountry('europe')
getCountry('italy')
getCountry('france')
getCountry('australia')
getCountry('china')
getCountry('singapore')
getCountry('malaysia')
getCountry('thailand')
getCountry('south africa')
getCountry('south korea')
getCountry('north korea')
getCountry('pakistan')
getCountry('afghanistan')
getCountry('bangladesh')
getCountry('sri lanka')
getCountry('norway')
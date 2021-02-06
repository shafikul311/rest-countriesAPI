fetch('https://restcountries.eu/rest/v2/all')
.then( res => res.json())
.then( data => displayCountries(data) );

const displayCountries = countries =>{
const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {

        const countryDiv = document.createElement('div');

        countryDiv.className = 'country';
        const countryInfo = `
        <h3 id="cont"> ${country.name} </h3>
        <p>${country.capital}</p>
        <button onclick="displayCountryD('${country.name}')">Details</button>

        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
        
        
    });

    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
       

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // countryDiv.appendChild(h3);

        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // countryDiv.appendChild(p);
    }

    const displayCountryD = name =>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res => res.json())
        .then(data => renderCountry(data[0]));
        
    }
   
    const renderCountry = country =>{
        const countryDiv = document.getElementById('country');
        countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <h1>${country.area}</h1>
        <img src="${country.flag}" class="img">

        `

    }

const str = "Германия, Берлин, 83млн, 357.4тыс.кв.км;" +
 "Беларусь, Минск, 9.4млн, 207.6тыс.кв.км;" +
 "Польша, Варшава, 37.9млн, 312.6тыс.кв.км;Франция," + 
"Париж, 67.8млн, 643.8тыс.кв.км;Нидерланды, Амстердам," +
 "17.4млн, 41.5тыс.кв.км;Испания, Мадрид, 44.3млн, 505.9тыс.кв.км;Бельгия," + 
"Брюссель, 11.4млн, 30.5тыс.кв.км;";

const countries = str.split(";");
console.log(countries);

let capital = "";
let area = 0;
let population = 0;

for(let i = 0; i < countries.length-1; i++){
    let countryInfo = countries[i].split(",");
    let populationOfCountry = parseFloat(countryInfo[2], 10);
    population += populationOfCountry;
    area += parseInt(countryInfo[3], 10);
    console.log(parseFloat(countryInfo[2], 10)) 

    if(i === 1){
      capital = countryInfo[1];
    }
}

console.log("capital = " + capital,
"population = " + population + "млн", "area = " + area + "тыс");


document.querySelector('.population').textContent =` Население: ${population} млн`;
document.querySelector('.area').textContent = `Площадь: ${area} тыс.кв.км`;
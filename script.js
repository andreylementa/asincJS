'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////////////////
btn.addEventListener('click', () => getCountryData('russia'));

const displayCountry = function (data, className = '') {
  const currencies = Object.values(data.currencies)[0].name;
  console.log(currencies);
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👨‍👩‍👧‍👦</span>${Intl.NumberFormat(
              'ru'
            ).format(data.population)} миллионов</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
        </article>
  `;
  countriesContainer.style.opacity = '1';
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getCountryAndBorderCountries = function (country) {
  // Вызов AJAX для получения данных о стране
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request1.send();

  request1.addEventListener('load', function () {
    const [data1] = JSON.parse(this.responseText);
    console.log(data1);

    // Отображение страны
    displayCountry(data1);
    // получаем первую соседнюю страну
    const [firstNeighbour] = data1.borders;
    if (!firstNeighbour) return;
    // Вызов AJAX для получения данных о первой соседней стране
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${firstNeighbour}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      displayCountry(data2, 'neighbour');
    });
  });
};

//getCountryAndBorderCountries('usa');

//const fetchReq = fetch(`https://restcountries.com/v3.1/name/russia`);
//console.log(fetchReq);

const displayError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  //countriesContainer.style.opacity = 1;
};

const getDataAndConvertToJSON = function (
  url,
  errorMessage = 'Что-то пошло не так.'
) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMessage} Ошибка ${response.status}`);
    }

    return response.json();
  });
};

//

const getCountryData = function (countryName) {
  getDataAndConvertToJSON(
    `https://restcountries.com/v3.1/name/${countryName}`,
    'Страна не найдена'
  )
    .then(data => {
      displayCountry(data[0]);
      if (!data[0].borders) throw new Error('Соседних стран не найдено');
      const firstNeighbour = data[0].borders[0];

      if (!firstNeighbour) return;
      return getDataAndConvertToJSON(
        `https://restcountries.com/v3.1/alpha/${firstNeighbour}`,
        'Страна не найдена'
      );
    })
    .then(data => displayCountry(data[0], 'neighbour'))
    .catch(e => {
      console.error(e);
      displayError(`Что-то пошло не так, ${e.message}`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

getCountryData('japan');

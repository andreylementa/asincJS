'use strict';

//const btn = document.querySelector('.btn-country');
//const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////////////
//btn.addEventListener('click', () => getCountryData('russia'));

//const displayCountry = function (data, className = '') {
//  const currencies = Object.values(data.currencies)[0].name;
//  console.log(currencies);
//  const html = `
//        <article class="country ${className}">
//          <img class="country__img" src="${data.flags.png}" />
//          <div class="country__data">
//            <h3 class="country__name">${data.name.common}</h3>
//            <h4 class="country__region">${data.region}</h4>
//            <p class="country__row"><span>👨‍👩‍👧‍👦</span>${Intl.NumberFormat(
//              'ru'
//            ).format(data.population)} миллионов</p>
//            <p class="country__row"><span>🗣️</span>${
//              Object.values(data.languages)[0]
//            }</p>
//            <p class="country__row"><span>💰</span>${currencies}</p>
//          </div>
//        </article>
//  `;
//  countriesContainer.style.opacity = '1';
//  countriesContainer.insertAdjacentHTML('beforeend', html);
//};

//const getCountryAndBorderCountries = function (country) {
//  // Вызов AJAX для получения данных о стране
//  const request1 = new XMLHttpRequest();
//  request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//  request1.send();

//  request1.addEventListener('load', function () {
//    const [data1] = JSON.parse(this.responseText);
//    console.log(data1);

//    // Отображение страны
//    displayCountry(data1);
//    // получаем первую соседнюю страну
//    const [firstNeighbour] = data1.borders;
//    if (!firstNeighbour) return;
//    // Вызов AJAX для получения данных о первой соседней стране
//    const request2 = new XMLHttpRequest();
//    request2.open(
//      'GET',
//      `https://restcountries.com/v3.1/alpha/${firstNeighbour}`
//    );
//    request2.send();

//    request2.addEventListener('load', function () {
//      const [data2] = JSON.parse(this.responseText);
//      displayCountry(data2, 'neighbour');
//    });
//  });
//};

////getCountryAndBorderCountries('usa');

////const fetchReq = fetch(`https://restcountries.com/v3.1/name/russia`);
////console.log(fetchReq);

//const displayError = function (message) {
//  countriesContainer.insertAdjacentText('beforeend', message);
//  //countriesContainer.style.opacity = 1;
//};

//const getDataAndConvertToJSON = function (
//  url,
//  errorMessage = 'Что-то пошло не так.'
//) {
//  return fetch(url).then(response => {
//    if (!response.ok) {
//      throw new Error(`${errorMessage} Ошибка ${response.status}`);
//    }

//    return response.json();
//  });
//};

////

//const getCountryData = function (countryName) {
//  getDataAndConvertToJSON(
//    `https://restcountries.com/v3.1/name/${countryName}`,
//    'Страна не найдена'
//  )
//    .then(data => {
//      displayCountry(data[0]);
//      if (!data[0].borders) throw new Error('Соседних стран не найдено');
//      const firstNeighbour = data[0].borders[0];

//      if (!firstNeighbour) return;
//      return getDataAndConvertToJSON(
//        `https://restcountries.com/v3.1/alpha/${firstNeighbour}`,
//        'Страна не найдена'
//      );
//    })
//    .then(data => displayCountry(data[0], 'neighbour'))
//    .catch(e => {
//      console.error(e);
//      displayError(`Что-то пошло не так, ${e.message}`);
//    })
//    .finally(() => (countriesContainer.style.opacity = 1));
//};

//getCountryData('japan');

// Задание 1

//const displayCountryByGPS = function (lat, lng) {
//  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//    .then(response => {
//      if (!response.ok)
//        throw new Error(
//          `Проблема с геокодированием (ошибка ${response.status})`
//        );
//      return response.json();
//    })
//    .then(data => {
//      console.log(data);
//      console.log(`You are in ${data.city}, ${data.country}`);
//      return getDataAndConvertToJSON(
//        `https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`,
//        'Страна не найдена.'
//      );
//    })
//    .then(data => displayCountry(data[0]))
//    .catch(e => {
//      console.error(`${e} 🧐`);
//      displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
//    })
//    .finally(() => {
//      countriesContainer.style.opacity = 1;
//    })

//    .catch(e => console.error(`${e.message} 🧐`));
//};

//displayCountryByGPS(35.756, 139.256);

// Пример работы с циклом событий

//console.log('Начало теста');
//setTimeout(() => console.log('Таймер 0 секунд'), 0);
//Promise.resolve('Выполненное promise 1').then(result => console.log(result));
//Promise.resolve('Выполненное promise 2').then(result => {
////  for (let i = 0; i < 10000000000; i++) {}
////  console.log(result);
////});
////console.log('Конец теста');

/////////////////////////////////////////////////
//// Создание Простого Promise

//const lotteryPromise = new Promise(function (resolve, reject) {
//  console.log('Происходит розыгрыш лотереи 🪄');
//  setTimeout(function () {
//    if (Math.random() >= 0.5) {
//      resolve('Вы ВЫИГРАЛИ! 💶');
//    } else {
//      reject(new Error('Вы ПРОИГРАЛИ! 😿'));
//    }
//  }, 3000);
//});

//lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//// Promisifying (промисификация) функции setTimeout()

//wait(3)
//  .then(() => {
//    console.log('Длительность ожидания 3 секунды');
//    return wait(2);
//  })
//  .then(() => {
//    console.log('Длительность ожидания 2 секунды');
//  });

////setTimeout(() => {
////  console.log('Прошла 1 секунда');
////  setTimeout(() => {
////    console.log('Прошло 2 секунды');
////    setTimeout(() => {
////      console.log('Прошло 3 секунды');
////      setTimeout(() => {
////        console.log('Прошло 4 секунды');
////      }, 1000);
////    }, 1000);
////  }, 1000);
////}, 1000);

//wait(1)
//  .then(() => {
//    console.log('Прошла 1 секунда');
//    return wait(1);
//  })
//  .then(() => {
//    console.log('Прошла 2 секунда');
//    return wait(1);
//  })
//  .then(() => {
//    console.log('Прошла 3 секунда');
//    return wait(1);
//  })
//  .then(() => {
//    console.log('Прошла 4 секунда');
//    return wait(1);
//  });

//Promise.resolve('Resolved!').then(res => console.log(res));
//Promise.reject(new Error('Rejected!')).catch(e => console.error(e));

//const getUserPosition = function () {
//  return new Promise(function (resolve, reject) {
//    //navigator.geolocation.getCurrentPosition(
//    // position => resolve(position),
//    //  e => reject(e)
//    //);
//    navigator.geolocation.getCurrentPosition(resolve, reject);
//  });
//};
//getUserPosition()
//  .then(res => console.log(res))
//  .catch(err => console.error(err));
////////////////////////////////////////////////////////////////////////
//Задание 2
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imageContainer = document.querySelector('.images');

const createImageElement = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = imagePath;
    imgEl.addEventListener('load', function () {
      imageContainer.append(imgEl);
      resolve(imgEl);
    });
    imgEl.addEventListener('error', function () {
      reject(new Error('Изображение не найдено'));
    });
  });
};

let currentImage;

createImageElement('./img/image1.jpg')
  .then(img => {
    console.log('Изображение 1 загружено');
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImageElement('./img/image2.jpg');
  })
  .then(img => {
    console.log('Изображение 2 загружено');
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImageElement('./img/image3.jpg');
  })
  .then(img => {
    console.log('Изображение 3 загружено');
    currentImage = img;
    return wait(2);
  })
  .catch(e => console.error(e));

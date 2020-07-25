export function getLatLng(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3130b9f6f3c126f9bc6a4a2c72b3f56c`,
    {mode: 'cors'}).then(response => response.json());
};
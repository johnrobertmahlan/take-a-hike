export function findTrails(lat, lng) {
    return fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=30&maxResults=25&key=200845173-05f15b7ae7c9b2ff2ebdfe522bad1f98`,
    {mode: 'cors'}).then(response => response.json()); 
};
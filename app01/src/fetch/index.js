export default function getStarWarsPlanets(setVal) {
  fetch('https://swapi.dev/api/planets/')
    .then((r) => r.json())
    .then(d=>setVal(d.results));
}
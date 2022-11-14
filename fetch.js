async function fetchReq(num) {
    const res = await fetch('https://swapi.dev/api/people/'+ num)
    const data = await res.json()
   for (const film of data.films) {
     const isFilm = await fetch(film)
     const isData = await isFilm.json()
      console.log(isData);
      console.log(isData.director);
console.log(Date.now());
   }
   
}

fetchReq(2)

for (let index = 0; index < array.length; index++) {
   const element = array[index];
   
}

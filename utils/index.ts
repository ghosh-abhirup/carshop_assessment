
export async function fetchCars(){
    const headers= {
        'X-RapidAPI-Key': 'fbfad9573fmsh8c6ce3652af4636p15a390jsnf1c9f35b2e12',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      };

      const response= await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
      }) ;

      const res = await response.json();
      return res;
}
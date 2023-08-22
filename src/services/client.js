const URL_API_JOBS = `https://jsearch.p.rapidapi.com/search?query=`; 
const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
  }
};

export const getJobsList = async (searchParams) => {
  const formatedLocation = encodeURIComponent(searchParams.location)
  // const formatedEmploymentTypes = encodeURIComponent(searchParams.employmentTypes)
  const formatedApiPage = encodeURIComponent(searchParams.apiPage)
  const formatedQuery = encodeURIComponent(searchParams.currentQuery)
  const url = `${URL_API_JOBS}${formatedQuery}%20in%20${formatedLocation}&page=${formatedApiPage}&num_pages=1`

  try {
    const response = await fetch(url, OPTIONS);
    const result = await response.text();
    return JSON.parse(result).data
  } catch (error) {
    console.error(error);
  }
}


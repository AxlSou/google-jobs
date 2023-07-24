const URL_API_JOBS = `https://jsearch.p.rapidapi.com/search?query=`; 
const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '41c18fdf26msh8b4dc70566cffdcp1c02f4jsnacd95146fdb7',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

export const getJobsList = async (searchParams) => {
    const formatedLocation = encodeURIComponent(searchParams.location)
    // const formatedEmploymentTypes = encodeURIComponent(searchParams.employmentTypes)
    const formatedQuery = encodeURIComponent(searchParams.curretQuery)
    const url = `${URL_API_JOBS}${formatedQuery}%20in%20${formatedLocation}&page=${searchParams.currentPage}&num_pages=1`

    try {
      const response = await fetch(url, OPTIONS);
      const result = await response.text();
      return JSON.parse(result).data
    } catch (error) {
      console.error(error);
    }
}


import { useContext } from 'react'
import { getJobsList } from '../../services/client'
import SearchContext from '../../context/SearchContext'

export default function Pages() {
  const { searchParams, setSearchParams } = useContext(SearchContext)

  const handleNextPage = async () => {
    if (searchParams.firstIndex === 0) {
      return setSearchParams({ ...searchParams, currentPage: searchParams.currentPage + 1, firstIndex: searchParams.firstIndex + 5, lastIndex: searchParams.lastIndex + 5 })
    }
    setSearchParams({ ...searchParams, apiPage: searchParams.apiPage + 1, firstIndex: 0, lastIndex: 5 })
    const data = await getJobsList(searchParams)
    setSearchParams({ ...searchParams, data: data })
  }

  const handlePrevPage = async () => {
    if (searchParams.currentPage <= 1 && searchParams.firstIndex == 0) return
    if (searchParams.firstIndex === 5) {
      return setSearchParams({ ...searchParams, currentPage: searchParams.currentPage - 1, firstIndex: searchParams.firstIndex - 5, lastIndex: searchParams.lastIndex - 5 })
    }
    setSearchParams({ ...searchParams, apiPage: searchParams.apiPage - 1, firstIndex: 5, lastIndex: 10 })
    const data = await getJobsList(searchParams)
    setSearchParams({ ...searchParams, data: data })
  }

  const handlePageNum = async (e) => {
    setSearchParams({ ...searchParams, currentPage: e.target.innerText, apiPage: e.target.innerText / 2 })
    const data = await getJobsList(searchParams)
    setSearchParams({ ...searchParams, data: data })
  }

  return (
    <div className='flex gap-2 justify-end mb-4'>
      <div className='border group border-primaryGray rounded-md w-9 h-9 flex items-center justify-center font-roboto text-xs text-primaryGray hover:border-primaryBlue' onClick={handlePrevPage}>
        <svg className='fill-primaryGray group-hover:fill-primaryBlue' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
          <path d="M561-234.261 314.261-481 561-727.739 609.739-679l-198 198 198 198L561-234.261Z" />
        </svg>
      </div>
      <div className='border border-primaryGray rounded-md w-9 h-9 flex items-center justify-center font-roboto text-xs text-primaryGray hover:border-primaryBlue hover:text-primaryBlue' onClick={handlePageNum}>1</div>
      <div className='border border-primaryGray rounded-md w-9 h-9 flex items-center justify-center font-roboto text-xs text-primaryGray hover:border-primaryBlue hover:text-primaryBlue' onClick={handlePageNum}>2</div>
      <div className='border border-primaryGray rounded-md w-9 h-9 flex items-center justify-center font-roboto text-xs text-primaryGray hover:border-primaryBlue hover:text-primaryBlue' onClick={handlePageNum}>3</div>
      <div className='rounded-md group w-9 h-9 flex items-center justify-center font-roboto text-xs text-primaryGray hover:text-primaryBlue'>
        <svg className='fill-primaryGray group-hover:fill-primaryBlue' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M184.783-421Q161-421 143.5-438.3T126-479.894Q126-505 143.373-522t41.769-17q23.458 0 41.658 16.894 18.2 16.894 18.2 41.5T226.783-438.5q-18.217 17.5-42 17.5Zm295.823 0Q456-421 438.5-438.3T421-479.894Q421-505 438.3-522t41.594-17Q505-539 522-522.106t17 41.5Q539-456 522.106-438.5t-41.5 17.5Zm294.288 0q-24.823 0-42.359-17.3Q715-455.6 715-479.894 715-505 732.677-522t42.5-17Q800-539 817.5-522.106t17.5 41.5Q835-456 817.358-438.5 799.717-421 774.894-421Z" />
        </svg>
      </div>
      <div className='border border-primaryGray rounded-md w-9 h-9 flex items-center justify-center font-roboto text-xs text-primaryGray hover:border-primaryBlue hover:text-primaryBlue'>10</div>
      <div className='border group border-primaryGray rounded-md w-9 h-9 flex items-center justify-center font-roboto text-xs text-primaryGray hover:border-primaryBlue' onClick={handleNextPage}>
        <svg className='fill-primaryGray transform rotate-180 group-hover:fill-primaryBlue' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
          <path d="M561-234.261 314.261-481 561-727.739 609.739-679l-198 198 198 198L561-234.261Z" />
        </svg>
      </div>
    </div>
  )
}
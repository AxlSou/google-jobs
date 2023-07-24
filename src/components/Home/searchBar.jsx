import { useContext } from 'react'
import '../../index.css'
import SearchContext from '../../context/SearchContext'
import { getJobsList } from '../../services/client'

export default function SearchBar() {

  const { searchParams, setSearchParams } = useContext(SearchContext)

  const handleSearch = async () => {
    const data = getJobsList(searchParams)
    setSearchParams(data)
  }

  return (
    <div className='imageContainer w-full h-full rounded-xl grid place-items-center'>
      <div className="relative rounded-md shadow-sm w-4/6 h-1/3 grid">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <span>
            <svg className='fill-primaryGray' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
              <path d="M140-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h180v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H140v480Zm240-540h200v-100H380v100ZM140-180v-480 480Z" />
            </svg>
          </span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block h-full w-full rounded-md border-0 py-1 pl-12 pr-20 text-gray-900 font-roboto placeholder:text-grayPlaceHolder focus:border-transparent focus:outline-none sm:text-sm sm:leading-6"
          placeholder="Title, companies, expertise or benefits"
          onChange={(e) => setSearchParams({ ...searchParams, currentQuery: e.target.value })}
        />
        <button
          className='absolute mr-1 h-5/6 w-36 bg-primaryBlue text-white font-medium font-roboto rounded-md self-center place-self-end'
          onClick={() => handleSearch(searchParams)}>
          Search
        </button>
      </div>
    </div>
  )
}
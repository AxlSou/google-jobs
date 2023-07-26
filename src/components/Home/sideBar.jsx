import { useContext, useState } from 'react'
import SearchContext from '../../context/SearchContext'

function SideBar() {
  const { searchParams, setSearchParams } = useContext(SearchContext)
  const [search, setSearch] = useState('')

  const handleLocation = (e) => {
    setSearchParams({ ...searchParams, location: e.target.value })
    console.log(searchParams)
  }

  const handleEmploymentType = (e) => {
    if (e.target.checked) {
      setSearchParams({ ...searchParams, employmentType: e.target.value })
    } else {
      setSearchParams({ ...searchParams, employmentType: '' })
    }
  }

  const handleCountrySearch = (e) => {
    setSearch(e.target.value)
    setSearchParams({ ...searchParams, location: e.target.value })
  }

  return (
    <aside>
      <div className='checkboxes flex items-center pl-4 mb-4'>
        {/* To check checkbox styles */}
        <input type='checkbox' id='fullTime' className='w-5 h-5 bg-transparent border border-primaryGray rounded-none' value='FULLTIME' onChange={handleEmploymentType} />
        <span className='ml-4 font-poppins text-sm font-normal text-secondaryBlue'>Full time</span>
      </div>
      <div className='location mt-12 mr-2'>
        <h4 className='font-poppins text-primaryGray text-sm font-semibold'>LOCATION</h4>
        <div className="w-full h-12 mt-4 relative rounded-md shadow grid">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <svg className='fill-primaryGray' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
              <path d="M480.134-120q-74.673 0-140.41-28.339-65.737-28.34-114.365-76.922-48.627-48.582-76.993-114.257Q120-405.194 120-479.866q0-74.673 28.339-140.41 28.34-65.737 76.922-114.365 48.582-48.627 114.257-76.993Q405.194-840 479.866-840q74.673 0 140.41 28.339 65.737 28.34 114.365 76.922 48.627 48.582 76.993 114.257Q840-554.806 840-480.134q0 74.673-28.339 140.41-28.34 65.737-76.922 114.365-48.582 48.627-114.257 76.993Q554.806-120 480.134-120Zm-41.596-32.538v-79.693q-34.365 0-57.913-24.461-23.548-24.462-23.548-58.693v-41.692L159-555.154q-3.462 18.462-5.846 37.25-2.385 18.788-2.385 38.075 0 125.214 81.808 218.752 81.808 93.539 205.961 108.539Zm284.77-104.923q20.461-22.462 36.577-48.552 16.115-26.09 27.363-54.609 11.247-28.518 16.615-58.483 5.368-29.966 5.368-60.895 0-101.965-55.692-186.252-55.693-84.287-150.385-121.979v19.036q0 33.964-23.548 58.426-23.548 24.461-57.914 24.461h-83.154v83.154q0 17.327-12.346 28.548-12.346 11.221-29.076 11.221h-81.731V-480h248q17.327 0 28.548 12.231 11.221 12.231 11.221 29.231v123.153h41.135q27.788 0 49.465 16.149 21.677 16.148 29.554 41.775Z" />
            </svg>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block h-full w-full rounded-md border-0 py-1 pl-12 pr-20 text-gray-900 font-roboto placeholder:text-grayPlaceHolder focus:border-transparent focus:outline-none sm:text-sm sm:leading-6"
            placeholder="City, state, zip code or country"
            value={search}
            onChange={handleCountrySearch}
          />
        </div>
      </div>
      <div className='mt-8 ml-4 mb-4'>
        <ul className='grid gap-4'>
          <li className='flex items-center'>
            <input type='radio' id='London' name='location' className='w-5 h-5' value='London' checked={searchParams.location === 'London'} onChange={handleLocation} />
            <label className='ml-4 font-poppins text-sm font-normal text-secondaryBlue'>London</label>
          </li>
          <li className='flex items-center'>
            <input type='radio' id='Amsterdam' name='location' className='w-5 h-5' value='Amsterdam' checked={searchParams.location === 'Amsterdam'} onChange={handleLocation} />
            <label className='ml-4 font-poppins text-sm font-normal text-secondaryBlue'>Amsterdam</label>
          </li>
          <li className='flex items-center'>
            <input type='radio' id='New York' name='location' className='w-5 h-5' value='New York' checked={searchParams.location === 'New York'} onChange={handleLocation} />
            <label className='ml-4 font-poppins text-sm font-normal text-secondaryBlue'>New York</label>
          </li>
          <li className='flex items-center'>
            <input type='radio' id='Berlin' name='location' className='w-5 h-5' value='Berlin' checked={searchParams.location === 'Berlin'} onChange={handleLocation} />
            <label className='ml-4 font-poppins text-sm font-normal text-secondaryBlue'>Berlin</label>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
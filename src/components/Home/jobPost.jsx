import { useNavigate } from 'react-router-dom'

export default function JobPost({ companyLogo, companyName, role, employmenType, location, postedTime, index }) {
  const navigate = useNavigate()

  const employmenTypeFormated = (employmenType) => {
    switch (employmenType) {
      case 'FULLTIME':
        return 'Full time'
      case 'PARTIME':
        return 'Part time'
      case 'CONTRACTOR':
        return 'Contractor'
      case 'INTERN':
        return 'Internship'
      default:
        return 'Full time'
    }
  }

  return (
    <div className='w-full max-h-32 mb-8 py-3 px-2 grid grid-cols-[100px,1fr] gap-4 bg-white rounded-md shadow hover:cursor-pointer' onClick={() => navigate(`post/${index}`)}>
      <img className='h-24 w-24 rounded-md' src={companyLogo ? companyLogo : 'https://components.infojobs.com/statics/images/pic-company-logo.png'} alt={companyLogo} />
      <div className='grid grid-rows-[16px,1fr,34px] gap-2'>
        <h6 className='text-sm font-roboto font-bold text-secondaryBlue'>{companyName}</h6>
        <h3 className='text-lg font-roboto font-normal text-secondaryBlue'>{role}</h3>
        <div className='flex items-center justify-between'>
          <span className='text-xs font-roboto font-bold text-secondaryBlue tracking-tight border-1 border-secondaryBlue rounded-md px-2 py-2 w-16 h-7 text-center flex items-center justify-center'>
            {employmenTypeFormated(employmenType)}
          </span>
          <div className='flex items-center gap-6 px-2'>
            <div className='flex items-center gap-2 px-2'>
              <svg className='fill-primaryGray' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                <path d="M480.134-120q-74.673 0-140.41-28.339-65.737-28.34-114.365-76.922-48.627-48.582-76.993-114.257Q120-405.194 120-479.866q0-74.673 28.339-140.41 28.34-65.737 76.922-114.365 48.582-48.627 114.257-76.993Q405.194-840 479.866-840q74.673 0 140.41 28.339 65.737 28.34 114.365 76.922 48.627 48.582 76.993 114.257Q840-554.806 840-480.134q0 74.673-28.339 140.41-28.34 65.737-76.922 114.365-48.582 48.627-114.257 76.993Q554.806-120 480.134-120Zm-41.596-32.538v-79.693q-34.365 0-57.913-24.461-23.548-24.462-23.548-58.693v-41.692L159-555.154q-3.462 18.462-5.846 37.25-2.385 18.788-2.385 38.075 0 125.214 81.808 218.752 81.808 93.539 205.961 108.539Zm284.77-104.923q20.461-22.462 36.577-48.552 16.115-26.09 27.363-54.609 11.247-28.518 16.615-58.483 5.368-29.966 5.368-60.895 0-101.965-55.692-186.252-55.693-84.287-150.385-121.979v19.036q0 33.964-23.548 58.426-23.548 24.461-57.914 24.461h-83.154v83.154q0 17.327-12.346 28.548-12.346 11.221-29.076 11.221h-81.731V-480h248q17.327 0 28.548 12.231 11.221 12.231 11.221 29.231v123.153h41.135q27.788 0 49.465 16.149 21.677 16.148 29.554 41.775Z" />
              </svg>
              <span className='font-roboto font-medium text-xs text-primaryGray'>{location}</span>
            </div>
            <div className='flex items-center gap-2 px-2'>
              <svg className='fill-primaryGray' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                <path d="m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z" />
              </svg>
              <span className='font-roboto font-medium text-xs text-primaryGray'>{postedTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
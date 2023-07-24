import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import SearchContext from '../../context/SearchContext'

export default function PostDetails() {
  const { searchParams } = useContext(SearchContext)
  let { index } = useParams()
  const post = searchParams.data[index]
  const navigate = useNavigate()

  return (
    <div key={post.employer_name} className='mt-12 grid grid-cols-[400px,1fr] gap-4 pb-24'>
      <aside>
        <div className='flex items-center gap-4 hover:cursor-pointer' onClick={() => navigate('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className='fill-primaryBlue rotate-180'>
            <path d="m699.609-292.391-48.74-47.979 104.566-104.565H114.022v-68.13h642.413L651.63-617.63l47.979-47.979L886.218-479 699.609-292.391Z" />
          </svg>
          <span className='text-primaryBlue text-sm font-medium font-poppins'>Back to search</span>
        </div>
        <div className='mt-12 font-poppins text-secondaryBlue max-w-xs'>
          <h4 className='text-primaryGray text-sm font-bold'>HOW TO APPLY</h4>
          <p className='mt-6'>Please follow the below link:</p>
          <a
            className='text-primaryBlue text-sm font-medium font-poppins'
            target="_blank"
            rel="noreferrer"
            href={post.job_apply_link}>
            {post.job_apply_link}
          </a>
        </div>
      </aside >
      <section className='flex flex-col gap-8'>
        <header className='flex flex-col gap-2'>
          <div className='flex items-center gap-6'>
            <h1 className='text-secondaryBlue text-2xl font-bold font-roboto'>{post.job_title}</h1>
            <span className='text-xs font-roboto font-bold text-secondaryBlue tracking-tight border-1 border-secondaryBlue rounded-md px-2 py-2 w-16 h-7 text-center flex items-center justify-center'>
              Full time
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <svg className='fill-primaryGray' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
              <path d="m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z" />
            </svg>
            <span className='font-roboto font-medium text-xs text-primaryGray'>5 days ago</span>
          </div>
        </header>
        <main className='flex flex-col gap-4'>
          <div className='grid grid-cols-[50px,1fr] grid-rows-2 gap-x-2 max-w-xs items-center'>
            <img className='h-11 w-11 rounded-md row-span-2' src={post.employer_logo ? post.employer_logo : 'https://components.infojobs.com/statics/images/pic-company-logo.png'} alt={post.employer_logo} />
            <h4 className='text-secondaryBlue text-lg font-roboto font-bold'>{post.employer_name}</h4>
            <div className='flex items-center gap-2'>
              <svg className='fill-primaryGray' xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18">
                <path d="M480.134-120q-74.673 0-140.41-28.339-65.737-28.34-114.365-76.922-48.627-48.582-76.993-114.257Q120-405.194 120-479.866q0-74.673 28.339-140.41 28.34-65.737 76.922-114.365 48.582-48.627 114.257-76.993Q405.194-840 479.866-840q74.673 0 140.41 28.339 65.737 28.34 114.365 76.922 48.627 48.582 76.993 114.257Q840-554.806 840-480.134q0 74.673-28.339 140.41-28.34 65.737-76.922 114.365-48.582 48.627-114.257 76.993Q554.806-120 480.134-120Zm-41.596-32.538v-79.693q-34.365 0-57.913-24.461-23.548-24.462-23.548-58.693v-41.692L159-555.154q-3.462 18.462-5.846 37.25-2.385 18.788-2.385 38.075 0 125.214 81.808 218.752 81.808 93.539 205.961 108.539Zm284.77-104.923q20.461-22.462 36.577-48.552 16.115-26.09 27.363-54.609 11.247-28.518 16.615-58.483 5.368-29.966 5.368-60.895 0-101.965-55.692-186.252-55.693-84.287-150.385-121.979v19.036q0 33.964-23.548 58.426-23.548 24.461-57.914 24.461h-83.154v83.154q0 17.327-12.346 28.548-12.346 11.221-29.076 11.221h-81.731V-480h248q17.327 0 28.548 12.231 11.221 12.231 11.221 29.231v123.153h41.135q27.788 0 49.465 16.149 21.677 16.148 29.554 41.775Z" />
              </svg>
              <span className='font-roboto font-medium text-xs text-primaryGray'>{post.job_city}</span>
            </div>
          </div>
          <p className='text-secondaryBlue font-roboto whitespace-pre-line'>{post.job_description}</p>
        </main>
      </section>

    </div >
  )
}
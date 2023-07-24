import { useContext } from 'react'
import JobPost from './jobPost'
import SearchContext from '../../context/SearchContext'

export default function PostList() {
  const { searchParams } = useContext(SearchContext)

  return searchParams.data.slice(0, 5).map((post, i) => {
    return (
      <JobPost
        key={i}
        companyLogo={post.employer_logo}
        companyName={post.employer_name}
        role={post.job_title}
        employmenType={post.job_employment_type}
        location={post.job_city}
        postedTime='5 days ago'
        index={i}
      />
    )
  })
}
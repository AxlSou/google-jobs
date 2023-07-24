import SearchBar from './searchBar'
import SideBar from './sideBar'
import PostList from './postsList'
import Pages from './pages'

export default function Home() {
  return (
    <>
      <nav className='searchBar mt-12 h-40'>
        <SearchBar />
      </nav>
      <main className='mt-12 grid grid-cols-[400px,1fr] gap-4'>
        <SideBar />
        <section>
          <PostList />
          <Pages />
        </section>
      </main>
    </>
  )
}
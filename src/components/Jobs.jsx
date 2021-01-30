import useFetchJobs from '../useFetchJobs'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import Job from './Job'
import { useState } from 'react'
import Pagination from './Pagination'
import SearchForm from './SearchForm'
import { BriefcaseFill } from 'react-bootstrap-icons'

export default function Jobs() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams((prevParams) => ({ ...prevParams, [param]: value }))
  }

  return (
    <>
      <header className='w-100 vh-100 d-flex flex-column'>
        <img
          src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          alt=''
          style={{
            filter: 'brightness(30%)',
            objectFit: 'cover',
            zIndex: '-1'
          }}
          className='position-absolute w-100 h-100'
        />
        <Navbar expand='lg' className='p-5 navbar-dark'>
          <Navbar.Brand href='#' className='text-white'>
            <BriefcaseFill size={26} color='white' className='mr-2 mb-1' />
            Job Finder
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse id='navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link className='text-white'>Home</Nav.Link>
              <Nav.Link className='text-white'>For seekers</Nav.Link>
              <Nav.Link className='text-white'>For employers</Nav.Link>
              <Nav.Link className='text-white'>Help</Nav.Link>
            </Nav>
            <div>
              <Button className='btn-outline-primary bg-transparent mr-3'>
                Login
              </Button>
              <Button className='btn-outline-success bg-transparent'>
                Register
              </Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <div className='w-100 m-auto px-5' style={{ maxWidth: '700px' }}>
          <h1 className='text-white'>Find your dream job</h1>
          <SearchForm params={params} onParamChange={handleParamChange} />
        </div>
      </header>
      <main className='mx-auto py-5' style={{ maxWidth: '900px' }}>
        <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />
        })}
        <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </main>
    </>
  )
}

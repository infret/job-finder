import useFetchJobs from '../useFetchJobs'
import { Button, Navbar, Nav, Spinner, Alert } from 'react-bootstrap'
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
    setParams((prevParams) => ({
      ...prevParams,
      [param]: value
    }))
  }

  function getJobs(jobs) {
    if (params.remote === '') {
      return jobs.filter((job) => job.location === 'Remote')
    } else {
      return jobs
    }
  }

  return (
    <>
      <header className='w-100 vh-100 d-flex flex-column' style={{ minHeight: '500px' }}>
        <img
          src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          alt=''
          style={{
            filter: 'brightness(30%)',
            objectFit: 'cover',
            zIndex: '-1'
          }}
          className='position-absolute w-100 vh-100'
        />
        <Navbar expand='md' className='p-4 navbar-dark'>
          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Brand href='#' className='text-white ml-4 mr-auto pr-2'>
            <BriefcaseFill size={26} color='white' className='mr-2 mb-1' />
            Job Finder
          </Navbar.Brand>
          <Navbar.Collapse id='navbar-nav'>
            <Nav>
              <Nav.Link className='text-white m-2'>Home</Nav.Link>
              <Nav.Link className='text-white m-2'>For seekers</Nav.Link>
              <Nav.Link className='text-white m-2'>For employers</Nav.Link>
              <Nav.Link className='text-white m-2'>Help</Nav.Link>
            </Nav>
            <div className='ml-auto'>
              <Button className='btn-outline-primary bg-transparent mr-3'>Login</Button>
              <Button className='btn-outline-success bg-transparent'>Register</Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <div className='w-100 m-auto px-4' style={{ maxWidth: '700px' }}>
          <h1 className='text-white'>Find your dream job</h1>
          <SearchForm params={params} onParamChange={handleParamChange} />
        </div>
      </header>
      <main className='mx-auto p-3' style={{ maxWidth: '1000px' }}>
        {loading && (
          <div
            className='position-absolute'
            style={{ zIndex: 9000, left: '50%', top: '90%', transform: 'translate(-50%, -50%)' }}
          >
            <Spinner variant='light' animation='border' role='status'>
              <span className='sr-only'>Loading</span>
            </Spinner>
          </div>
        )}
        {error && (
          <Alert
            variant='danger'
            className='position-absolute'
            style={{ zIndex: 9000, left: '50%', top: '90%', transform: 'translate(-50%, -50%)' }}
          >
            Error! Try to refresh page.
          </Alert>
        )}
        {!loading && !error && (
          <>
            <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
            {getJobs(jobs).map((job) => (
              <Job key={job.id} job={job} />
            ))}
            {console.log(params)}
            <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
          </>
        )}
      </main>
      <footer className='m-0 bg-dark text-white d-flex align-items-center justify-content-around flex-wrap'>
        <div className='p-5 d-flex flex-column' style={{ width: '300px' }}>
          <h3>Job Finder</h3>
          <a href='#'>About company</a>
          <a href='#'>Our vacancies</a>
          <a href='#'>Ads on site</a>
          <a href='#'>Personal data protection</a>
        </div>
        <div className='p-5 d-flex flex-column' style={{ width: '300px' }}>
          <h3>Services</h3>
          <a href='#'>Sample resume</a>
          <a href='#'>Career guidance</a>
          <a href='#'>Seekers forum</a>
          <a href='#'>For young professionals</a>
        </div>
        <div className='p-5 d-flex flex-column' style={{ width: '300px' }}>
          <h3>Also see</h3>
          <a href='#'>Search for colleagues</a>
          <a href='#'>Directory of companies</a>
          <a href='#'>Help</a>
          <a href='#'>Support</a>
        </div>
        <div className='p-5 d-flex flex-column align-items-center' style={{ width: '300px' }}>
          <BriefcaseFill size={50} color='white' />
          <a href='https://infret.github.io'>
            <i>by infret</i>
          </a>
          <p>
            Based on <a href='jobs.github.com/api'>GitHub Jobs</a>
          </p>
        </div>
      </footer>
    </>
  )
}

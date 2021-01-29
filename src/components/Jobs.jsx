import useFetchJobs from '../useFetchJobs'
import {
  Container,
  Navbar,
  Nav,
  Image,
  Carousel,
  Button
} from 'react-bootstrap'
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
      <Navbar
        expand='lg'
        className='position-absolute p-5 w-100'
        style={{ zIndex: '1000' }}
      >
        <Navbar.Brand href='#home' className='text-white'>
          <BriefcaseFill size={26} color='white' className='mr-2 mb-1' />
          Job Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='w-100'>
            <Nav.Link href='#' className='text-white'>
              Home
            </Nav.Link>
            <Nav.Link href='#' className='text-white'>
              For seekers
            </Nav.Link>
            <Nav.Link href='#' className='text-white'>
              For employers
            </Nav.Link>
            <Button className='ml-auto btn-outline-white bg-transparent'>
              Login
            </Button>
            <Button className='ml-3 bg-transparent'>Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div
        className='vh-100 w-100'
        style={{
          filter: 'brightness(30%)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)'
        }}
      ></div>
      <Container className='my-4'>
        <SearchForm
          params={params}
          onParamChange={handleParamChange}
          placeholder='Profession or position'
        />
        <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />
        })}
        <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </Container>
    </>
  )
}

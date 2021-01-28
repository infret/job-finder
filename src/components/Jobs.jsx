import useFetchJobs from '../useFetchJobs'
import { Container, Navbar, Nav, Image, Carousel } from 'react-bootstrap'
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
      <Navbar bg='white' expand='lg'>
        <Navbar.Brand href='#home'>
          <BriefcaseFill size={26} color='text-primary' className='mr-2 mb-1' />
          Job Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#'>For seekers</Nav.Link>
            <Nav.Link href='#'>For employers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className='vh-100 w-100'
            style={{ objectFit: 'cover' }}
            src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            alt=''
          />
          <Carousel.Caption className='mb-5'>
            <h1 className='mb-4'>Find your dream job</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='vh-100 w-100'
            style={{ objectFit: 'cover' }}
            src='https://images.unsplash.com/photo-1513430698680-03ff4d6be961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
          />
          <Carousel.Caption className='mb-5'>
            <h1 className='mb-4'>Find your dream job</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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

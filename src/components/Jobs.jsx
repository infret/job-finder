import useFetchJobs from '../useFetchJobs'
import {Container} from 'react-bootstrap'
import Job from './Job'
import {useState} from 'react'
import Pagination from './Pagination'
import SearchForm from './SearchForm'

export default function Jobs() {
	const [params, setParams] = useState({search: ''})
	const [page, setPage] = useState(1)
	const {jobs, loading, error, hasNextPage } = useFetchJobs(params,page)

	function handleParamChange(e){
		const param = e.target.name
		const value = e.target.value
		setPage(1)
		setParams(prevParams => ({...prevParams, [param]: value}))
	}
	return (
			<Container className='my-4'>
				<h1 className='mb-4'>GitHub Jobs</h1>
				<SearchForm params={params} onParamChange={handleParamChange}/>
				<Pagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
				{loading && <h1>Loading...</h1>}
				{error && <h1>Error</h1>}
				{jobs.map(job => {
					return <Job key={job.id} job={job} />
				})}
				<Pagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
			</Container>
	)
}
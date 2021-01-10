import useFetchJobs from '../useFetchJobs'
import {Container} from 'react-bootstrap'
import Job from './Job'
import {useState} from 'react'

export default function Jobs() {
	const [params, setParams] = useState({})
	const [page, setPage] = useState(1)
	const {jobs, loading, error } = useFetchJobs(params,page)
	return (
			<Container>
				{loading && <h1>Loading...</h1>}
				{error && <h1>Error</h1>}
				{jobs.map(job => {
					return <Job key={job.id} job={job} />
				})}
			</Container>
	)
}
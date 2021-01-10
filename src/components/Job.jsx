import {Badge, Card} from 'react-bootstrap'
import Parse from 'html-react-parser'

export default function Job({job}) {
	return (
			<Card>
				<Card.Body>
					<div className='d-flex justify-content-between'>
						<div>
							<Card.Title>
								{job.title} - <span className='text-muted font-weight-light'>{job.company}</span>
							</Card.Title>
							<Card.Subtitle className='text-muted mb-2'>
								{new Date(job.created_at).toLocaleDateString()}
							</Card.Subtitle>
							<Badge variant='secondary' className='mr-2'>{job.type}</Badge>
							<Badge variant='secondary'>{job.location}</Badge>
							<div style={{wordBreak: 'break-all'}}>{Parse(job.how_to_apply)}</div>
						</div>
						<img className='d-none d-md-block' height='50' alt={job.company} src={job.company_logo}/>
					</div>
				</Card.Body>
			</Card>
	)
}
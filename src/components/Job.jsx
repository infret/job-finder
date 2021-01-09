import {Card} from 'react-bootstrap'

export default function Job({job}){
	return (
			<Card>
				<Card.Body>
					<Card.Title>
					{job.title}
					</Card.Title>
				</Card.Body>
			</Card>
	)
}
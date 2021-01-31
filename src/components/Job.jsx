import { Badge, Button, Card, Collapse } from 'react-bootstrap'
import Parse from 'html-react-parser'
import { useState } from 'react'

export default function Job({ job }) {
  const [open, setOpen] = useState(false)
  return (
    <Card className='mb-3'>
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <div>
            <Card.Title>
              {job.title} -{' '}
              <span className='text-muted font-weight-light'>
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className='text-muted mb-2'>
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant='secondary' className='mr-2'>
              {job.type}
            </Badge>
            <Badge variant='secondary'>{job.location}</Badge>
            <div className='mt-3' style={{ wordBreak: 'break-all' }}>
              {Parse(job.how_to_apply)}
            </div>
          </div>
          <img
            className='d-none d-md-block'
            alt={job.company}
            src={job.company_logo}
            style={{ maxWidth: '300px' }}
            height={50}
          />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant='primary'
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div>{Parse(job.description)}</div>
        </Collapse>
      </Card.Body>
    </Card>
  )
}

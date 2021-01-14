import React from 'react'
import {Form, Col} from 'react-bootstrap'

const SearchForm = ({params, onParamChange}) => (
		<Form className='mb-4'>
			<Form.Row className='align-items-end'>
				<Form.Group as={Col}>
					<Form.Label>Search</Form.Label>
					<Form.Control onChange={onParamChange} value={params.search} name='search' type='text'/>
				</Form.Group>
				<Form.Group as={Col} xs='auto' className='ml-2'>
					<Form.Check className='mb-2' onChange={onParamChange} value={params.full_time} name='full_time' id='full-time' label='Only fulltime' type='checkbox'/>
				</Form.Group>
			</Form.Row>
		</Form>
)
export default SearchForm
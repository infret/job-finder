import React from 'react'
import { Form } from 'react-bootstrap'

const SearchForm = ({ params, onParamChange }) => (
  <Form>
    <Form.Label className='text-white' style={{ zIndex: 100 }}>
      Search
    </Form.Label>
    <Form.Control
      onChange={onParamChange}
      value={params.description}
      name='description'
      type='text'
    />
    <Form.Check
      className='ml-1 mt-3 text-white'
      onChange={onParamChange}
      value={params.full_time}
      name='full_time'
      label='Only fulltime'
      type='checkbox'
    />
  </Form>
)
export default SearchForm

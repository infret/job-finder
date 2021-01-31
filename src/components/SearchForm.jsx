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
    <div className='d-flex mt-3'>
      <Form.Check
        className='mx-2 text-white'
        onChange={onParamChange}
        value={params.full_time}
        name='full_time'
        label='Only fulltime'
        type='checkbox'
      />
      <Form.Check
        className='mx-2 text-white'
        onChange={onParamChange}
        value={params.remote}
        name='remote'
        label='Only remote'
        type='checkbox'
      />
    </div>
  </Form>
)
export default SearchForm

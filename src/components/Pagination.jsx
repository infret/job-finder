import React from 'react'
import {Pagination} from 'react-bootstrap';

const JobsPagination = ({page, setPage, hasNextPage}) => (
		<Pagination>
			{page !== 1 && <>
				<Pagination.Prev onClick={() => setPage(page--)}/>
				<Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
			</>}

			{page > 2 && <>
				<Pagination.Ellipsis/>
				<Pagination.Item onClick={() => setPage(page--)}>{page - 1}</Pagination.Item>
			</>}
			<Pagination.Item active>{page}</Pagination.Item>
			{hasNextPage && (<>
				<Pagination.Item onClick={() => setPage(page++)}>{page + 1}</Pagination.Item>
				<Pagination.Next onClick={() => setPage(page++)}/>
			</>)}
		</Pagination>
)
export default JobsPagination

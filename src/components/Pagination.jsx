import React from 'react'
import { Pagination } from 'react-bootstrap';

export default function MyPagination({ page, setPage, hasNextPage }) {
	return (
		<Pagination>
			{page !== 1 && (
				<>
					<Pagination.Prev onClick={() => setPage(page--)} />
					<Pagination.Item>1</Pagination.Item>
				</>
			)}

			{page > 2 && (
				<>
					<Pagination.Ellipsis />
					<Pagination.Item>{page - 1}</Pagination.Item>
				</>
			)}

			{hasNextPage && <Pagination.Item active>{page}</Pagination.Item>}
			<Pagination.Item>{page + 1}</Pagination.Item>
			{hasNextPage && <Pagination.Next/>}
		</Pagination>
	)
}

import React from 'react'

export default function Pagination({page, setPage, hasNextPage}){
	return(
			<Pagination>
				{page !== 1 && <Pagination.Prev onClick={() => setPage(page--)}/>}
				{page !== 1 && <Pagination.Item>1</Pagination.Item>}
				{page > 2 && <Pagination.Ellipsis/>}
				{page > 2 && <Pagination.Item>{page - 1}</Pagination.Item>}
				{hasNextPage && <Pagination.Item active>{page}</Pagination.Item>}
				<Pagination.Item>{page + 1}</Pagination.Item>
				{hasNextPage && <Pagination.Next/>}
			</Pagination>
	)
}
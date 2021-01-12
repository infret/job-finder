import React from 'react'

export default function Pagination({page, setPage}){
	return(
			<Pagination>
				{page !== 1 && <Pagination.Prev/>}
				{page !== 1 && <Pagination.Item>1</Pagination.Item>}
				{page > 2 && <Pagination.Ellipsis/>}
				{page > 2 && <Pagination.Item>{page - 1}</Pagination.Item>}
				<Pagination.Item>{page}</Pagination.Item>
				<Pagination.Item>{page + 1}</Pagination.Item>
				<Pagination.Next/>
			</Pagination>
	)
}
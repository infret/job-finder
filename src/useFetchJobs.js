import {useEffect, useReducer} from 'react'

const ACTIONS = {
	MAKE_REQUEST: 'make-request',
	GET_DATA: 'get-data',
	ERROR: 'error',
	CHECK_NEXT_PAGE: 'check-next-page',
}

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.MAKE_REQUEST:
			return {
				loading: true,
				jobs: [],
			}
		case ACTIONS.GET_DATA:
			return {
				...state,
				loading: false,
				jobs: action.payload.jobs,
			}
		case ACTIONS.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				jobs: [],
			}
		case ACTIONS.CHECK_NEXT_PAGE:
			return {
				...state, hasNextPage: action.payload.hasNextPage,
			}

		default:
			return state
	}
}

export default function useFetchJobs(params, page) {
	const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true})

	useEffect(() => {
		fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page='
				+ page + ( params.search && ('&search=' + params.search.value)))
				.then(res => res.json()).then(data => {
					dispatch({type: ACTIONS.CHECK_NEXT_PAGE, payload: {hasNextPage: data.length !== 0}})
					dispatch({type: ACTIONS.GET_DATA, payload: {jobs: data}})
				}).catch(e => dispatch({type: ACTIONS.ERROR, payload: {error: e}}),
		)
	}, [params, page])

	return state
}
import {useEffect, useReducer} from 'react'

const ACTIONS = {
	MAKE_REQUEST: 'make-request',
	GET_DATA: 'get-data',
	ERROR: 'error',
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
		default:
			return state
	}
}

export default function useFetchJobs(params, page) {
	const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true})

	useEffect(() => {
		const controller = new AbortController()
		fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json', {
			method: 'GET',
			signal: controller.signal,
			params: {
				markdown: true,
				page: page,
				...params,
			},
		}).then(res => res.json()).then(data => {
					dispatch({type: ACTIONS.GET_DATA, payload: {jobs: data}})
				},
		).catch(e =>
				dispatch({type: ACTIONS.ERROR, payload: {error: e}}),
		)

		return () => {
			controller.abort()
		}
	}, [params, page])

	return state
}
import { gql } from '@apollo/client';

const GET_COMPANYS = gql`
query Companies {
	companies {
		id
		name
		businessName
		nEmployees
		logo
	}
}`;

export { GET_COMPANYS };
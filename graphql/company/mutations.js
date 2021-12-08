import { gql } from '@apollo/client';

const APROBAR_EMPRESA = gql`
mutation UpdateCompany($data: CompanyUpdateInput!, $where: CompanyWhereUniqueInput!) {
	updateCompany(data: $data, where: $where) {
		id
	}
}
`;

export { APROBAR_EMPRESA };
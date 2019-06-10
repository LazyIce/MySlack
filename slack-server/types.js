import { gql } from 'apollo-server-express';

const TYPEDEFS = gql`
    type Query {
        hi: String
    }
`;

export default TYPEDEFS;
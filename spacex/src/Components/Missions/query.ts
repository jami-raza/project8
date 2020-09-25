import gql from 'graphql-tag';

const QUERY_MISSIONS = gql`
query Mission{
  
    missions {
      mission_id
      mission_name
      wikipedia
      website
      description
    }
  }
  
`;

export default QUERY_MISSIONS;
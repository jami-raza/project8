import gql from 'graphql-tag';

const QUERY_ROCKETS = gql`
query Rockets{
    rockets{
      id
      rocket_name
      active
      stages
      boosters
      cost_per_launch
      first_flight
      country
      company
      flickr_images
      description
      
    }
  }
`;

export default QUERY_ROCKETS
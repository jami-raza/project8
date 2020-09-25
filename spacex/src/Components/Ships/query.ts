import gql from 'graphql-tag';

const QUERY_SHIPS = gql`
query Ships{
    ships{
      ship_id
      ship_name
      ship_model
      ship_type
      year_built
      image
      missions{
        name
        flight
      }
      url
    }
  }
  `;

  export default QUERY_SHIPS;
import gql from 'graphql-tag';

const QUERY_ABOUT = gql`
query CompanyInfo{
    info{
      name
      founder
      ceo
      cto
      coo
      launch_sites
      test_sites
      valuation
      vehicles
      employees
      founded
      headquarters{
        address
        city
        state
      }
      summary
    }
  }
`;

export default QUERY_ABOUT;
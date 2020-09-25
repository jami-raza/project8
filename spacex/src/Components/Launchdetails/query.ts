import gql from 'graphql-tag';


export const QUERY_LAUNCH_DETAIL = gql`
query LaunchInfo($id: String){
  
    launch(id: $id) {
      details
      flight_number
      mission_name
      launch_site {
        site_name
      }
      launch_success
      launch_year
      links {
        article_link
        flickr_images
        mission_patch
        mission_patch_small
        presskit
      }
      rocket {
        rocket_name
      }
    }
  }
  

`;
import gql from 'graphql-tag';

export const QUERY_LAUNCH = gql`
query launches{
  
  launches( sort: "flickr_images", offset: 10 ) {
    
    flight_number
    
    mission_id
    mission_name
    launch_site {
      site_name
    }
    launch_year
    links {
      article_link
      flickr_images
      video_link
    }
  }
}
  `;
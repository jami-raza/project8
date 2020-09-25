import gql from 'graphql-tag';

export const QUERY_LAUNCH = gql`
query launches{
    launches {
      flight_number
      mission_id
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
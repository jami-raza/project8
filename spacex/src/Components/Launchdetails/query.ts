import gql from 'graphql-tag';


export const QUERY_LAUNCH_DETAIL = gql`
query LaunchInfo($id: String){
  
  launch(id: $id) {
    details
    flight_number
    mission_name
    launch_window
    launch_date_utc
    timeline{
      stage1_rp1_loading
      webcast_liftoff
      first_stage_landing_burn
      go_for_prop_loading
      engine_chill
      prelaunch_checks
      ignition
      liftoff
      center_stage_sep
    }
    launch_site {
      site_name
    }
    telemetry{
      flight_club
      
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
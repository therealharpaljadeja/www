import { fetchQueryWithPagination, init } from "@airstack/node";
import { DocumentNode, gql } from "@apollo/client";
import { formatEther } from "viem";

init(process.env.AIRSTACK_API_KEY || "");


const query = gql`
query FindProfilePic($ProfileName) {
    Socials(
      input: {blockchain: ethereum, filter: {profileName: {_eq: $ProfileName}}}
    ) {
      Social {
        profileImage
      }
    }
  }
`;

export async function findProfileImage(profileName: string) {
    try {
      // Update the query with the provided profileName if necessary
      let updatedQuery = query; // If the profile name needs to be dynamic, you might need to build the query string dynamically
  
      let response = await fetchQueryWithPagination(gqlToString(updatedQuery), {
        // Ensure the variables passed here match the requirements of your query
        // For dynamic profile names, ensure to pass the profileName dynamically
        profileName
        
      });
  
      if (response) {
        let { data } = response;
        let socials = data.Socials;
  
        // Assuming there's always at least one social returned
        if (socials.Social.length > 0) {
          return socials.Social[0].profileImage;
        } else {
          console.error("No social profile found.");
          return null;
        }
      }
    } catch (e) {
      console.error(e);
      return null;
    }
  }

export const gqlToString = (gqlQuery: DocumentNode): string =>
    gqlQuery.loc?.source.body || "";
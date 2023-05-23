import { request, gql } from "graphql-request";
import { SetupState } from "../src/SetupContext";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

export const getAllSetups = async () => {

    const { homeSetups, setHomeSetups } = SetupState();

  const query = gql`
    query MyQuery {
      setups_Connection {
        edges {
          node {
            iconPack
            id
            launcher
            setup_id
            title
            uploadedDate
            wallpaper
            widgets
          }
        }
      }
    }
  `;

  const { data } = await request(graphqlAPI, query)
  .then((result) => {
      const data = result.setups_Connection.edges;
      // console.log(data)
      setHomeSetups(data);
  })
  .catch((error) => {
      // console.log(error)
  })

  // console.log(data)
  return data;
};

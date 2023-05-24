// import { request, gql } from "graphql-request";

// const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

// export const getAllSetups = async () => {

//   const query = gql`
//     query MyQuery {
//       setups_Connection {
//         edges {
//           node {
//             iconPack
//             id
//             launcher
//             setup_id
//             title
//             uploadedDate
//             wallpaper {
//               url
//             }
//             widgets
//             setupImage {
//               url
//             }
//           }
//         }
//       }
//     }
//   `;

//   try {
//     const  data  = await request(graphqlAPI, query)
//     console.log(data.setups_Connection.edges)
//     return data.setups_Connection.edges;
//   } catch (error) {
//     console.log(error)
//   }

//   // await request(graphqlAPI, query)
//   // .then((result) => {
//   //   const data = result.setups_Connection.edges;
//   //   // console.log(data)
//   //   setHomeSetups(data);
//   // })
//   // .catch((error) => {
//   //   console.log(error);
//   // });

//   // const { data } = await request(graphqlAPI, query)
//   //   .then((result) => {
//   //     const data = result.setups_Connection.edges;
//   //     // console.log(data)
//   //     return data;
//   //   })
//   //   .catch((error) => {
//   //     console.log(error)
//   //   });
// };

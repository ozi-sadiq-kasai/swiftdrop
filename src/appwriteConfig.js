// import { Client,Storage } from "appwrite";
// export const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;

// const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('658af7f41ce22adfc5e9');

// export const storage = new Storage(client)




// // const result = storage.getFileDownload('65906c397acc778e375c', '65906e9f12fa9b5160cb');

// // console.log(result); // Resource URL

// export default client


// appwriteConfig.js
import { Client, Storage } from 'appwrite';

const REACT_APP_PROJECT_ID = import.meta.env.VITE_REACT_APP_PROJECT_ID;
const REACT_APP_STORAGE_ID = import.meta.env.VITE_REACT_APP_STORAGE_ID;

export const PROJECT_ID = REACT_APP_PROJECT_ID;
export const STORAGE_ID = REACT_APP_STORAGE_ID;

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(REACT_APP_PROJECT_ID);

export const storage = new Storage(client);

export default client;


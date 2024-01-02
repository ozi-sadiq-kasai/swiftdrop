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


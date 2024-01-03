import { Client,Account} from 'appwrite';

const REACT_APP_PROJECT_ID = import.meta.env.VITE_REACT_APP_PROJECT_ID;

export const PROJECT_ID = REACT_APP_PROJECT_ID;

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(REACT_APP_PROJECT_ID);

export const account = new Account(client);

export default client;




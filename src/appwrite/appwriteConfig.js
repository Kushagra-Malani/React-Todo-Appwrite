import { Client, Account, Databases } from "appwrite";
import conf from "../conf/conf.js";
const client = new Client();

client
    .setEndpoint(conf.appwriteUrl)    // Your API Endpoint
    .setProject(conf.appwriteProjectId)  // Your project ID
;
export const account = new Account(client);
export { ID } from 'appwrite';

export const databases = new Databases(client);
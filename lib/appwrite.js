import {Account, Avatars, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.reactnative.aora',
    projectId:'667893da0021e1674e70',
    databaseId:'6678976e000c8f1aa59b',
    userCollectionId:'6678986c0026e91da62f',
    videoCollectionId:'667898e30035d0319d81',
    storageId:'66789e150002542a1f84'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

const avatars = new Avatars(client)

export const createUser = async (email, password, username) =>{

    try {
        const newAccount = await account.create(
            ID.unique(),
            email, 
            password,
            username
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn();

        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
    
}




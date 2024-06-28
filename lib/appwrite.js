import {Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

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

const avatars = new Avatars(client);

const databases = new Databases(client)

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

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email, 
                username,
                avatar:avatarUrl
            }
        )

        return newUser
        

        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
    
}


export const signIn = async (email, password)=>{
    try {

        const session = await account.createEmailPasswordSession(email, password)

        return session;
        
    } catch (error) {
        throw new Error(error)
        
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if(!currentAccount)throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)])

        if(!currentUser) throw Error;

        return currentUser.documents[0];


        

        
    } catch (error) {
        console.log(error)
    }
}




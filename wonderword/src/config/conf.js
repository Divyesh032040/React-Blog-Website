 const config = {
    appwrite: String(import.meta.env.VITE_APPWRITE_URL),

    PROJECT_ID: String(import.meta.env.VITE_PROJECT_ID),

    DATABASE_ID: String(import.meta.env.VITE_DATABASE_ID),

    BUCKET_ID: String(import.meta.env.VITE_BUCKET_ID),

    COLLECTION_ID:String(import.meta.env.COLLECTION_ID)
}

export default config
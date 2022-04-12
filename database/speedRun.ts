import { MongoClient } from 'mongodb'

const DBfucker = async (func: string, data: any = {}) => {
    const client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    console.log('Connected successfully')
    const DB = client.db().collection('speedRun')
    if (func === 'create') {
        const DBres = await DB.insertOne(data)
        return DBres
    } else if (func === 'import') {
        const DBres = await DB.find(data).toArray()
        return DBres
    }
}

export default DBfucker
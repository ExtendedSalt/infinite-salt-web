import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../database/speedRun'


const Test = async (req: NextApiRequest, res: NextApiResponse) => {

    const { method } = req
    if (method === 'POST') {
        const DBres = await DB('create' ,req.body)
        res.status(201).json({
            server: 'running',
            success: true,
            data: DBres
        })
    } else if (method === 'GET') {
        const DBres = await DB('import')
        res.status(200).json({
            server: 'running',
            success: true,
            data: DBres
        })
    } else {
        res.status(500)
    }
}

export default Test
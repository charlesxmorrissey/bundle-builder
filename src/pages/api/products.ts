import type { NextApiRequest, NextApiResponse } from 'next'

import { mockProducts } from 'mocks'
import type { ProductTypes } from 'types'

const allowedMethods = ['GET']

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ProductTypes[] | { message: string }>,
) => {
  try {
    if (!allowedMethods.includes(req.method!) || req.method === 'OPTIONS') {
      return res.status(405).send({ message: 'Method not allowed.' })
    }

    res.status(200).json(mockProducts)
  } catch (error) {
    console.error(error)

    res.status(500).send({ message: 'Server error' })
  }
}

export default handler

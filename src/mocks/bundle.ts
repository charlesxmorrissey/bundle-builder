import { v4 as uuidv4 } from 'uuid'

import type { BundleItem } from 'types'

export const mockBundle: BundleItem[] = [
  {
    id: uuidv4(),
    image: '/images/placeholder/placeholder-01.svg',
    name: 'First selection',
  },
  {
    id: uuidv4(),
    image: '/images/placeholder/placeholder-02.svg',
    name: 'Second selection',
  },
  {
    id: uuidv4(),
    image: '/images/placeholder/placeholder-01.svg',
    name: 'Third selection',
  },
]

import { v4 as uuidv4 } from 'uuid'

import type { ProductTypes } from 'types'

export const mockProducts: ProductTypes[] = [
  {
    id: uuidv4(),
    products: [
      {
        id: uuidv4(),
        image:
          '/images/cream/minted-cucumber-cream-deodorant-tube-front_55abe90c-124f-44bc-ab56-1e1d62d3da76_400x400_crop_center.png',
        name: 'Minted Cucumber',
      },
      {
        id: uuidv4(),
        image:
          '/images/cream/soft-powder-cream-deodorant-tube-front_34e0bc91-5c5d-45ed-bfcd-0158acd2d4d0_400x400_crop_center.png',
        name: 'Soft Powder',
      },
      {
        id: uuidv4(),
        image:
          '/images/cream/clean-tangerine-cream-deodorant-tube-front_8250a18e-c4dd-4e67-8c4c-d68c517eae88_400x400_crop_center.png',
        name: 'Clean Tangerine',
      },
      {
        id: uuidv4(),
        image:
          '/images/cream/toasted-coconut-cream-deodorant-tube-front_fb719e13-2e9d-45c2-8c16-7e59832b2ff3_400x400_crop_center.png',
        name: 'Toasted Coconut',
      },
      {
        id: uuidv4(),
        image:
          '/images/cream/lavender-sage-cream-deodorant-tube-front_eee5358f-261d-4d41-8ff6-8c9673d96a2e_400x400_crop_center.png',
        name: 'Lavender Sage',
      },
      {
        id: uuidv4(),
        image:
          '/images/cream/peony-rose-cream-deodorant-tube-front_4e227a07-c7e6-4e1d-ad4e-fdf722d2e19e_400x400_crop_center.png',
        name: 'Peony Rose',
      },
      {
        id: uuidv4(),
        image:
          '/images/cream/unscented-cream-deodorant-tube-front_c1fe3728-aff0-4905-b651-d59e2430152c_400x400_crop_center.png',
        name: 'Unscented',
      },
      {
        id: uuidv4(),
        image:
          '/images/cream/fresh-alpine-cream-deodorant-tube-front_1ea2d43e-eaa5-409c-8a45-738e44d537d2_400x400_crop_center.png',
        name: 'Fresh Alpine',
      },
    ],
    type: 'Cream Deodorant Tube',
  },
  {
    id: uuidv4(),
    products: [
      {
        id: uuidv4(),
        image:
          '/images/mini-cream/minted-cucumber-cream-deodorant-tube-mini-front_4bc7198d-86c1-4fbe-abcb-ccf9586f0e60_400x400_crop_center.png',
        name: 'Minted Cucumber',
      },
      {
        id: uuidv4(),
        image:
          '/images/mini-cream/soft-powder-cream-deodorant-tube-mini-front_32b17b17-18d0-41e1-8d90-6bb90b043b2e_400x400_crop_center.png',
        name: 'Soft Powder',
      },
      {
        id: uuidv4(),
        image:
          '/images/mini-cream/clean-tangerine-cream-tube-mini-front_1b15b3ba-b614-41d2-8571-57ef7dcdb09a_400x400_crop_center.png',
        name: 'Clean Tangerine',
      },
      {
        id: uuidv4(),
        image:
          '/images/mini-cream/toasted-coconut-cream-tube-mini-front_9d545da3-eefc-4186-81f3-499b9397576b_400x400_crop_center.png',
        name: 'Toasted Coconut',
      },
      {
        id: uuidv4(),
        image:
          '/images/mini-cream/lavender-sage-cream-tube-mini-front_97a17e97-602b-4e32-87f6-5f457ea4a82f_400x400_crop_center.png',
        name: 'Lavender Sage',
      },
      {
        id: uuidv4(),
        image:
          '/images/mini-cream/peony-rose-cream-tube-mini-front_6e7bec68-5f0e-4123-901f-b9481e7d3ee3_400x400_crop_center.png',
        name: 'Peony Rose',
      },
      {
        id: uuidv4(),
        image:
          '/images/mini-cream/unscented-cream-tube-mini-front_1f8a5b75-5de1-405a-aa7b-ab19c86ebf92_400x400_crop_center.png',
        name: 'Unscented',
      },
      {
        id: uuidv4(),
        image:
          '/images/mini-cream/fresh-alpine-cream-tube-mini-front_7a6ba90d-9d29-47bf-9211-5d5910288347_400x400_crop_center.png',
        name: 'Fresh Alpine',
      },
    ],
    type: 'Mini Cream Deodorant Tube',
  },
  {
    id: uuidv4(),
    products: [
      {
        id: uuidv4(),
        image:
          '/images/stick/minted-cucumber-solid-deodorant-stick-front_1_cef86cae-e6e1-4783-b8aa-f3789d4cda66_400x400_crop_center.png',
        name: 'Minted Cucumber',
      },
      {
        id: uuidv4(),
        image:
          '/images/stick/soft-powder-solid-deodorant-stick-front_1_72a91a1a-c398-4d7c-b5c4-6323f8e2cda0_400x400_crop_center.png',
        name: 'Soft Powder',
      },
      {
        id: uuidv4(),
        image:
          '/images/stick/clean-tangerine-solid-deodorant-stick-front_5cf6b402-35f9-4585-a6ef-549338702e46_400x400_crop_center.png',
        name: 'Clean Tangerine',
      },
      {
        id: uuidv4(),
        image:
          '/images/stick/toasted-coconut-solid-deodorant-stick-front_fd2d4644-3579-4c45-b594-fd89d4e4be16_400x400_crop_center.png',
        name: 'Toasted Coconut',
      },
      {
        id: uuidv4(),
        image:
          '/images/stick/lavender-sage-solid-deodorant-stick-front_9baf9f10-7c09-42a9-9449-52300da0d48b_400x400_crop_center.png',
        name: 'Lavender Sage',
      },
      {
        id: uuidv4(),
        image:
          '/images/stick/peony-rose-solid-deodorant-stick-front_1d348a54-3fa3-4a3b-aa90-bf05f214f6f1_400x400_crop_center.png',
        name: 'Peony Rose',
      },
      {
        id: uuidv4(),
        image:
          '/images/stick/unscented-solid-deodorant-stick-front_5e18565d-96db-429e-9fbc-f24e2629425d_400x400_crop_center.png',
        name: 'Unscented',
      },
      {
        id: uuidv4(),
        image:
          '/images/stick/fresh-alpine-solid-deodorant-stick-front_a3633974-5a82-4516-b201-b22773f77482_400x400_crop_center.png',
        name: 'Fresh Alpine',
      },
    ],
    type: 'Solid Deodorant Stick',
  },
]

import { SwapperName } from '../../../types'
import { createCache, makeSwapperAxiosServiceMonadic } from '../../../utils'

const maxAge = 15 * 1000 // 15 seconds ttl for all except cached to get fresh status updates
const cachedUrls: string[] = []

const axiosConfig = {
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

const jupiterServiceBase = createCache(maxAge, cachedUrls, axiosConfig)

export const jupiterService = makeSwapperAxiosServiceMonadic(
  jupiterServiceBase,
  SwapperName.Chainflip,
)
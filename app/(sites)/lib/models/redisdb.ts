import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_URL!,
    token: process.env.UPSTASH_REDIS_TOKEN!,
})

redis.ping().then(()=> console.log('Redis connected successfully')).catch(()=> console.log('db errror'))

export default redis;
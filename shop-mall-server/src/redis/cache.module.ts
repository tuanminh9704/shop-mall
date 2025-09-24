import { Module } from '@nestjs/common';
import { Cacheable } from 'cacheable';
import { createKeyv } from '@keyv/redis';
import { RedisService } from './cache.service';

@Module({
  providers: [
    {
      provide: 'CACHE_INSTANCE',
      useFactory: () => {
        const secondary = createKeyv(process.env.REDIS_URL);
        return new Cacheable({ secondary, ttl: '4h' });
      },
    },
    RedisService,
  ],
  exports: ['CACHE_INSTANCE', RedisService],
})
export class RedisModule {}

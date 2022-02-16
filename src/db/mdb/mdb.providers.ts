import * as mongoose from 'mongoose';

/* export class Mdb {

    async update(model, animal){
        await `${model}`.updateOne({ExtinctYear:animal.ExtinctYear},animal);
    }
} */

export const databaseProviders = [
    {
      provide: 'DB_MULTIVENDE',
      useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect('mongodb://95.111.235.214:32768/multivende_dev'),
    },
  ];
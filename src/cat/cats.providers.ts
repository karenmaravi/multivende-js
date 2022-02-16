import { Connection } from 'mongoose';
//import { CatSchema } from '../db/mdb/schema/schemas/cat.schema';

import { CatSchema } from "../db/mdb/schema/cat.schema";
export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
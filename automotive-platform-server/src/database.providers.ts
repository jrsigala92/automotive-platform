import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://automotiveUser:22jesus3@automotive-platform-pbpgk.mongodb.net/test?retryWrites=true&w=majority'),
  },
];
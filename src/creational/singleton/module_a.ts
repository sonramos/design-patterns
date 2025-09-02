import { ClassicDatabase } from './db/classic-database';

const classicDB = ClassicDatabase.instance;
classicDB.add({ name: 'Jackson', age: 31 });
classicDB.add({ name: 'Alexandre', age: 19 });
classicDB.add({ name: 'Douglas', age: 12 });
// classicDB.show();

export { classicDB };

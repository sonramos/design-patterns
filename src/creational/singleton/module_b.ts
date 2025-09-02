import { ClassicDatabase } from './db/classic-database';
import { classicDB as otherClassicDatabase } from './module_a';

const classicDB = ClassicDatabase.instance;
classicDB.add({ name: 'Emanuella', age: 32 });
classicDB.add({ name: 'Brenda', age: 32 });
classicDB.add({ name: 'Alber', age: 34 });
classicDB.show();

console.log(classicDB === otherClassicDatabase);

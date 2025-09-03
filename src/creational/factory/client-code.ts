import { CarFactory } from './factories/car-factory';

const carFactory = new CarFactory();
const hb20 = carFactory.createVehicle('HB20');
hb20.pickUp('Manu');
hb20.stop();

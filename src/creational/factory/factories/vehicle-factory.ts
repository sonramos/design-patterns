import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  abstract createVehicle(vehicleName: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const vehicle = this.createVehicle(vehicleName);
    vehicle.pickUp(customerName);

    return vehicle;
  }
}

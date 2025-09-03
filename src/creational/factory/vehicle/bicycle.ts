import { Vehicle } from './vehicle';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} estah buscando ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} parou. Revisão a cada 10km percorridos!`);
  }
}

import { User } from '../interfaces/user';

export class ClassicDatabase {
  private static _instance: ClassicDatabase | null = null;

  private users: User[] = [];

  private constructor() {}

  public static get instance(): ClassicDatabase {
    if (this._instance === null) {
      this._instance = new ClassicDatabase();
    }

    return this._instance;
  }

  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    this.users.forEach((user) => console.log(user));
  }
}

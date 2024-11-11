
export interface User {
  email: string;
  password: string;
  isAuth: boolean;
}

class UserService {
  private users: User[] = [];
  private currentUser: User | null = null;

  getUsers(): User[] {
    return this.users;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  setCurrentUser(user: User | null): void {
    this.currentUser = user;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  findUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }
}

export const userService = new UserService();
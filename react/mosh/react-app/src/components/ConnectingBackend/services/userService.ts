import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = apiClient.get<User[]>("/users", {
      signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }

  createUser(user: User) {
    return apiClient.post("/users", user);
  }

  UpdateUser(user: User) {
    return apiClient.patch("/users/" + user.id, user);
  }
}

export default new UserService();

// export { User };

import apiClient from "../api-client";

import create from "../http-service";
export interface User {
  id: number;
  name: string;
}

// export default new UserService();
export default create("/users");

// export { User };

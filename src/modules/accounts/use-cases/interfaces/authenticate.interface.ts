import { Either } from "@src/shared/errors/either";

type Auth = {
  user: any;
  token: string;
};

type AuthResponse = Either<Error, Auth>;

interface Authenticate {
  execute({email, password}: any): Promise<AuthResponse>;
}

export { Authenticate, AuthResponse };

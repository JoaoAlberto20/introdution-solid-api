import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id: id }: IRequest): User {
    const userExist = this.usersRepository.findById(id);

    if (!userExist) {
      throw new Error("User not exist");
    }
    const user = this.usersRepository.turnAdmin(userExist);
    return user;
  }
}

export { TurnUserAdminUseCase };

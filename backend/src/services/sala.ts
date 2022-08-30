import userDto from "../dto/salaDto";
import userRepository from "../repository/roomRepository";

export default class Sala {

    private userCreate = new userRepository;

    public async getRoom(sala_id: number) {
      return await this.userCreate.getSala(sala_id);
    }
}
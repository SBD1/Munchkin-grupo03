import userDto from "../dto/userDto";
import userRepository from "../repository/userRepository";

export default class createUser {

    private userCreate = new userRepository;

    public async createNewUser(nome: string): Promise<any> {
      return await this.userCreate.create(this.newUse(nome));
    }

    private newUse(nome: string) {
        let newUser = new userDto;
        newUser.nome = nome;
        newUser.classe_personagem = 0; //Mudar para o tipo ENUM
        newUser.raca_personagem = 1; //Mudar para o tipo ENUM
        return newUser;
    }

    public async getPlayer(jogador_id: number) {
      return await this.userCreate.getUser(jogador_id);
    }
}
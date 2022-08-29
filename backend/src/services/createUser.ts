import userDto from "../dto/userDto";
import userRepository from "../repository/userRepository";

const input = require('prompt-sync')({sigint: true});

export default class createUser {

    userCreate = new userRepository;

    public async createNewUser(nome: string): Promise<any> {
      console.log('chegueii');
      return await this.userCreate.create(this.newUse(nome));
      
    }

    private newUse(nome: string) {
        let newUser = new userDto;
        newUser.name = nome;
        newUser.classe_personagem = 0;
        newUser.raca_personagem = 1;
        return newUser;
    }
}
import userDto from "src/dto/userDto";
import userRepository from "src/repository/userRepository";

const input = require('prompt-sync')({sigint: true});

export default class createUser {

    userCreate = new userRepository

    public async createNewUser(): Promise<any> {
        
      return await this.userCreate.create(this.newUse())
      
    }

    private newUse() {
        let newUser = new userDto
        newUser.name = input()
        return newUser
        
    }


    
}
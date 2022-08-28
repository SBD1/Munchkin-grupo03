 import userRepository from "../repository/userRepository"; 

export default class verifyUser {

    userList = new userRepository 

    public async verifyUser(): Promise<any> {
        
      return await this.userList.listUser()
      
    }
    
}
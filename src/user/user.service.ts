import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
    private userRepository: Repository<User>){}
  create(createUserDto: CreateUserDto) {
    let user = this.userRepository.save(createUserDto);
    return {user, message: "Usuário Cadastrado com Sucesso!!!"}
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
     this.userRepository.update(id,updateUserDto);
     return{
      message: "Dados Alterados Com Sucesso!!!"
     }
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
  async login(email: string, password: string){
    let user = await this.userRepository.findOne({where:{email:email,password:password}})
    console.log(user)
    if(!user){return {message:"Email ou Senha inválido",user:null}}
    return {user}
  }
}

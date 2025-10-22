import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Registro de usuario
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const { nombre, correo, contraseña } = createUserDto;
    return this.authService.register(nombre, correo, contraseña);
  }

  // Login de usuario
  @Post('login')
  async login(@Body() body: any) {
    const { correo, contraseña } = body;
    return this.authService.login(correo, contraseña);
  }
}


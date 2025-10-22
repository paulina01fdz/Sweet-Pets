import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private readonly saltRounds = 10;

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  // 🔹 Crear hash para una contraseña
  async hashPassword(contraseña: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return bcrypt.hash(contraseña, salt);
  }

  // 🔹 Validar una contraseña con su hash
  async validatePassword(contraseña: string, hash: string): Promise<boolean> {
    return bcrypt.compare(contraseña, hash);
  }

  // 🔹 Generar un token (JWT)
  async generarToken(correo: string): Promise<string> {
    const payload = { correo };
    return this.jwtService.sign(payload);
  }

  // 🔹 Registrar usuario (nuevo método)
  async register(nombre: string, correo: string, contraseña: string) {
    const hash = await this.hashPassword(contraseña);

    const nuevoUsuario = this.usersService.create({
      nombre,
      correo,
      contraseña: hash, // Guarda la contraseña cifrada
    });

    return {
      msg: 'Usuario registrado correctamente ',
      usuario: {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        correo: nuevoUsuario.correo,
      },
    };
  }

  // 🔹 Login de usuario
  async login(correo: string, contraseña: string) {
    const user = await this.usersService.findOneByEmail(correo);

    if (!user) {
      return { msg: 'Usuario no encontrado ' };
    }

    const passwordValid = await bcrypt.compare(contraseña, user.contraseña);
    if (!passwordValid) {
      return { msg: 'Contraseña incorrecta ' };
    }

    const token = await this.generarToken(user.correo);

    return {
      msg: 'Inicio de sesión exitoso ',
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        correo: user.correo,
      },
    };
  }
}


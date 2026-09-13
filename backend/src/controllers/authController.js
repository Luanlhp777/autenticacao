import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../config/db.js';

export async function cadastrar(req, res) {
    //console.log('Body recebido:', req.body);

    try {
        const { usuario, senha } = req.body

        if (!usuario || !senha) {

            return res.status(400).json({
                mensagem: 'Usuário e senha são obrigatórios'
            })
        }

        if (senha.length < 4) {
            return res.status(400).json({
                mensagem: 'A senha deve ter pelo menos 4 caracteres'
            })
        }

        const [existentes] = await pool.query(
            'SELECT id FROM usuarios WHERE usuario = ? LIMIT 1',
            [usuario]
        )

        if (existentes.length > 0) {
            return res.status(409).json({
                mensagem: 'Usuário já cadastrado'
            })
        }

        const senhaHash = await bcrypt.hash(senha, 10) // PEGA A SENHA E CRIPTOGRAFA.

        const [resultado] = await pool.query(
            'INSERT INTO usuarios (usuario, senha) VALUES(?, ?)',
            [usuario, senhaHash]
        );

        return res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso.',
            usuario: { id: resultado.insertId, usuario }
        })

    } catch (erro) {

        console.error(erro);

        return res.status(500).json({
            mensagem: 'Erro ao cadastrar usuário'
        })
    }
}

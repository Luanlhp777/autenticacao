import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
    buscarPorUsuario,
    criar,
    listar
} from "../models/usuario.model.js";

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

        const existente = await buscarPorUsuario(usuario);

        if (existente) {
            return res.status(409).json({
                mensagem: 'Usuário já cadastrado'
            })
        }

        const senhaHash = await bcrypt.hash(senha, 10) // PEGA A SENHA E CRIPTOGRAFA.

        const novoUsuario = await criar(usuario, senhaHash);

        return res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso.',
            usuario: novoUsuario
        });

    } catch (erro) {

        console.error(erro);

        return res.status(500).json({
            mensagem: 'Erro ao cadastrar usuário'
        })
    }
}

export async function login(req, res) {

    try {
        const { usuario, senha } = req.body;

        if (!usuario || !senha) {

            return res.status(400).json({
                mensagem: 'Usuário e senha são obrigatórios'
            });
        }

        const encontrado = await buscarPorUsuario(usuario);

        if (!encontrado) {
            return res.status(401).json({
                mensagem: 'Usuário ou senha inválidos'
            });
        }

        const senhaValida = await bcrypt.compare(senha, encontrado.senha) // COMPARANDO A SENHA

        if (!senhaValida) {
            return res.status(401).json({
                mensagem: 'Usuário ou senha inválidos'
            });
        }

        const token = jwt.sign(
            { id: encontrado.id, usuario: encontrado.usuario },
            process.env.JWT_SECRET,
            //{ expiresIn: '30s' }
            { expiresIn: '2h' }
        )

        return res.json({
            mensagem: 'Login realizado com sucesso',
            usuario: { id: encontrado.id, usuario: encontrado.usuario },
            token
        })

    } catch (erro) {

        console.error(erro)
        return res.status(500).json({ mensagem: 'Erro no login' })
    }

}

export async function me(req, res) {

    return res.json({ usuario: req.usuario })
}

export async function listarUsuarios(req, res) {

    try {
        const usuarios = await listar();

        return res.json(usuarios)

    } catch (erro) {
        console.error(erro)
        return res.status(500).json({ mensagem: 'Erro ao listar usuários' })
    }
};
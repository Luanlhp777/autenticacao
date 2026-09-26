import { pool } from "../config/db.js";

export async function buscarPorUsuario(usuario) {
    const [resultado] = await pool.query(
        "CALL sp_buscar_usuario(?)",
        [usuario]
    );

    return resultado[0][0];
}

export async function criar(usuario, senhaHash) {
    const [resultado] = await pool.query(
         "CALL sp_criar_usuario(?, ?)",
        [usuario, senhaHash]
    );
    
    return resultado[0][0];
}

export async function listar() {
    const [resultado] = await pool.query(
        "CALL sp_listar_usuarios()"
    );

    return resultado[0];
}
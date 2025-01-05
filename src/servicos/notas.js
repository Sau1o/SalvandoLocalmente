import { db } from "./sqlite";

export const criaTabela = async () => {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS Notas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);`);
}
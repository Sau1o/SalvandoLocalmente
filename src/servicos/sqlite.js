import * as SQLite from 'expo-sqlite'

const abreConexao = async ()  => {
    const database = await SQLite.openDatabaseAsync('db.db');
    return database;
}

export const db = abreConexao();
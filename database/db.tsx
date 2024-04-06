// app/db/db.ts
import {
    enablePromise,
    openDatabase, SQLiteDatabase,
} from "react-native-sqlite-storage"

// Enable promise for SQLite
enablePromise(true)

type Table = "Symptoms" | "TrackedSymptoms";

export const connectToDatabase = async () => {
    return openDatabase(
        { name: "feelseen.db", location: "default" },
        () => {},
        (error) => {
            console.error(error)
            throw Error("Could not connect to database")
        }
    )
}

export const createTables = async (db: SQLiteDatabase) => {
    const symptomQuery = `
    CREATE TABLE IF NOT EXISTS Symptoms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        category TEXT,
        PRIMARY KEY(id)
    )
  `
    const trackerQuery = `
   CREATE TABLE IF NOT EXISTS TrackedSymptoms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date datetime NOT NULL,
      symptomId INTEGER,
      severity INTEGER,
      note TEXT,
      PRIMARY KEY(id, date)
      FOREIGN KEY(symptomId) REFERENCES Symptoms(id)
      CHECK(severity) BETWEEN 1 AND 10
   )
  `
    try {
        await db.executeSql(symptomQuery)
        await db.executeSql(trackerQuery)
    } catch (error) {
        console.error(error)
        throw Error(`Failed to create tables`)
    }
}

export const getTableNames = async (db: SQLiteDatabase): Promise<string[]> => {
    try {
        const tableNames: string[] = []
        const results = await db.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
        )
        results?.forEach((result) => {
            for (let index = 0; index < result.rows.length; index++) {
                tableNames.push(result.rows.item(index).name)
            }
        })
        return tableNames
    } catch (error) {
        console.error(error)
        throw Error("Failed to get table names from database")
    }
}

export const removeTable = async (db: SQLiteDatabase, tableName: Table) => {
    const query = `DROP TABLE IF EXISTS ${tableName}`
    try {
        await db.executeSql(query)
    } catch (error) {
        console.error(error)
        throw Error(`Failed to drop table ${tableName}`)
    }
}
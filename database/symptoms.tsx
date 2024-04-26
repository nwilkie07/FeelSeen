import {SQLiteDatabase} from "react-native-sqlite-storage";

type Symptom = {
    name: string;
    category: string;
}

export const addSymptom = async (db: SQLiteDatabase, symptom: Symptom) => {
    const insertQuery = `
   INSERT INTO Symptoms (name, category)
   VALUES (?, ?, ?)
 `
    const values = [
        symptom.name,
        symptom.category,
    ]
    try {
        return db.executeSql(insertQuery, values)
    } catch (error) {
        console.error(error)
        throw Error("Failed to add contact")
    }
}

export const getSymptoms = async (db: SQLiteDatabase): Promise<string[]> => {
    try {
        const symptoms: string[] = [];
        const results = await db.executeSql("SELECT name FROM Symptoms")
        results?.forEach((result) => {
            for (let index = 0; index < result.rows.length; index++) {
                symptoms.push(result.rows.item(index))
            }
        })
        return symptoms
    } catch (error) {
        console.error(error)
        throw Error("Failed to get Contacts from database")
    }
}
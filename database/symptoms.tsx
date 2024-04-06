import {SQLiteDatabase} from "react-native-sqlite-storage";

type Symptom = {
    name: string;
    description: string;
    category: string;
}

export const addSymptom = async (db: SQLiteDatabase, symptom: Symptom) => {
    const insertQuery = `
   INSERT INTO Symptoms (name, description, category)
   VALUES (?, ?, ?)
 `
    const values = [
        symptom.name,
        symptom.description,
        symptom.category,
    ]
    try {
        return db.executeSql(insertQuery, values)
    } catch (error) {
        console.error(error)
        throw Error("Failed to add contact")
    }
}
CREATE TABLE IF NOT EXISTS Symptoms (id NUMERIC PRIMARY KEY, name TEXT, categoryId NUMERIC REFERENCES SymptomCategory(id));

CREATE TABLE IF NOT EXISTS TrackedSymptoms (
      id NUMERIC,
      date timestamp,
      symptomId NUMERIC,
      severity NUMERIC,
      note TEXT,
      PRIMARY KEY(id, date),
      FOREIGN KEY(symptomId) REFERENCES Symptoms(id));

CREATE TABLE IF NOT EXISTS SymptomCategory (id NUMERIC PRIMARY KEY, color TEXT, name TEXT);
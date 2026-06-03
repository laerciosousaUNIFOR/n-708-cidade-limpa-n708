CREATE TABLE occurrences (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    citizen_name TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    status TEXT DEFAULT 'Aberta',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_doctor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "available_hours" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_doctor" ("available_hours", "created_at", "id", "name", "specialty", "updated_at") SELECT "available_hours", "created_at", "id", "name", "specialty", "updated_at" FROM "doctor";
DROP TABLE "doctor";
ALTER TABLE "new_doctor" RENAME TO "doctor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

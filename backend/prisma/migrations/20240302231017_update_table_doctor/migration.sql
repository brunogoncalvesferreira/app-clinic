-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_doctor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "available_hours" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usersId" TEXT,
    CONSTRAINT "doctor_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_doctor" ("available_hours", "created_at", "id", "name", "specialty", "updated_at", "usersId") SELECT "available_hours", "created_at", "id", "name", "specialty", "updated_at", "usersId" FROM "doctor";
DROP TABLE "doctor";
ALTER TABLE "new_doctor" RENAME TO "doctor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_consult" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usersId" TEXT,
    "doctorId" TEXT,
    "date_consult" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'em aberto',
    "comments" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "consult_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "consult_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_consult" ("comments", "date_consult", "doctorId", "id", "status", "usersId") SELECT "comments", "date_consult", "doctorId", "id", "status", "usersId" FROM "consult";
DROP TABLE "consult";
ALTER TABLE "new_consult" RENAME TO "consult";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

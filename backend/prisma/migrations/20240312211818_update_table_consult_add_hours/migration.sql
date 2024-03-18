/*
  Warnings:

  - Added the required column `hours` to the `consult` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_consult" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usersId" TEXT,
    "doctorId" TEXT,
    "hours" TEXT NOT NULL,
    "date_consult" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'em aberto',
    "comments" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "consult_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "consult_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_consult" ("comments", "created_at", "date_consult", "doctorId", "id", "status", "updated_at", "usersId") SELECT "comments", "created_at", "date_consult", "doctorId", "id", "status", "updated_at", "usersId" FROM "consult";
DROP TABLE "consult";
ALTER TABLE "new_consult" RENAME TO "consult";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

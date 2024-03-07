/*
  Warnings:

  - You are about to drop the `Consult` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Consult";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "consult" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usersId" TEXT,
    "doctorId" TEXT,
    "date_consult" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    CONSTRAINT "consult_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "consult_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

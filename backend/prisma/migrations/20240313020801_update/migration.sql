/*
  Warnings:

  - You are about to drop the `Hours` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Hours";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "hours" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "doctorId" TEXT,
    CONSTRAINT "hours_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

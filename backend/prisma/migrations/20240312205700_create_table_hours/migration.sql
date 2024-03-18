-- CreateTable
CREATE TABLE "Hours" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "doctorId" TEXT,
    CONSTRAINT "Hours_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

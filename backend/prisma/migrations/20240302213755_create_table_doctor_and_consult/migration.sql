-- CreateTable
CREATE TABLE "doctor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "available_hours" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "usersId" TEXT,
    CONSTRAINT "doctor_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Consult" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usersId" TEXT,
    "doctorId" TEXT,
    "date_consult" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    CONSTRAINT "Consult_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Consult_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

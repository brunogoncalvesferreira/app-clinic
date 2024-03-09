-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "phone" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "doctor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "hours" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hour" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    CONSTRAINT "hours_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

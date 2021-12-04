-- CreateEnum
CREATE TYPE "Enum_State" AS ENUM ('Aprobado', 'Rechazado', 'Pendiente');

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "nit" TEXT NOT NULL,
    "identification" TEXT NOT NULL,
    "nEmployees" INTEGER NOT NULL,
    "logo" TEXT NOT NULL,
    "state" "Enum_State" NOT NULL DEFAULT E'Pendiente',

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Multimedia" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "Multimedia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_nit_key" ON "Company"("nit");

-- AddForeignKey
ALTER TABLE "Multimedia" ADD CONSTRAINT "Multimedia_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerName" TEXT NOT NULL DEFAULT '',
    "performanceTitle" TEXT NOT NULL DEFAULT '',
    "performanceTime" TEXT NOT NULL DEFAULT '',
    "ticketPrice" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

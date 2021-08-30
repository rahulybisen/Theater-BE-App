-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ticket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerName" TEXT NOT NULL DEFAULT '',
    "performanceTitle" TEXT NOT NULL DEFAULT '',
    "performanceTime" TEXT NOT NULL DEFAULT '',
    "ticketPrice" INTEGER NOT NULL,
    "month" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Ticket" ("id", "customerName", "performanceTitle", "performanceTime", "ticketPrice", "isActive", "createdAt", "updatedAt") SELECT "id", "customerName", "performanceTitle", "performanceTime", "ticketPrice", "isActive", "createdAt", "updatedAt" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

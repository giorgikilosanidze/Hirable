-- CreateTable
CREATE TABLE "authThrottle" (
    "key" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "windowStart" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "authThrottle_pkey" PRIMARY KEY ("key")
);

-- CreateIndex
CREATE INDEX "authThrottle_windowStart_idx" ON "authThrottle"("windowStart");

-- CreateTable
CREATE TABLE "Wines" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "tags" TEXT NOT NULL,

    CONSTRAINT "Wines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cocktails" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "tags" TEXT NOT NULL,

    CONSTRAINT "Cocktails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Awards" (
    "id" SERIAL NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,

    CONSTRAINT "Awards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wines_title_key" ON "Wines"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Cocktails_title_key" ON "Cocktails"("title");

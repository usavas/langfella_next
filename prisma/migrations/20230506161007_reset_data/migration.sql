-- CreateEnum
CREATE TYPE "HtmlItemType" AS ENUM ('h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'img', 'blockquote', 'ul', 'table');

-- CreateTable
CREATE TABLE "ReadingGroup" (
    "id" TEXT NOT NULL,
    "languageId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "ReadingGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading" (
    "id" SERIAL NOT NULL,
    "languageId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "contents" TEXT[],
    "source" TEXT,
    "readingGroupId" TEXT,
    "wordIds" INTEGER[] DEFAULT ARRAY[]::INTEGER[],

    CONSTRAINT "Reading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HtmlPage" (
    "id" SERIAL NOT NULL,
    "languageId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "wordIds" INTEGER[] DEFAULT ARRAY[]::INTEGER[],

    CONSTRAINT "HtmlPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HtmlContentItem" (
    "id" SERIAL NOT NULL,
    "type" "HtmlItemType" NOT NULL,
    "content" TEXT NOT NULL,
    "htmlPageId" INTEGER,

    CONSTRAINT "HtmlContentItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "translation" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" TEXT NOT NULL,
    "sourceLangId" INTEGER NOT NULL,
    "targetLangId" INTEGER NOT NULL,
    "exampleSentences" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "readingId" INTEGER,
    "htmlPageId" INTEGER,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AuthorToReading" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AuthorToReadingGroup" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Language_code_key" ON "Language"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToReading_AB_unique" ON "_AuthorToReading"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToReading_B_index" ON "_AuthorToReading"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToReadingGroup_AB_unique" ON "_AuthorToReadingGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToReadingGroup_B_index" ON "_AuthorToReadingGroup"("B");

-- AddForeignKey
ALTER TABLE "ReadingGroup" ADD CONSTRAINT "ReadingGroup_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reading" ADD CONSTRAINT "Reading_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reading" ADD CONSTRAINT "Reading_readingGroupId_fkey" FOREIGN KEY ("readingGroupId") REFERENCES "ReadingGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HtmlPage" ADD CONSTRAINT "HtmlPage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HtmlContentItem" ADD CONSTRAINT "HtmlContentItem_htmlPageId_fkey" FOREIGN KEY ("htmlPageId") REFERENCES "HtmlPage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_sourceLangId_fkey" FOREIGN KEY ("sourceLangId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_targetLangId_fkey" FOREIGN KEY ("targetLangId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_readingId_fkey" FOREIGN KEY ("readingId") REFERENCES "Reading"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_htmlPageId_fkey" FOREIGN KEY ("htmlPageId") REFERENCES "HtmlPage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToReading" ADD CONSTRAINT "_AuthorToReading_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToReading" ADD CONSTRAINT "_AuthorToReading_B_fkey" FOREIGN KEY ("B") REFERENCES "Reading"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToReadingGroup" ADD CONSTRAINT "_AuthorToReadingGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToReadingGroup" ADD CONSTRAINT "_AuthorToReadingGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "ReadingGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

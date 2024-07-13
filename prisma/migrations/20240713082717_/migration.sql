-- CreateTable
CREATE TABLE "Tokens" (
    "id" SERIAL NOT NULL,
    "access_token" TEXT NOT NULL,
    "access_token_secret_key" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "refresh_token_secret_key" TEXT NOT NULL,

    CONSTRAINT "Tokens_pkey" PRIMARY KEY ("id")
);

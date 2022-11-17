const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    await prisma.pictures.createMany({
        data: [
            { link: "http://localhost:8080/images/res1.jpg" },
            { link: "http://localhost:8080/images/res2.jpg" },
            { link: "http://localhost:8080/images/res3.jpg" },
            { link: "http://localhost:8080/images/res4.jpg" },
            { link: "http://localhost:8080/images/res5.jpg" },
            { link: "http://localhost:8080/images/res6.jpg" },
        ],
        skipDuplicates: true,
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

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

    await prisma.awards.createMany({
        data: [
            {
                imgUrl: "http://localhost:8080/awards/award01.png",
                subtitle: "Award 1",
            },
            {
                imgUrl: "http://localhost:8080/awards/award02.png",
                subtitle: "Award 2",
            },
            {
                imgUrl: "http://localhost:8080/awards/award03.png",
                subtitle: "Award 3",
            },
            {
                imgUrl: "http://localhost:8080/awards/award05.png",
                subtitle: "Award 5",
            },
        ],
        skipDuplicates: true,
    });

    await prisma.wines.createMany({
        data: [
            {
                title: "Chapel Hill Shiraz",
                price: "$56",
                tags: "AU | Bottle",
            },
            {
                title: "Catena Malbee",
                price: "$59",
                tags: "AU | Bottle",
            },
            {
                title: "La Vieillw Rose",
                price: "$44",
                tags: "FR | 750 ml",
            },
            {
                title: "Rhino Pale Ale",
                price: "$31",
                tags: "CA | 750 ml",
            },
            {
                title: "Irish Guinness",
                price: "$26",
                tags: "IE | 750 ml",
            },
        ],
        skipDuplicates: true,
    });

    await prisma.cocktails.createMany({
        data: [
            {
                title: "Aperol Sprtiz",
                price: "$20",
                tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
            },
            {
                title: "Dark 'N' Stormy",
                price: "$16",
                tags: "Dark rum | Ginger beer | Slice of lime",
            },
            {
                title: "Daiquiri",
                price: "$10",
                tags: "Rum | Citrus juice | Sugar",
            },
            {
                title: "Old Fashioned",
                price: "$31",
                tags: "Bourbon | Brown sugar | Angostura Bitters",
            },
            {
                title: "Negroni",
                price: "$26",
                tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
            },
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

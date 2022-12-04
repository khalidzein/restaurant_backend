const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.cocktails = async (req, res) => {
    const cocktails = await prisma.cocktails.findMany({
        select: { title: true, price: true, tags: true },
    });
    if (!cocktails) {
        return res.status(404).json({ error: "No Cocktails Found" });
    } else {
        res.status(200).json(cocktails);
    }
};

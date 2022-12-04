const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.wines = async (req, res) => {
    const wines = await prisma.wines.findMany({
        select: { title: true, price: true, tags: true },
    });
    if (!wines) {
        return res.status(404).json({ error: "No Wines Found" });
    } else {
        res.status(200).json(wines);
    }
};

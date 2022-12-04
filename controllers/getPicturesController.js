const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.pictures = async (req, res) => {
    const picture = await prisma.pictures.findMany({
        select: { link: true },
    });
    if (!picture) {
        return res.status(404).json({ error: "No Pictures Found" });
    } else {
        res.status(200).json(picture);
    }
};

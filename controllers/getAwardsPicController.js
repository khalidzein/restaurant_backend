const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.awardsPic = async (req, res) => {
    const awardsPic = await prisma.awards.findMany({
        select: { imgUrl: true, subtitle: true },
    });
    if (!awardsPic) {
        return res.status(404).json({ error: "No Award Pictures Found" });
    } else {
        res.status(200).json(awardsPic);
    }
};

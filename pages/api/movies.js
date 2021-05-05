import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export default async(req, res) => {
    const data = JSON.parse(req.body)

    const createdMovies = await prisma.movie.create({
        data
    })

    res.json(createdMovies)
}
import { NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import z from 'zod'
import { env } from '@/utils/envShema'

export async function POST(request: Request) {
  try {
    const bodyShema = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
    })
    const { name, email, password } = bodyShema.parse(await request.json())

    const userExits = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userExits) {
      return new Response('User already exists.', {
        status: 400,
      })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    })

    const token = jwt.sign(
      {
        name,
        email,
      },
      env.SECRET,
      {
        expiresIn: '30 days',
      },
    )

    const cookieExpireInSeconds = 60 * 60 * 24 * 30 // 30

    const redirectUrl = new URL('/', request.url)

    return NextResponse.redirect(redirectUrl, {
      headers: {
        'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpireInSeconds}`,
      },
    })
  } catch (error) {
    console.log(error)
    return new Response('An error occurred, please try again later.', {
      status: 500,
    })
  }
}

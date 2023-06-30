import { NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import z from 'zod'
import { env } from '@/utils/envShema'

export async function POST(request: Request) {
  try {
    const bodyShema = z.object({
      email: z.string(),
      password: z.string(),
    })

    const { email, password } = bodyShema.parse(await request.json())

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user)
      return new Response('Invalid email or password.', {
        status: 401,
      })

    const isValidePassword = await bcrypt.compare(password, user.password)

    if (!isValidePassword) {
      return new Response('Invalid email or password.', {
        status: 401,
      })
    }

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      env.SECRET,
      {
        expiresIn: '30 days',
      },
    )

    const cookieExpireInSeconds = 60 * 60 * 24 * 30 // 30 days

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

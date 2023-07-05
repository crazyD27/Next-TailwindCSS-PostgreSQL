import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IDescriptionFormProps {
  title: string
  subtitle: string
  description: string
  image: StaticImageData
}

export const DescriptionForm = ({
  title,
  subtitle,
  description,
  image,
}: IDescriptionFormProps) => {
  return (
    <div className="hidden w-1/2 sm:flex sm:flex-col sm:gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="w-fit border-b border-red-400 font-title text-3xl">
          {title}
        </h1>
        <p className="w-full max-w-[315px] font-body text-sm italic text-zinc-500">
          {description}
        </p>
        <span className="block w-fit border-b border-red-400 text-zinc-500">
          {subtitle}
        </span>
      </div>
      <div>
        <Image
          src={image}
          alt="Imagem da tela de registro de uma menina mexendo em seu telefone"
          className="w-full"
        />
      </div>
    </div>
  )
}

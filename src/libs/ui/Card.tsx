/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface CardProps {
  imageUrl: string
  category?: string
  title?: string
  description?: string
  to?: string
  alt?: string
}

export default function Card({
  imageUrl,
  alt,
  category,
  title,
  description,
}: CardProps) {
  return (
    <>
      <div className="w-full h-64 relative rounded">
        <img className="w-full" src={imageUrl} alt={alt} />
      </div>
      <div className="p-5 flex flex-col space-y-2">
        <p className="text-sm text-blue-500">{category}</p>
        <p className="text-lg font-medium">{title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  )
}

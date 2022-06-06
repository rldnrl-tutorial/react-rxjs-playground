import HomePage from '@/home/HomePage'
import { PokemonProvider } from '@/libs/store'
import React from 'react'

export default function Home() {
  return (
    <PokemonProvider>
      <HomePage />
    </PokemonProvider>
  )
}

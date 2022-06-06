import React from 'react'
import { useObservableState } from 'observable-hooks'

import { usePokemon } from '@/libs/store'
import Card from '@/libs/ui/Card'

export default function Deck() {
  const { deck$ } = usePokemon()
  const deck = useObservableState(deck$, [])

  return (
    <div>
      <h2>Deck</h2>
      <div>
        {deck.map((p) => (
          <Card
            key={p.id}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
            alt={p.name}
            title={p.name}
          />
        ))}
      </div>
    </div>
  )
}

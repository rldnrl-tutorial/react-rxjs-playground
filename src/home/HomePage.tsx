import React from 'react'
import Deck from './components/Deck'
import Search from './components/Search'

export default function HomePage() {
  return (
    <div className="p-4 grid grid-cols-2">
      <Search />
      <Deck />
    </div>
  )
}

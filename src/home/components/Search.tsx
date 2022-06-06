import { Pokemon, pokemon$, selectedPokemon$ } from '@/libs/store'
import Input from '@/libs/ui/Input'
import React, { ChangeEventHandler, useEffect, useState, useMemo } from 'react'

export default function Search() {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    const sub = pokemon$.subscribe(setPokemon)
    return () => sub.unsubscribe()
  }, [])

  const filteredPokemon = useMemo(() => {
    return pokemon.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [pokemon, search])

  const onChangeSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearch(e.target.value)

  return (
    <>
      <Input type="text" value={search} onChange={onChangeSearch} />
      {filteredPokemon.map((p) => (
        <div key={p.name}>
          <Input
            type="checkbox"
            checked={p.selected}
            onChange={() => {
              if (selectedPokemon$.value.includes(p.id)) {
                selectedPokemon$.next(
                  selectedPokemon$.value.filter((id) => id === p.id)
                )
              } else {
                selectedPokemon$.next([...selectedPokemon$.value, p.id])
              }
            }}
          />
          <strong>{p.name}</strong> - {p.power}
        </div>
      ))}
    </>
  )
}

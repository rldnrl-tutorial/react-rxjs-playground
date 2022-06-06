import React, { ChangeEventHandler, useMemo } from 'react'
import { useObservableState } from 'observable-hooks'

import { usePokemon } from '@/libs/store'
import Input from '@/libs/ui/Input'
import { BehaviorSubject, combineLatestWith, map } from 'rxjs'

export default function Search() {
  const { pokemon$, selectedPokemon$ } = usePokemon()
  const search$ = useMemo(() => new BehaviorSubject(''), [])
  const pokemon = useObservableState(pokemon$, [])

  const [filteredPokemon] = useObservableState(
    () =>
      pokemon$.pipe(
        combineLatestWith(search$),
        map(([pokemon, search]) =>
          pokemon.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      ),
    []
  )

  // const filteredPokemon = useMemo(() => {
  //   return pokemon.filter((p) =>
  //     p.name.toLowerCase().includes(search$.value.toLowerCase())
  //   )
  // }, [pokemon])

  const onChangeSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
    search$.next(e.target.value)

  return (
    <div>
      <Input type="text" value={search$.value} onChange={onChangeSearch} />
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
    </div>
  )
}

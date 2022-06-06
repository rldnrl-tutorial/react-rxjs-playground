import axios from 'axios'
import { BehaviorSubject, combineLatestWith, map } from 'rxjs'

export interface Pokemon {
  id: number
  name: string
  type: string[]
  hp: number
  attack: number
  defense: number
  special_attack: number
  special_defense: number
  speed: number
  power?: number
  selected?: boolean
}

export const rawPokemon$ = new BehaviorSubject<Pokemon[]>([])

export const pokemonWithPower$ = rawPokemon$.pipe(
  map((pokemon) =>
    pokemon.map((p) => ({
      ...p,
      power:
        p.hp +
        p.attack +
        p.defense +
        p.special_attack +
        p.special_defense +
        p.speed,
    }))
  )
)

export const selectedPokemon$ = new BehaviorSubject<number[]>([])

export const pokemon$ = pokemonWithPower$.pipe(
  combineLatestWith(selectedPokemon$),
  map(([pokemon, selected]) =>
    pokemon.map((p) => ({
      ...p,
      selected: selected.includes(p.id),
    }))
  )
)

axios.get<Pokemon[]>('/api/pokemon').then(({ data }) => rawPokemon$.next(data))

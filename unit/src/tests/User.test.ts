import { describe, it, expect, beforeEach } from 'vitest'
import { User } from '../User'
import { UserCategory } from '../types'

describe('User', () => {
  let user: User

  beforeEach(() => {
    user = new User('1', 'Alice', 'alice@example.com')
  })

  it('devrait être initialisé avec les bonnes valeurs par défaut', () => {
    expect(user.id).toBe('1')
    expect(user.name).toBe('Alice')
    expect(user.email).toBe('alice@example.com')
    expect(user.category).toBe('standard')
    expect(user.currentLoans).toEqual([])
  })

  it('canBorrow devrait respecter les limites selon la catégorie', () => {
    const standard = new User('2', 'Bob', 'bob@example.com', 'standard')
    standard.currentLoans = ['a', 'b', 'c']
    expect(standard.canBorrow()).toBe(false)

    const premium = new User('3', 'Claire', 'claire@example.com', 'premium')
    premium.currentLoans = ['a', 'b', 'c', 'd', 'e']
    expect(premium.canBorrow()).toBe(false)

    const employee = new User('4', 'Dan', 'dan@example.com', 'employee')
    employee.currentLoans = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    expect(employee.canBorrow()).toBe(false)
  })

  it('addLoan ne doit pas dupliquer les prêts', () => {
    user.addLoan('book1')
    user.addLoan('book1')
    expect(user.currentLoans).toEqual(['book1'])
  })

  it('removeLoan doit supprimer uniquement le bon ID', () => {
    user.currentLoans = ['a', 'b', 'c']
    user.removeLoan('b')
    expect(user.currentLoans).toEqual(['a', 'c'])
  })
})

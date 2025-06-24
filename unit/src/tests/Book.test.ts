import { describe, it, expect } from 'vitest'
import { Book } from '../Book'

describe('Book', () => {
  it('devrait être initialisé avec id, title, author et status "available"', () => {
    const book = new Book('1', '1984', 'George Orwell')
    expect(book.id).toBe('1')
    expect(book.title).toBe('1984')
    expect(book.author).toBe('George Orwell')
    expect(book.status).toBe('available')
  })

  it('should correctly report isAvailable, isBorrowed, isInMaintenance', () => {
    const book = new Book('2', 'Book', 'Author')

    expect(book.isAvailable()).toBe(true)

    book.status = 'borrowed'
    expect(book.isBorrowed()).toBe(true)

    book.status = 'maintenance'
    expect(book.isInMaintenance()).toBe(true)
  })
})

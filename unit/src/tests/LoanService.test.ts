import { describe, it, expect, beforeEach, vi } from 'vitest'
import { LoanService } from '../LoanService'
import { Book } from '../Book'
import { User } from '../User'
import { UserCategory } from '../types'

describe('LoanService', () => {
  let service: LoanService
  let book: Book
  let user: User

  beforeEach(() => {
    service = new LoanService()
    book = new Book('book1', '1984', 'George Orwell')
    user = new User('user1', 'Alice', 'alice@example.com', 'standard')

    service.addBook(book)
    service.addUser(user)
  })

  it('doit permettre d\'emprunter un livre disponible', () => {
    const result = service.borrowBook(book.id, user.id)
    expect(result).toBe(true)
    expect(book.status).toBe('borrowed')
    expect(book.borrowedBy).toBe(user.id)
    expect(user.currentLoans).toContain(book.id)
  })

  it('ne doit pas permettre d\'emprunter un livre déjà emprunté', () => {
    service.borrowBook(book.id, user.id)
    const secondAttempt = service.borrowBook(book.id, user.id)
    expect(secondAttempt).toBe(false)
  })

  it('doit refuser l\'emprunt si le livre ou l\'utilisateur n\'existe pas', () => {
    expect(service.borrowBook('unknown', user.id)).toBe(false)
    expect(service.borrowBook(book.id, 'unknown')).toBe(false)
  })

  it('doit calculer correctement la date de retour selon la catégorie', () => {
    const borrowDate = new Date('2024-01-01')
    const dueDate = service.calculateDueDate(borrowDate, 'premium')
    expect(dueDate.getTime()).toBe(new Date('2024-01-31').getTime())
  })

  it('doit retourner un livre et calculer les pénalités', () => {
    const borrowDate = new Date('2024-01-01')
    service.borrowBook(book.id, user.id, borrowDate)

    const returnDate = new Date('2024-01-20') // après 19 jours
    const penalty = service.returnBook(book.id, returnDate)

    // Pénalité : 5 jours de retard → 2.5€
    expect(penalty).toBe(2.5)
    expect(book.status).toBe('available')
    expect(user.currentLoans).not.toContain(book.id)
  })

  it('doit retourner -1 si retour d\'un livre non emprunté', () => {
    const result = service.returnBook(book.id)
    expect(result).toBe(-1)
  })

  it('doit récupérer les livres empruntés ou disponibles', () => {
    expect(service.getAvailableBooks()).toContain(book)
    service.borrowBook(book.id, user.id)
    expect(service.getBorrowedBooks()).toContain(book)
  })

  it('doit retourner les livres en retard', () => {
    const borrowDate = new Date('2024-01-01')
    service.borrowBook(book.id, user.id, borrowDate)

    const currentDate = new Date('2024-02-01')
    const overdue = service.getOverdueBooks(currentDate)

    expect(overdue).toContain(book)
  })

  it('doit retourner les livres empruntés par un utilisateur', () => {
    service.borrowBook(book.id, user.id)
    const loans = service.getUserLoans(user.id)
    expect(loans).toContain(book)
  })

  // [MODIF] on mocke Date.now pour tester les prêts au 1er janvier
  it('devrait fixer la date de retour en fonction de la date mockée', () => {
    const mockDate = new Date('2025-01-01')
    vi.setSystemTime(mockDate)

    const result = service.borrowBook(book.id, user.id)
    expect(result).toBe(true)

    const expectedDueDate = new Date('2025-01-15') // standard => +14j
    expect(book.dueDate?.toISOString()).toBe(expectedDueDate.toISOString())

    vi.useRealTimers()
  })
})

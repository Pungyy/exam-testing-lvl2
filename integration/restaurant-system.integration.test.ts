import { describe, test, beforeEach, expect } from 'vitest'
import { RestaurantSystem } from './src/RestaurantService';
import { ICustomer, IProduct, IOrder, IInvoice } from './src/types';

describe('Restaurant System Integration Tests', () => {
  let system: RestaurantSystem
  let customer: ICustomer
  let pizza: IProduct
  let soda: IProduct

  beforeEach(() => {
    system = new RestaurantSystem()

    // Création d’un client
    customer = system.getCustomerService().createCustomer({
      name: 'Jean Dupont',
      email: 'jean@example.com',
      address: '123 rue de Paris',
      phone: '0601020304'
    })

    // Création de produits disponibles
    pizza = system.getProductService().createProduct({
      name: 'Pizza',
      description: 'Mozza',
      price: 10,
      category: 'main',
      available: true,
      preparationTimeMinutes: 20
    })

    soda = system.getProductService().createProduct({
      name: 'Soda',
      description: 'Boisson sucrée',
      price: 2,
      category: 'drink',
      available: true,
      preparationTimeMinutes: 1
    })
  })

  // ✅ 1. Processus de commande complet
  test('Processus de commande complet', () => {
    const orderItems = [
      { productId: pizza.id, quantity: 1 },
      { productId: soda.id, quantity: 2 }
    ]

    const { order, invoice } = system.processOrder(customer.id, orderItems)

    expect(order).toBeTruthy()
    expect(invoice).toBeTruthy()
    expect(order?.items.length).toBe(2)
    expect(invoice?.totalAmount).toBe(10 + 4)
    expect(invoice?.tax).toBeCloseTo(1.4, 2)


    const paid = system.getInvoiceService().payInvoice(invoice!.id, 'credit_card')
    expect(paid).toBe(true)

    const updatedInvoice = system.getInvoiceService().getInvoice(invoice!.id)
    expect(updatedInvoice?.paid).toBe(true)
    expect(updatedInvoice?.paymentMethod).toBe('credit_card')

    const updatedCustomer = system.getCustomerService().getCustomer(customer.id)
    expect(updatedCustomer?.loyaltyPoints).toBe(1) // 14€ => 1 point
  })

  // ✅ 2. Gestion des points de fidélité
  test('Points fidélité attribués correctement', () => {
    system.processOrder(customer.id, [{ productId: pizza.id, quantity: 3 }]) // 30€
    const updatedCustomer = system.getCustomerService().getCustomer(customer.id)
    expect(updatedCustomer?.loyaltyPoints).toBe(3)
  })

  // ✅ 3. Produit non disponible
  test('Commande échoue si un produit est indisponible', () => {
    system.getProductService().updateProductAvailability(soda.id, false)
    const { order, invoice } = system.processOrder(customer.id, [{ productId: soda.id, quantity: 1 }])
    expect(order).toBeNull()
    expect(invoice).toBeNull()
  })

  test('Commande fonctionne après mise à jour de disponibilité', () => {
    system.getProductService().updateProductAvailability(soda.id, false)
    system.getProductService().updateProductAvailability(soda.id, true)
    const { order } = system.processOrder(customer.id, [{ productId: soda.id, quantity: 1 }])
    expect(order).not.toBeNull()
  })

  // ✅ 4. Changements de statut de commande
  test('Modification des statuts d’une commande', () => {
    const { order } = system.processOrder(customer.id, [{ productId: pizza.id, quantity: 1 }])
    expect(order?.status).toBe('pending')

    const orderId = order!.id
    const updated = system.getOrderService().updateOrderStatus(orderId, 'preparing')
    expect(updated).toBe(true)

    const updatedOrder = system.getOrderService().getOrder(orderId)
    expect(updatedOrder?.status).toBe('preparing')
  })

  test('Annulation possible seulement si statut pending', () => {
    const { order } = system.processOrder(customer.id, [{ productId: pizza.id, quantity: 1 }])
    const orderId = order!.id

    const result1 = system.getOrderService().cancelOrder(orderId)
    expect(result1).toBe(true)

    // Tentative d’annuler après changement de statut
    const newOrder = system.processOrder(customer.id, [{ productId: pizza.id, quantity: 1 }]).order!
    system.getOrderService().updateOrderStatus(newOrder.id, 'preparing')
    const result2 = system.getOrderService().cancelOrder(newOrder.id)
    expect(result2).toBe(false)
  })

  // ✅ 5. Calcul des montants et taxes
  test('Montant total et taxes cohérents', () => {
    const { order, invoice } = system.processOrder(customer.id, [
      { productId: soda.id, quantity: 2 }, // 4€
      { productId: pizza.id, quantity: 1 } // 10€
    ])
    expect(order?.totalAmount).toBe(14)
    expect(invoice?.tax).toBeCloseTo(1.4, 2)

  })
})

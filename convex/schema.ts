import { defineSchema, defineTable } from 'convex/server';

import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    password: v.string(),
  }),
  shops: defineTable({
    name: v.string(),
    logo: v.string(),
    location: v.string(),
    owner: v.string(),
    shopId: v.string(),
    password: v.string(),
    lastLogin: v.string(),
  }),
  payments: defineTable({
    shop: v.id('shops'),
    month: v.string(),
    year: v.string(),
  }),
  products: defineTable({
    shop: v.id('shops'),
    name: v.string(),
    description: v.string(),
    category: v.optional(v.string()),
  }),
  variants: defineTable({
    productId: v.string(),
    product: v.id('products'),
    name: v.string(),
    actualPrice: v.number(),
    sellingPrice: v.number(),
    pictures: v.array(v.string()),
  }),
  inventory: defineTable({
    variant: v.id('variants'),
    quantity: v.number(),
  }),
  orders: defineTable({
    shop: v.id('shops'),
    status: v.string(),
    customerName: v.string(),
    customerPhone: v.string(),
    items: v.array(
      v.object({
        variant: v.id('variants'),
        keys: v.array(v.string()),
      }),
    ),
  }),
});

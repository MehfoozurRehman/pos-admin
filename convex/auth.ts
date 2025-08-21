import { mutation } from './_generated/server';
import { v } from 'convex/values';

export const createAdmin = mutation({
  args: { name: v.string(), email: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    const { name, email, password } = args;

    const adminId = await ctx.db.insert('users', { name, email, password });

    return adminId;
  },
});

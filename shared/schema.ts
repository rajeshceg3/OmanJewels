import { z } from "zod";

export const destinationSchema = z.object({
  id: z.number(),
  name: z.string(),
  coords: z.tuple([z.number(), z.number()]),
  category: z.string(),
  description: z.string(),
  image: z.string(),
  highlights: z.array(z.string()),
});

export const createInsertDestinationSchema = destinationSchema.omit({ id: true });

export type Destination = z.infer<typeof destinationSchema>;
export type InsertDestination = z.infer<typeof createInsertDestinationSchema>;

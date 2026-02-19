import { z } from 'zod';


export const logEntrySchema = z.object({
    title: z.string().min(5, "Muy corto"),
    slug: z.string(),
    content: z.string().min(20, "Documenta un poco más"),
    category: z.enum(['Frontend', 'Backend', 'DevOps', 'Database']),
    tags: z.array(z.string()).default([]),
})

export type LogEntry = z.infer< typeof logEntrySchema >;


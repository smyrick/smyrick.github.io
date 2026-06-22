import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogSchema = z
    .object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        draft: z.boolean().default(false),
        path: z.string().regex(/^\/blog\/[a-z0-9-]+$/),
        type: z.enum(['post', 'talk']).default('post'),
        videoUrl: z.string().url().optional(),
        embedUrl: z.string().url().optional(),
        event: z.string().optional(),
        source: z.string().optional(),
    })
    .superRefine((data, ctx) => {
        if (data.type !== 'talk') {
            return;
        }

        if (!data.videoUrl) {
            ctx.addIssue({
                code: 'custom',
                message: 'Talk entries require videoUrl',
                path: ['videoUrl'],
            });
        }

        if (!data.embedUrl) {
            ctx.addIssue({
                code: 'custom',
                message: 'Talk entries require embedUrl',
                path: ['embedUrl'],
            });
        }
    });

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: ({ image }) =>
        blogSchema.extend({
            featuredImage: image().optional(),
        }),
});

export const collections = { blog };

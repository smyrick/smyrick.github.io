import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

function utcDay(date: Date) {
    return Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate()
    );
}

export function isPublishedPost(data: BlogPost['data'], now = new Date()) {
    return data.draft !== true && utcDay(data.date) <= utcDay(now);
}

export function readingTime(body: string) {
    const words = body.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 225));
    return `${minutes} min read`;
}

export function postSlug(post: BlogPost) {
    return post.data.path.replace(/^\/blog\//, '');
}

export function postDescription(post: BlogPost) {
    if (post.data.description) {
        return post.data.description;
    }

    return post.body
        .replace(/```[\s\S]*?```/g, '')
        .replace(/[#_*[\]()`>~-]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 160);
}

export function postTypeLabel(post: BlogPost) {
    const labels = {
        post: 'Post',
        talk: 'Talk',
    };

    return labels[post.data.type];
}

export function postMeta(post: BlogPost) {
    if (post.data.type === 'post') {
        return readingTime(post.body);
    }

    return postTypeLabel(post);
}

export async function getPublishedPosts() {
    const posts = await getCollection('blog', ({ data }) =>
        isPublishedPost(data)
    );

    return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(date);
}

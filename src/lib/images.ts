import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import profileImage from '../assets/shane-profile.jpeg';
import { site } from '../site';

export { profileImage };

export async function socialImageUrl(src: ImageMetadata) {
    const optimized = await getImage({
        src,
        width: 1200,
        height: 630,
        fit: 'cover',
    });

    return new URL(optimized.src, site.url).toString();
}

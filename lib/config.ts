import { strapi } from '@strapi/client';

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_URL || 'http://localhost:1337';

export const STRAPI_BASE_URL_WITH_API = `${STRAPI_BASE_URL}/api`;

const client = strapi({ baseURL: STRAPI_BASE_URL_WITH_API });

export const getStrapiImageURL = (image: string | null) => {
    if (!image) return null;
    const imageUrl = new URL(image, STRAPI_BASE_URL || 'http://localhost:1337');
    return imageUrl.toString();
};

export const strapiClient = client;
import { COLLECTION_NAME } from "@/constant/strapi";
import { strapiClient } from "@/lib/config";
import { Blog, Brand, CareerOpening, Category, HomeBenner, NewsAndPublication, Product, StrapiCollectionResponse, SubCategory } from "@/types";
import { CollectionTypeManager } from "@strapi/client";

export class StrapiService<T> {
    private instance: CollectionTypeManager;
    private collectionName: string;

    constructor(collectionName: string) {
        this.instance = strapiClient.collection(collectionName)
        this.collectionName = collectionName;

    }

    async find(filters?: Record<string, any>): Promise<StrapiCollectionResponse<T[]>> {
        try {
            const response = await this.instance.find(filters);
            return response as StrapiCollectionResponse<T[]>;
        } catch (error) {
            console.error(`Error fetching data from ${this.collectionName}:`, error);
            throw error;
        }
    }

    async findById(id: string, filters?: Record<string, any>): Promise<T> {
        try {
            const response = await this.instance.findOne(id, filters);
            return response?.data as T;
        } catch (error) {
            console.error(`Error fetching data from ${this.collectionName} by ID:`, error);
            throw error;
        }
    }

    async findBySlug(slug: string, filters?: Record<string, any>): Promise<StrapiCollectionResponse<T[]>> {
        try {
            const response = await this.instance.find({
                filters: { slug: { $eq: slug } },
                ...filters,
            });
            return response as StrapiCollectionResponse<T[]>;
        } catch (error) {
            console.error(`Error fetching data from ${this.collectionName} by slug:`, error);
            throw error;
        }
    }

}


const blogService = new StrapiService<Blog>(COLLECTION_NAME.blog);
const newsService = new StrapiService<NewsAndPublication>(COLLECTION_NAME.newsAndPublication);
const trustedPartnersService = new StrapiService<Brand>(COLLECTION_NAME.brands);
const homeBannerService = new StrapiService<HomeBenner>(COLLECTION_NAME.banner);
const careerService = new StrapiService<CareerOpening>(COLLECTION_NAME.career);
const categoryService = new StrapiService<Category>(COLLECTION_NAME.category);
const subCategoryService = new StrapiService<SubCategory>(COLLECTION_NAME.subCategory);
const productService = new StrapiService<Product>(COLLECTION_NAME.product);

export {
    blogService,
    careerService,
    categoryService,
    homeBannerService,
    newsService,
    productService,
    subCategoryService,
    trustedPartnersService
};


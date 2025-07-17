import { strapiClient } from "@/lib/config";
import { Blog, Brand, CareerOpening, Category, HomeBenner, NewsAndPublication, StrapiCollectionResponse, SubCategory } from "@/types";
import { CollectionTypeManager } from "@strapi/client";

class StrapiService<T> {
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

    async findById(id: string, filters?: Record<string, any>) : Promise<T> {
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
                filters: { slug: { $eq: slug }  },
                ...filters,
            });
            return response as StrapiCollectionResponse<T[]>;
        } catch (error) {
            console.error(`Error fetching data from ${this.collectionName} by slug:`, error);
            throw error;
        }
    }   

}


const blogService = new StrapiService<Blog>('blogs');
const newsService = new StrapiService<NewsAndPublication>('news-and-publications');
const trustedPartnersService = new StrapiService<Brand>('trusted-brands');
const homeBannerService = new StrapiService<HomeBenner>('home-banners');
const careerService = new StrapiService<CareerOpening>('careers');
const categoryService = new StrapiService<Category>('categories');
const subCategoryService = new StrapiService<SubCategory>('sub-categories')

export { blogService, careerService, categoryService, homeBannerService, newsService, subCategoryService, trustedPartnersService };


import { MODEL_NAME } from "@/constant/strapi";
import { homeBannerService, trustedPartnersService } from "@/service/strapi";
import { unstable_cache } from "next/cache";

export const getTrustedBrands = unstable_cache(async () => {
    return trustedPartnersService.find({
        populate: {
            logo: true
        }
    });
}, [], {
    tags: [MODEL_NAME.brands]
})

export const getBanners = unstable_cache(async () => {
    return homeBannerService.find({
        populate: {
            image: true
        }
    })
}, [], { tags: [MODEL_NAME.banner] })
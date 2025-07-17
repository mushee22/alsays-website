type Service = {
  title: string;
  description: string;
  icon: string;
  id: string;
}

export interface MenuItem {
  id?: string
  title: string
  path?: string
  subMenu?: Omit<MenuItem, "id">[]
}

export interface NavigationProps {
  className?: string
}

export interface MenuItemProps {
  item: MenuItem
  isActive?: boolean
  onHover?: (id?: string) => void;
  onClick?: (id: string) => void;
  level?: number,
  className?: string,
  path?: string,

}






interface StrapiPaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiCollectionResponse<T> {
  data: T;
  meta: StrapiPaginationMeta;
}



export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large?: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
    thumbnail?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any; // or you can type this more specifically if needed
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}



export interface HomeBenner {
  id: number;
  documentId: string;
  altText: string;
  image: StrapiImage;
}

export interface Brand {
  id: number;
  documentId: string;
  title: string;
  logo: StrapiImage;
}

export interface Blog {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  cover: StrapiImage | null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  content?: string;
}

export interface NewsAndPublication {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  cover: StrapiImage | null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  content?: string;
}

export interface CareerOpening {
  id: number;
  documentId: string;
  positionName: string;
  locationType: "Remote" | "On-site" | "Hybrid";
  description: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  image?: StrapiImage | null;
  subCategories?: SubCategory[];
  createdAt: string;
  updatedAt: string;
  order: number;
}

export interface SubCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;  
  image?: StrapiImage | null;
  products?: Product[];
  createdAt: string;
  updatedAt: string;
  category?: Category;
}

export interface Product {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  image?: StrapiImage[] | null;
  subCategory?: SubCategory | null;
  createdAt: string;
  updatedAt: string;
}

export interface PageParams {
  params: Promise<{ slug: string }>
}
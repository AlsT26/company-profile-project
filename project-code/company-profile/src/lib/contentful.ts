// src/lib/contentful.ts
// import { getBlogPosts } from "../../lib/contentful";
import { Products } from "../types";
// import Image from "next/image";
// import styles from "../../styles/Blog.module.css";
import resolveResponse from "contentful-resolve-response";
const base_url = process.env.NEXT_PUBLIC_CONTENTFUL_BASE_URL;
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export const getProductPosts = async (): Promise<Products[]> => {
  try {
    const res = await fetch(`${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=companyProfile`, { next: { revalidate: 60 } });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    const result = resolveResponse(data);
    return result;
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    return [];
  }
};

export const getProductSlug = async (slug: string) => {
  try {
    const res = await fetch(`${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=companyProfile&fields.slug=${slug}`, { next: { revalidate: 60 } });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    const result = resolveResponse(data);
    return result[0];
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    // return [];
  }
};

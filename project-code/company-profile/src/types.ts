import { Document } from "@contentful/rich-text-types";

export interface Products {
  fields: {
    productName: string; // Title is stored as `text`
    slug: string;
    description: Document;
    productImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    // Add any additional fields as necessary, e.g., body, etc.
  };
}

export interface Users {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

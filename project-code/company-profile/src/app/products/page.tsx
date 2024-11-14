// src/app/blog/page.tsx
import { getProductPosts } from "../../lib/contentful";
import { Products } from "../../types";
import Image from "next/image";
// import resolveResponse from "contentful-resolve-response";

export const revalidate = 10;

const ProductPage = async () => {
  // Fetch posts from Contentful
  const posts: Products[] = await getProductPosts();

  console.log(posts[0]?.fields); // Debugging to check data structure

  return (
    <div className={"container"}>
      <h1 className={"title"}>Blog</h1>
      <div className={"grid"}>
        {posts.map((post, idx) => (
          <div key={idx} className={"card"}>
            {/* Check if productImage exists and render it */}
            {post.fields.productImage?.fields?.file?.url ? (
              <Image src={`https:${post.fields.productImage.fields.file.url}`} alt={post.fields.productName || "Blog Image"} width={600} height={400} className={"cardImage"} />
            ) : (
              <div className={"placeholderImage"}>No Image Available</div>
            )}
            {/* Display Title (from `text`), Author, and Date */}
            <h2 className={"cardTitle"}>{post.fields.productName}</h2> {/* `text` is the title */}
            <a href={`/products/${post.fields.slug}`} className={"readMore"}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

import { getProductSlug } from "@/lib/contentful";

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const data = await getProductSlug(params.slug);
  return (
    <div>
      <h1 className={"cardTitle"}>{data.fields.productName}</h1>
    </div>
  );
}

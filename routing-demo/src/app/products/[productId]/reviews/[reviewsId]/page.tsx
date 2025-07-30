import { notFound } from "next/navigation";

export default async function ProductsReviews({params} : {
    params: Promise<{ productId: string, reviewsId: string}>;
}) {
    const { productId, reviewsId } = await params;
    if ( parseInt(reviewsId) > 1000) {
        return notFound();
    }
    return <h1> Product Reviews Page for Product {productId} and Review {reviewsId}</h1>
}
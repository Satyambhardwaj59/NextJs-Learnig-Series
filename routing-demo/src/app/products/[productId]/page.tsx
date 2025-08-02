import { Metadata } from 'next';

type Props = {
    params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params,} : Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`)
        }, 100)
    });
    return {
        title: title,
        description: `Details of product ${id}`,
    };
}

export default async  function ProductsDetails({ params} : Props){
    const productId = (await params).productId;
    return <h1> Product Details Page {productId}</h1>
}
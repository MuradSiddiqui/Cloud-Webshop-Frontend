import { getProductById } from "../hooks";
import Image from "next/image";
import useCartStore from "../useCartStore";
import BuyButton from "../components/BuyButton";

const SinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const data = await getProductById(slug);
if(data.detail){
  return <div>No Product Found</div>
} else
  return (
    <div className="flex w-full container-p gap-x-8 my-8">
      <div className="w-full lg:w-1/2  relative h-80">
        <Image
          fill
          className="object-contain bg-gray-100"
          src={data?.image_url}
          alt="Product Image"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-y-4 ">
        <h2 className="text-4xl font-semibold ">{data?.name}</h2>
        <hr />
        <p className="">{data?.description}</p>
        <hr />
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-2xl">${data?.price}</h3>
          <BuyButton data={data} />
        </div>
       

        <div className="text-sm my-4">
  <h3 className="text-xl font-semibold">Shipping Details</h3>
  <ul className="list-disc pl-5">
    <li><strong>Order Processing:</strong> We process orders within 1–2 business days.</li>
    <li><strong>Delivery Time:</strong> Most items arrive within 3–7 business days after processing.</li>
    <li><strong>Special Offer:</strong> Grab up to 50% off on selected products.</li>
    <li><strong>Product Quality:</strong> Made from 100% genuine wood.</li>
  </ul>
</div>

      </div>
    </div>
  );
};

export default SinglePage;
import Head from "next/head";
import FooterBanner from "../Components/FooterBanner";
import HeroBanner from "../Components/HeroBanner";
import Products from "../Components/Products";
import { client } from "../lib/client";

export default function Home({products, bannerData}) {
  return (
    <div>
      <Head>
        <title>Younique store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        {/* Hero Banner */}
        <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

        <div className=" text-center mt-20 lg:mt-10 mb-10">
          <h1 className=" text-slate-700 font-black text-4xl">Products</h1>
          <p className=" text-slate-400 my-1 text-lg font-semibold">
            All clothing options for your NFTs.
          </p>
        </div>

        {/* Products */}
        <div id="products" className=" flex flex-row gap-10 justify-center">
          {products?.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>

        {/* Footer Banner */}
        <div className=" flex justify-center">
         <FooterBanner heroBanner={bannerData.length && bannerData[0]} />
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

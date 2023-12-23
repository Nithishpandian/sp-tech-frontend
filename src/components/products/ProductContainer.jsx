import React from "react";
import bulbImg from "../../assets/images/products/ceramic-bulb-holder.jpeg";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-20 px-6 sm:px-36 md:px-7 lg:px-16 xl:px-36 2xl:px-40 3xl:px-44 py-16">
      <ProductCard
        image={bulbImg}
        number={"01"}
        name={"Ceramic bulb holder"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus dolor voluptas praesentium accusamus nam iusto tempore, laboriosam culpa natus ex ut sit in vel voluptatem veritatis est quis animi dolorem. Amet vel commodi veritatis adipisci tempora neque blanditiis nobis."}
      />
      <ProductCard
        image={bulbImg}
        number={"02"}
        name={"Ceramic bulb holder"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus dolor voluptas praesentium accusamus nam iusto tempore, laboriosam culpa natus ex ut sit in vel voluptatem veritatis est quis animi dolorem. Amet vel commodi veritatis adipisci tempora neque blanditiis nobis."}
      />
      <ProductCard
        image={bulbImg}
        number={"03"}
        name={"Ceramic bulb holder"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus dolor voluptas praesentium accusamus nam iusto tempore, laboriosam culpa natus ex ut sit in vel voluptatem veritatis est quis animi dolorem. Amet vel commodi veritatis adipisci tempora neque blanditiis nobis."}
      />
      <ProductCard
        image={bulbImg}
        number={"04"}
        name={"Ceramic bulb holder"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus dolor voluptas praesentium accusamus nam iusto tempore, laboriosam culpa natus ex ut sit in vel voluptatem veritatis est quis animi dolorem. Amet vel commodi veritatis adipisci tempora neque blanditiis nobis."}
      />
      <ProductCard
        image={bulbImg}
        number={"05"}
        name={"Ceramic bulb holder"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus dolor voluptas praesentium accusamus nam iusto tempore, laboriosam culpa natus ex ut sit in vel voluptatem veritatis est quis animi dolorem. Amet vel commodi veritatis adipisci tempora neque blanditiis nobis."}
      />
      <ProductCard
        image={bulbImg}
        number={"06"}
        name={"Ceramic bulb holder"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus dolor voluptas praesentium accusamus nam iusto tempore, laboriosam culpa natus ex ut sit in vel voluptatem veritatis est quis animi dolorem. Amet vel commodi veritatis adipisci tempora neque blanditiis nobis."}
      />
    </div>
  );
};

export default ProductContainer;

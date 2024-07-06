import * as React from "react";

function CategoryCard({ imgSrc, altText, category }) {
  return (
    <div className="flex flex-col justify-center px-14 py-7 rounded border border-solid border-black border-opacity-30">
      <img
        loading="lazy"
        src={imgSrc}
        alt={altText}
        className="self-center w-14 aspect-square"
      />
      <div className="mt-6">{category}</div>
    </div>
  );
}

function ProductCard({
  discount,
  imgSrc1,
  altText1,
  imgSrc2,
  altText2,
  name,
  oldPrice,
  price,
  ratingImg,
  ratingAlt,
  reviews,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 px-3 pt-3 pb-12 rounded bg-neutral-100">
        <div className="flex flex-col text-xs leading-5 text-neutral-50">
          <div className="justify-center px-3 py-1 bg-red-500 rounded">
            {discount}
          </div>
          <img
            loading="lazy"
            src={imgSrc1}
            alt={altText1}
            className="self-end mt-3 w-[172px]"
          />
        </div>
        <img
          loading="lazy"
          src={imgSrc2}
          alt={altText2}
          className="aspect-square w-[34px]"
        />
      </div>
      <div className="mt-4 text-base font-medium text-black">{name}</div>
      <div className="flex gap-3 mt-2 text-base font-medium">
        <div className="text-red-500">{price}</div>
        <div className="text-black line-through">{oldPrice}</div>
      </div>
      <div className="flex gap-2 mt-2 text-sm font-semibold text-black">
        <img
          loading="lazy"
          src={ratingImg}
          alt={ratingAlt}
          className="w-[100px]"
        />
        <div>({reviews})</div>
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <header className="flex flex-col justify-center items-end px-16 py-3 w-full text-sm bg-black text-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mr-20 max-w-full w-[859px] max-md:flex-wrap max-md:mr-2.5">
          <p className="flex gap-2 max-md:flex-wrap">
            <span className="my-auto leading-[150%] max-md:max-w-full">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <a
              href="#"
              className="font-semibold leading-6 text-center underline"
            >
              Shop Now
            </a>
          </p>
          <div className="flex gap-1.5 justify-center whitespace-nowrap leading-[150%]">
            <div>English</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c458026ddcb4daaaca9291897ab1b8ab8e65bd1233e48db8bbc95eb90ee3e16?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
      </header>

      <div className="flex gap-5 justify-between self-center mt-10 w-full max-w-[1170px] max-md:flex-wrap max-md:max-w-full">
        <nav className="flex gap-5 justify-between my-auto text-black max-md:flex-wrap max-md:max-w-full">
          <div className="justify-center px-5 py-1 text-2xl font-bold tracking-wider leading-6 whitespace-nowrap">
            Exclusive
          </div>
          <div className="flex gap-5 justify-between px-5 text-base leading-6 text-center">
            <a href="#" className="justify-center whitespace-nowrap">
              Home
            </a>
            <a href="#" className="justify-center px-px py-2 whitespace-nowrap">
              Contact
            </a>
            <a
              href="#"
              className="justify-center px-px py-1.5 whitespace-nowrap"
            >
              About
            </a>
            <a href="#" className="justify-center px-px py-1">
              Sign Up
            </a>
          </div>
        </nav>
        <div className="flex gap-5 justify-between">
          <form className="flex gap-5 justify-center py-2 pr-3 pl-5 text-xs leading-5 text-black rounded bg-neutral-100">
            <label for="searchInput" className="sr-only">
              What are you looking for?
            </label>
            <input
              className="my-auto"
              id="searchInput"
              type="text"
              placeholder="What are you looking for?"
              aria-label="What are you looking for?"
            />
            <button type="submit">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a36546edd30f9649053810fdbf6c98d92541e863e7b8b10ab13af855343b34e?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                alt="Search"
                className="shrink-0 w-6 aspect-square"
              />
            </button>
          </form>
          <div className="flex gap-4 justify-center my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/850597cc14d3bfef027aa097fc5bca3ac1b650d683dc1d3c8c0134d5cd9a061d?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              alt="User Profile"
              className="shrink-0 w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/27e6583cc2b0ad6384fa0e09ba54d132ea13906a2c9553ea3ae9481ef2628ff7?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              alt="User Cart"
              className="shrink-0 w-8 aspect-square"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 w-full bg-black border border-black border-solid min-h-[1px] max-md:max-w-full" />

      <main className="flex z-10 flex-col items-center self-center px-5 w-full max-w-[1305px] max-md:max-w-full">
        <aside className="flex gap-5 max-md:flex-col max-md:gap-0">
          <nav className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
            <ul className="flex grow gap-4 text-base leading-6 text-center text-black max-md:mt-10">
              <li className="flex flex-col self-end mt-10">
                <div className="flex gap-5 justify-between">
                  <a href="#">Woman’s Fashion</a>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/419e3d65c94f39310352312d26156e850a5fd9835e5ec39a019f5290ed34bf71?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                    alt=""
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-5 justify-between mt-4">
                  <a href="#">Men’s Fashion</a>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/419e3d65c94f39310352312d26156e850a5fd9835e5ec39a019f5290ed34bf71?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                    alt=""
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
                <a href="#" className="mt-4">
                  Electronics
                </a>
                <a href="#" className="mt-4">
                  Home & Lifestyle
                </a>
                <a href="#" className="mt-4">
                  Medicine
                </a>
                <a href="#" className="mt-4">
                  Sports & Outdoor
                </a>
                <a href="#" className="mt-4">
                  Baby’s & Toys
                </a>
                <a href="#" className="mt-4">
                  Groceries & Pets
                </a>
                <a href="#" className="mt-4">
                  Health & Beauty
                </a>
              </li>
              <div className="shrink-0 h-96 bg-black border border-black border-solid w-[29px] max-md:hidden" />
            </ul>
          </nav>

          <section className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
            <div className="grow px-16 pt-4 mt-10 w-full bg-black max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <article className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-base leading-6 text-neutral-50 max-md:mt-10">
                    <div className="flex gap-5 justify-between text-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f939f74e6b76c0860ee89617bb5a39fdb9644da4ba1e71a5076334ff037931a?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                        alt="iPhone 14 Series"
                        className="shrink-0 w-10 aspect-[0.81]"
                      />
                      <div className="my-auto">iPhone 14 Series</div>
                    </div>
                    <h1 className="mt-8 text-5xl font-semibold tracking-widest leading-[60px] max-md:text-4xl max-md:leading-[56px]">
                      Up to 10% off Voucher
                    </h1>
                    <div className="flex gap-2 pr-11 mt-9 font-medium text-center max-md:pr-5">
                      <div className="flex flex-col">
                        <a href="#">Shop Now</a>
                        <div className="shrink-0 h-px border border-solid bg-neutral-50 border-neutral-50" />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9f9190215df855e46de68e25db2cebf222e4b26191868239034c2f0ce1ceb8?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                        alt=""
                        className="shrink-0 my-auto w-6 aspect-square"
                      />
                    </div>
                  </div>
                </article>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e60a8d7f3d59472144b9e16aab231321e978cdc7b4c0a34577e6259d445f66aa?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                  alt=""
                  className="grow w-full aspect-[1.64] max-md:mt-4 max-md:max-w-full"
                />
              </div>
            </div>
          </section>
        </aside>

        <section className="flex gap-5 justify-between self-stretch pr-20 mt-36 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="flex gap-4">
                    <div className="flex flex-col justify-center">
                      <div className="shrink-0 h-10 bg-red-500 rounded" />
                    </div>
                    <div className="my-auto text-base font-semibold text-red-500">
                      Today’s
                    </div>
                  </div>
                  <h2 className="mt-6 text-4xl font-semibold tracking-widest leading-10 text-black">
                    Flash Sales
                  </h2>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-4 mt-14 text-black whitespace-nowrap max-md:mt-10">
                  <div className="flex flex-col">
                    <div className="text-xs font-medium leading-5">Days</div>
                    <div className="mt-1 text-3xl font-bold tracking-widest leading-8">
                      03
                    </div>
                  </div>
                  <div className="shrink-0 self-end mt-7 w-1 h-4" />
                  <div className="flex flex-col">
                    <div className="text-xs font-medium leading-5">Hours</div>
                    <div className="mt-1 text-3xl font-bold tracking-widest leading-8">
                      23
                    </div>
                  </div>
                  <div className="shrink-0 self-end mt-7 w-1 h-4" />
                  <div className="flex flex-col">
                    <div className="text-xs font-medium leading-5">Minutes</div>
                    <div className="mt-1 text-3xl font-bold tracking-widest leading-8">
                      19
                    </div>
                  </div>
                  <div className="shrink-0 self-end mt-7 w-1 h-4" />
                  <div className="flex flex-col">
                    <div className="text-xs font-medium leading-5">Seconds</div>
                    <div className="mt-1 text-3xl font-bold tracking-widest leading-8">
                      56
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 self-end mt-14 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              alt=""
              className="shrink-0 aspect-square w-[46px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              alt=""
              className="shrink-0 aspect-square w-[46px]"
            />
          </div>
        </section>

        <section className="flex overflow-x-auto gap-5 justify-between self-stretch mt-10 max-md:flex-wrap">
          <ProductCard
            discount="-40%"
            imgSrc1="https://cdn.builder.io/api/v1/image/assets/TEMP/bb1abf80c5c4c9988ff3756f34265f3e884a090b104af9eb5edd854d58494d5e?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText1=""
            imgSrc2="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText2="Discount"
            name="HAVIT HV-G92 Gamepad"
            oldPrice="$160"
            price="$120"
            ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            ratingAlt="Rating"
            reviews={88}
          />
          <ProductCard
            discount="-30%"
            imgSrc1="https://cdn.builder.io/api/v1/image/assets/TEMP/e681814c6929e4c96d1d5f86b4cfc1b061bc3a38cc780b20e4937fd953947b8b?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText1=""
            imgSrc2="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText2=""
            name="IPS LCD Gaming Monitor"
            oldPrice="$400"
            price="$370"
            ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            ratingAlt="Rating"
            reviews={99}
          />
          <ProductCard
            discount="-25%"
            imgSrc1="https://cdn.builder.io/api/v1/image/assets/TEMP/130e3a3c176380505c5276ae60ca2d137602ec8b27b55dc65c0184faefafa447?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText1=""
            imgSrc2="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText2=""
            name="S-Series Comfort Chair"
            oldPrice="$400"
            price="$375"
            ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/dc96f02be6214aa2c5a10a5e290e5d7f143f389e81e1b093a9c0c4f46c5eb8a8?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            ratingAlt="Rating"
            reviews={99}
          />
          <ProductCard
            discount="-25%"
            imgSrc1="https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText1=""
            imgSrc2="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText2=""
            name="S-Series Comfort Chair"
            oldPrice="$400"
            price="$375"
            ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/dc96f02be6214aa2c5a10a5e290e5d7f143f389e81e1b093a9c0c4f46c5eb8a8?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            ratingAlt="Rating"
            reviews={99}
          />
        </section>

        <button className="justify-center px-12 py-4 mt-16 text-base font-medium leading-6 bg-red-500 rounded text-neutral-50 max-md:px-5 max-md:mt-10">
          View All Products
        </button>

        <div className="shrink-0 self-stretch mt-16 h-px bg-black border border-black border-solid max-md:mt-10 max-md:max-w-full" />

        <section className="flex gap-5 justify-between mt-16 w-full max-w-[1170px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col">
            <header className="flex gap-4 max-w-full w-[126px]">
              <div className="flex flex-col justify-center">
                <div className="shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <h2 className="my-auto text-base font-semibold text-red-500">
                Categories
              </h2>
            </header>
            <h3 className="mt-5 text-4xl font-semibold tracking-widest leading-10 text-black">
              Browse By Category
            </h3>
          </div>
          <div className="flex gap-2 self-end mt-16 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              alt=""
              className="shrink-0 aspect-square w-[46px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              alt=""
              className="shrink-0 aspect-square w-[46px]"
            />
          </div>
        </section>

        <section className="flex gap-5 justify-between mt-16 ml-0 text-base leading-6 text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10">
          <CategoryCard
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bfc45039a06cfe39efd1563bb4a52a7e681d8e7f26c8aaee6da0dd839032169d?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText="Phones"
            category="Phones"
          />
          <CategoryCard
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1618bcd397b79a019930557574367a229dc0872b37fce877dd26085204d913c0?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText="Computers"
            category="Computers"
          />
          <CategoryCard
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f9341ac7f8f121ded37f2fec2c8d53172ad19f49f61be3b876dd243e413b71?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText="SmartWatch"
            category="SmartWatch"
          />
          <CategoryCard
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/842c36cf1de5a268928e165a788613db4fac9174b17ccd5b844ebdca6773a609?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText="Camera"
            category="Camera"
          />
          <CategoryCard
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0f376a2654f35b2c50e34138b7fc46755ba85420d935387c59a633255d3b458d?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText="HeadPhones"
            category="HeadPhones"
          />
          <CategoryCard
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/72844f9516e06612513a9d58338e15b6bf395a01fc938f8e438232bb06e47b66?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
            altText="Gaming"
            category="Gaming"
          />
        </section>

        <div className="shrink-0 self-stretch mt-16 h-px bg-black border border-black border-solid max-md:mt-10 max-md:max-w-full" />

        <section className="flex gap-5 justify-between mt-16 w-full max-w-[1170px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col">
            <header className="flex gap-4 max-w-full w-[125px]">
              <div className="flex flex-col justify-center">
                <div className="shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <h2 className="my-auto text-base font-semibold text-red-500">
                This Month
              </h2>
            </header>
            <h3 className="mt-5 text-4xl font-semibold tracking-widest leading-10 text-black">
              Best Selling Products
            </h3>
          </div>
          <button className="justify-center self-end px-12 py-4 mt-14 text-base font-medium leading-6 bg-red-500 rounded text-neutral-50 max-md:px-5 max-md:mt-10">
            View All
          </button>
        </section>

        <section className="mt-16 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <ProductCard
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/71992e8783f4a036e7d7c3c0dda023963c697aa91aa6d1bd3449504e186f376f?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText=""
              name="The north coat"
              oldPrice="$360"
              price="$260"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={65}
            />
            <ProductCard
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/90306834081ddc38c3221d452097dafe7a46570d22687b23ecf6028216a70413?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText=""
              name="Gucci duffle bag"
              oldPrice="$1160"
              price="$960"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/0b5f248e40c3f753e8589c2e60b94c9e0f9a32d9a0c47d71bd6fd09bc8695caa?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={65}
            />
            <ProductCard
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf9de418c8bdc528c5bb7220c774d96c0a89a6d0b09299637dfa6f1888fed2d?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText=""
              name="RGB liquid CPU Cooler"
              oldPrice="$170"
              price="$160"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/0b5f248e40c3f753e8589c2e60b94c9e0f9a32d9a0c47d71bd6fd09bc8695caa?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={65}
            />
            <ProductCard
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f91da2e0de2d0e366ee9c4e70e066d40ea278e5b42c84d32db6e82a6dd2dbc93?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText=""
              name="Small BookSelf"
              price="$360"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={65}
            />
          </div>
        </section>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd88fe091f3c5b06820a88976a186886ffc0e74b127c0cfb99289900d5db839a?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
          alt=""
          className="mt-36 w-full aspect-[2.33] max-w-[1170px] max-md:mt-10 max-md:max-w-full"
        />

        <section className="flex gap-5 justify-between mt-16 w-full max-w-[1170px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col">
            <header className="flex gap-4 max-w-full w-[142px]">
              <div className="flex flex-col justify-center">
                <div className="shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <h2 className="my-auto text-base font-semibold text-red-500">
                Our Products
              </h2>
            </header>
            <h3 className="mt-5 text-4xl font-semibold tracking-widest leading-10 text-black">
              Explore Our Products
            </h3>
          </div>
          <div className="flex gap-2 self-end mt-16 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              alt=""
              className="shrink-0 aspect-square w-[46px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              alt=""
              className="shrink-0 aspect-square w-[46px]"
            />
          </div>
        </section>

        <section className="mt-16 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <ProductCard
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3c12ea0786641f91e95fc0a31f6460ec3fe1cdfa36d1fdd1f953cbffe2437290?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText=""
              name="Breed Dry Dog Food"
              price="$100"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/5959a135433b538e23679e77422b3d816e56dd82cae6866c502d00ccf1435149?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={35}
            />
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-8">
                <div className="flex flex-col pt-3 w-full rounded bg-neutral-100">
                  <div className="flex gap-5 items-start self-end max-md:mr-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0914327819b09c9d27502a0a584483b2bbe31caeea3ea24fc5607f2fcffd7080?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                      alt=""
                      className="shrink-0 mt-3 max-w-full aspect-[0.89] w-[146px]"
                    />
                    <div className="flex flex-col items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                        alt=""
                        className="aspect-square w-[34px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                        alt=""
                        className="mt-2 aspect-square w-[34px]"
                      />
                    </div>
                  </div>
                  <button className="justify-center items-center px-16 py-4 mt-6 text-base font-medium leading-6 text-white bg-black rounded-none max-md:px-5">
                    Add To Cart
                  </button>
                </div>
                <div className="mt-4 text-base font-medium leading-6 text-black">
                  CANON EOS DSLR Camera
                </div>
                <div className="flex gap-2 mt-2 leading-[150%]">
                  <div className="text-base font-medium text-red-500">$360</div>
                  <div className="flex gap-2 my-auto text-sm font-semibold text-black">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c35d903ef32712f74f1d691c7776b06b738b9c9c861a4482d47d9f9e4b9b6d4a?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                      alt="Rating"
                      className="w-[100px]"
                    />
                    <div>(95)</div>
                  </div>
                </div>
              </div>
            </div>
            <ProductCard
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/96db7b1c5a7248dd827659dec35ff9143d4536ae98a4c7e0f04188c8c179e424?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText=""
              name="ASUS FHD Gaming Laptop"
              price="$700"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={325}
            />
            <ProductCard
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4a9aef3774d73e55798d970690e6e320aefccce8b53324731c1f4df311a76142?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText="Curology Product Set"
              name="Curology Product Set"
              price="$500"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/c35d903ef32712f74f1d691c7776b06b738b9c9c861a4482d47d9f9e4b9b6d4a?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={145}
            />
          </div>
        </section>

        <section className="mt-16 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <ProductCard
              discount="NEW"
              imgSrc1="https://cdn.builder.io/api/v1/image/assets/TEMP/6ed22ecc68dc66029c5360e23201186f4ae233a314521e7e9e4035b750eeff34?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText1=""
              imgSrc2="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText2=""
              name="Kids Electric Car"
              oldPrice="$960"
              price="$960"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={65}
            />
            <ProductCard
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/147f6685bd6dfdb1d07d0e6bea9d0c5716f22ffd8bddc5d89ac01f064132ef98?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText=""
              name="Jr. Zoom Soccer Cleats"
              price="$1160"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={35}
            />
            <ProductCard
              discount="NEW"
              imgSrc1="https://cdn.builder.io/api/v1/image/assets/TEMP/dd3368ba21b06d66eca11552f5c6aa26e3d98e16711643d3550e390afe21e467?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText1=""
              imgSrc2="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText2=""
              name="GP11 Shooter USB Gamepad"
              oldPrice="$660"
              price="$660"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/0b5f248e40c3f753e8589c2e60b94c9e0f9a32d9a0c47d71bd6fd09bc8695caa?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={55}
            />
            <ProductCard
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/691566974b9a49b9c8786d30cb59c126876765e58d0659ecc0a8a70fdc6f0045?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              altText=""
              name="Quilted Satin Jacket"
              price="$660"
              ratingImg="https://cdn.builder.io/api/v1/image/assets/TEMP/dc96f02be6214aa2c5a10a5e290e5d7f143f389e81e1b093a9c0c4f46c5eb8a8?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              ratingAlt="Rating"
              reviews={55}
            />
          </div>
        </section>

        <button className="justify-center px-12 py-4 mt-16 text-base font-medium leading-6 bg-red-500 rounded text-neutral-50 max-md:px-5 max-md:mt-10">
          View All Products
        </button>

        <div className="flex gap-4 self-start mt-36 max-w-full w-[216px] max-md:mt-10">
          <div className="flex flex-col justify-center">
            <div className="shrink-0 h-10 bg-red-500 rounded" />
          </div>
          <h2 className="my-auto text-base font-semibold text-red-500">
            Featured
          </h2>
        </div>
        <h3 className="self-start mt-5 text-4xl font-semibold tracking-widest leading-10 text-black">
          New Arrival
        </h3>

        <section className="mt-16 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-7 pt-20 w-full bg-black rounded text-neutral-50">
                <div className="flex overflow-hidden relative flex-col items-start pt-20 pr-20 pb-8 mt-2.5 min-h-[511px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c62c9685713c5f1bf462510ff165f34baaca0d79fed3beaeab9b227037adcaf?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                    alt="PlayStation 5"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <h4 className="relative mt-72 text-2xl font-semibold tracking-wider leading-6">
                    PlayStation 5
                  </h4>
                  <p className="relative mt-4 text-sm leading-5 w-[242px]">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <a
                    href="#"
                    className="relative mt-4 text-base font-medium leading-6 text-white"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow">
                <div className="flex flex-col justify-center items-end px-16 rounded bg-stone-950 text-neutral-50">
                  <div className="flex overflow-hidden relative flex-col items-start pt-20 pr-20 pb-6 min-h-[284px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bc81e1c097b1bb8e04af893b7d8b7e34475d7ac963cdb687b6ed4662ed6ab54?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                      alt="Women’s Collections"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <h4 className="relative mt-14 text-2xl font-semibold tracking-wider leading-6">
                      Women’s Collections
                    </h4>
                    <p className="relative mt-4 text-sm leading-5 w-[255px]">
                      Featured woman collections that give you another vibe.
                    </p>
                    <a
                      href="#"
                      className="relative mt-4 text-base font-medium leading-6 text-white"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="justify-center mt-8">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8891e6fa9ef79663c49fe4052f7eba6823b87aee6cf0404057db9debf5a358c4?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                      alt=""
                      className="grow w-full aspect-[0.95] max-md:mt-8"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6d5f4d98d14405ae9516969851738fd4dadb08e3e0e429e4c038ea9855cec4e?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                      alt=""
                      className="grow w-full aspect-[0.95] max-md:mt-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="justify-center mt-36 max-w-full w-[943px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c0eebf8a70c277f943029ad48dddc7a98d2f2c8bce3e56e10b2c0a2fb581761?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                  alt="Free Delivery"
                  className="self-center w-20 aspect-square"
                />
                <h5 className="mt-6 text-xl font-semibold leading-7">
                  FREE AND FAST DELIVERY
                </h5>
                <p className="mt-2 text-sm leading-5 text-center">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-2 text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6e5b060081c0a0b71b981d6d5ae74823a4f82582bcba18d785aff92e55d04ec?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                  alt="24/7 Customer Service"
                  className="self-center w-20 aspect-square"
                />
                <h5 className="mt-6 text-xl font-semibold leading-7">
                  24/7 CUSTOMER SERVICE
                </h5>
                <p className="mt-2 text-sm leading-5">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1be3f37cdea8175ea2ee7a50fd0510114f5e02888e1167452b59c532555006?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                  alt="Money Back Guarantee"
                  className="self-center w-20 aspect-square"
                />
                <h5 className="mt-6 text-xl font-semibold leading-7">
                  MONEY BACK GUARANTEE
                </h5>
                <p className="mx-5 mt-2 text-sm leading-5 text-center">
                  We return money within 30 days
                </p>
              </div>
            </div>
          </div>
        </section>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4994e2c1a620d4ea356d28611072582355d46de2085b91428063bb54d28d049e?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
          alt=""
          className="self-end mt-16 mr-16 aspect-square w-[46px] max-md:mt-10 max-md:mr-2.5"
        />
      </main>

      <footer className="flex flex-col justify-end pt-20 pb-6 mt-8 w-full bg-black max-md:max-w-full">
        <section className="flex gap-5 justify-center items-start self-center px-5 w-full max-w-[1170px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col py-0.5 text-base leading-6 text-neutral-50">
            <div className="text-2xl font-bold tracking-wider leading-6 max-md:mr-1">
              Exclusive
            </div>
            <h6 className="mt-7 text-xl font-medium leading-7">Subscribe</h6>
            <p className="mt-6">Get 10% off your first order</p>
            <form className="flex gap-5 px-4 py-3 mt-4 rounded border-2 border-solid border-neutral-50">
              <label for="email" className="sr-only">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button type="submit">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d484ebf327e7f5f26c1b64221034aac01d7d563177d370a8bd83d7971ad4f72c?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                  alt="Submit"
                  className="shrink-0 w-6 aspect-square"
                />
              </button>
            </form>
          </div>
          <address className="flex flex-col text-base leading-6 text-neutral-50">
            <h6 className="text-xl font-medium leading-7">Support</h6>
            <p className="mt-6 leading-6">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <a href="mailto:exclusive@gmail.com" className="mt-4">
              exclusive@gmail.com
            </a>
            <a href="tel:+8801588888999" className="mt-4">
              +88015-88888-9999
            </a>
          </address>
          <nav className="flex flex-col self-stretch text-base leading-6 text-neutral-50">
            <h6 className="text-xl font-medium leading-7">Account</h6>
            <a href="#" className="mt-6">
              My Account
            </a>
            <a href="#" className="mt-4">
              Login / Register
            </a>
            <a href="#" className="mt-4">
              Cart
            </a>
            <a href="#" className="mt-4">
              Wishlist
            </a>
            <a href="#" className="mt-4">
              Shop
            </a>
          </nav>
          <nav className="flex flex-col text-base leading-6 text-neutral-50">
            <h6 className="text-xl font-medium leading-7">Quick Link</h6>
            <a href="#" className="mt-6">
              Privacy Policy
            </a>
            <a href="#" className="mt-4">
              Terms Of Use
            </a>
            <a href="#" className="mt-4">
              FAQ
            </a>
            <a href="#" className="mt-4">
              Contact
            </a>
          </nav>
          <div className="flex flex-col">
            <h6 className="text-xl font-medium leading-7 text-neutral-50">
              Download App
            </h6>
            <p className="mt-6 text-xs font-medium leading-5 text-neutral-50">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2 mt-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                alt="App Store"
                className="shrink-0 w-20 aspect-square"
              />
              <div className="flex flex-col items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                  alt="Google Play"
                  className="aspect-[2.78] w-[110px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                  alt="HUAWEI"
                  className="mt-1 aspect-[2.78] w-[110px]"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between pr-8 mt-6 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                alt="Facebook"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b55ccad4b7d305b692ad48cbb05d08b2ae16f6656cf0ad8b11b8451d8ca27f0c?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                alt="Twitter"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                alt="Instagram"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/017f03fd6271e23e94e189db8506f53ec67e53623ecac07e20b0cc0e64aa481c?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
                alt="LinkedIn"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center px-16 pt-4 mt-16 w-full text-base leading-6 text-white max-md:px-5 max-md:mt-10">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6b79712dbe7a2d336b37d7ebf70c7273efd1e0b2c367db9dc475f03fce05596?apiKey=c1894d480b8844dbafd13fb4a236acb8&"
              alt=""
              className="shrink-0 my-auto w-5 aspect-square"
            />
            <div>Copyright Rimel 2022. All right reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyComponent;

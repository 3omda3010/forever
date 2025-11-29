import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { products, search, showSearch } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [filteredProdcuts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("Relavent");

  const toogleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toogleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFiltering = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return productsCopy;
  };

  const sortProduct = () => {
    let fpCopy = filteredProdcuts.slice();

    switch (sort) {
      case "low-high":
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFiltering();
        break;
    }
  };

  useEffect(() => {
    // My Code
    setFilteredProducts(applyFiltering());
    // greatStack code
    // applyFiltering();
  }, [category, subCategory, search]);

  useEffect(() => {
    sortProduct();
  }, [sort]);
  return (
    <>
      <SearchBar />
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* filter options */}
        <div className="min-w-60">
          <p
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              alt=""
            />
          </p>
          {/* category filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"
              } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  value={"Men"}
                  onClick={(e) => {
                    toogleCategory(e);
                  }}
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  value={"Women"}
                  onClick={(e) => {
                    toogleCategory(e);
                  }}
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  value={"Kids"}
                  onClick={(e) => {
                    toogleCategory(e);
                  }}
                />
                Kids
              </p>
            </div>
          </div>
          {/* Sub Category filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"
              } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm my-5 font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  value={"Topwear"}
                  onClick={(e) => {
                    toogleSubCategory(e);
                  }}
                />
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  value={"Bottomwear"}
                  onClick={(e) => {
                    toogleSubCategory(e);
                  }}
                />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  value={"Winterwear"}
                  onClick={(e) => {
                    toogleSubCategory(e);
                  }}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLETCTION"} />
            <select
              className="border border-[#D1D5DB] text-sm px-2"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value={"relavent"}>Sort by: Relavent</option>
              <option value={"low-high"}>Sort by: Low to High</option>
              <option value={"high-low"}>Sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filteredProdcuts.map((product, index) => {
              return (
                <ProductItem
                  key={index}
                  id={product._id}
                  price={product.price}
                  image={product.image}
                  name={product.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;

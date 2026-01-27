import React from "react";

import { useParams, useSearchParams, Link } from "react-router";
import { categories } from "../../data/categories";
import products from "../../data/products";
import central from "../../assets/images/CentralInverter100kW.png";

function ProductCategory() {
  const { slug } = useParams(); // category slug
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSubcategory = searchParams.get("type");

  // Find category
  const category = categories.find((cat) => cat.slug === slug);

  // Handle invalid category
  if (!category) {
    return (
      <div className="pt-32 px-10">
        <h1 className="text-3xl font-semibold">Category not found</h1>
      </div>
    );
  }

  // Filter products by category
  let filteredProducts = products.filter(
    (product) => product.category === slug,
  );

  // Filter by subcategory if selected
  if (activeSubcategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.subcategory === activeSubcategory,
    );
  }

  return (
    <div className="pt-25 px-2">
      <div
        className="relative bg-cover bg-bottom h-[45vh] w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${category.heroimage})`,
        }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full z-10"></div>
        <div className="relative font-primary font-bold z-20 text-5xl  text-white">
          {category.title}
        </div>
      </div>
      {/* ================= CATEGORY HEADER ================= */}
      <div className="mb-10 mt-10">
        <h1 className="text-5xl font-semibold mb-3 font-primary">
          {category.section2.heading}
        </h1>

        <p className="text-gray-800 max-w-2xl font-secondary">
          {category.section2.description}
        </p>
      </div>

      {/* ================= SUBCATEGORY FILTER ================= */}
      {category.subcategories && (
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setSearchParams({})}
            className={`px-4 py-2 rounded-full border text-sm
              ${
                !activeSubcategory
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            All
          </button>

          {category.subcategories.map((sub) => (
            <button
              key={sub.slug}
              onClick={() => setSearchParams({ type: sub.slug })}
              className={`px-4 py-2 rounded-full border text-sm
                ${
                  activeSubcategory === sub.slug
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              {sub.title}
            </button>
          ))}
        </div>
      )}

      {/* ================= PRODUCT GRID ================= */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products available in this category.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              {/* Image placeholder */}
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain rounded-lg mb-4"
              />

              <h3 className="text-xl font-medium mb-2">{product.name}</h3>

              <Link
                to={`/products/${product.slug}`}
                className="inline-block mt-3 text-sm font-medium text-secondary-dark"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col items-center justify-center h-[50vw] w-full  mb-50 p-10 mt-20">
        <h1 className="font-primary font-bold text-5xl">
          {category.whyChoose.heading}
        </h1>
        <div className="flex gap-5 max-w-7xl  h-full w-full">
          <div className=" h-[550px] w-[50%] pt-10">
            <img
              src={category.whyChoose.image}
              alt=""
              className=" h-full w-full rounded-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-20">
              {category.whyChoose.points.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
                    {i + 1}
                  </div>

                  {/* Content */}
                  <h4 className="font-semibold font-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-secondary leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;

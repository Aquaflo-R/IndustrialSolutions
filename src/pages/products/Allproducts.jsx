import { useState } from "react";
import { Link } from "react-router";
import products from "../../data/products";
import { categories } from "../../data/categories";

function AllProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  // Get subcategories based on selected category
  const activeCategory = categories.find(
    (cat) => cat.slug === selectedCategory,
  );

  // Filtering logic (IMPORTANT ORDER)
  const filteredProducts = products
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true,
    )
    .filter((product) =>
      selectedSubcategory ? product.subcategory === selectedSubcategory : true,
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedSubcategory("");
  };

  return (
    <div className="px-2">
      <div className="relative h-[35vw] w-full bg-[url(./assets/images/Allproduct.png)] bg-cover bg-center ">
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full z-10"></div>
        <div className="relative flex flex-col items-center justify-center pt-55 z-200">
          <h1 className="text-white font-primary text-5xl font-semibold mb-3 ">
            All Products
          </h1>
          <p className="text-white font-secondary max-w-3xl">
            Explore our complete range of solar and energy solutions with
            advanced filtering and search options.
          </p>
        </div>
      </div>
      {/* =============== HEADER ================= */}
      <div className="mb-10"></div>

      {/* ================= SEARCH ================= */}
      <div className="mb-8 ml-50">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md border rounded-lg px-4 py-3 focus:outline-none"
        />
      </div>

      {/* ================= FILTERS ================= */}
      <div className="flex flex-wrap  gap-4 mb-12 items-center ml-50">
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedSubcategory("");
          }}
          className="border rounded-lg px-4 py-2 "
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.title}
            </option>
          ))}
        </select>

        {/* Subcategory Filter */}
        {activeCategory && (
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="">All Subcategories</option>
            {activeCategory.subcategories.map((sub) => (
              <option key={sub.slug} value={sub.slug}>
                {sub.title}
              </option>
            ))}
          </select>
        )}

        {/* Clear Filters */}
        {(selectedCategory || selectedSubcategory || searchTerm) && (
          <button
            onClick={clearFilters}
            className="text-sm text-gray-600 underline"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* ================= PRODUCT GRID ================= */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products match your selection.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-6 hover:shadow-lg transition bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain mb-4"
              />

              <h3 className="text-xl font-medium mb-2">{product.name}</h3>

              <p className="text-sm text-gray-500 mb-4 capitalize">
                {product.category.replace("-", " ")}
              </p>

              <Link
                to={`/products/${product.slug}`}
                className="inline-block text-sm font-medium text-secondary-dark"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProducts;

import { useParams, Link } from "react-router";
import products from "../../data/products";

function Productdetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-32 px-10">
        <h1 className="text-3xl font-semibold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-32">
      {/* ================= PRODUCT HERO ================= */}

      <section className="px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md mx-auto"
        />

        <div>
          <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>

          <p className="text-gray-600 mb-6 max-w-xl">
            {product.shortDescription}
          </p>

          <div className="flex gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-black text-white rounded-lg"
            >
              Request Quote
            </Link>

            <Link
              to={`/products/category/${product.category}`}
              className="px-6 py-3 border rounded-lg"
            >
              View Category
            </Link>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      {product.overview && (
        <section className="px-10 mt-20 max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4">Product Overview</h2>
          <p className="text-gray-600 leading-relaxed">{product.overview}</p>
        </section>
      )}

      {/* ================= KEY SPECIFICATIONS ================= */}
      {product.keySpecifications && (
        <section className="px-10 mt-20">
          <h2 className="text-3xl font-semibold mb-10">Key Specifications</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.keySpecifications.map((spec, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 bg-white shadow-sm"
              >
                <p className="font-medium">{spec}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= DETAILED SPECIFICATIONS ================= */}
      {product.detailedSpecifications && (
        <section className="px-10 mt-24">
          <h2 className="text-3xl font-semibold mb-10">
            Detailed Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {Object.entries(product.detailedSpecifications).map(
              ([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-3">
                  <span className="text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="font-medium">{value}</span>
                </div>
              ),
            )}
          </div>
        </section>
      )}

      {/* ================= APPLICATIONS ================= */}
      {product.applications && (
        <section className="px-10 mt-24 max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6">Applications</h2>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {product.applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ================= CTA SECTION ================= */}
      <section className="mt-32 bg-black text-white py-20 text-center px-6">
        <h2 className="text-4xl font-semibold mb-4">
          Need This Product for Your Project?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Get in touch with our experts for product pricing, technical
          specifications, and customized solar solutions.
        </p>

        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-white text-black rounded-lg font-medium"
        >
          Contact Our Team
        </Link>
      </section>
    </div>
  );
}

export default Productdetails;

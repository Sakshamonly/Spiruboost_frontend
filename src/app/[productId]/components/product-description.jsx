export default function ProductDescription() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      <div className="space-y-6 md:space-y-8">
        {/* Product Description Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Spiruboost Capsules contain premium quality Spirulina platensis, a blue-green algae that has been
              recognized as one of nature's most complete superfoods. Each capsule is carefully formulated to deliver
              maximum nutritional benefits while maintaining the highest quality standards.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Our Spirulina is sourced from pristine cultivation environments and processed using advanced techniques
              that preserve its natural potency. Rich in complete proteins, essential amino acids, vitamins B12, iron,
              and powerful antioxidants like phycocyanin, these capsules support overall health and vitality.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Perfect for vegetarians and vegans looking to supplement their diet with high-quality plant-based
              nutrition. Each bottle contains 90 capsules, providing a month's supply when taken as directed.
            </p>
          </div>
        </div>

        {/* Line Break */}
        <div className="my-6 md:my-8">
          <hr className="border-blue-200 border-2" />
        </div>
      </div>
    </div>
  )
}

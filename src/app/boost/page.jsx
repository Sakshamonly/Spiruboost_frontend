"use client" // Keeping this as other client-side features (like Button, Image) are used.

import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import {
  Dumbbell,
  Droplet,
  Shield,
  Zap,
  Leaf,
  Star,
  Heart,
  ChevronRight,
} from "lucide-react"
import Navbar from "@/src/components/usable/navbar"
import Footer from "@/src/components/usable/footer"

export default function SpirulinaPage() {
  // const nutritionalBenefits = [
//     {
//       icon: <Dumbbell className="w-8 h-8 text-green-600" />,
//       title: "Complete Protein",
//       description: "Contains all essential amino acids, making it a superior plant-based protein source.",
//     },
//     {
//       icon: <Droplet className="w-8 h-8 text-green-600" />,
//       title: "Rich in Iron",
//       description: "Excellent bio-available iron, crucial for energy and red-blood-cell formation.",
//     },
//     {
//       icon: <Shield className="w-8 h-8 text-green-600" />,
//       title: "Vitamin B12",
//       description: "One of the few plant sources of active B12, vital for nerve function and metabolism.",
//     },
//     {
//       icon: <Zap className="w-8 h-8 text-green-600" />,
//       title: "Powerful Antioxidants",
//       description: "Phycocyanin and other antioxidants combat oxidative stress.",
//     },
//     {
//       icon: <Leaf className="w-8 h-8 text-green-600" />,
//       title: "Chlorophyll",
//       description: "High chlorophyll supports gentle detox and cellular health.",
//     },
//   ]

  const healthBenefits = [
    {
      title: "Boosts Immunity",
      description:
        "Spirulina is a natural immune modulator, promoting the production of antibodies and infection-fighting cells. Regular intake helps fortify your body’s natural defenses against various pathogens and environmental stressors, keeping you resilient year-round.",
    },
    {
      title: "Supports Digestion",
      description:
        "Its unique composition, including prebiotics and beneficial enzymes, fosters a healthy gut microbiome. This leads to improved digestion, enhanced nutrient absorption, and a balanced digestive system, reducing common discomforts like bloating and indigestion.",
    },
    {
      title: "Detoxifies Body",
      description:
        "Spirulina possesses natural chelating properties, enabling it to bind to heavy metals and environmental toxins. This facilitates their safe and efficient removal from the body, supporting your liver and kidneys in their natural detoxification processes and promoting cellular cleansing.",
    },
    {
      title: "Enhances Energy",
      description:
        "Rich in B-vitamins, bioavailable iron, and complete protein, Spirulina provides sustained energy without the jitters or crashes associated with caffeine. It supports cellular energy production, making it an ideal natural boost for daily vitality, athletic performance, and combating fatigue.",
    },
    {
      title: "Fights Inflammation",
      description:
        "The powerful anti-inflammatory properties of phycocyanin, Spirulina's signature blue pigment, help reduce systemic inflammation throughout the body. This contributes to overall well-being, alleviates discomfort, and supports healthy joint function, promoting a more active and pain-free lifestyle.",
    },
    {
      title: "Supports Heart Health",
      description:
        "Spirulina contributes to cardiovascular wellness by helping to maintain healthy cholesterol levels and blood pressure. Its antioxidant content protects against oxidative damage to blood vessels, supporting overall heart function and promoting a robust circulatory system.",
    },
  ]

  const nutrientEquivalenceData = [
    {
      nutrient: "Protein",
      equivalent: "Same as in 1 whole egg",
      food: "Egg",
      // icon: <Egg className="w-5 h-5 text-yellow-500" />,
    },
    {
      nutrient: "Iron",
      equivalent: "Same as in 100g of spinach",
      food: "Spinach",
      // icon: <Leaf className="w-5 h-5 text-green-600" />,
    },
    {
      nutrient: "Beta-Carotene (Vitamin A)",
      equivalent: "Same as in 3 large carrots",
      food: "Carrots",
      // icon: <Carrot className="w-5 h-5 text-orange-500" />,
    },
    {
      nutrient: "Vitamin B12",
      equivalent: "Same as in 250ml cow's milk",
      food: "Milk",
      // icon: <Milk className="w-5 h-5 text-gray-400" />, // Using Milk icon for yogurt
    },
    {
      nutrient: "Antioxidants",
      equivalent: "Same as in 1 kg of mixed fruits",
      food: "Mixed Fruits",
      // icon: <Grape className="w-5 h-5 text-purple-500" />,
    },
    {
      nutrient: "Calcium",
      equivalent: "Same as in 1 bowl of curd or yogurt",
      food: "Yogurt",
    //   icon: <Milk className="w-5 h-5 text-gray-400" />, // Using Milk icon for yogurt
    },
    {
      nutrient: "Chlorophyll / Detox power",
      equivalent: "Same as in 1 cup of green tea",
      food: "Green Tea",
      // icon: <Coffee className="w-5 h-5 text-green-700" />, // Using Coffee icon for tea
    },
    {
      nutrient: "Potassium",
      equivalent: "Same as in 1 banana",
      food: "Banana",
      // icon: <Banana className="w-5 h-5 text-yellow-600" />,
    },
    {
      nutrient: "Vitamin C Equivalent Effect",
      equivalent: "Same as in 1 glass of orange juice",
      food: "Orange Juice",
      // icon: <GlassWater className="w-5 h-5 text-orange-600" />,
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* ---------------- Hero ---------------- */}
        <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Field of spirulina cultivation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Why Spirulina?</h1>
            <p className="text-base sm:text-xl md:text-2xl text-white max-w-3xl">
              Discover the natural powerhouse behind Spiruboost.
            </p>
          </div>
        </section>

        {/* -------------- What is Spirulina -------------- */}
        <section className="py-6 sm:py-10 md:py-12 lg:py-14">
          <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">What is Spirulina?</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Spirulina is a blue-green micro-algae revered for its dense nutrient profile. Cultivated in pristine,
                controlled environments, it delivers unparalleled purity and potency.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                This vibrant super-food isn’t just a supplement—it’s a complete food that has sustained civilizations for
                centuries and continues to power modern wellness.
              </p>
            </div>
            <div className="flex justify-center mt-4 md:mt-0">
              <Image
                src="/placeholder.svg?height=100&width=100"
                width={100}
                height={100}
                alt="Spirulina powder in a wooden spoon"
                className="rounded-lg object-cover shadow-lg w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px]"
              />
            </div>
          </div>
        </section>

        {/* -------------- Nutritional Powerhouse -------------- */}
        <section className="py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Nutritional Powerhouse</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: <Dumbbell className="w-10 h-10 text-green-700" />,
                  title: "Complete Protein",
                  description: "Contains all essential amino acids, making it a superior plant-based protein source.",
                },
                {
                  icon: <Droplet className="w-10 h-10 text-green-700" />,
                  title: "Rich in Iron",
                  description: "Excellent bio-available iron, crucial for energy and red-blood-cell formation.",
                },
                {
                  icon: <Shield className="w-10 h-10 text-green-700" />,
                  title: "Vitamin B12",
                  description: "One of the few plant sources of active B12, vital for nerve function and metabolism.",
                },
                {
                  icon: <Zap className="w-10 h-10 text-green-700" />,
                  title: "Powerful Antioxidants",
                  description: "Phycocyanin and other antioxidants combat oxidative stress.",
                },
                {
                  icon: <Leaf className="w-10 h-10 text-green-700" />,
                  title: "Chlorophyll",
                  description: "High chlorophyll supports gentle detox and cellular health.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-between bg-gradient-to-br from-green-50 via-white to-green-100 rounded-2xl shadow-[0_8px_24px_-8px_rgba(255,0,0,0.25)] p-6 hover:scale-105 transition-all duration-300"
                >
                  <div>{item.icon}</div>
                  <h3 className="text-lg font-bold text-green-900 mt-4 mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-700 text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------- Key Health Benefits -------------- */}
        <section className="py-8 md:py-12 lg:py-16">
        {" "}
        {/* Reduced padding */}
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Health Benefits</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {" "}
            {/* Reduced mb */}
            Spirulina offers a wide range of advantages that support everyday vitality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthBenefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3">
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                  {benefit.title}
                </h3>
                <div className="w-16 h-0.5 bg-gray-300" />
                <p className="text-base text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* -------------- Spirulina Nutrient Equivalence Table -------------- */}
        <section className="py-8 md:py-12 lg:py-16 bg-green-50">
        {" "}
        {/* Reduced padding */}
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Spirulina Nutrient Equivalence</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {" "}
            {/* Reduced mb */}
            Discover the concentrated power of 1g of Spirulina compared to common foods.
          </p>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-3 gap-4 p-4 bg-green-100 font-semibold border-b">
              <div className="text-left">Nutrient / Benefit</div>
              <div className="text-left">1g Spirulina is Equivalent To</div>
              <div className="text-center">Common Food Compared</div>
            </div>

            {/* Table Rows */}
            {nutrientEquivalenceData.map((row, idx) => (
              <div key={idx} className="p-4 border-b last:border-b-0">
                {/* Mobile View: Stacked */}
                <div className="md:hidden flex flex-col space-y-2 py-2">
                  <div className="text-left font-semibold text-lg mb-1">{row.nutrient}</div>
                  <div className="text-left text-gray-700">
                    <span className="font-medium">Equivalent To:</span> {row.equivalent}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="font-medium">Food Compared:</span> {row.food} {row.icon}
                  </div>
                </div>

                {/* Desktop View: Grid */}
                <div className="hidden md:grid grid-cols-3 gap-4 items-center">
                  <div className="text-left">{row.nutrient}</div>
                  <div className="text-left">{row.equivalent}</div>
                  <div className="flex items-center justify-center gap-2">
                    {row.food} {row.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts / Trivia */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-pink-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Did You Know?</span>
            </h2>
            <ul className="space-y-6 text-lg text-gray-700 font-medium">
              <li>
                <Star className="inline-block w-5 h-5 text-yellow-400 mr-2" />
                Spirulina is one of the oldest life forms on Earth and was a food source for the Aztecs!
              </li>
              <li>
                <Star className="inline-block w-5 h-5 text-yellow-400 mr-2" />
                NASA and ESA have used Spirulina as a dietary supplement for astronauts in space missions.
              </li>
              <li>
                <Star className="inline-block w-5 h-5 text-yellow-400 mr-2" />
                Just 1 gram of Spirulina can cover a child’s daily vitamin A needs.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Experience Spirulina?
            </h2>
            <p className="text-xl text-blue-100 mb-8 font-medium">
              Make Spirulina a part of your daily routine and unlock the power of nature’s most complete superfood!
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-orange-500 hover:to-red-500 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center mx-auto">
              <Heart className="w-6 h-6 mr-3" />
              Shop Spirulina Products
              <ChevronRight className="w-6 h-6 ml-3" />
            </button>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}

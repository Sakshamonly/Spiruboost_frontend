"use client"

import { useState, useEffect } from "react"
import { X, Check, Clock, ChefHat, Utensils } from "lucide-react"
import Navbar from "@/src/components/usable/navbar"
import Footer from "@/src/components/usable/footer"

// Sample recipe data
const recipesData = [
  {
    id: 1,
    title: "Spirulina Green Smoothie Bowl",
    description: "A refreshing and nutritious breakfast bowl packed with antioxidants and natural energy.",
    image: "/placeholder.svg?height=300&width=400",
    ingredients: [
      "1 tsp Spirulina powder",
      "1 frozen banana",
      "1/2 cup coconut milk",
      "1/4 cup blueberries",
      "2 tbsp granola",
      "1 tbsp chia seeds",
      "Fresh mint leaves",
    ],
    steps: [
      "Blend spirulina, banana, and coconut milk until smooth",
      "Pour into a bowl and add toppings",
      "Garnish with fresh mint and serve immediately",
      "Enjoy your nutritious breakfast!",
    ],
  },
  {
    id: 2,
    title: "Spirulina Energy Balls",
    description: "Perfect bite-sized snacks that provide sustained energy throughout your day.",
    image: "/placeholder.svg?height=300&width=400",
    ingredients: [
      "1 cup dates, pitted",
      "1/2 cup almonds",
      "2 tsp Spirulina powder",
      "2 tbsp coconut oil",
      "1 tbsp honey",
      "1/4 cup coconut flakes",
      "Pinch of sea salt",
    ],
    steps: [
      "Process dates and almonds in food processor",
      "Add spirulina, coconut oil, and honey",
      "Form mixture into small balls",
      "Roll in coconut flakes and chill for 30 minutes",
    ],
  },
  {
    id: 3,
    title: "Spirulina Detox Juice",
    description: "A powerful detoxifying drink that cleanses and energizes your body naturally.",
    image: "/placeholder.svg?height=300&width=400",
    ingredients: [
      "1 tsp Spirulina powder",
      "1 cucumber",
      "2 celery stalks",
      "1 green apple",
      "1 lemon, juiced",
      "1 inch fresh ginger",
      "1 cup coconut water",
    ],
    steps: [
      "Juice cucumber, celery, apple, and ginger",
      "Mix in spirulina powder and lemon juice",
      "Add coconut water and stir well",
      "Serve over ice and enjoy fresh",
    ],
  },
  {
    id: 4,
    title: "Spirulina Protein Pancakes",
    description: "Fluffy, protein-rich pancakes that make breakfast both delicious and nutritious.",
    image: "/placeholder.svg?height=300&width=400",
    ingredients: [
      "1 cup oat flour",
      "1 tsp Spirulina powder",
      "1 scoop vanilla protein powder",
      "1 banana, mashed",
      "1 cup almond milk",
      "1 tsp baking powder",
      "Fresh berries for topping",
    ],
    steps: [
      "Mix dry ingredients in a bowl",
      "Combine wet ingredients separately",
      "Fold wet into dry ingredients until just combined",
      "Cook on griddle and serve with berries",
    ],
  },
  {
    id: 5,
    title: "Spirulina Chocolate Truffles",
    description: "Indulgent yet healthy chocolate treats infused with the goodness of spirulina.",
    image: "/placeholder.svg?height=300&width=400",
    ingredients: [
      "1 cup cashews, soaked",
      "1/4 cup cacao powder",
      "1 tsp Spirulina powder",
      "3 tbsp maple syrup",
      "2 tbsp coconut oil",
      "1 tsp vanilla extract",
      "Cocoa powder for rolling",
    ],
    steps: [
      "Blend cashews until smooth and creamy",
      "Add cacao, spirulina, maple syrup, and vanilla",
      "Form into small balls and chill",
      "Roll in cocoa powder before serving",
    ],
  },
  {
    id: 6,
    title: "Spirulina Salad Dressing",
    description: "A vibrant, nutrient-dense dressing that transforms any salad into a superfood meal.",
    image: "/placeholder.svg?height=300&width=400",
    ingredients: [
      "1 tsp Spirulina powder",
      "1/4 cup olive oil",
      "2 tbsp lemon juice",
      "1 tbsp tahini",
      "1 clove garlic, minced",
      "1 tsp honey",
      "Salt and pepper to taste",
    ],
    steps: [
      "Whisk spirulina with lemon juice until smooth",
      "Add tahini, garlic, and honey",
      "Slowly drizzle in olive oil while whisking",
      "Season with salt and pepper to taste",
    ],
  },
]

// Recipe Card Component
function RecipeCard({ recipe, onKnowMore }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.title}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{recipe.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{recipe.description}</p>

        <div className="flex justify-start">
          <button
            onClick={() => onKnowMore(recipe)}
            className="text-blue-500 text-sm font-medium transition-all duration-300 hover:text-red-500 focus:outline-none border-b border-blue-500 hover:border-red-500 pb-1"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  )
}

// Recipe Modal Component
function RecipeModal({ recipe, isOpen, onClose }) {
  if (!isOpen || !recipe) return null

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 mx-4 sm:mx-0">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-800 pr-8">{recipe.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Recipe Image */}
          <img
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          {/* Ingredients Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <ChefHat className="w-6 h-6 text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Ingredients</h3>
            </div>
            <div className="grid gap-3">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center bg-green-50 p-3 rounded-lg">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation Steps */}
          <div>
            <div className="flex items-center mb-4">
              <Utensils className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Preparation Steps</h3>
            </div>
            <div className="space-y-4">
              {recipe.steps.map((step, index) => (
                <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cooking Time Info */}
          <div className="mt-6 bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-xl">
            <div className="flex items-center justify-center">
              <Clock className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Preparation time: 10-15 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Recipes Page Component
export default function RecipePage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsHeaderVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handleKnowMore = (recipe) => {
    setSelectedRecipe(recipe)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedRecipe(null)
    document.body.style.overflow = "unset"
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
        {/* Header Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20"></div>
          <div
            className={`relative z-10 text-center py-16 px-6 sm:px-8 lg:px-4 transform transition-all duration-1000 ${
              isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Delicious Spirulina Recipes
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore how you can add the power of Spirulina into your daily meals 🌿
            </p>
          </div>
        </div>

        {/* Recipe Cards Section */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recipesData.map((recipe, index) => (
              <div key={recipe.id} style={{ animationDelay: `${index * 150}ms` }}>
                <RecipeCard recipe={recipe} onKnowMore={handleKnowMore} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
          <div className="container mx-auto px-6 sm:px-8 lg:px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to boost your health? 🚀</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Start incorporating these amazing spirulina recipes into your daily routine and feel the difference!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">High Protein</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Rich in Vitamins</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Antioxidant Power</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Natural Energy</span>
            </div>
          </div>
        </div>

        {/* Recipe Modal */}
        <RecipeModal recipe={selectedRecipe} isOpen={isModalOpen} onClose={handleCloseModal} />

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
      <Footer />
    </>
  )
}

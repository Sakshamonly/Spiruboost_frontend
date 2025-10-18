"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "What is Spirulina and why should I take it?",
      answer:
        "Spirulina is a blue-green algae that's considered one of the most nutritionally complete superfoods. It's rich in protein, vitamins, minerals, and antioxidants that support overall health, boost immunity, and increase energy levels.",
    },
    {
      question: "How many capsules should I take daily?",
      answer:
        "We recommend taking 2-3 capsules daily, preferably 30 minutes before meals. Start with 1-2 capsules to allow your body to adjust, then gradually increase to the recommended dosage.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Spirulina is generally safe for most people. Some may experience mild digestive discomfort initially. If you have autoimmune conditions or are taking medications, consult your healthcare provider before use.",
    },
    {
      question: "Is this product suitable for vegetarians and vegans?",
      answer:
        "Yes, our Spiruboost Capsules are 100% plant-based and suitable for both vegetarians and vegans. They contain no animal-derived ingredients or additives.",
    },
    {
      question: "How long does one bottle last?",
      answer:
        "Each bottle contains 90 capsules. When taking the recommended 2-3 capsules daily, one bottle will last approximately 30-45 days.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between gap-4 py-2 hover:text-blue-600 transition-colors"
              >
                <h3 className="text-base md:text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openFAQ === index && (
                <div className="mt-3 pr-8">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

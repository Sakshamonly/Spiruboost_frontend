export default function HowToUse() {
  const steps = [
    {
      number: 1,
      title: "Take with Water",
      description: "Take 2-3 capsules with a full glass of water",
    },
    {
      number: 2,
      title: "Best Time",
      description: "Consume 30 minutes before meals for optimal absorption",
    },
    {
      number: 3,
      title: "Daily Routine",
      description: "Take consistently at the same time each day",
    },
    {
      number: 4,
      title: "Stay Hydrated",
      description: "Drink plenty of water throughout the day",
    },
    {
      number: 5,
      title: "Monitor Progress",
      description: "Track your energy levels and overall well-being",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">How to Use</h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-base md:text-lg">{step.description}</p>
                </div>
              </div>
            ))}
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

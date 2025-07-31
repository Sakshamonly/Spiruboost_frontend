"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, PlusCircle, MinusCircle } from "lucide-react"
import Navbar from "@/src/components/usable/navbar" // Navbar import kiya
import Footer from "@/src/components/usable/footer"

// Define custom colors as constants for easier use in Tailwind classes
const SPIRUBOOST_GREEN_500 = "#00b03c" // Main green
const SPIRUBOOST_GREEN_700 = "#008a2e"
const SPIRUBOOST_GREEN_800 = "#007727"

// Hero and Closing section gradient colors (light yellow, light green, off-white mix)
const HERO_GRADIENT_FROM = "#FFFACD" // Light yellow
const HERO_GRADIENT_VIA = "#E6F7ED" // Light green
const HERO_GRADIENT_TO = "#FDFBF7" // Off-white

// Text colors
const TEXT_BLACK = "#000000"
const TEXT_GREY = "#6B7280" // Tailwind's gray-500 equivalent

// Animation duration for faster fade-in
const ANIMATION_DURATION = 0.3

// Placeholder data
const certificatePdfs = [
  { name: "Global Health Standard Certificate", url: "/placeholder.pdf?text=Global Health Certificate" },
  { name: "Organic Certification", url: "/placeholder.pdf?text=Organic Certification" },
  { name: "GMP Compliance Document", url: "/placeholder.pdf?text=GMP Compliance" },
  { name: "ISO Quality Management", url: "/placeholder.pdf?text=ISO Quality" },
]

// Dummy image URLs for the production plant slider
const productionPlantImages = [
  "https://via.placeholder.com/1200x800/0A3D0A/E6F7ED?text=Plant+View+1",
  "https://via.placeholder.com/1200x800/0A3D0A/FDFBF7?text=Quality+Control+2",
  "https://via.placeholder.com/1200x800/0A3D0A/E6F7ED?text=Eco-Friendly+3",
  "https://via.placeholder.com/1200x800/0A3D0A/FDFBF7?text=Technology+4",
  "https://via.placeholder.com/1200x800/0A3D0A/E6F7ED?text=Certifications+5",
  "https://via.placeholder.com/1200x800/0A3D0A/FDFBF7?text=Safety+Measures+6",
  "https://via.placeholder.com/1200x800/0A3D0A/E6F7ED?text=Innovation+7",
  "https://via.placeholder.com/1200x800/0A3D0A/FDFBF7?text=Packaging+8",
  "https://via.placeholder.com/1200x800/0A3D0A/E6F7ED?text=Distribution+9",
]

const teamMembers = [
  {
    id: 1,
    name: "Dr. Anya Sharma",
    title: "Chief Formulator",
    photo: "https://via.placeholder.com/300x300/E6F7ED/007727?text=Anya+Sharma",
    bio: "Dr. Anya Sharma is a renowned Ayurvedic practitioner with over 20 years of experience. She leads our product development, ensuring each formulation adheres to ancient wisdom and modern science.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "Operations Head",
    photo: "https://via.placeholder.com/300x300/FDFBF7/007727?text=Rajesh+Kumar",
    bio: "Rajesh Kumar oversees our state-of-the-art production facility. His expertise in supply chain management and quality assurance guarantees the highest standards from farm to bottle.",
  },
  {
    id: 3,
    name: "Priya Singh",
    title: "Brand Strategist",
    photo: "https://via.placeholder.com/300x300/E6F7ED/007727?text=Priya+Singh",
    bio: "Priya Singh is the creative force behind Spiruboost's brand identity. She is passionate about communicating the benefits of Ayurveda and connecting with our community.",
  },
]

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: ANIMATION_DURATION, ease: "easeOut" } },
}

export default function AboutPage() {
  const [visibleBio, setVisibleBio] = useState(null)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const [enlargedImage, setEnlargedImage] = useState(null)

  const toggleBio = (id) => {
    setVisibleBio(visibleBio === id ? null : id)
  }

  const nextCarouselImage = () => {
    setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % productionPlantImages.length)
  }

  const prevCarouselImage = () => {
    setCurrentCarouselIndex(
      (prevIndex) => (prevIndex - 1 + productionPlantImages.length) % productionPlantImages.length,
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900">
        {/* Top Heading Section */}
        <section
          className="py-20 px-6 text-center shadow-md"
          style={{
            background: `linear-gradient(to right, ${HERO_GRADIENT_FROM}, ${HERO_GRADIENT_VIA}, ${HERO_GRADIENT_TO})`,
          }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ color: TEXT_BLACK }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            Get to Know Spiruboost
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            style={{ color: TEXT_GREY }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            Empowering Wellness Through Nature
          </motion.p>
        </section>

        {/* About Spiruboost Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto space-y-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Our Mission, Values & Vision
              </h3>
              <p style={{ color: TEXT_GREY }}>
                At Spiruboost, our mission is to harness the profound power of nature to enhance human well-being. We are
                dedicated to providing premium Ayurvedic products that are pure, potent, and sustainably sourced.
              </p>
              <p style={{ color: TEXT_GREY }}>
                Our core values revolve around integrity, transparency, and a deep respect for traditional wisdom. We
                believe in empowering individuals to achieve holistic health through natural solutions.
              </p>
              <p style={{ color: TEXT_GREY }}>
                Our vision is to be a global leader in Ayurvedic wellness, fostering a healthier planet and healthier
                lives, one natural product at a time.
              </p>
            </motion.div>
            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Our Story & Commitment
              </h3>
              <p style={{ color: TEXT_GREY }}>
                Spiruboost was born from a passion for ancient Ayurvedic principles and a desire to make authentic,
                high-quality natural supplements accessible. Our journey began with a deep dive into the incredible
                benefits of Spirulina, a superfood revered for its nutritional density.
              </p>
              <p style={{ color: TEXT_GREY }}>
                We are committed to unparalleled purity, ensuring every ingredient is meticulously selected and rigorously
                tested. Our products are free from artificial additives, fillers, and harmful chemicals, reflecting our
                dedication to your health.
              </p>
              <p style={{ color: TEXT_GREY }}>
                We believe in its transformative potential to boost energy, support immunity, and promote overall
                vitality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto space-y-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            style={{ color: TEXT_BLACK }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            Proudly Certified by Global Health Standards
          </motion.h2>
          <motion.p
            className="text-center mb-10 text-lg"
            style={{ color: TEXT_GREY }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            These certifications are held by our parent company, ensuring the highest standards in production.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificatePdfs.map((cert, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={fadeInVariants}
              >
                <Link
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 text-center h-full flex flex-col justify-center items-center"
                >
                  <span className="text-xl font-semibold" style={{ color: TEXT_BLACK }}>
                    {cert.name}
                  </span>
                  <span className="mt-2 text-sm" style={{ color: TEXT_GREY }}>
                    Click to View PDF
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Introduction */}
        <section className="py-16 px-6 max-w-[90vw] mx-auto space-y-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-10"
            style={{ color: TEXT_BLACK }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            Meet Our Core Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="flex flex-col items-center text-center p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={fadeInVariants}
              >
                <Image
                  src={member.photo || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full object-cover mb-4 border-4 border-gray-200 w-64 h-64 md:w-80 md:h-80"
                />
                <h3 className="text-2xl font-semibold" style={{ color: TEXT_BLACK }}>
                  {member.name}
                </h3>
                <p className="text-lg" style={{ color: TEXT_GREY }}>
                  {member.title}
                </p>
                <button
                  onClick={() => toggleBio(member.id)}
                  className="mt-4 flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                >
                  {visibleBio === member.id ? (
                    <>
                      <MinusCircle size={20} /> Hide Bio
                    </>
                  ) : (
                    <>
                      <PlusCircle size={20} /> Show Bio
                    </>
                  )}
                </button>
                <AnimatePresence>
                  {visibleBio === member.id && (
                    <motion.p
                      className="mt-4 leading-relaxed"
                      style={{ color: TEXT_GREY }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {member.bio}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Production Plant Section (Text Only) */}
        <section className="py-16 px-6 max-w-6xl mx-auto space-y-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-10"
            style={{ color: TEXT_BLACK }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            Inside Our Production Facility
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Quality, Sourcing & Eco-Friendly
              </h3>
              <p style={{ color: TEXT_GREY }}>
                Our commitment to excellence begins with meticulous sourcing. We partner with trusted farms that adhere to
                organic and sustainable practices, ensuring the highest quality raw materials for our Spirulina.
              </p>
              <p style={{ color: TEXT_GREY }}>
                Every batch undergoes rigorous quality control checks, from cultivation to final product. We employ
                advanced testing methods to guarantee purity, potency, and safety, exceeding industry standards.
              </p>
              <p style={{ color: TEXT_GREY }}>
                We are proud of our eco-friendly processes, minimizing our environmental footprint. Our facility utilizes
                renewable energy and waste reduction strategies, reflecting our dedication to a healthier planet.
              </p>
            </motion.div>
            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Technology, Certifications & Safety
              </h3>
              <p style={{ color: TEXT_GREY }}>
                Our production plant is equipped with cutting-edge technology, allowing for precise and efficient
                processing of Spirulina while preserving its nutritional integrity.
              </p>
              <p style={{ color: TEXT_GREY }}>
                We hold numerous international certifications, including GMP (Good Manufacturing Practices) and ISO
                standards, validating our commitment to quality and consistency.
              </p>
              <p style={{ color: TEXT_GREY }}>
                Safety is paramount. Our facility maintains a sterile environment, and all personnel adhere to strict
                hygiene protocols. We conduct regular audits to ensure compliance with global health and safety
                regulations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* New Image Slider Section (Single Image Display) */}
        <section className="py-16 px-6 max-w-[90vw] mx-auto">
          <div className="relative w-full flex items-center justify-center h-[400px] md:h-[600px]">
            <button
              onClick={prevCarouselImage}
              className="absolute left-0 z-20 p-2 text-black rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Single Current Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCarouselIndex} // Key ensures re-render and animation on index change
                className="relative w-full max-w-4xl h-full rounded-lg overflow-hidden shadow-xl cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => setEnlargedImage(productionPlantImages[currentCarouselIndex])}
              >
                <Image
                  src={productionPlantImages[currentCarouselIndex] || "/placeholder.svg"}
                  alt={`Production Plant ${currentCarouselIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextCarouselImage}
              className="absolute right-0 z-20 p-2 text-black rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </div>

          {/* Enlarged Image Overlay */}
          <AnimatePresence>
            {enlargedImage && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setEnlargedImage(null)}
              >
                <motion.div
                  className="relative w-full max-w-5xl h-auto max-h-[90vh] rounded-lg overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
                >
                  <Image
                    src={enlargedImage || "/placeholder.svg"}
                    alt="Enlarged Production Plant Image"
                    layout="responsive"
                    width={1200}
                    height={800}
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* YouTube Video Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto space-y-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-10"
            style={{ color: TEXT_BLACK }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            Our Journey in Motion
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg" // Reverted to aspect-video
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
            >
              {/* Placeholder YouTube Embed */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Replace with actual video URL
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
            >
              <p style={{ color: TEXT_GREY }}>
                Dive into the world of Spiruboost with our exclusive behind-the-scenes video. Witness the dedication, the
                passion, and the meticulous processes that go into creating every product.
              </p>
              <p style={{ color: TEXT_GREY }}>
                From the lush farms where our Spirulina is cultivated to our advanced production facility, this video
                takes you on a journey, showcasing our unwavering commitment to quality and sustainability. See how
                science meets nature to bring you the purest form of wellness.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Closing Section */}
        <section
          className="py-10 px-6 text-center shadow-md"
          style={{
            background: `linear-gradient(to right, ${HERO_GRADIENT_FROM}, ${HERO_GRADIENT_VIA}, ${HERO_GRADIENT_TO})`,
          }}
        >
          <motion.p
            className="text-lg md:text-xl"
            style={{ color: TEXT_GREY }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            Spiruboost — Where Science Meets Nature.
          </motion.p>
        </section>
      </main>
      <Footer /> {/* Footer added here */}
    </>
  )
}
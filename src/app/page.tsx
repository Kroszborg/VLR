'use client'

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function AnimatedSection({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeIn}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.header 
        className="border-b"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vision Language Research Group</h1>
          <nav className="flex items-center space-x-4">
            <ModeToggle />
          </nav>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        <AnimatedSection id="who-we-are" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Who We Are</h2>
          <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerChildren}>
            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    VLR Group is dedicated to advancing the field of vision and language research. We strive to develop
                    cutting-edge technologies that bridge the gap between visual perception and natural language
                    processing.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We envision a future where machines can understand and interpret visual information as seamlessly as
                    humans, and communicate about it in natural language.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <div className="w-full h-48 mb-4 relative">
                    <Image
                      src="/sandeepsir.jpg"
                      alt="Dr. Sandeep Chaurasia"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-t-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center">Supervisor: Dr. Sandeep Chaurasia</h3>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <div className="w-full h-48 mb-4 relative">
                    <Image
                      src="/ribrata.jpg"
                      alt="Ritabrata Chakraborty"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-t-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center">Student Founder: Ritabrata Chakraborty</h3>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        
        <AnimatedSection id="teams" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Teams</h2>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerChildren}>
            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle>Projects and Patents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This team focuses on developing innovative projects and pursuing patent opportunities in the fields of computer vision and natural language processing.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle>Research Papers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This team is dedicated to producing high-quality research papers for top-tier conferences and journals in CV and NLP.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle>Competitions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This team is responsible for participating in and preparing for various CV and NLP competitions, such as those hosted at ICDAR and other leading conferences.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection id="eligibility" className="space-y-4">
          <h2 className="text-3xl font-bold text-center">Eligibility</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Must be currently enrolled as a 2nd or 3rd year undergraduate student in a relevant field (e.g., Computer Science, Data Science, or Electrical Engineering).</li>
                <li>Strong foundational knowledge in programming, particularly in Python, and familiarity with frameworks like TensorFlow, PyTorch, or scikit-learn.</li>
                <li>Prior experience with or coursework in computer vision (CV) or natural language processing (NLP) projects is highly desirable.</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection id="objectives" className="space-y-4">
          <h2 className="text-3xl font-bold text-center">Our Objectives</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>An organized and increased participation in research efforts towards conferences, journals, and IP (patent ideas).</li>
                <li>Bridging the gap between enthusiastic students and eager professors.</li>
                <li>Increased participation and planned approaches towards Conference Competitions. For example, ICDAR &rsquo;25 will feature multiple competitions for Vision.</li>
                <li>Increase in coding culture and adapting faster to research papers.</li>
                <li>Steady collaboration with students leading to faster results.</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection id="contact" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <motion.div 
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="mailto:ritabrata.229301716@muj.manipal.edu" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </Link>
          </motion.div>
        </AnimatedSection>
      </main>

      <motion.footer 
        className="border-t mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2024 VLR Group. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  )
}
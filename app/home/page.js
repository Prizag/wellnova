import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import Authentication from '../authentication/page'
export default function Home() {
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://dummyjson.com/image/500x500/008080/ffffff?text=Well+Nova!&fontSize=16")
      .then((response) => response.blob())
      .then((blob) => {
        const imageURL = URL.createObjectURL(blob)
        setImage(imageURL)
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error in fetching data", error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Streamlined Healthcare Management
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Our hospital management system makes healthcare interactions efficient, transparent, and stress-free for patients and medical staff.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium">
                Get Started
              </Button>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-2 rounded-lg font-medium">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 flex items-center justify-center">
            <Card className="overflow-hidden rounded-2xl shadow-xl w-full max-w-md">
              {loading ? (
                <div className="bg-gray-100 aspect-square flex items-center justify-center">
                  <Loader2 className="h-12 w-12 text-teal-600 animate-spin" />
                </div>
              ) : (
                <img
                  src={image}
                  alt="Hospital Management System"
                  className="aspect-square w-full object-cover"
                />
              )}
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient Management",
                description: "Efficiently manage patient records, appointments, and medical history."
              },
              {
                title: "Staff Coordination",
                description: "Streamline communication between doctors, nurses, and administrative staff."
              },
              {
                title: "Resource Optimization",
                description: "Optimize hospital resources like rooms, equipment, and medication inventory."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <div className="h-6 w-6 rounded-full bg-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your healthcare management?</h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-8">
            Join thousands of healthcare facilities that have improved their operations with our system.
          </p>
          <Button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-2 rounded-lg font-medium">
            Request a Demo
          </Button>
        </div>
      </div>
    </div>
  )
}
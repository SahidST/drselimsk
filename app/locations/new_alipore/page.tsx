import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Car,
  Train,
  Bus,
  Star,
  CheckCircle,
  Home,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dr. Selim SK (VETERINARY DOCTOR & SURGEON) | Vet in New Alipore",
  description: "Official page for Dr. Selim SK (VETERINARY DOCTOR & SURGEON) in New Alipore. Offering expert pet care, surgery, and emergency services. Call +91 6291630297.",
  keywords:
    "Dr Selim SK veterinarian New Alipore, veterinary doctor Diamond Harbour Road, pet doctor South Kolkata, animal hospital Alipore 700027",
  openGraph: {
    title: "Dr. Selim SK (VETERINARY DOCTOR & SURGEON) | Vet in New Alipore",
    description: "Official page for Dr. Selim SK (VETERINARY DOCTOR & SURGEON) in New Alipore. Expert pet care, surgery, and emergency services.",
    url: "https://www.drselimsk.com/locations/new_alipore",
    type: "website",
    locale: "en_IN",
  },
};

const NewAliporePage = () => {
  const locationDetails = {
    businessName: "Dr. Selim SK (VETERINARY DOCTOR & SURGEON)",
    fullAddress: "Pet's Need, 10/1D, Diamond Harbour Rd, Alipore, Kolkata, West Bengal 700027",
    streetAddress: "Pet's Need, 10/1D, Diamond Harbour Rd, Alipore",
    addressLocality: "New Alipore",
    addressRegion: "West Bengal",
    postalCode: "700027",
    addressCountry: "IN",
    phoneNumber: "+916291630297",
    websiteUrl: "https://www.drselimsk.com/locations/new_alipore",
    geoCoordinates: {
      latitude: 22.5141,
      longitude: 88.3201
    },
    gmbUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d88.3201!3d22.5141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMwJzUwLjgiTiA4OMKwMTknMTIuNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
  };

  const services = [
    {
      icon: Home,
      title: "Home Visits",
      description: "Convenient home visit services in New Alipore, Alipore, and nearby South Kolkata areas. Expert veterinary care at your doorstep for your pet's comfort.",
    },
    {
      icon: Stethoscope,
      title: "Large Animal Care",
      description: "Specialized care for large animals including cattle, horses, and other livestock. Comprehensive health management and emergency services in the Diamond Harbour Road area.",
    },
    {
      icon: CheckCircle,
      title: "Surgical Procedures",
      description: "Advanced surgical capabilities for routine and emergency procedures. Fully equipped facility at our New Alipore clinic with modern surgical equipment.",
    },
    {
      icon: Phone,
      title: "Vaccination Programs",
      description: "Complete immunization schedules tailored to your pet's age and lifestyle, protecting them from common diseases in the New Alipore region.",
    },
  ];

  const landmarks = [
    "Near Majherhat Railway Station",
    "Close to Taratala, D. H. Road",
    "Alipore Zoo nearby",
  ];

  const transportation = [
    {
      icon: Train,
      mode: "Metro/Train",
      details: "Majherhat Railway Station - 5 minutes walk",
    },
    {
      icon: Bus,
      mode: "Bus Routes",
      details: "Multiple routes via Diamond Harbour Road, Taratala",
    },
    {
      icon: Car,
      mode: "By Car",
      details: "Easy access via Diamond Harbour Road (D. H. Road)",
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="h-4 w-4" />
                <span>South Kolkata Location</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Dr. Selim SK (VETERINARY DOCTOR & SURGEON) in New Alipore
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Professional and compassionate veterinary care from the heart of South Kolkata. Our New Alipore clinic, conveniently located at Pet&apos;s Need on Diamond Harbour Road, is fully equipped to handle everything from routine checkups to emergencies.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="text-slate-700">
                    {locationDetails.fullAddress}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">
                    Daily 10:00 AM - 10:00 PM
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-600" />
                  <a
                    href={`tel:${locationDetails.phoneNumber}`}
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    {locationDetails.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.app.goo.gl/iZGX3h3VJqqn5sgKA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${locationDetails.phoneNumber}`}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero-veterinary.webp"
                  alt="Dr. Selim SK (VETERINARY DOCTOR & SURGEON) New Alipore Clinic"
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover rounded-lg"
                  priority
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    Professional Veterinary Care
                  </h3>
                  <p className="text-slate-600">
                    Serving South Kolkata with excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Services Available at New Alipore
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Transportation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                How to Reach
              </h3>

              <div className="space-y-6">
                {transportation.map((transport, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <transport.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {transport.mode}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {transport.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Parking Available
                </h4>
                <p className="text-sm text-slate-600">
                  Convenient parking space available for cars and two-wheelers
                  near the clinic on Diamond Harbour Road.
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Find Us on Map
              </h3>
              
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src={locationDetails.gmbUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${locationDetails.businessName} in New Alipore`}
                ></iframe>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Nearby Landmarks
                </h4>
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-slate-700">{landmark}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Pet&apos;s Need
                </h4>
                <p className="text-sm text-slate-600">
                  Located at Pet&apos;s Need pet shop on Diamond Harbour Road for easy identification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
              Contact Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Business Details</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-700">Business Name</h4>
                    <p className="text-slate-600">{locationDetails.businessName}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Complete Address</h4>
                    <p className="text-slate-600">{locationDetails.fullAddress}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Phone Number</h4>
                    <a
                      href={`tel:${locationDetails.phoneNumber}`}
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      {locationDetails.phoneNumber}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Location Details</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-700">Area</h4>
                    <p className="text-slate-600">New Alipore, South Kolkata</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Postal Code</h4>
                    <p className="text-slate-600">{locationDetails.postalCode}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Coordinates</h4>
                    <p className="text-slate-600">
                      {locationDetails.geoCoordinates.latitude}, {locationDetails.geoCoordinates.longitude}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                What are your clinic hours at the New Alipore location?
              </h3>
              <p className="text-slate-600">
                Our New Alipore clinic is open daily from 10:00 AM to 10:00 PM. We also provide emergency services for urgent pet care needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Do you provide home visit services in South Kolkata?
              </h3>
              <p className="text-slate-600">
                Yes, we offer comprehensive home visit services throughout South Kolkata including New Alipore, Alipore, Taratala, and surrounding areas along Diamond Harbour Road. This is especially beneficial for pets who get stressed during travel or for large animal care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Where exactly is Dr. Selim SK&apos;s New Alipore clinic located?
              </h3>
              <p className="text-slate-600">
                Our clinic is located at {locationDetails.fullAddress}. We are situated at Pet&apos;s Need pet shop, making it easy to find. The clinic is near Majherhat Railway Station and easily accessible via Diamond Harbour Road.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Do you provide emergency services at this New Alipore location?
              </h3>
              <p className="text-slate-600">
                Yes, we offer emergency services at our New Alipore clinic. If your pet needs urgent care in South Kolkata, please call us immediately at <a href={`tel:${locationDetails.phoneNumber}`} className="text-orange-600 hover:text-orange-700 font-medium">{locationDetails.phoneNumber}</a>.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                What types of animals do you treat at the New Alipore clinic?
              </h3>
              <p className="text-slate-600">
                We provide comprehensive care for dogs, cats, birds, small animals (rabbits, guinea pigs), and specialize in large animal care including cattle and horses. Dr. Selim has multi-species expertise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Is parking available at the clinic?
              </h3>
              <p className="text-slate-600">
                Yes, convenient parking is available for both cars and two-wheelers near our clinic on Diamond Harbour Road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Visit Our New Alipore Clinic
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Professional veterinary care in South Kolkata with emergency
            services available
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${locationDetails.phoneNumber}`}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: {locationDetails.phoneNumber}</span>
            </a>
            <a
              href={`https://wa.me/${locationDetails.phoneNumber.replace('+', '')}?text=Hello%20Dr.%20Selim,%20I%20need%20consultation%20at%20New%20Alipore%20clinic`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="mt-8 text-amber-100">
            <p>
              Located at Pet&apos;s Need, Diamond Harbour Road • Easy access from Majherhat Station • Postal Code: {locationDetails.postalCode}
            </p>
          </div>
        </div>
      </section>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": locationDetails.businessName,
            "description": "Professional veterinary care in New Alipore, South Kolkata with emergency services and large animal care",
            "url": locationDetails.websiteUrl,
            "telephone": locationDetails.phoneNumber,
            "email": "mstgunahar@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": locationDetails.streetAddress,
              "addressLocality": locationDetails.addressLocality,
              "addressRegion": locationDetails.addressRegion,
              "postalCode": locationDetails.postalCode,
              "addressCountry": locationDetails.addressCountry
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": locationDetails.geoCoordinates.latitude.toString(),
              "longitude": locationDetails.geoCoordinates.longitude.toString()
            },
            "openingHours": "Mo-Su 10:00-22:00",
            "priceRange": "₹₹",
            "paymentAccepted": ["Cash", "UPI"],
            "emergencyService": true,
            "hasMap": "https://maps.app.goo.gl/iZGX3h3VJqqn5sgKA",
            "areaServed": [
              locationDetails.addressLocality,
              "Alipore", 
              "South Kolkata", 
              "Taratala", 
              "Diamond Harbour Road"
            ],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Emergency Services",
                "value": "Available in Need"
              },
              {
                "@type": "PropertyValue",
                "name": "Home Visits",
                "value": "Available in South Kolkata area"
              },
              {
                "@type": "PropertyValue",
                "name": "Large Animal Care",
                "value": "Specialized services available"
              }
            ]
          })
        }}
      />
    </main>
  );
};

export default NewAliporePage;

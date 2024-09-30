"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Facebook,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IntroAnimation from "./intro-animation";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const packages = [
    {
      name: "PAKEJ BOOSTER",
      duration: "1 BULAN",
      features: [
        "UNLIMITED : COPYWRITING",
        "UNLIMITED : POSTER IKLAN",
        "UNLIMITED : ADJUSTMENT",
        "UNLIMITED : IKLAN",
        "STATUS : SPECIAL OPERATION",
        "ADS SPLIT - TEST",
        "1 - 3 PRODUCT",
      ],
      price: "RM700",
      link: "https://api.whatsapp.com/send?phone=+60175058473",
    },
    {
      name: "PAKEJ INJECTION",
      duration: "2 MINGGU",
      features: [
        "UNLIMITED : COPYWRITING",
        "UNLIMITED : POSTER IKLAN",
        "UNLIMITED : ADJUSTMENT",
        "UNLIMITED : IKLAN",
        "STATUS : SPECIAL OPERATION",
        "ADS SPLIT - TEST",
        "1 - 3 PRODUCT",
      ],
      price: "RM369",
      link: "https://api.whatsapp.com/send?phone=+60175058473",
    },
    {
      name: "PAKEJ TARGET",
      duration: "1 MINGGU",
      features: [
        "FREE 2 : COPYWRITING",
        "FREE 2 : POSTER IKLAN",
        "STATUS : SPECIAL OPERATION",
        "3 ADJUSTMENT",
        "ADS SPLIT - TEST",
        "1 PRODUCT",
      ],
      price: "RM189",
      link: "https://api.whatsapp.com/send?phone=+60175058473",
    },
    {
      name: "PAKEJ BASIC",
      duration: "3 HARI",
      features: [
        "FREE 2 : COPYWRITING",
        "FREE 2 : POSTER IKLAN",
        "STATUS : HIGH OPERATION",
        "3 ADJUSTMENT",
        "1 IKLAN",
      ],
      price: "RM140",
      link: "https://api.whatsapp.com/send?phone=+60175058473",
    },
  ];

  const mainConditions = [
    "FACEBOOK PAGE",
    "AKAUN TIDAK DISABLE",
    "ADA BAHAN - BAHAN POSTING : VIDEO / GAMBAR",
    "FREE PAGE SETUP (JIKA TIADA PAGE)",
  ];

  const serviceKami = [
    "PAGE BARU (JIKA PERLU)",
    "DESIGN POSTER IKLAN",
    "COPYWRITING IKLAN",
    "SETTING ADS",
    "RUN ADS",
    "PANTAU PRESTASI ADS",
    "UPDATE RESULT DATA ADS",
    "ANDA HANYA TUNGGU LEAD MASUK DAN CLOSE SALE SAHAJA",
  ];

  const whatYouProvide = [
    "DETAIL SERVICE / PRODUCT",
    "DETAIL HARGA TERMASUK PROMOSI JIKA ADA",
    "DETAIL KAWASAN TARGETING",
    "POSTER GAMBAR ATAU VIDEO ORIGINAL / TIDAK EDIT",
  ];

  const feedback = [
    {
      imageUrl: "/images/1.jpg",
    },
    {
      imageUrl: "/images/2.jpg",
    },
    {
      imageUrl: "/images/3.jpg",
    },
    {
      imageUrl: "/images/4.jpg",
    },
    {
      imageUrl: "/images/5.jpg",
    },
    {
      imageUrl: "/images/6.jpg",
    },
    {
      imageUrl: "/images/7.jpg",
    },
    {
      imageUrl: "/images/8.jpg",
    },
    {
      imageUrl: "/images/9.jpg",
    },
    {
      imageUrl: "/images/10.jpg",
    },
    {
      imageUrl: "/images/11.jpg",
    },
  ];

  const navItems = [
    "SERVICE KAMI",
    "FEEDBACK",
    "PACKAGES",
    "SYARAT UTAMA",
    "APA YANG ANDA PERLU PROVIDE",
  ];

  const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeInUp}
      >
        {children}
      </motion.div>
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % Math.ceil(feedback.length / 3));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextFeedback = () => {
    setCurrentFeedback((prev) => (prev + 1) % Math.ceil(feedback.length / 3));
  };

  const prevFeedback = () => {
    setCurrentFeedback(
      (prev) =>
        (prev - 1 + Math.ceil(feedback.length / 3)) %
        Math.ceil(feedback.length / 3)
    );
  };

  return (
    <>
      {showIntro ? (
        <IntroAnimation onAnimationComplete={() => setShowIntro(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4">
              <nav className="flex items-center justify-between py-4">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="FB Booster Logo"
                    width={40}
                    height={40}
                    className="mr-2"
                  />
                  <span className="text-2xl font-bold text-primary">
                    Ads Intelligent
                  </span>
                </Link>
                <div className="hidden md:flex space-x-6">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                  <span className="sr-only">
                    {isMenuOpen ? "Close menu" : "Open menu"}
                  </span>
                </Button>
              </nav>
            </div>
          </header>

          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-md p-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}

          <main className="flex-grow">
            <AnimatedSection>
              <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-20">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
                    Iklan Facebook Gaya Professional
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-600">
                    Roketkan Sales Syarikat Anda
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  >
                    <Link
                      href="https://api.whatsapp.com/send?phone=+60175058473"
                      className="flex items-center"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Whatsapp
                    </Link>
                  </Button>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section
                id="service-kami"
                className="py-20 bg-gradient-to-b from-green-100 to-teal-100"
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Service Kami
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceKami.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md"
                      >
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-12">
                    <Button
                      size="lg"
                      className="bg-green-500 text-white hover:bg-green-600 transition-colors"
                    >
                      <Link
                        href="https://api.whatsapp.com/send?phone=+60175058473"
                        className="flex items-center"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Ketahui Lebih Lanjut
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section
                id="feedback"
                className="py-20 bg-gradient-to-b from-purple-100 to-pink-100"
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Feedback
                  </h2>
                  <div className="relative">
                    <div className="overflow-hidden">
                      <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{
                          transform: `translateX(-${currentFeedback * 100}%)`,
                        }}
                      >
                        {Array.from({
                          length: Math.ceil(feedback.length / 3),
                        }).map((_, groupIndex) => (
                          <div
                            key={groupIndex}
                            className="flex-shrink-0 w-full flex space-x-4"
                          >
                            {feedback
                              .slice(groupIndex * 3, groupIndex * 3 + 3)
                              .map((item, index) => (
                                <Card
                                  key={index}
                                  className="flex-1 bg-white shadow-md"
                                >
                                  <CardHeader>
                                    <CardTitle>{item.name}</CardTitle>
                                    <p className="text-sm text-gray-500">
                                      {item.company}
                                    </p>
                                  </CardHeader>
                                  <CardContent>
                                    <Image
                                      src={item.imageUrl}
                                      alt={`WhatsApp feedback from ${item.name}`}
                                      width={300}
                                      height={200}
                                      className="w-full h-auto rounded-md mb-4"
                                    />
                                    <p className="italic text-gray-700">
                                      "{item.text}"
                                    </p>
                                  </CardContent>
                                </Card>
                              ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
                      onClick={prevFeedback}
                    >
                      <ChevronLeft className="h-6 w-6" />
                      <span className="sr-only">Previous feedback</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
                      onClick={nextFeedback}
                    >
                      <ChevronRight className="h-6 w-6" />
                      <span className="sr-only">Next feedback</span>
                    </Button>
                    <div className="flex justify-center mt-4">
                      {Array.from({
                        length: Math.ceil(feedback.length / 3),
                      }).map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full mx-1 ${
                            index === currentFeedback
                              ? "bg-purple-500"
                              : "bg-gray-300"
                          }`}
                          onClick={() => setCurrentFeedback(index)}
                          aria-label={`View feedback group ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <Button
                      size="lg"
                      className="bg-purple-500 text-white hover:bg-purple-600 transition-colors"
                    >
                      <Link
                        href="https://api.whatsapp.com/send?phone=+60175058473"
                        className="flex items-center"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Kongsikan Pengalaman Anda
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section
                id="packages"
                className="py-20 bg-gradient-to-b from-teal-100 to-cyan-100"
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    PACKAGES
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg) => (
                      <Card
                        key={pkg.name}
                        className="flex flex-col h-full bg-white shadow-md"
                      >
                        <CardHeader>
                          <CardTitle>{pkg.name}</CardTitle>
                          <p className="text-sm font-bold text-gray-700">
                            {pkg.duration}
                          </p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <ul className="space-y-2">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <div className="p-6 pt-0">
                          <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                            <Link
                              href={pkg.link}
                              className="flex items-center justify-center w-full"
                            >
                              <MessageCircle className="mr-2 h-5 w-5" />
                              {pkg.price}
                            </Link>
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section
                id="syarat-utama"
                className="py-20 bg-gradient-to-b from-yellow-100 to-orange-100"
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Syarat Utama
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mainConditions.map((condition, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md"
                      >
                        <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                        <p className="text-gray-700">{condition}</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-12">
                    <Button
                      size="lg"
                      className="bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                    >
                      <Link
                        href="https://api.whatsapp.com/send?phone=+60175058473"
                        className="flex items-center"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Whatsapp Sekarang
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section
                id="apa-yang-anda-perlu-provide"
                className="py-20 bg-gradient-to-b from-blue-100 to-indigo-100"
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Apa Yang Anda Perlu Provide
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whatYouProvide.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md"
                      >
                        <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-12">
                    <Button
                      size="lg"
                      className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                    >
                      <Link
                        href="https://api.whatsapp.com/send?phone=+60175058473"
                        className="flex items-center"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Mulakan Sekarang
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            </AnimatedSection>
          </main>

          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0 flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="FB Booster Logo"
                    width={120}
                    height={120}
                    className="mr-2"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">Ads Intelligent</h3>
                    <p className="text-sm">Roketkan Sales Syarikat Anda</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </div>
              </div>
              <div className="mt-8 text-center text-sm">
                <p>
                  &copy; {new Date().getFullYear()} Ads Intelligent. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

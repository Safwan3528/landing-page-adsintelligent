/*
  const packages = [
    {
      name: "PAKEJ BOOSTER",
      price: 700,
      duration: "SEBULAN",
      features: [
        "UNLIMITED : COPYWRITING",
        "UNLIMITED : POSTER IKLAN",
        "UNLIMITED : ADJUSTMENT",
        "UNLIMITED : IKLAN",
        "STATUS : SPECIAL OPERATION",
        "ADS SPLIT - TEST",
        "1 - 3 PRODUCT",
      ],
      link: "https://example.com/",
    },
    {
      name: "PAKEJ INJECTION",
      price: 369,
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
      link: "https://example.com/",
    },
    {
      name: "PAKEJ TARGET",
      price: 189,
      duration: "SEMINGGU",
      features: [
        "FREE 2 : COPYWRITING",
        "FREE 2 : POSTER IKLAN",
        "STATUS : SPECIAL OPERATION",
        "3 ADJUSTMENT",
        "ADS SPLIT - TEST",
        "1 PRODUCT",
      ],
      link: "https://example.com/",
    },
    {
      name: "PAKEJ BASIC",
      price: 140,
      duration: "3 days",
      features: [
        "FREE 2 : COPYWRITING",
        "FREE 2 : POSTER IKLAN",
        "STATUS : HIGH OPERATION",
        "3 ADJUSTMENT",
        "1 IKLAN",
      ],
      link: "https://example.com",
    },
  ];

  const mainConditions = [
    "FACEBOOK PAGE",
    "AKAUN TIDAK DISABLE",
    "ADA BAHAN - BAHAN POSTING : VIDEO / GAMBAR",
    "FREE PAGE SETUP (JIKA TIADA PAGE)",
  ];

  const whatYouGet = [
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

  const testimonials = [
    {
      name: "CLIENT 1",
      company: "SABUN DOZEE",
      imageUrl: "",
      text: "JUALAN MENINGKAT DALAM DUA HARI",
    },
    {
      name: "CLIENT 2",
      company: "YOYO T-SHIRT PRINTING",
      imageUrl: "",
      text: "153 PCS REPEAT ORDER!",
    },
    {
      name: "CLIENT 3",
      company: "TIEZ PRINTING",
      imageUrl: "",
      text: "TAK MENANG TANGAN WHATSAPP MASUK.",
    },
    {
      name: "CLIENT 4",
      company: "PERABOT TERPAKAI",
      imageUrl: "",
      text: "ORDER MASUK BERTUBI - TUBI.",
    },
    {
      name: "CLIENT 5",
      company: "BROKER KERETA",
      imageUrl: "",
      text: "3 CLOSE SALE",
    },
    {
      name: "CLIENT 6",
      company: "BROKER KERETA",
      imageUrl: "",
      text: "SERVICE MEMUASKAN DAN HARGA BERPATUTAN",
    },
    {
      name: "CLIENT 7",
      company: "Local Business",
      imageUrl: "",
      text: "BANYAK SANGAT CHAT MASUK",
    },
  ];

  const navItems = [
    "PAKEJ",
    "SYARAT UTAMA",
    "SERVICE KAMI",
    "APA YANG ANDA PERLU PROVIDE",
    "TESTIMONI",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              ADS INTELLIGENT
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
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tingkatkan Prestasi Iklan Facebook Anda
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Maksimumkan ROI anda dengan perkhidmatan pakar kami
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 transition-colors"
            >
              <Link
                href="https://example.com/contact-hero"
                className="flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>
        </section>

        <section
          id="packages"
          className="py-20 bg-gradient-to-b from-teal-400 to-cyan-500"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              PAKEJ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className="flex flex-col h-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg"
                >
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-4xl font-bold mb-4">
                      RM{pkg.price}/{pkg.duration}
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                      <Link
                        href={pkg.link}
                        className="flex items-center justify-center w-full"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Choose {pkg.name}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="syarat-utama"
          className="py-20 bg-gradient-to-b from-yellow-400 to-orange-500"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Syarat Utama
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainConditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  <p>{condition}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 transition-colors"
              >
                <Link
                  href="https://example.com/contact-syarat-utama"
                  className="flex items-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact untuk lebih lanjut
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="service-kami"
          className="py-20 bg-gradient-to-b from-green-400 to-emerald-500"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              SERVICE KAMI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatYouGet.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 transition-colors"
              >
                <Link
                  href="https://example.com/contact-what-you-get"
                  className="flex items-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ketahui lagi
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="apa-yang-anda-perlu-provide"
          className="py-20 bg-gradient-to-b from-blue-400 to-indigo-500"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Apa Yang Anda Perlu Provide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatYouProvide.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <Link
                  href="https://example.com/contact-what-to-provide"
                  className="flex items-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Tempah Sekarang
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="testimoni"
          className="py-20 bg-gradient-to-b from-purple-400 to-pink-500"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Testimoni
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="flex flex-col h-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg"
                >
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <Image
                      src={testimonial.imageUrl}
                      alt={`WhatsApp testimonial from ${testimonial.name}`}
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-md mb-4"
                    />
                    <p className="italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <Link
                  href="https://example.com/contact-testimonials"
                  className="flex items-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Kongsikan Pengalaman Anda
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">ADS INTELLIGENT</h3>
              <p className="text-sm">
                Maksimumkan prestasi iklan Facebook anda
              </p>
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
              &copy; {new Date().getFullYear()} ADS INTELLIGENT. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
  */

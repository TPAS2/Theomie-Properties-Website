import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Home as HomeIcon, Key, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceIcons = [HomeIcon, Key, Wrench, Shield];

const services = [
  {
    title: "Property Management",
    description: "Full-service property management including tenant screening, rent collection, and maintenance coordination.",
  },
  {
    title: "Rental Properties",
    description: "Quality residential properties available for rent across prime locations.",
  },
  {
    title: "Investment Advisory",
    description: "Expert guidance on property investments to help grow your portfolio and maximise returns.",
  },
  {
    title: "Tenant Services",
    description: "Dedicated support for our tenants with easy communication and quick response times.",
  },
];

const features = [
  "Professional property management",
  "Transparent pricing",
  "24/7 emergency support",
  "Regular property inspections",
  "Online rent payments",
  "Quick maintenance response",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Gradient orbs for color */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="Theomie Properties" className="h-14 w-auto" style={{ mixBlendMode: 'lighten' }} />
              <span className="text-xl font-bold text-white">Theomie Properties Ltd</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }} className="text-slate-300 hover:text-white transition-colors cursor-pointer">Services</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }} className="text-slate-300 hover:text-white transition-colors cursor-pointer">About</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }} className="text-slate-300 hover:text-white transition-colors cursor-pointer">Contact</a>
              <a href="/login">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                  Portal Login
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Skyline Background Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/skyline.webp')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 bg-cyan-500/20 rounded-full blur-2xl"></div>
              </div>
              <img
                src="/logo.png"
                alt="Theomie Properties"
                className="h-56 md:h-64 w-auto relative z-10 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] rounded-2xl"
                style={{ mixBlendMode: 'lighten' }}
              />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Professional <span className="text-blue-400">Property</span>
              <span className="text-cyan-400"> Management</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              Trusted property management services delivering exceptional care for landlords and tenants alike.
              Your property is in safe hands with Theomie Properties Ltd.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 min-w-[180px]">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>
                <Button size="lg" variant="outline" className="border-blue-500/50 text-white hover:bg-blue-500/10 px-8 min-w-[180px]">
                  Our Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-slate-900 px-4">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/70 border-y border-slate-800 relative overflow-hidden min-h-[500px] flex items-center">
        {/* Decorative property-related decals */}
        <div className="absolute top-8 right-12 w-16 h-16 border border-blue-500/20 rounded-lg rotate-12"></div>
        <div className="absolute top-24 right-8 w-10 h-10 border border-cyan-500/20 rounded-full"></div>
        <div className="absolute bottom-12 left-8 w-20 h-20 border border-slate-600/30 rounded-lg -rotate-6"></div>
        <div className="absolute bottom-8 left-32 w-8 h-8 border border-blue-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-4 w-12 h-12 border border-slate-500/20 rotate-45"></div>
        <div className="absolute top-16 left-1/4 w-6 h-6 border border-cyan-500/20 rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-14 h-14 border border-slate-600/20 rounded-lg rotate-12"></div>
        <div className="absolute -top-10 right-1/4 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive property management solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              const colors = [
                { bg: "bg-blue-500/10", text: "text-blue-400", border: "hover:border-blue-500/50" },
                { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "hover:border-cyan-500/50" },
                { bg: "bg-purple-500/10", text: "text-purple-400", border: "hover:border-purple-500/50" },
                { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "hover:border-emerald-500/50" },
              ];
              const color = colors[index];
              return (
                <Card key={index} className={`bg-slate-800/50 border-slate-700 ${color.border} transition-all hover:-translate-y-1`}>
                  <CardContent className="p-6">
                    <div className={`h-12 w-12 rounded-xl ${color.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${color.text}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-slate-950 px-4">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[500px] flex items-center">
        {/* Decorative decals */}
        <div className="absolute top-10 left-8 w-14 h-14 border border-purple-500/20 rounded-full"></div>
        <div className="absolute top-20 left-20 w-8 h-8 border border-slate-500/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-16 right-8 w-18 h-18 border border-cyan-500/20 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-10 right-24 w-6 h-6 border border-blue-500/20 rounded-full"></div>
        <div className="absolute top-1/3 right-4 w-10 h-10 border border-slate-600/20 rotate-12"></div>
        <div className="absolute bottom-1/3 left-4 w-12 h-12 border border-purple-500/20 rounded-full"></div>
        <div className="absolute top-8 right-1/3 w-8 h-8 border border-slate-500/20 rounded-lg"></div>
        <div className="absolute bottom-24 left-1/3 w-16 h-16 border border-cyan-500/20 rotate-6"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Theomie Properties?</h2>
              <p className="text-slate-400 mb-8">
                With years of experience in property management, we understand what it takes to maintain
                properties to the highest standards while ensuring tenant satisfaction. Our dedicated team
                works tirelessly to protect your investment and provide exceptional service.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-slate-800/50 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <div className="relative mx-auto mb-6 w-fit">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-slate-800/20 rounded-2xl blur-xl scale-110"></div>
                  <img src="/logo.png" alt="Theomie Properties" className="h-32 w-auto relative" style={{ mixBlendMode: 'lighten' }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Theomie Properties Ltd</h3>
                <p className="text-slate-400">Professional Property Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-slate-950 px-4">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/70 border-y border-slate-800 relative overflow-hidden min-h-[500px] flex items-center">
        {/* Decorative decals */}
        <div className="absolute top-8 left-8 w-12 h-12 border border-blue-500/20 rounded-lg rotate-6"></div>
        <div className="absolute top-16 left-24 w-6 h-6 border border-slate-500/20 rounded-full"></div>
        <div className="absolute bottom-12 right-8 w-14 h-14 border border-cyan-500/20 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-8 right-28 w-8 h-8 border border-slate-600/20 rounded-full"></div>
        <div className="absolute top-1/2 right-6 w-10 h-10 border border-purple-500/20 rotate-45"></div>
        <div className="absolute top-12 right-1/3 w-8 h-8 border border-blue-500/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-6 w-16 h-16 border border-slate-500/20 rounded-lg rotate-12"></div>
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border border-cyan-500/20 rounded-full"></div>
        <div className="absolute bottom-16 left-1/3 w-10 h-10 border border-purple-500/20 -rotate-6"></div>
        <div className="absolute -bottom-20 left-1/3 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ready to discuss your property management needs? Contact us today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 text-center hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-slate-400">Contact us for enquiries</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-slate-400">info@theomieproperties.com</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center hover:border-purple-500/50 transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-slate-400">United Kingdom</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Theomie Properties" className="h-8 w-auto" style={{ mixBlendMode: 'lighten' }} />
              <span className="text-white font-semibold">Theomie Properties Ltd</span>
            </div>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Theomie Properties Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import TestimonialCarousel from "@/components/testimonial-carousel"
import AnimatedCounter from "@/components/animated-counter"
import ParticleBackground from "@/components/particle-background"
import FeatureCard from "@/components/feature-card"
import PricingCard from "@/components/pricing-card"
import IntegrationLogo from "@/components/integration-logo"
import HowItWorks from "@/components/how-it-works"
import AnimatedHeadline from "@/components/animated-headline"
import TypewriterText from "@/components/typewriter-text"
import AnimatedButton from "@/components/animated-button"
import ClientLogos from "@/components/client-logos"
import Navbar from "@/components/navbar"
import HeroDecoration from "@/components/hero-decoration"
import ProductPreview from "@/components/product-preview"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <ParticleBackground />
        <HeroDecoration />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <AnimatedHeadline 
                text="Revolutionize Your Workflow" 
                highlightedText="With Our Intelligent SAAS Platform" 
                className="text-left"
              />
              <TypewriterText
                text="Streamline operations, boost productivity by 30%, and drive growth with our AI-powered collaboration platform designed for modern teams."
                className="max-w-[700px] text-xl text-gray-300 mb-12"
              />
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <AnimatedButton primary>
                  Start Free Trial
                </AnimatedButton>
                <AnimatedButton>
                  Watch Demo
                  <Play className="ml-2 h-4 w-4 group-hover:text-emerald-400 transition-colors" />
                </AnimatedButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur-xl opacity-20 animate-pulse-slow"></div>
              <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                <Image
                  src="/images/hero-illustration.png"
                  alt="SAAS Platform Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-800 p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-medium text-white">99.9% Uptime</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-800 p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-teal-500"></div>
                  <span className="text-sm font-medium text-white">Enterprise Ready</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <ClientLogos />
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section id="product" className="w-full py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See It In Action</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the intuitive interface and powerful features that will transform your workflow.
            </p>
          </div>
          <ProductPreview />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform offers everything you need to streamline your workflow and boost productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="LayoutDashboard"
              title="Intuitive Dashboard"
              description="Get a bird's eye view of your business with our customizable dashboard that shows you what matters most."
            />
            <FeatureCard
              icon="BarChart"
              title="Advanced Analytics"
              description="Make data-driven decisions with real-time analytics and customizable reports."
            />
            <FeatureCard
              icon="Users"
              title="Team Collaboration"
              description="Work seamlessly with your team with real-time collaboration tools and shared workspaces."
            />
            <FeatureCard
              icon="Calendar"
              title="Smart Scheduling"
              description="Automate your calendar and never miss an important meeting or deadline again."
            />
            <FeatureCard
              icon="Bell"
              title="Intelligent Notifications"
              description="Stay informed with smart notifications that know what's important to you."
            />
            <FeatureCard
              icon="Lock"
              title="Enterprise Security"
              description="Rest easy knowing your data is protected with enterprise-grade security and compliance."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get started in minutes with our simple three-step process.
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-20 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that works best for your business. No hidden fees.
            </p>
            <div className="mt-8 inline-flex items-center rounded-full border border-gray-700 p-1 bg-gray-900/50">
              <Tabs defaultValue="monthly" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <PricingCard
                    title="Starter"
                    price="$29"
                    description="Perfect for small teams just getting started"
                    features={["Up to 5 team members", "Basic analytics", "24/7 support", "1GB storage"]}
                    buttonText="Get Started"
                    popular={false}
                  />
                  <PricingCard
                    title="Professional"
                    price="$79"
                    description="Ideal for growing businesses"
                    features={[
                      "Up to 20 team members",
                      "Advanced analytics",
                      "Priority support",
                      "10GB storage",
                      "Custom integrations",
                    ]}
                    buttonText="Get Started"
                    popular={true}
                  />
                  <PricingCard
                    title="Enterprise"
                    price="$199"
                    description="For large organizations with complex needs"
                    features={[
                      "Unlimited team members",
                      "Enterprise analytics",
                      "Dedicated account manager",
                      "Unlimited storage",
                      "Custom integrations",
                      "Advanced security",
                    ]}
                    buttonText="Contact Sales"
                    popular={false}
                  />
                </TabsContent>
                <TabsContent value="yearly" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <PricingCard
                    title="Starter"
                    price="$23"
                    description="Perfect for small teams just getting started"
                    features={["Up to 5 team members", "Basic analytics", "24/7 support", "1GB storage"]}
                    buttonText="Get Started"
                    popular={false}
                  />
                  <PricingCard
                    title="Professional"
                    price="$63"
                    description="Ideal for growing businesses"
                    features={[
                      "Up to 20 team members",
                      "Advanced analytics",
                      "Priority support",
                      "10GB storage",
                      "Custom integrations",
                    ]}
                    buttonText="Get Started"
                    popular={true}
                  />
                  <PricingCard
                    title="Enterprise"
                    price="$159"
                    description="For large organizations with complex needs"
                    features={[
                      "Unlimited team members",
                      "Enterprise analytics",
                      "Dedicated account manager",
                      "Unlimited storage",
                      "Custom integrations",
                      "Advanced security",
                    ]}
                    buttonText="Contact Sales"
                    popular={false}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-20 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about our platform.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                  How long is the free trial?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our free trial lasts for 14 days. No credit card required. You'll have full access to all features
                  during this period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                  Can I change my plan later?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be
                  prorated.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We accept all major credit cards, PayPal, and for annual plans, we can also accept bank transfers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                  Is my data secure?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, we take security seriously. All data is encrypted in transit and at rest. We are SOC 2 and GDPR
                  compliant.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                  Do you offer discounts for nonprofits?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, we offer special pricing for nonprofits and educational institutions. Please contact our sales
                  team for details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Connect with your favorite tools and services.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            <IntegrationLogo name="Slack" />
            <IntegrationLogo name="Google" />
            <IntegrationLogo name="Microsoft" />
            <IntegrationLogo name="Dropbox" />
            <IntegrationLogo name="Zoom" />
            <IntegrationLogo name="Notion" />
            <IntegrationLogo name="GitHub" />
            <IntegrationLogo name="Figma" />
            <IntegrationLogo name="Zapier" />
            <IntegrationLogo name="Salesforce" />
            <IntegrationLogo name="HubSpot" />
            <IntegrationLogo name="Asana" />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="w-full py-20 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join the thousands of businesses that trust our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={10000} suffix="+" />
              </h3>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={99} suffix="%" />
              </h3>
              <p className="text-gray-400">Uptime</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={500} suffix="+" />
              </h3>
              <p className="text-gray-400">Enterprise Clients</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={50} suffix="M+" />
              </h3>
              <p className="text-gray-400">Tasks Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-400">
                Request a demo and see how our platform can transform your business.
              </p>
            </div>
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
              <CardContent className="p-6">
                <form className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Full Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">
                      Company
                    </label>
                    <input
                      id="company"
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-700 hover:from-emerald-600 hover:to-teal-800 text-white">
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-950 border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 SAAS Platform. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}


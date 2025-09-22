"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Smartphone,
  Headphones,
  GitMerge,
  Database,
  BrainCircuit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle as AnimatedCardTitle,
  CardVisual,
} from "@/components/ui/animated-card-diagram";
import { Visual2 } from "@/components/ui/animated-card-diagram";
import { Visual3 } from "@/components/ui/animated-card-chart";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { GlowingFeatures } from "@/components/glowing-features";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Scale Your Business with
              <span className="text-primary block">Smart Analytics</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful dashboard analytics that help you make data-driven
              decisions. Get insights, track performance, and grow your business
              faster than ever.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignedOut>
              <SignUpButton>
                <Button size="lg" className="text-lg px-8">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </SignedIn>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8"
            >
              <Link href="/demo">Watch Demo</Link>
            </Button>
          </div>

          <div className="mt-12">
            <div className="relative mx-auto max-w-4xl">
              <div className="flex justify-center gap-4">
                <AnimatedCard>
                  <CardVisual>
                    <Visual2 mainColor="#ff6900" secondaryColor="#f54900" />
                  </CardVisual>
                  <CardBody>
                    <AnimatedCardTitle>
                      Just find the right caption
                    </AnimatedCardTitle>
                    <CardDescription>
                      This card will tell everything you want
                    </CardDescription>
                  </CardBody>
                </AnimatedCard>
                <AnimatedCard>
                  <CardVisual>
                    <Visual3 mainColor="#22d3ee" secondaryColor="#0ea5e9" />
                  </CardVisual>
                  <CardBody>
                    <AnimatedCardTitle>Another cool caption</AnimatedCardTitle>
                    <CardDescription>
                      This card is also very cool and animated.
                    </CardDescription>
                  </CardBody>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive and interactive platform with all the tools your
              business needs.
            </p>
          </div>
          <GlowingFeatures />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that&apos;s right for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-lg">Starter</CardTitle>
                <div className="text-3xl font-bold">
                  $19
                  <span className="text-lg font-normal text-muted-foreground">
                    /mo
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Up to 10,000 events",
                    "Basic analytics",
                    "Email support",
                    "Mobile app",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <SignedOut>
                  <SignUpButton>
                    <Button className="w-full" variant="outline">
                      Get Started
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                </SignedIn>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-lg">Professional</CardTitle>
                <div className="text-3xl font-bold">
                  $49
                  <span className="text-lg font-normal text-muted-foreground">
                    /mo
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Up to 100,000 events",
                    "Advanced analytics",
                    "Priority support",
                    "Mobile app",
                    "Custom integrations",
                    "Team collaboration",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <SignedOut>
                  <SignUpButton>
                    <Button className="w-full">Get Started</Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <Button asChild className="w-full">
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                </SignedIn>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-lg">Enterprise</CardTitle>
                <div className="text-3xl font-bold">
                  $99
                  <span className="text-lg font-normal text-muted-foreground">
                    /mo
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Unlimited events",
                    "Enterprise analytics",
                    "Dedicated support",
                    "Mobile app",
                    "Custom integrations",
                    "Team collaboration",
                    "White-label options",
                    "SLA guarantee",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of companies using DashPro to make smarter
              decisions and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignedOut>
                <SignUpButton>
                  <Button size="lg" className="text-lg px-8">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </SignedIn>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                <Link href="/demo">Schedule Demo</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New User-Provided Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-6 gap-4 text-white">
            {/* Card 1 */}
            <div className="col-span-6 md:col-span-4 row-span-2 group relative p-8 sm:p-12 rounded-xl overflow-hidden transition-all duration-300 ease-in-out bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 hover:bg-white/10">
              <div className="content relative z-10">
                <h2 className="font-bold text-2xl sm:text-3xl mb-2">
                  Unlock Your Data's Potential
                </h2>
                <p className="text-white/70 max-w-lg">
                  Go beyond simple metrics. Our platform helps you understand
                  the 'why' behind your data, turning insights into action with
                  powerful, easy-to-build dashboards.
                </p>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>- Integrate with Segment, Amplitude, and more.</li>
                  <li>- Build custom reports in minutes.</li>
                  <li>- Share insights with your entire team.</li>
                </ul>
                <div className="inline-flex mt-6">
                  <Button asChild>
                    <Link href="#features">
                      Explore Features
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-span-6 sm:col-span-3 md:col-span-2 row-span-1 group relative p-8 rounded-xl overflow-hidden transition-all duration-300 ease-in-out bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 hover:bg-white/10">
              <div className="relative z-10 text-center">
                <h2 className="font-bold text-xl mb-2">
                  Enterprise-Grade Foundation
                </h2>
                <p className="text-white/70 text-sm">
                  Built on a distributed, fault-tolerant architecture ensuring
                  99.99% uptime.
                </p>
              </div>
              <Database className="absolute -bottom-8 -right-8 w-32 h-32 text-blue-500/20 transition-all duration-300 ease-in-out group-hover:text-blue-500/30 group-hover:scale-110" />
            </div>
            {/* Card 3 */}
            <div className="col-span-6 sm:col-span-3 md:col-span-2 row-span-1 group relative p-8 flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 ease-in-out bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 hover:bg-white/10">
              <div className="text-center relative z-10">
                <div className="inline-block rounded-full p-4 bg-gradient-to-br from-blue-500/50 to-teal-500/50 transition-all duration-300 ease-in-out group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <BrainCircuit className="w-16 h-16 text-white/80 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="font-semibold mt-4">AI-Powered Insights</p>
                <p className="text-white/70 text-sm">
                  Find patterns you didn't know existed.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-span-6 sm:col-span-2 group">
              <Link
                href="#"
                className="flex items-center justify-center h-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl transition-all duration-300 ease-in-out hover:border-white/20 hover:bg-white/10"
              >
                <span className="font-bold transition-colors duration-300 group-hover:text-blue-400">
                  API Docs
                </span>
              </Link>
            </div>
            {/* Card 5 */}
            <div className="col-span-6 sm:col-span-2 group">
              <Link
                href="#"
                className="flex items-center justify-center h-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl transition-all duration-300 ease-in-out hover:border-white/20 hover:bg-white/10"
              >
                <span className="font-bold transition-colors duration-300 group-hover:text-blue-400">
                  Case Studies
                </span>
              </Link>
            </div>
            {/* Card 6 */}
            <div className="col-span-6 sm:col-span-2 group">
              <Link
                href="#"
                className="flex items-center justify-center h-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl transition-all duration-300 ease-in-out hover:border-white/20 hover:bg-white/10"
              >
                <span className="font-bold transition-colors duration-300 group-hover:text-blue-400">
                  Get Support
                </span>
              </Link>
            </div>
            {/* Card 7 */}
            <div className="col-span-6 sm:col-span-3 lg:col-span-2 p-8 flex flex-col justify-between rounded-xl overflow-hidden transition-all duration-300 ease-in-out bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 hover:bg-white/10">
              <div>
                <a
                  className="font-black text-2xl text-white hover:text-blue-400 transition duration-300 flex items-center"
                  href="/"
                >
                  <BarChart3 className="h-6 w-6 mr-2" />
                  <span className="">DashPro</span>
                </a>
              </div>
              <div className="content grid gap-2">
                <h2 className="font-bold text-xl mb-0">
                  Built for Performance
                </h2>
                <p className="text-white/70 text-sm">
                  Our query engine is optimized for lightning-fast results, even
                  on massive datasets.
                </p>
              </div>
            </div>
            {/* Card 8 */}
            <div className="col-span-6 sm:col-span-3 lg:col-span-4 p-8 flex items-center rounded-xl overflow-hidden transition-all duration-300 ease-in-out bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 hover:bg-white/10">
              <div className="content w-full">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                  From startups to Fortune 500s, DashPro provides the clarity
                  and speed needed to stay ahead.
                </span>
              </div>
            </div>
            {/* Card 9 */}
            <div className="col-span-6 p-8 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600/50 via-teal-500/50 to-blue-600/50">
              <div className="text-center">
                <h2 className="text-2xl font-bold">And so much more...</h2>
              </div>
            </div>
            {/* Card 10 */}
            <div className="col-span-6 group p-8 rounded-xl overflow-hidden transition-all duration-300 ease-in-out bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 hover:bg-white/10">
              <div className="text-center">
                <a
                  href="/dashboard"
                  className="text-2xl font-bold text-white/80 group-hover:text-white transition-colors duration-300"
                >
                  Ready to take control of your data?{" "}
                  <span className="text-blue-400">Sign Up for Free</span>
                  <ArrowRight className="inline-block ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6" />
                <span className="font-bold text-xl">DashPro</span>
              </div>
              <p className="text-muted-foreground">
                Powerful analytics for modern businesses. Scale your success
                with data-driven insights.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  Pricing
                </Link>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  Dashboard
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  Careers
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 DashPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

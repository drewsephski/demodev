"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart3, Calendar, Clock, Users, Zap } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <main className="container max-w-4xl mx-auto py-12 px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Schedule Your Demo</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See DashPro in action. Book a personalized demo with our team and
            discover how our analytics platform can transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Demo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Acme Corporation" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Your Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ceo">CEO/Founder</SelectItem>
                    <SelectItem value="cto">CTO</SelectItem>
                    <SelectItem value="product">Product Manager</SelectItem>
                    <SelectItem value="marketing">
                      Marketing Director
                    </SelectItem>
                    <SelectItem value="analyst">Data Analyst</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-size">Company Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-1000">201-1000 employees</SelectItem>
                    <SelectItem value="1000+">1000+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Tell us about your analytics needs
                </Label>
                <Textarea
                  id="message"
                  placeholder="What challenges are you facing with your current analytics setup?"
                  className="min-h-[100px]"
                />
              </div>

              <Button asChild className="w-full h-12 text-lg">
                <Link href="/dashboard">Schedule Demo</Link>
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We&apos;ll send you a calendar link to book a time that works
                for you
              </p>
            </CardContent>
          </Card>

          {/* Demo Benefits */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      What to Expect
                    </h3>
                    <p className="text-muted-foreground">
                      Your personalized 30-minute demo will include:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Live Dashboard Walkthrough
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          See our analytics platform in action with real data
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Custom Use Case Discussion
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Tailored scenarios based on your business needs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Q&A with Experts</h4>
                        <p className="text-sm text-muted-foreground">
                          Get answers from our product and technical team
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Implementation Roadmap
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Clear next steps for getting started
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Clock className="h-12 w-12 mx-auto opacity-80" />
                  <div>
                    <h3 className="text-xl font-semibold">30 Minutes</h3>
                    <p className="opacity-80">
                      That&apos;s all it takes to see how DashPro can transform
                      your analytics
                    </p>
                  </div>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/dashboard">Skip Demo - Start Trial</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Prefer to explore on your own?
              </p>
              <Button asChild variant="outline">
                <Link href="/dashboard">Start Free Trial Instead</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
3;

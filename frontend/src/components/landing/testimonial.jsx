import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = ({ openSignUp }) => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow",
      avatar: "SC",
      content: "CloudShare has revolutionized how we handle sensitive documents. The security features are top-notch, and our team can collaborate seamlessly without worrying about data breaches.",
      rating: 5,
      companyLogo: "TF"
    },
    {
      name: "Michael Rodriguez",
      role: "IT Director",
      company: "GlobalCorp",
      avatar: "MR",
      content: "The migration from our old system was seamless. The API integration was straightforward, and the support team was incredibly helpful throughout the process.",
      rating: 5,
      companyLogo: "GC"
    },
    {
      name: "Emily Watson",
      role: "Operations Manager",
      company: "StartupXYZ",
      avatar: "EW",
      content: "We've tried many file sharing solutions, but CloudShare stands out for its reliability and security. The mobile app is fantastic, and our remote team loves it.",
      rating: 5,
      companyLogo: "SX"
    },
    {
      name: "David Kim",
      role: "Security Engineer",
      company: "SecureTech",
      avatar: "DK",
      content: "As a security professional, I'm impressed by CloudShare's zero-knowledge architecture. It gives us the confidence to store our most sensitive data in the cloud.",
      rating: 5,
      companyLogo: "ST"
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      company: "CreativeAgency",
      avatar: "LT",
      content: "The collaboration features are amazing. We can share large design files with clients securely, and the version control helps us keep track of everything.",
      rating: 5,
      companyLogo: "CA"
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "InnovateLab",
      avatar: "JW",
      content: "CloudShare has been a game-changer for our startup. The pricing is fair, the features are comprehensive, and the uptime has been perfect since day one.",
      rating: 5,
      companyLogo: "IL"
    }
  ];

  const stats = [
    { label: "Customer Satisfaction", value: "98%" },
    { label: "Uptime SLA", value: "99.9%" },
    { label: "Support Response", value: "< 2min" },
    { label: "Files Secured", value: "10M+" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Loved by teams worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience with CloudShare
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-start mb-4">
                  <Quote className="w-8 h-8 text-blue-200" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={`/avatars/${testimonial.avatar.toLowerCase()}.jpg`} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Trusted by industry leaders
            </h3>
            <p className="text-slate-600">
              Join thousands of companies that trust CloudShare with their most important files
            </p>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[
              { name: "Microsoft", logo: "MS" },
              { name: "Google", logo: "GO" },
              { name: "Amazon", logo: "AM" },
              { name: "Netflix", logo: "NF" },
              { name: "Spotify", logo: "SP" }
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-sm">{company.logo}</span>
                </div>
                <div className="text-sm text-slate-500 font-medium">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to join our satisfied customers?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Start your free trial today and experience the difference that enterprise-grade security makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onclick={() => openSignUp()} className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
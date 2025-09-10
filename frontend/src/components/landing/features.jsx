import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Cloud, 
  Smartphone, 
  Users, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  FileText,
  Share2,
  CreditCard,
  Clock
} from 'lucide-react';
import { features } from '@/assets/data.js';

const FeaturesSection = () => {
  // Icon mapping for the features from data.js
  const iconMap = {
    'FileText': FileText,
    'Shield': Shield,
    'Share2': Share2,
    'CreditCard': CreditCard,
    'Clock': Clock
  };

  // Transform features from data.js to match our component structure
  const transformedFeatures = features.map((feature, index) => ({
    icon: iconMap[feature.iconName] || FileText,
    title: feature.title,
    description: feature.description,
    color: feature.iconColor,
    bgColor: feature.iconColor.replace('text-', 'bg-').replace('-600', '-50'),
    borderColor: feature.iconColor.replace('text-', 'border-').replace('-600', '-200')
  }));

  const benefits = [
    "99.9% Uptime SLA",
    "24/7 Customer Support",
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "HIPAA Ready",
    "ISO 27001 Certified"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything you need for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> secure file sharing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built with enterprise-grade security and performance in mind, 
            CloudShare provides all the tools you need to manage and share files safely.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {transformedFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${feature.borderColor} border-2`}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Trusted by enterprises worldwide
              </h3>
              <p className="text-slate-600">
                We maintain the highest standards of security and compliance
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer">
            <span>Explore all features</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
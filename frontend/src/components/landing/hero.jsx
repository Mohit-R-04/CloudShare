import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-pulse delay-2000" />

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" />
            Enterprise-Grade Security
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Share Files Securely
            </span>
            <br />
            <span className="text-slate-900">with CloudShare</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload, manage, and share your files with military-grade encryption. 
            Accessible anywhere, anytime, with complete peace of mind.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-slate-600">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-medium">Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Globe className="w-5 h-5 text-purple-600" />
              <span className="font-medium">Global Access</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 hover:bg-slate-50 transition-all duration-300">
              Watch Demo
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white border border-slate-200">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm text-slate-500 font-mono">CloudShare Dashboard</div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Secure File Management</h3>
                  <p className="text-slate-600">Your files are protected with enterprise-grade encryption</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-slate-600">Uptime</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
              <div className="text-2xl font-bold text-blue-600">256-bit</div>
              <div className="text-sm text-slate-600">Encryption</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Microsoft', 'Google', 'Amazon', 'Netflix', 'Spotify'].map((company) => (
                <div key={company} className="text-lg font-semibold text-slate-400">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
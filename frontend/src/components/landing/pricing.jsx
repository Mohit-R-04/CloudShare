import React from 'react';
// Make sure you have lucide-react installed: npm install lucide-react
import { Check } from 'lucide-react';

// Data for the pricing plans is included directly in this file
const pricingPlans = [
  {
    name: 'Free',
    description: 'Perfect for getting started',
    price: '₹0',
    features: [
      '5 file uploads',
      'Basic file sharing',
      '7-day file retention',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Premium',
    description: 'For individuals with larger needs',
    price: '₹500',
    features: [
      '500 file uploads',
      'Advanced file sharing',
      '30-day file retention',
      'Priority email support',
      'File analytics',
    ],
    highlighted: true,
  },
  {
    name: 'Ultimate',
    description: 'For teams and businesses',
    price: '₹2500',
    features: [
      '5000 file uploads',
      'Team sharing capabilities',
      'Unlimited file retention',
      '24/7 priority support',
      'Advanced analytics',
      'API access',
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the plan that's right for you
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted ? 'border-2 border-purple-500 transform scale-105' : 'border'
              }`}
            >
              {/* Plan Header */}
              <div className={`px-6 py-8 ${plan.highlighted ? 'bg-gradient-to-br from-purple-50 to-white' : 'bg-white'}`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-medium text-gray-900">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
              </div>

              {/* Plan Features */}
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-purple-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>

                {/* Plan Button */}
                <div className="rounded-md shadow">
                  <button
                    className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                      plan.highlighted
                        ? 'text-white bg-purple-600 hover:bg-purple-700'
                        : 'text-purple-700 bg-purple-100 hover:bg-purple-200'
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
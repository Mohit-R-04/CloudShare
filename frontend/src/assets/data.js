// This file contains the data for the features section.

export const features = [
    {
      title: 'Easy File Upload',
      description: 'Quickly upload your files with our intuitive drag-and-drop interface.',
      iconName: 'FileText', // Corresponds to the icon component
      iconColor: 'text-purple-600', // Tailwind CSS class for the icon color
    },
    {
      title: 'Secure Storage',
      description: 'Your files are encrypted and stored securely in our cloud infrastructure.',
      iconName: 'Shield',
      iconColor: 'text-green-600',
    },
    {
      title: 'Simple Sharing',
      description: 'Share files with anyone using secure links that you control.',
      iconName: 'Share2',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Flexible Credits',
      description: 'Pay only for what you use with our credit-based system.',
      iconName: 'CreditCard',
      iconColor: 'text-orange-600',
    },
    {
      title: 'File Management',
      description: 'Organize, preview, and manage your files from any device.',
      iconName: 'FileText',
      iconColor: 'text-red-600',
    },
    {
      title: 'Transaction History',
      description: 'Keep track of all your credit purchases and usage.',
      iconName: 'Clock',
      iconColor: 'text-blue-600',
    },
  ];

  export const pricingPlans = [
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

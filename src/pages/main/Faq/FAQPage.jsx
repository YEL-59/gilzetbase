import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import heroBg from '../../../assets/video/faqhero.png';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState([0]); // First item open by default

  const faqData = [
    {
      question: 'What subscription plans do you offer?',
      answer: (
        <div>
          <p className="mb-2">We offer three plans:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Free Plan ($0/month): 3 photos per month, 1 category</li>
            <li>
              Creator Plan ($9.99/month): 6 photos per month, up to 3 categories
            </li>
            <li>
              Premium Plan ($99/month): 50 photos per month, all categories
            </li>
            <li>
              All plans allow 1000 words, 10 photos per month, all categories
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: 'Is there a discount for annual subscriptions?',
      answer:
        'Yes, Creator and Premium plans include a 20% discount for yearly payments.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer:
        'Yes, Migration apply immediately. Downgrades take effect at the beginning of the next billing cycle.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer:
        'Yes, you can cancel at any time. Your access remains active until the end of your paid period.',
    },
    {
      question: 'What file formats are accepted?',
      answer: 'JPG only, maximum 10 MB per image.',
    },
    {
      question: 'Is AI-generated content allowed?',
      answer: 'Yes, as long as you declare it during the upload process.',
    },
    {
      question: 'Can I edit my submission after uploading?',
      answer: 'Yes, you may replace your photos until the contest deadline.',
    },
    {
      question: 'How many categories can I submit to?',
      answer: (
        <div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Free Plan: 1 category</li>
            <li>Creator Plan: up to 3 categories</li>
            <li>Premium Plan: all categories unlimited</li>
          </ul>
        </div>
      ),
    },
    {
      question: 'How are the photos judged?',
      answer: (
        <div>
          <p className="mb-2">Photos are evaluated based on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Artistic vision</li>
            <li>Visual impact</li>
            <li>Technical quality</li>
            <li>Creativity</li>
            <li>Storytelling & emotion</li>
            <li>Originality & innovation</li>
          </ul>
        </div>
      ),
    },
    {
      question: 'How many winners per contest?',
      answer: '',
    },
    {
      question: 'What are the prizes?',
      answer: '',
    },
    {
      question: 'Do artists keep the rights to their photos?',
      answer: '',
    },
    {
      question: 'Can AVA sell or license my photos?',
      answer: '',
    },
    {
      question: 'Can AVA sell or license my photos?',
      answer: '',
    },
    {
      question: 'Can AVA sell or license my photos?',
      answer: '',
    },
    {
      question: 'Can AVA sell or license my photos?',
      answer: '',
    },
    {
      question: 'Are nude photos allowed?',
      answer: '',
    },
    {
      question: 'What content is forbidden?',
      answer: '',
    },
    {
      question: 'What content is forbidden?',
      answer: '',
    },
    {
      question: 'What content is forbidden?',
      answer: '',
    },
    {
      question: 'What content is forbidden?',
      answer: '',
    },
    {
      question: 'What content is forbidden?',
      answer: '',
    },
    {
      question: 'How do I create an account?',
      answer: '',
    },
    {
      question: 'How do I create an account?',
      answer: '',
    },
    {
      question: 'How do I create an account?',
      answer: '',
    },
    {
      question: 'How do I create an account?',
      answer: '',
    },
  ];

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
        <img
          src={heroBg}
          alt="FAQ Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl Playfair md:text-5xl lg:text-6xl font-bold tracking-wider mb-3 text-[#FEFEFE]">
              Frequently Asked Questions
            </h1>
            <p className="text-sm md:text-base">
              Your Most Important Questions, Explained
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm md:text-base font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && faq.answer && (
                <div className="px-5 md:px-6 pb-4 md:pb-5 pt-0">
                  <div className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

"use client";

import { useEffect } from 'react';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { FileText, Target, Zap, Shield, CheckCircle, Upload, BarChart3, ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ATSLandingPage() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/analyze");
    }
  }, [isSignedIn, router]);

  const handleGetStarted = () => {
    router.push("/analyze");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ANORA
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {/* <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </Link> */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="border border-blue-200 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-md transition-colors">
                    Get Started
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link href="/analyze" className="border border-blue-200 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors">
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>

            <button className="md:hidden text-gray-600 hover:text-blue-600">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="mb-6 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Improve You Resume With AI 👽
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Perfect Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ATS Score
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Upload your resume, paste any job description, and get instant ATS compatibility scores. Optimize your
              resume to beat applicant tracking systems and land more interviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-4 rounded-md transition-colors flex items-center justify-center">
                    Start Free Analysis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <button
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-4 rounded-md transition-colors flex items-center justify-center"
                >
                  Start Free Analysis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </SignedIn>
                <a
                href="https://github.com/krishvsoni/perfectATS"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-200 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-md transition-colors flex items-center justify-center"
                >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.853 0 1.337-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"
                  clipRule="evenodd"
                  />
                </svg>
                Star on GitHub
                </a>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No Credit Card Required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Instant Results
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                100% Secure
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful ATS Optimization Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to make your resume ATS-friendly and increase your chances of getting hired.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Upload className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-600 mb-2">Smart Resume Upload</h3>
              <p className="text-gray-600 text-center">
                Upload resumes in PDF, Word, or text format. Our AI extracts and analyzes all relevant information.
              </p>
            </div>

            <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-600 mb-2">Job Description Matching</h3>
              <p className="text-gray-600 text-center">
                Paste any job description and get detailed analysis of how well your resume matches the requirements.
              </p>
            </div>

            <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-600 mb-2">ATS Score Calculation</h3>
              <p className="text-gray-600 text-center">
                Get precise ATS compatibility scores with detailed breakdowns and improvement suggestions.
              </p>
            </div>

            <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-600 mb-2">Instant Optimization</h3>
              <p className="text-gray-600 text-center">
                Receive real-time suggestions to improve keyword density, formatting, and ATS compatibility.
              </p>
            </div>

            <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-600 mb-2">Privacy Protected</h3>
              <p className="text-gray-600 text-center">
                Your resume data is encrypted and secure. We never store or share your personal information.
              </p>
            </div>

            <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-600 mb-2">Detailed Reports</h3>
              <p className="text-gray-600 text-center">
                Get comprehensive reports with actionable insights to improve your resume&apos;s performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get your ATS score in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Your Resume</h3>
              <p className="text-gray-600">
                Upload your resume in PDF, Word, or text format. Our AI will extract and analyze all the content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Add Job Description</h3>
              <p className="text-gray-600">
                Paste the job description you&apos;re applying for. We&apos;ll analyze the requirements and keywords.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Your Score</h3>
              <p className="text-gray-600">
                Receive your ATS compatibility score with detailed suggestions for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Resumes Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Improvement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9★</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Boost Your ATS Score?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have improved their resume&apos;s ATS compatibility and landed more interviews.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-md transition-colors flex items-center justify-center">
                  Start Free Analysis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <button
                onClick={handleGetStarted}
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-md transition-colors flex items-center justify-center"
              >
                Start Free Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </SignedIn>
            
          </div>

          <p className="text-blue-200 text-sm"></p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ANORA</span>
              </div>
              <p className="text-gray-400 mb-4">The most advanced ATS optimization platform for job seekers.</p>
              <div className="flex space-x-4">
               
              </div>
            </div>

          
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8   justify-center text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ATSMatch Pro. All rights reserved.</p>
           
          </div>
        </div>
      </footer>
    </div>
  );
}

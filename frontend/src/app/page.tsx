'use client';

import { useState } from 'react';
import { FiArrowRight, FiCode, FiDatabase, FiGlobe, FiSearch } from 'react-icons/fi';


export default function Home() {
  const [url, setUrl] = useState('');
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scrape`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, query }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Something went wrong');
      }

      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error: any) {
      setResult(`An error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
          Turn the Web into Structured Data
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          Our AI-powered web scraper understands your needs and extracts the data you want, no code required.
        </p>

        <div className="mt-8 max-w-2xl w-full mx-auto p-8 space-y-8 bg-gray-800 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="url-demo" className="block text-sm font-medium text-gray-400 text-left">
                URL
              </label>
              <input
                id="url-demo"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="query-demo" className="block text-sm font-medium text-gray-400 text-left">
                What do you want to extract?
              </label>
              <input
                id="query-demo"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., 'all article titles and authors'"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? 'Scraping...' : 'Scrape'} <FiArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>
          {result && (
            <div className="mt-8 text-left">
              <h3 className="text-2xl font-bold">Result:</h3>
              <pre className="mt-4 p-4 bg-gray-700 rounded-md overflow-auto">
                {result}
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="text-center">
            <div className="bg-gray-700 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <FiGlobe className="h-10 w-10 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold">1. Enter URL & Query</h3>
            <p className="text-gray-400">Provide the website and what you need.</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-700 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <FiSearch className="h-10 w-10 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold">2. AI Does the Work</h3>
            <p className="text-gray-400">Our agent analyzes the page to find your data.</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-700 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <FiDatabase className="h-10 w-10 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold">3. Get Structured Data</h3>
            <p className="text-gray-400">Receive your data in a clean, JSON format.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg flex items-center">
            <FiSearch className="h-8 w-8 text-indigo-400 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Natural Language Queries</h3>
              <p className="text-gray-400">Just ask for what you want, like you would a human.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex items-center">
            <FiCode className="h-8 w-8 text-indigo-400 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">No-Code Solution</h3>
              <p className="text-gray-400">No need to write complex scripts or deal with HTML.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex items-center">
            <FiDatabase className="h-8 w-8 text-indigo-400 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Structured JSON Output</h3>
              <p className="text-gray-400">Get clean, predictable data for your applications.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex items-center">
            <FiGlobe className="h-8 w-8 text-indigo-400 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Handles Complex Sites</h3>
              <p className="text-gray-400">Our AI can navigate through modern, dynamic websites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 px-4">
        <p className="text-gray-400">&copy; 2024 AI Web Scraper. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';

export default function Home() {
  const productImg = "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop"; // Example Shirt

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ನೆವಿಗೇಶನ್ ಬಾರ್ */}
      <nav className="p-6 bg-white shadow-md flex justify-between">
        <h1 className="text-2xl font-black text-indigo-600 underline">AI FASHION</h1>
        <ul className="flex gap-6 font-medium">
          <li>Shop</li>
          <li>New Arrivals</li>
          <li>Cart</li>
        </ul>
      </nav>

      {/* ಮುಖ್ಯ ಭಾಗ */}
      <main className="max-w-6xl mx-auto p-10 flex gap-10">
        <div className="w-1/2">
          <img src={productImg} className="rounded-xl shadow-2xl" alt="Premium T-Shirt" />
        </div>
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Premium Black Cotton T-Shirt</h2>
          <p className="text-3xl text-indigo-600 font-semibold">₹1,299</p>
          <p className="text-gray-600">Pure 100% Cotton, Breathable and perfect for summer. Not sure how it looks? Use our AI Try-On!</p>
          
          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-lg flex-1 font-bold">ADD TO CART</button>
            
            {/* ಈ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ ಉಚಿತ AI ಟೂಲ್ ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ಕ್ಲೀನ್ ಆಗಿ ಓಪನ್ ಆಗುತ್ತದೆ */}
            <button 
                onClick={() => window.open("https://huggingface.co/spaces/Kwai-Kolors/Kolors-Virtual-Try-On", "_blank")}
                className="bg-indigo-600 text-white border-2 border-indigo-600 px-8 py-4 rounded-lg flex-1 font-bold hover:bg-indigo-700 transition shadow-lg"
            >
              TRY IT ON (AI) ⚡
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
import React from 'react';

export default function TryOnModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-2 z-50">
      <div className="bg-white p-4 rounded-xl max-w-5xl w-full h-[85vh] flex flex-col shadow-2xl">
        
        {/* ಟಾಪ್ ಬಾರ್: ಹೆಡ್ಡಿಂಗ್ ಮತ್ತು ಕ್ಲೋಸ್ ಬಟನ್ */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-indigo-600">AI Virtual Try-On (Free Powered)</h2>
          <button 
            onClick={onClose} 
            className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold hover:bg-red-600 transition"
          >
            Close ✕
          </button>
        </div>
        
        <div className="flex-1 w-full h-full overflow-hidden rounded-lg border-2 border-gray-200">
          <iframe 
            src="https://hf.space/embed/Kwai-Kolors/Kolors-Virtual-Try-On/+/" 
            className="w-full h-full border-none"
            title="AI Virtual Try On"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}
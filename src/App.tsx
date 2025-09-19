// src/App.tsx
import './App.css';
import { useState } from "react";
import { FaGithub, FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { events } from "./assets/imageUrls";

type EventType = typeof events[0]; // Type for an event

// --- Carousel Component ---
function EventCarousel({ event }: { event: EventType }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex(prev => (prev === 0 ? event.images.length - 1 : prev - 1));
  const next = () => setCurrentIndex(prev => (prev === event.images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg my-4">
      <img
        src={event.images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-80"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-80"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {event.images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}

// --- Main App ---
export default function App() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 font-sans leading-relaxed">
      
      {/* Navbar */}
      <header className="flex justify-between items-center py-4 border-b">
        <div className="text-2xl font-bold">Jin</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-blue-600">Click Here!</a>
        </nav>
      </header>

      <main className="mt-12 space-y-8">

        {/* --- Intro Section --- */}
        <section>
          <h1 className="text-4xl font-bold mb-2">
            The New Skill in AI is Not Prompting, It's Context Engineering
          </h1>
          <p className="text-gray-600 mb-8">October 2, 2025</p>
          <p className="mb-6">
            Context Engineering is a new term gaining traction in the AI world. The conversation is shifting from "prompt engineering" to a broader, more powerful concept: Context Engineering.
          </p>
          <p className="mb-6">
            With the rise of Agents it becomes more important what information we load into the “limited working memory”. Most agent failures are not model failures anymore; they are context failures.
          </p>
        </section>

        {/* --- What is the Context --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What is the Context?</h2>
          <ul className="list-disc ml-6 space-y-2 mb-6">
            <li><strong>Instructions / System Prompt:</strong> Initial instructions defining model behavior.</li>
            <li><strong>User Prompt:</strong> Immediate task or question from the user.</li>
            <li><strong>State / History:</strong> Current conversation context.</li>
            <li><strong>Long-Term Memory:</strong> Persistent knowledge from past interactions.</li>
            <li><strong>Retrieved Information (RAG):</strong> External knowledge sources.</li>
            <li><strong>Available Tools:</strong> Functions or built-in tools model can call.</li>
            <li><strong>Structured Output:</strong> Format definitions for the model's response.</li>
          </ul>
        </section>

        {/* --- Manual Event Sections --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Diri naithan si Denzio</h2>
          <EventCarousel event={events[0]} />
          <p>Here is the description or story related to this event...</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Natog akong amigo</h2>
          <EventCarousel event={events[1]} />
          <p>Here is the description or story related to this event...</p>
        </section>

        {/* --- Why It Matters --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Why It Matters</h2>
          <p>
            The secret to building effective AI agents has less to do with code complexity and more to do with the quality of the context you provide.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t text-center text-gray-600 text-sm space-y-2">
        <p>Thanks for reading! If you have any questions or feedback, please let me know on Twitter or LinkedIn.</p>
        <p>Gene Lloyd Respensor © 2025</p>
        <div className="space-x-4 flex justify-center py-4 gap-4">
          <a href="https://github.com/jinnncodes" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaGithub /></a>
          <a href="https://www.youtube.com/@jinnncodes" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaYoutube /></a>
          <a href="https://www.linkedin.com/in/jinnncodes/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="https://www.facebook.com/jinnnsama/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaFacebook /></a>
          <a href="https://www.instagram.com/jinnncodess/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaInstagram /></a>
        </div>
      </footer>

    </div>
  );
}

import "./App.css";
import logo from "./assets/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { events } from "./assets/imageUrls";
import { useMediaPreloader } from "./hooks/useMediaPreloader";
import type { Media, Event } from "./assets/imageUrls";

// --- Carousel Component ---
function EventCarousel({ event }: { event: Event }) {
  if (!event?.media || event.media.length === 0) {
    return <p className="text-gray-500">No media available for this event.</p>;
  }
  return (
    <div className="my-4 rounded-lg overflow-hidden shadow-lg">
      <Carousel
        showArrows
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={5000}
        stopOnHover
        swipeable
        emulateTouch
        className="event-carousel"
      >
        {event.media.map((item, idx) => (
          <div key={idx}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Slide ${idx + 1}`}
                className="object-cover h-[400px] md:h-[600px] w-full"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                controls
                className="object-cover h-[400px] md:h-[600px] w-full"
              />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

// --- Main App ---
export default function App() {
  // flatten all media into [{ type, src }]
  const allMedia: Media[] = events.flatMap((event) => event.media);

  // preload both images and videos
  const mediaLoaded = useMediaPreloader(allMedia);

  if (!mediaLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Loading media...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 font-sans leading-relaxed">
      {/* Navbar */}
      <header className="flex justify-between items-center h-[100px] border-b">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-30 w-auto" />
        </div>

        <nav className="flex items-center space-x-6">
          {/* Spade Icon Button */}
          <a
            href="#"
            className="relative group flex items-center justify-center px-6 py-3 rounded-full text-gray-500 font-medium mr-0"
            title="Spade"
          >
            {/* Animated Circle */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                pathLength="1"
                className="circle-path"
              />
            </svg>

            {/* Spade Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-current transition-colors duration-300 group-hover:text-pink-500"
              fill="currentColor"
            >
              <path
                d="M12 18.445a.778.778 0 0 1-.34-.078C11.39 18.235 5 15.077 5 9.889a3.889 3.889 0 0 1 6.638-2.75L12 7.5l.362-.361A3.889 3.889 0 0 1 19 9.889c0 5.17-6.387 8.344-6.66 8.478a.778.778 0 0 1-.34.078z"
                transform="scale(1,-1) translate(0,-24)"
              />
              <path d="M9 19 Q12 24, 15 19 Z" />
            </svg>
          </a>

          {/* Sponsor Button */}
          <a
            href="https://github.com/sponsors/jinnncodes"
            target="_blank"
            rel="noopener noreferrer"
            title="Sponsor on GitHub"
            className="relative group flex items-center gap-2 px-6 py-3 rounded-full text-gray-500 font-medium"
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                pathLength="1"
                className="circle-path"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-current transition-colors duration-300 group-hover:text-pink-500"
              fill="currentColor"
            >
              <path
                fillRule="nonzero"
                d="M12 18.445a.778.778 0 0 1-.34-.078C11.39 18.235 5 15.077 5 9.889a3.889 3.889 0 0 1 6.638-2.75L12 7.5l.362-.361A3.889 3.889 0 0 1 19 9.889c0 5.17-6.387 8.344-6.66 8.478a.778.778 0 0 1-.34.078z"
              />
            </svg>
          </a>
        </nav>
      </header>

      <main className="mt-12 space-y-8">
        {/* Intro Section */}
        <section>
          <h1 className="text-4xl font-bold mb-2">
            The New Skill in AI is Not Prompting, It's Context Engineering
          </h1>
          <p className="text-gray-600 mb-8 flex items-center gap-4">
            October 2, 2025 · 2 min read
            <a
              href="https://github.com/jinnncodes/journeyblog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 underline"
            >
              <FaGithub />
            </a>
          </p>

          <p className="mb-6">
            Context Engineering is a new term gaining traction in the AI world.
            The conversation is shifting from "prompt engineering" to a broader,
            more powerful concept: Context Engineering.
          </p>
          <p className="mb-6">
            With the rise of Agents it becomes more important what information
            we load into the “limited working memory”. Most agent failures are
            not model failures anymore; they are context failures.
          </p>
        </section>

        {/* What is the Context */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What is the Context?</h2>
          <ul className="list-disc ml-6 space-y-2 mb-6">
            <li>
              <strong>Instructions / System Prompt:</strong> Initial
              instructions defining model behavior.
            </li>
            <li>
              <strong>User Prompt:</strong> Immediate task or question from the
              user.
            </li>
            <li>
              <strong>State / History:</strong> Current conversation context.
            </li>
            <li>
              <strong>Long-Term Memory:</strong> Persistent knowledge from past
              interactions.
            </li>
            <li>
              <strong>Retrieved Information (RAG):</strong> External knowledge
              sources.
            </li>
            <li>
              <strong>Available Tools:</strong> Functions or built-in tools
              model can call.
            </li>
            <li>
              <strong>Structured Output:</strong> Format definitions for the
              model's response.
            </li>
          </ul>
        </section>

        {/* Event Sections */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Diri naithan si Denzio
          </h2>
          <EventCarousel event={events[0]} />
          <p>Here is the description or story related to this event...</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Natog akong amigo</h2>
          <EventCarousel event={events[1]} />
          <p>Here is the description or story related to this event...</p>
        </section>

        {/* Why It Matters */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Why It Matters</h2>
          <p>
            The secret to building effective AI agents has less to do with code
            complexity and more to do with the quality of the context you
            provide.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t text-center text-gray-600 text-sm space-y-2">
        <p>
          Thanks for reading! If you have any questions or feedback, reach out.
        </p>
        <p>Gene Lloyd Respensor © 2025</p>
        <div className="space-x-4 flex justify-center py-4 gap-4">
          <a
            href="https://github.com/jinnncodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@jinnncodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/jinnncodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/jinnnsama/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/jinnncodess/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
}

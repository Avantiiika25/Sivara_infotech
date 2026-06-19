import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Custom Styles Injection for the Wavy Text Animation */}
      <style>{`
        .wavy-loader-text {
          width: fit-content;
          font-family: system-ui, sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          color: #0000;
          -webkit-text-stroke: 1px #13258b; /* Styled with your Cyan theme color */
          background:
            radial-gradient(1.13em at 50% 1.6em, #0f2ecd 99%, #0000 101%) calc(50% - 1.6em) 0/3.2em 100% text,
            radial-gradient(1.13em at 50% -0.8em, #0000 99%, #1a358b 101%) 50% .8em/3.2em 100% repeat-x text;
          animation: l9 1.5s linear infinite; /* Optimized fast timeline speed */
        }
        @keyframes l9 {
          to {
            background-position: calc(50% + 1.6em) 0, calc(50% + 3.2em) .8em;
          }
        }
      `}</style>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              
              {/* Logo Graphic Container - Scaled & Pulsed with favicon.png */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.25)] p-1 overflow-hidden"
              >
                <img 
                  src="/favicon.png" 
                  alt="Sivaraa Infotech Icon" 
                  className="w-full h-full object-contain rounded-full"
                />
              </motion.div>

              {/* Custom Wavy Text Loader Block */}
              <div className="overflow-hidden py-1">
                <h2 className="wavy-loader-text text-3xl sm:text-4xl tracking-wider uppercase text-center">
                  360 Studio
                </h2>
              </div>

              {/* Drone Scanning Wave Tracker Line Graphic */}
              <div className="relative w-56 h-1 bg-muted rounded-full overflow-hidden">
                {/* Core Loader Bar Track */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full bg-cyan-500 rounded-full"
                />
                
                {/* High-Speed Drone Wave Sweep overlay */}
                <motion.div 
                  initial={{ left: "-30%" }}
                  animate={{ left: "110%" }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-[2px]"
                />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
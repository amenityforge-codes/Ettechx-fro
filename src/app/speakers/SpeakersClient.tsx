"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { allSpeakers } from "@/lib/speakersData";

export default function SpeakersClient() {
  const speakers = useMemo(() => allSpeakers, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden bg-gradient-hero py-24">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <Link href="/">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Meet The Experts
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                All Keynote <span className="text-gradient-secondary">Speakers</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Learn from industry pioneers and thought leaders shaping the future of education technology
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {speakers.map((speaker, index) => (
                <motion.div
                  key={`${speaker.name}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.04 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div
                    className={`relative bg-card rounded-2xl border ${speaker.borderAccent} overflow-hidden shadow-card transition-all duration-500 hover:shadow-elevated`}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${speaker.accentColor} opacity-90`} />
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 blur-xl" />
                    <div className="absolute top-16 left-4 w-8 h-8 rounded-full bg-white/10 blur-lg" />

                    <div className="relative pt-12 pb-6 px-6">
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${speaker.accentColor} p-1`}>
                          <div className="w-full h-full rounded-full overflow-hidden bg-card">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="font-display text-xl font-bold text-foreground mb-1">{speaker.name}</h3>
                        {(speaker.designation || speaker.organization) && (
                          <div className="text-muted-foreground text-sm mb-4">
                            {speaker.designation && <p>{speaker.designation}</p>}
                            {speaker.organization && <p>{speaker.organization}</p>}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


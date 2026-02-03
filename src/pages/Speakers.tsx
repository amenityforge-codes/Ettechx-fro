import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { allSpeakers, extraSpeakerImageFiles } from "@/lib/speakersData";

const Speakers = () => {
  useEffect(() => {
    document.title = "All Speakers - Et Tech X";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <section className="relative min-h-screen overflow-hidden bg-gradient-hero py-24">
        {/* Background gradients */}
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
            {/* Back Button */}
            <Link to="/">
              <Button
                variant="ghost"
                className="mb-6 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Meet The Experts
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                All Keynote{" "}
                <span className="text-gradient-secondary">Speakers</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Learn from industry pioneers and thought leaders shaping the future of education technology
              </p>
            </motion.div>

            {/* All Speakers Grid (structured cards from speakersData) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {allSpeakers.map((speaker, index) => (
                <motion.div
                  key={`${speaker.name}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div
                    className={`relative bg-card rounded-2xl border ${speaker.borderAccent} overflow-hidden shadow-card transition-all duration-500 hover:shadow-elevated`}
                  >
                    {/* Colorful accent background */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${speaker.accentColor} opacity-90`}
                    />

                    {/* Decorative shapes */}
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 blur-xl" />
                    <div className="absolute top-16 left-4 w-8 h-8 rounded-full bg-white/10 blur-lg" />

                    {/* Content */}
                    <div className="relative pt-12 pb-6 px-6">
                      {/* Profile Image */}
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${speaker.accentColor} p-1`}
                        >
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

                      {/* Info */}
                      <div className="text-center">
                        <h3 className="font-display text-xl font-bold text-foreground mb-1">
                          {speaker.name}
                        </h3>
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

            {/* Extra Speaker Images Gallery (from Speakers images folder) */}
            {extraSpeakerImageFiles.length > 0 && (
              <div className="mt-20">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center"
                >
                  More Speakers
                </motion.h2>
                <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                  Additional invited speakers and contributors at ET Tech X.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                  {extraSpeakerImageFiles.map((file, index) => {
                    const baseName = file.replace(/\.[^.]+$/, "");
                    const label = baseName
                      .replace(/[_-]+/g, " ")
                      .replace(/\s+/g, " ")
                      .trim();

                    return (
                      <div
                        key={`${file}-${index}`}
                        className="bg-card rounded-2xl border border-border overflow-hidden shadow-card flex flex-col items-center p-4"
                      >
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-3 bg-muted">
                          <img
                            src={`/speakers/${file}`}
                            alt={label}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </div>
                        <p className="text-sm font-medium text-center text-foreground">
                          {label}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speakers;

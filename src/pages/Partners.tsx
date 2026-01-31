import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Download } from "lucide-react";

interface LogoFile {
  name: string;
  path: string;
  type: "image" | "pdf" | "svg";
  tier: "gold" | "silver" | "k12" | "university" | "other";
}

const Partners = () => {
  const [logoFiles, setLogoFiles] = useState<LogoFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Our Partners - Et Tech X";
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loadLogos();
  }, []);

  const loadLogos = async () => {
    // Main partners organized by tier
    const mainPartners: LogoFile[] = [
      // Gold Partners
      { name: "SCHOOL SERV (INDIA) SOLUTIONS PRIVATE LIMITED", path: "/logos/Schoolserv_Logo - Vinod Kakumanu.png", type: "image", tier: "gold" },

      // Silver Partners
      { name: "MyClassboard Educational Solutions Private Limited", path: "/logos/My Envelope .zip - 2 - Mahaveer Uniforms.png", type: "image", tier: "silver" },
      { name: "PEARSON INDIA EDUCATION SERVICES PRIVATE", path: "/logos/PEARSON_LOGO_PURPLE_RGB - EEGPL INDIA.png", type: "image", tier: "silver" },
      { name: "EVO11VE PRIVATE LIMITED", path: "/logos/EZROOTS-MAIN-LOGO - No name - EZROOTS.png", type: "image", tier: "silver" },
      { name: "RANKGURU TECHNOLOGY SOLUTIONS PRIVATE LIMITED", path: "/logos/Logic Logo_black - Prachi M.png", type: "image", tier: "silver" },
      { name: "PARAN PARA EDUCATION POLICY PRIVATE LIMITED", path: "/logos/Primary Logo - Barbie Batra.jpg", type: "image", tier: "silver" },

      // K12 Partners (no stall)
      { name: "Ryan Edunation (no stall)", path: "/logos/ryan-group-logo_1628517995 - Sachin Gupta.png", type: "image", tier: "k12" },
      { name: "Possibility Edutech Pvt Ltd (no stall)", path: "/logos/PrinceBoard - Pallav Singh.png", type: "image", tier: "k12" },
      { name: "Altus Learning Pvt Ltd (no stall)", path: "/logos/Asliprep logo.png", type: "image", tier: "k12" },

      // K12 Partners
      { name: "jubilee hills public school", path: "/logos/JHPS AD LOGO white - Sachin Gupta.png", type: "image", tier: "k12" },

      // University Partners
      { name: "Amrita Vishwa Vidyapeetham", path: "/logos/abhi creations logo - Abhi Creations.jpeg", type: "image", tier: "university" },
    ];

    setLogoFiles(mainPartners);
    setLoading(false);
  };

  const renderLogo = (logo: LogoFile) => {
    if (logo.type === "pdf") {
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-muted rounded-lg p-4">
          <FileText className="w-12 h-12 text-muted-foreground mb-2" />
          <p className="text-xs text-muted-foreground text-center mb-2">{logo.name}</p>
          <a
            href={logo.path}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <Download className="w-3 h-3" />
            View PDF
          </a>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full flex items-center justify-center bg-card rounded-lg p-4 border border-border hover:border-primary/30 transition-colors">
        <img
          src={logo.path}
          alt={logo.name}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="flex flex-col items-center justify-center text-center p-4">
                  <FileText class="w-8 h-8 text-muted-foreground mb-2" />
                  <p class="text-xs text-muted-foreground">${logo.name}</p>
                </div>
              `;
            }
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <section className="relative min-h-screen py-24">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Partners
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Trusted by <span className="text-gradient-primary">Industry Leaders</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Proudly supported by leading companies shaping the future of education technology
              </p>
            </div>

            {/* Tier Labels */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-semibold">
                Gold Partner
              </span>
              <span className="px-6 py-2 bg-gradient-to-r from-slate-400 to-slate-500 text-white rounded-full text-sm font-semibold">
                Silver Partner
              </span>
              <span className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold">
                K12 Partner
              </span>
              <span className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold">
                University Partner
              </span>
            </div>

            {/* Logos by Tier */}
            {loading ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Loading partners...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Gold Partners Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Gold Partner</h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
                  </div>
                  <div className="space-y-4">
                    {logoFiles
                      .filter((logo) => logo.tier === "gold")
                      .map((logo, index) => (
                        <motion.div
                          key={`gold-${logo.name}-${index}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="h-40"
                        >
                          {renderLogo(logo)}
                        </motion.div>
                      ))}
                  </div>
                </motion.div>

                {/* Silver Partners Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Silver Partner</h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto rounded-full" />
                  </div>
                  <div className="space-y-4">
                    {logoFiles
                      .filter((logo) => logo.tier === "silver")
                      .map((logo, index) => (
                        <motion.div
                          key={`silver-${logo.name}-${index}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="h-40"
                        >
                          {renderLogo(logo)}
                        </motion.div>
                      ))}
                  </div>
                </motion.div>

                {/* K12 Partners Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">K12 Partner</h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
                  </div>
                  <div className="space-y-4">
                    {logoFiles
                      .filter((logo) => logo.tier === "k12")
                      .map((logo, index) => (
                        <motion.div
                          key={`k12-${logo.name}-${index}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="h-40"
                        >
                          {renderLogo(logo)}
                        </motion.div>
                      ))}
                  </div>
                </motion.div>

                {/* University Partners Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">University Partner</h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
                  </div>
                  <div className="space-y-4">
                    {logoFiles
                      .filter((logo) => logo.tier === "university")
                      .map((logo, index) => (
                        <motion.div
                          key={`university-${logo.name}-${index}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="h-40"
                        >
                          {renderLogo(logo)}
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              </div>
            )}

            {/* Other Exhibitors Section */}
            {!loading && logoFiles.filter((logo) => logo.tier === "other").length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-16"
              >
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Other Exhibitors
                  </h2>
                  <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {logoFiles
                    .filter((logo) => logo.tier === "other")
                    .map((logo, index) => (
                      <motion.div
                        key={`other-${logo.name}-${index}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="h-32"
                      >
                        {renderLogo(logo)}
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;

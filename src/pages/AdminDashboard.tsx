import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";

const AdminDashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin Dashboard - Et Tech X";
    if (!isAuthenticated) {
      navigate("/admin/login");
    } else {
      // Redirect authenticated users to Gallery Manager
      navigate("/admin/gallery");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <section className="relative min-h-screen flex items-center justify-center py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto text-center"
          >
            <Loader2 className="w-12 h-12 mx-auto mb-4 text-primary animate-spin" />
            <p className="text-muted-foreground text-lg">Redirecting to Gallery Manager...</p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;

import { motion } from "framer-motion";

const Loading = () => {
  return (
<div className="min-h-screen bg-gradient-to-br from-deep-space via-void-black to-cyber-dark flex items-center justify-center relative">
      {/* Futuristic Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 via-transparent to-neon-purple/10 animate-pulse"></div>
      <div className="text-center">
        <motion.div
className="w-16 h-16 border-4 border-electric-blue/30 border-t-electric-blue rounded-full mx-auto mb-6 cyber-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
<p className="text-cyber-silver font-semibold text-lg cyber-text-glow">Loading...</p>
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-neon-cyan/5 blur-3xl animate-pulse"></div>
</div>
    </div>
  );
};

export default Loading;
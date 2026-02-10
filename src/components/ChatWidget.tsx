import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            className="mb-4 bg-card rounded-2xl shadow-card-hover border border-border w-80 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
          >
            <div className="bg-gradient-cta p-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-primary-foreground">Chat with Lola</span>
              <button onClick={() => setOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground">
                <X size={16} />
              </button>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-muted-foreground">Hi! How can I help you today?</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-cta text-primary-foreground flex items-center justify-center shadow-lg glow-violet hover:scale-105 transition-transform"
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
};

export default ChatWidget;

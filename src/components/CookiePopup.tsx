import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookiePopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-6 z-50 max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          <div className="bg-card/95 backdrop-blur-xl rounded-2xl p-6 shadow-card-hover border border-border">
            <h4 className="text-sm font-bold text-navy mb-2">Cookies & Privacy</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              We use cookies to enhance your experience. By continuing, you agree to our cookie policy.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setVisible(false)}
                className="flex-1 text-xs font-semibold border border-border rounded-lg py-2 text-foreground hover:bg-secondary transition-colors"
              >
                Manage Cookies
              </button>
              <button
                onClick={() => setVisible(false)}
                className="flex-1 text-xs font-semibold bg-gradient-cta text-primary-foreground rounded-lg py-2 hover:opacity-90 transition-opacity"
              >
                Allow All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiePopup;

import React, { useState } from "react";
import { Heart } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      toast.success("Thank you for liking! ❤️");
    }
    setLiked(!liked);
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <button onClick={handleLike} className="focus:outline-none">
        <motion.div
          animate={{
            rotate: liked ? [0, -10, 10, -10, 10, 0] : 0, 
            scale: liked ? [1, 1.2, 1] : 1, // Slight bounce effect
          }}
          transition={{ duration: 0.3 }}
        >
          <Heart className="w-8 h-8 text-white" fill={liked ? "black" : "none"} />
        </motion.div>
      </button>
      <Toaster position="top-center" />
    </div>
  );
};

export default LikeButton;


import React from 'react';
import { motion } from 'framer-motion';

const Sticker = ({ children, rotation = 0, x = 0, y = 0, scale = 1 }) => {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileHover={{ scale: scale * 1.1, rotate: rotation + 5, zIndex: 10 }}
            whileTap={{ scale: scale * 0.9 }}
            style={{
                position: 'absolute',
                top: y,
                left: x,
                rotate: `${rotation}deg`,
                cursor: 'grab',
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.2))',
                zIndex: 2
            }}
        >
            {children}
        </motion.div>
    );
};

export default Sticker;

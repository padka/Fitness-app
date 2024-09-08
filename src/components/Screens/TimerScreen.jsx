import { motion } from 'framer-motion';
import Timer from '../Timer/Timer.jsx';

export default function TimerScreen() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 3 }}
            exit={{ opacity: 0 }}
        >
            <h2>Таймер</h2>
            <Timer/>
        </motion.div>
    );
}
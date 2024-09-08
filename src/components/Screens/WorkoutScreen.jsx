import { motion } from 'framer-motion';
import WorkoutForm from '../WorkoutForm/WorkoutForm.jsx'
import WorkoutList from '../WorkoutList/WorkoutList.jsx'

export default function WorkoutScreen() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2>Тренировки</h2>
           <WorkoutForm/>
            <WorkoutList/>
        </motion.div>
    );
}
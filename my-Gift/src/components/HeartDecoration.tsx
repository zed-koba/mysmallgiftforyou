import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeartDecorationProps {
	className?: string;
	delay?: number;
}

const HeartDecoration = ({
	className = '',
	delay = 0,
}: HeartDecorationProps) => {
	return (
		<motion.div
			className={`text-primary/30 animate-gentle-pulse ${className}`}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay, duration: 0.8 }}
		>
			<Heart size={16} fill="currentColor" />
		</motion.div>
	);
};

export default HeartDecoration;

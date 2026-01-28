import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

interface ScrollDownIndicatorProps {
	targetId: string; // ID of the section to scroll to
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({
	targetId,
}) => {
	const handleClick = () => {
		const target = document.getElementById(targetId);

		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<button
			onClick={handleClick}
			className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 focus:outline-none cursor-pointer font-handwritten"
		>
			<motion.div
				className="text-foreground text-2xl"
				animate={{ y: [0, 10, 0] }}
				transition={{ repeat: Infinity, duration: 1 }}
			>
				<ChevronsDown />
			</motion.div>
			<span className="text-foreground text-sm mt-1">Scroll Down</span>
		</button>
	);
};
export default ScrollDownIndicator;

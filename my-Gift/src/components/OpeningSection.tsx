import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import ScrollDownIndicator from './ScrollDownIndicator';

const OpeningSection = () => {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
			<motion.div
				className="text-center max-w-lg"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut' }}
			>
				<motion.div
					className="inline-block mb-8 text-primary/50"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					<Mail size={32} strokeWidth={1.5} className="animate-float" />
				</motion.div>

				<motion.p
					className="font-handwritten text-4xl md:text-5xl text-foreground leading-relaxed"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 1 }}
				>
					I've been meaning to tell you something...
				</motion.p>

				<motion.div
					className="mt-12 flex justify-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.8 }}
				>
					<motion.div
						className="w-px h-20 bg-linear-to-b from-transparent via-primary/40 to-transparent"
						initial={{ scaleY: 0 }}
						animate={{ scaleY: 1 }}
						transition={{ delay: 1.8, duration: 1 }}
					/>
					<ScrollDownIndicator targetId="poem" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default OpeningSection;

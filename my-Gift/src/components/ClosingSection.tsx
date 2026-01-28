import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const ClosingSection = () => {
	return (
		<section className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20">
			<motion.div
				className="text-center"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 1 }}
			>
				<motion.p
					className="font-handwritten text-3xl md:text-4xl text-foreground"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.8 }}
				>
					— from someone who admires you
				</motion.p>

				<motion.div
					className="mt-12 flex justify-center"
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
				>
					<Heart
						size={24}
						className="text-primary/60 animate-gentle-pulse"
						fill="currentColor"
					/>
				</motion.div>

				<motion.p
					className="mt-16 font-serif text-sm text-muted-foreground/60"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 1.2, duration: 0.8 }}
				>
					written just for you
				</motion.p>
			</motion.div>
		</section>
	);
};

export default ClosingSection;

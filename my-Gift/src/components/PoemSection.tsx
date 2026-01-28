import { motion } from 'framer-motion';
import HeartDecoration from './HeartDecoration';
import { cn } from '@/lib/utils';
type PoemSectionProps = {
	poem: string[];
};
const PoemSection = ({ poem }: PoemSectionProps) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3,
			},
		},
	};

	const lineVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut' as const,
			},
		},
	};

	return (
		<section
			id="poem"
			className="min-h-screen flex items-center justify-center px-6 py-20"
		>
			<motion.div
				className="relative max-w-2xl w-full paper-texture rounded-lg p-8 md:p-16"
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.8 }}
			>
				{/* Decorative hearts */}
				<HeartDecoration className="absolute top-4 left-4" delay={0.5} />
				<HeartDecoration className="absolute bottom-4 right-4" delay={0.7} />

				<motion.div
					className="text-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
				>
					{poem.map((line, index) => (
						<motion.p
							key={index}
							className={cn(
								'font-handwritten text-2xl md:text-3xl leading-loose',
								line === '' ? 'h-6' : 'text-foreground',
								index === 0 ? 'md:text-3xl' : '',
							)}
							variants={lineVariants}
						>
							{line || '\u00A0'}
						</motion.p>
					))}
				</motion.div>

				{/* Subtle divider */}
				<motion.div
					className="divider-romantic mt-12 mx-auto w-24"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 2.5, duration: 0.8 }}
				/>
			</motion.div>
		</section>
	);
};

export default PoemSection;

import { motion } from 'framer-motion';

const MessageSection = () => {
	return (
		<section className="min-h-[70vh] flex items-center justify-center px-6 py-20">
			<motion.div
				className="max-w-xl text-center"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.8 }}
			>
				<motion.p
					className="font-serif text-lg md:text-xl text-foreground leading-relaxed italic"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.8 }}
				>
					I wrote this for you, in a quiet moment when I couldn't stop thinking
					about your laugh, your smile and the way you look away when our eyes
					meet.
				</motion.p>

				<motion.p
					className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed mt-6"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.8 }}
				>
					I'm not sure what happens next, but I know I wanted you to have this.
					Consider it a small piece of what I feel—wrapped in words, offered as
					I see you, unfiltered and honest.
				</motion.p>
			</motion.div>
		</section>
	);
};

export default MessageSection;

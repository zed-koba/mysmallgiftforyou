import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import bgSounds from '@/assets/bg-sound.mp3';

const MusicToggle = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	const toggleMusic = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};
	useEffect(() => {
		const playAudio = () => {
			if (audioRef.current) {
				audioRef.current.volume = 0.2;
				audioRef.current.play().catch(() => {});
				setIsPlaying(true);
			}
			window.removeEventListener('click', playAudio);
			window.removeEventListener('keydown', playAudio);
		};

		window.addEventListener('click', playAudio);
		window.addEventListener('keydown', playAudio);

		return () => {
			window.removeEventListener('click', playAudio);
			window.removeEventListener('keydown', playAudio);
		};
	}, []);
	return (
		<>
			<audio ref={audioRef} loop src={bgSounds} autoPlay />
			<motion.button
				onClick={toggleMusic}
				className="fixed top-6 right-6 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary transition-colors"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 2, duration: 0.6 }}
				aria-label={isPlaying ? 'Pause music' : 'Play music'}
			>
				{isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
			</motion.button>
		</>
	);
};

export default MusicToggle;

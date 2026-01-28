import MusicToggle from '@/components/MusicToggle';
import OpeningSection from '@/components/OpeningSection';
import PoemSection from '@/components/PoemSection';
import MessageSection from '@/components/MessageSection';
import ClosingSection from '@/components/ClosingSection';

const Index = () => {
	const poems = [
		[
			'"Her"',
			'',
			'I like going home but i would rather be with you instead',
			'Because I dont want to spend the rest of my life',
			'Wondering where our story could have led',
			'I think you really beautiful',
			'But when i hear your beauty speak',
			'My mind grips at chairs as my knees begin to weak',
			'',
			'I always see you with mask until I saw the smile of you',
			'Now my gallery is full of art mesmerized by someone I wish I knew',
			"I've never been good at poetry but if poetry can talk",
			'every stanza would have your smile',
			'every rhyme would have your walk',
			'',
			'I think your smile are incredible',
			'If incredible meant worthy of being known',
			"I'd love to prove to you the way love feels when its consistenly shown",
			'I know you dont know me that much but if my heart was a tetris game',
			'The existence of all my worries just disappeared just by hearing your name',
			'',
			"I think you're really funny but not in look or time",
			'the kind of funny i fall in love with that makes a bald man need to rhyme',
			'every time you show up on school or my mesmerized gaze noticed',
			'I melt at the sight of you like butter on bread freshly toasted',
			'',
			"I know you are single so i'd like to inquire about your heart",
			"I dont know how to convince you I'm worth it",
			'but this seemed like a good start.',
		],
		[
			'"The Poetry Found in Your Smile"',
			'We dont have much in common but poetry',
			"I can't really write but if poems what you need",
			'Me and my pen would get in a fight',
			'Because you do deserve it',
			'The thoughtfulness of rhymes',
			'The being made to blush',
			'',
			"I don't just miss you sometimes",
			'I thought about it for a while',
			'The way you make me feel',
			'How you brought my heart back instead of taking it to steal',
			"I can't really fathom how people let you go",
			"Because honestly, you're the most cutest person that i know",
			'Actually I know that if my happiness were on a graph',
			'Mine would increase exponentially every time I heard you laugh',
			'',
			"But I'm much better at science so say it more like this",
			'There would be an excellent reaction if the 2 of us were to kiss',
			'Chemistry they call it what I feel when you pass by',
			'Because the butterflies in my stomach would never dare to lie',
			'You know you deserve the being asked to date',
			"I've been wanting to ask you forever",
			"I'm sorry I sent this so late",
			'',
			'We dont have much in common but poetry',
			"I can't really write but if poems what you need",
			'I would write for you tonight',
			'Because you do deserve it',
			'I thought about it for a while',
			'Then I wrote down all the poetry found in your smile',
			"I hate you when you're sad",
			"I love that you happiness can't be contained",
			"I love that in your eyes there's a beauty that can never be explained",
			'I wrote until my hand ached about the way you make me feel',
			'How some people make you forget',
			'But you reminded me that love is real',
		],
	];
	return (
		<main className="min-h-screen bg-background selection:bg-primary/20 selection:text-foreground">
			<MusicToggle />
			<OpeningSection />
			{poems.map((poem, index) => (
				<PoemSection key={index} poem={poem} />
			))}

			<MessageSection />
			<ClosingSection />
		</main>
	);
};

export default Index;

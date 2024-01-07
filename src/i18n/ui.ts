export const languages = {
	pl: 'Polski',
	gb: 'English',
};

export const defaultLang = 'pl';

export const ui = {
	gb: {
		'nav.about': 'About',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',
		'button.cv': 'Download CV',
		'about.button': 'About me',
		'about.description': 'LOREM IPSUM',
		'contact.button': 'Say Hello!',
		'projects.title': "Projects",
		'projects.button': "See all projects",
		'hero.hi': "Hi! My name is",
		'hero.Iam': "and I am web developer based in Warsaw.",
		'hero.button': "Learn more",
	},
	pl: {
		'nav.about': 'O mnie',
		'nav.projects': 'Projekty',
		'nav.contact': 'Kontakt',
		'button.cv': 'Pobierz CV',
		'about.button': 'O mnie',
		'about.description': '',
		'contact.button': 'Przywitaj się!',
		'projects.title': "Projekty",
		'projects.button': "Zobacz wszystkie projekty",
		'hero.hi': "Cześć! Nazywam się",
		'hero.Iam': "i jestem web developerem zamieszkałym w Warszawie.",
		'hero.button': "Dowiedz się więcej",
	},
} as const;

export const showDefaultLang = false;

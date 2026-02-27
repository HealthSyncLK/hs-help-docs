import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import HomepageModules from '../components/HomepageModules';

type FeaturedResource = {
	title: string;
	description: string;
	ctaLabel: string;
	ctaHref: string;
};

const featuredResources: FeaturedResource[] = [
	{
		title: 'Getting Started',
		description:
			'Create your HealthSync account, configure roles, and invite the rest of your care team in minutes.',
		ctaLabel: 'View onboarding guide',
		ctaHref: '/docs/getting-started/intro',
	},
	{
		title: 'AI Report Analyzer',
		description:
			'Understand how automated interpretations work, supported formats, and how to resolve analysis errors.',
		ctaLabel: 'Explore AI workflows',
		ctaHref: '/docs/ai-report-analyzer/intro',
	},
	{
		title: 'Integrations & APIs',
		description:
			'Securely connect EHR partners, configure webhooks, and work with API keys across environments.',
		ctaLabel: 'Open integration docs',
		ctaHref: '/docs/integrations-apis/intro',
	},
];

const HomepageHeader = () => {
	const history = useHistory();
	const [query, setQuery] = React.useState('');

	const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const trimmedQuery = query.trim();
		const destination = trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : '/search';
		history.push(destination);
	};

	return (
		<section className="homepage-hero">
			<div className="container">
				<p className="hero__subtitle">HealthSync Help Center</p>
				<h1>How can we help you?</h1>
				<p>
					Search across every module or jump straight into curated guides for administrators, clinicians,
					and developers.
				</p>
				<form className="homepage-search" onSubmit={handleSearchSubmit}>
					<div className="homepage-search__field">
						<input
							id="homepage-search-input"
							type="search"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							placeholder="Search documentation..."
							aria-label="Search documentation"
							autoComplete="off"
						/>
						<button type="submit" className="button button--primary button--lg">
							Search
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

const FeaturedResources = () => (
	<section className="container margin-vert--xl">
		<div className="row">
			{featuredResources.map((resource) => (
				<article key={resource.title} className="col col--4 margin-bottom--lg">
					<div className="card" style={{height: '100%'}}>
						<div className="card__body">
							<h3>{resource.title}</h3>
							<p>{resource.description}</p>
						</div>
						<div className="card__footer">
							<Link className="button button--outline button--sm" to={resource.ctaHref}>
								{resource.ctaLabel}
							</Link>
						</div>
					</div>
				</article>
			))}
		</div>
	</section>
);

const Homepage = () => (
	<Layout
		title="HealthSync Help Center"
		description="Product documentation for teams deploying HealthSync across care networks"
	>
		<HomepageHeader />
		<main>
			<HomepageModules />
			<FeaturedResources />
		</main>
	</Layout>
);

export default Homepage;

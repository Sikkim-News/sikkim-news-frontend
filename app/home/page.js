"use client";

import styles from "./home.module.css";
import NewsCardFlat from "@/components/helperComponents/NewsCardFlat";
import NewsCardText from "@/components/helperComponents/NewsCardText";
import NewsCardVerticalAlt from "@/components/helperComponents/NewsCardVerticalAlt";
import NewsCardVerticalCompact from "@/components/helperComponents/NewsCardVerticalCompact";
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
	return (
		<div className={styles.homepage}>
			<div className={styles.container}>
				{/* Hero Section */}
				<section className={styles.heroSection}>
					<div className={styles.mainStory}>
						<NewsCardVerticalAlt
							imageUrl="https://picsum.photos/id/28/4928/3264"
							headline="Historic Agreement: Sikkim Signs Major Environmental Protection Pact"
							excerpt="Groundbreaking initiative set to transform the state's approach to conservation while promoting sustainable development."
							author="Karma Dorji"
							date="November 19, 2023"
						/>
					</div>
					<div className={styles.topStories}>
						<NewsCardVerticalCompact
							imageUrl="https://picsum.photos/id/29/4000/2670"
							category="Culture"
							headline="Traditional Festival Season Begins With Grand Ceremony"
							excerpt="Month-long celebrations showcase Sikkim's rich cultural heritage and traditions."
							author="Pema Yangchen"
							date="November 18, 2023"
						/>
						<NewsCardVerticalCompact
							imageUrl="https://picsum.photos/id/26/4209/2769"
							category="Tourism"
							headline="New Eco-Tourism Corridor Opens in East Sikkim"
							excerpt="Sustainable tourism initiative promises unique experiences while preserving natural habitats."
							author="Tashi Wangmo"
							date="November 18, 2023"
						/>
					</div>
				</section>

				{/* Latest News Section */}
				<section className={styles.latestNews}>
					<SectionHeader title="Latest News" />
					<div className={styles.latestGrid}>
						<NewsCardFlat
							imageUrl="https://picsum.photos/id/30/4928/3264"
							category="Politics"
							headline="State Assembly Passes Key Infrastructure Bill"
							excerpt="New legislation paves way for major development projects across Sikkim."
							author="Tenzin Norbu"
							date="November 19, 2023"
						/>
						<NewsCardFlat
							imageUrl="https://picsum.photos/id/31/4928/3264"
							category="Education"
							headline="State Universities Launch Research Partnership"
							excerpt="Collaborative program to focus on sustainable development and local innovations."
							author="Dawa Sherpa"
							date="November 19, 2023"
						/>
						<NewsCardFlat
							imageUrl="https://picsum.photos/id/32/4928/3264"
							category="Health"
							headline="New Medical Facilities Boost Rural Healthcare"
							excerpt="Modern healthcare centers bring advanced medical services to remote areas."
							author="Choden Lama"
							date="November 19, 2023"
						/>
					</div>
				</section>

				{/* Featured Sections */}
				<div className={styles.featuredSections}>
					{/* Trending Now */}
					<section className={styles.trendingSection}>
						<SectionHeader title="Trending Now" />
						<div className={styles.trendingGrid}>
							<NewsCardVerticalAlt
								imageUrl="https://picsum.photos/id/33/4928/3264"
								headline="Sikkim's Organic Farming Revolution Goes Global"
								excerpt="Local farmers receive international recognition for sustainable practices."
								author="Karma Tenzin"
								date="November 19, 2023"
							/>
							<div className={styles.trendingUpdates}>
								<NewsCardText
									category="Weather"
									headline="Heavy Snowfall Alert: Northern Districts Prepare"
									date="2 hours ago"
								/>
								<NewsCardText
									category="Sports"
									headline="Local Football Team Advances to National League"
									date="3 hours ago"
								/>
								<NewsCardText
									category="Business"
									headline="Tech Startups Find New Home in Sikkim Innovation Hub"
									date="4 hours ago"
								/>
							</div>
						</div>
					</section>

					{/* Regional Updates */}
					<section className={styles.regionalSection}>
						<SectionHeader title="Regional Updates" />
						<div className={styles.regionalGrid}>
							<NewsCardVerticalCompact
								imageUrl="https://picsum.photos/id/34/4928/3264"
								category="Development"
								headline="Rural Development Projects Show Promising Results"
								excerpt="Community-led initiatives transform village infrastructure and economy."
								author="Sonam Gyatso"
								date="November 18, 2023"
							/>
							<NewsCardVerticalCompact
								imageUrl="https://picsum.photos/id/35/4928/3264"
								category="Environment"
								headline="Wildlife Conservation Efforts Bear Fruit"
								excerpt="Rare species sightings increase in protected forest areas."
								author="Pema Dorji"
								date="November 18, 2023"
							/>
						</div>
					</section>
				</div>

				{/* Quick Updates */}
				<section className={styles.quickUpdates}>
					<SectionHeader title="Quick Updates" />
					<div className={styles.updatesGrid}>
						<NewsCardText
							category="Transport"
							headline="New Helicopter Service Connects Remote Villages"
							date="1 hour ago"
						/>
						<NewsCardText
							category="Culture"
							headline="Traditional Art Workshop Draws Young Artists"
							date="2 hours ago"
						/>
						<NewsCardText
							category="Technology"
							headline="Digital Literacy Program Reaches Rural Schools"
							date="3 hours ago"
						/>
						<NewsCardText
							category="Economy"
							headline="Local Handicrafts Find Global Market Through E-commerce"
							date="4 hours ago"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

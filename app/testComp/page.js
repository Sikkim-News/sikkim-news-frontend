"use client";

import SectionHeader from "@/components/SectionHeader";
import styles from "./testcomp.module.css";
import NewsCardFlat from "@/components/helperComponents/NewsCardFlat";
import NewsCardText from "@/components/helperComponents/NewsCardText";
import NewsCardVerticalAlt from "@/components/helperComponents/NewsCardVerticalAlt";
import NewsCardVerticalCompact from "@/components/helperComponents/NewsCardVerticalCompact";

export default function TestComponent() {
	return (
		<div className={styles.testComponent}>
			<div className={styles.container}>
				{/* Main Feature */}
				<div className={styles.mainFeature}>
					<SectionHeader title="Main Feature" />
					<NewsCardFlat
						imageUrl="https://picsum.photos/id/28/4928/3264"
						category="Politics"
						headline="Sikkim Government Announces New Environmental Policy"
						excerpt="New measures aim to preserve the state's biodiversity while promoting sustainable development initiatives."
						author="Karma Dorji"
						date="November 19, 2023"
					/>
				</div>

				{/* Secondary Stories */}
				<div className={styles.secondaryStories}>
					<SectionHeader title="Card Variants" />
					<div className={styles.cardGrid}>
						<div className={styles.cardColumn}>
							<h3 className={styles.variantTitle}>Overlay Style</h3>
							<NewsCardVerticalAlt
								imageUrl="https://picsum.photos/id/29/4000/2670"
								headline="Local Artists Blend Modern Techniques with Traditional Art"
								excerpt="Contemporary artists are finding innovative ways to preserve and evolve traditional art forms."
								author="Pema Yangchen"
								date="November 18, 2023"
							/>
						</div>
						<div className={styles.cardColumn}>
							<h3 className={styles.variantTitle}>Compact Style</h3>
							<NewsCardVerticalCompact
								imageUrl="https://picsum.photos/id/26/4209/2769"
								category="Culture"
								headline="Traditional Festivals Draw Global Tourism Interest"
								excerpt="Sikkim's unique cultural celebrations are attracting visitors from around the world."
								author="Tashi Wangmo"
								date="November 18, 2023"
							/>
						</div>
					</div>
				</div>

				{/* Quick Updates */}
				<div className={styles.quickUpdates}>
					<SectionHeader title="Quick Updates" />
					<div className={styles.updates}>
						<NewsCardText
							category="Weather"
							headline="Heavy Snowfall Expected in North Sikkim This Weekend"
							date="2 hours ago"
						/>
						<NewsCardText
							category="Sports"
							headline="Local Football Team Advances to Regional Finals"
							date="3 hours ago"
						/>
						<NewsCardText
							category="Education"
							headline="State Universities Announce New Research Programs"
							date="4 hours ago"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

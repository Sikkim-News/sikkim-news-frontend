"use client";
import FlatCardHorizontal from "@/layoutComponents/FlatCardHorizontal";
import styles from "@/styles/CategoriesPage.module.css";

const capitalizeWords = (str) => {
	return str
		.split(" ")
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(" ");
};

export default function GridPrint({ category, articles }) {
	return (
		<>
			{articles.length != 0 ? (
				<FlatCardHorizontal
					category={`Search Results for ${capitalizeWords(category)}`}
					articles={articles}
					displayAll={true}
				/>
			) : (
				// <>divvv</>
				<p className={styles.notAvailable}>
					No Results Found for{" "}
					{categoryDetails.attributes.name.charAt(0).toUpperCase()}
				</p>
			)}
		</>
	);
}

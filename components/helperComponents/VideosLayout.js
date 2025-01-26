import SectionHeader from "@/components/SectionHeader";
import styles from "@/styles/VideosLayout.module.css";

export default function VideosLayout() {
	return (
		<div>
			<SectionHeader title="Latest Videos" />
			<div className={styles.videoContainer}>
				<iframe
					src="https://www.youtube.com/embed/h2ukiZRdIIc"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<iframe
					src="https://www.youtube.com/embed/V1cvaKWwNb4"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<iframe
					src="https://www.youtube.com/embed/alzYHnN8Hic"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<iframe
					src="https://www.youtube.com/embed/g8xUP9zM26U"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		</div>
	);
}

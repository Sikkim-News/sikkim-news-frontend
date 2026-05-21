import SectionHeader from "@/components/SectionHeader";
import styles from "@/styles/VideosLayout.module.css";

export default function VideosLayout({ videos = [] }) {
	if (!videos.length) {
		return null;
	}

	return (
		<div>
			<SectionHeader title="Latest Videos" />
			<div className={styles.videoContainer}>
				{videos.map((video) => (
					<iframe
						key={video.id}
						src={video.embedUrl}
						title={video.title}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				))}
			</div>
		</div>
	);
}

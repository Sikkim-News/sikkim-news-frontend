"use client";

// import Layout from "@/components/Layout";
import styles from "@/styles/TermsofUse.module.css";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function TermsandConditions() {
	const [content, setContent] = useState("");
	const filename = "/termsnconditions.md";

	useEffect(() => {
		fetch(filename)
			.then((res) => res.text())
			.then((res) => setContent(res))
			.catch((err) => console.log(err));
	});

	return (
		<div className={styles.mainDiv}>
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	);
}

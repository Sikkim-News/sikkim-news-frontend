import Layout from "@/components/Layout";
import styles from "@/styles/TermsofUse.module.css";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const terms_of_use = ()=>{
    const [content, setContent] = useState('');
    const filename = "/termsnconditions.md"

    useEffect(() => {
        fetch(filename)
            .then(res => res.text())
            .then(res => setContent(res))
            .catch(err => console.log(err));
    });

    return (<Layout style={styles.mainDiv}>
        <ReactMarkdown>{content}</ReactMarkdown>
    </Layout>)
};

export default terms_of_use;
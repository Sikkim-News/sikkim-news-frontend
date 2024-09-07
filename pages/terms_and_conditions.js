import Layout from "@/components/Layout";
import styles from "@/styles/TermsofUse.module.css";

const terms_of_use = ()=>{
    return (<Layout style={styles.mainDiv}>
    <h1>Terms & Conditions</h1>
    <h2>Welcome to The Sikkim News</h2>

    <h3>Terms of Use</h3>
    <p>{`The terms "Client," "You," and "Your" refer to the user of this website, while "The Company," "Ourselves," "We," "Our," and "Us" refer to The Sikkim News.`}</p>

    <h3>Cookies</h3>
    <p>By accessing The Sikkim News, you consent to the use of cookies in accordance with The Sikkim News Privacy Policy. Cookies are employed to enhance the functionality of certain areas and improve user experience.</p>

    <h3>Intellectual Property Rights</h3>
    <p>Unless otherwise stated, The Sikkim News and/or its licensors own the intellectual property rights for all materials on The Sikkim News. All rights are reserved, and you may access the content for personal use, subject to the restrictions outlined in these terms.</p>
    <p>You must not:</p>
    <ul>
        <li>Republish material from The Sikkim News</li>
        <li>Sell, rent, or sub-license material from The Sikkim News</li>
        <li>Reproduce, duplicate, or copy material from The Sikkim News</li>
        <li>Redistribute content from The Sikkim News</li>
    </ul>
    <p>This agreement commences on the date of acceptance.</p>

    <h3>User Comments</h3>
    Certain sections of the website allow users to post and exchange opinions and information. The Sikkim News does not pre-screen, edit, or review comments before publication. Users are solely responsible for the content of their comments and must adhere to the guidelines provided.
    <p>The Sikkim News reserves the right to monitor and remove inappropriate or offensive comments and disclaims liability for any damages resulting from the use or posting of comments.</p>
    <p>By posting comments, you warrant that you have the right to do so and that your comments do not infringe on any intellectual property rights or contain unlawful material.</p>
    <p>You grant The Sikkim News a non-exclusive license to use, reproduce, and edit your comments.</p>

<h3>Hyperlinking</h3>
Various organizations, including government agencies, search engines, and news organizations, may link to The Sikkim News without prior approval. However, certain conditions must be met to ensure appropriate linking.
<p>Approved organizations may hyperlink to The Sikkim News using corporate names, URLs, or other descriptions within the context of their content. The use of The Sikkim News logo or artwork for linking requires a trademark license agreement.</p>

<h3>iFrames</h3>
Creating frames around The Sikkim News webpages that alter the visual presentation or appearance is prohibited without prior approval.

<h3>Content Liability</h3>
The Sikkim News is not responsible for content on external websites linked to it. Users agree to defend and protect The Sikkim News against any claims arising from their websites.

<h3>Privacy</h3>
Please refer to The Sikkim News Privacy Policy for information on how personal data is handled.

<h3>Reservation of Rights</h3>
The Sikkim News reserves the right to request the removal of any links to its website and may amend these terms and conditions at any time. By continuing to link to the website, users agree to comply with the updated terms.

<h3>Removal of Links</h3>
If you find any offensive links on The Sikkim News, please contact us. While we consider removal requests, we are not obligated to respond or take immediate action.

<h3>Disclaimer</h3>
The information on The Sikkim News website may not be accurate or complete, and its availability is not guaranteed. The Sikkim News disclaims all representations and warranties, subject to applicable law.

<p>This disclaimer does not limit liability for death, personal injury, fraud, or any liabilities not permitted under applicable law. As long as the website remains free, The Sikkim News is not liable for any loss or damage.</p>


    </Layout>)
};

export default terms_of_use;
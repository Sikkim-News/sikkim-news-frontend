'use client';
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import InterestsIcon from "@mui/icons-material/Interests";

import styles from "@/styles/ContactPage.module.css";
import SocialMedia from "@/components/SocialMedia";

// export const metadata= {
//   title: 'Contact Us',
//   description: 'Contact us for any queries or suggestions.'
// }

const contact = () => {
  return (
    <Layout>
      <div>
        <SectionHeader title="Contact Us" />

        <div className={styles.contactHeader}>
          <LocationOnIcon />
          <span>Address</span>
        </div>
        <div className={styles.contactBody}>
          <p>Near Traffic Point, Upper Bazar,</p>
          <p>Rangpo, East Sikkim</p>
          <p>Pin: 737132</p>
        </div>

        <div className={styles.contactHeader}>
          <CallIcon />
          <span>Phone</span>
        </div>
        <div className={styles.contactBody}>
          <p>+91 7001150174</p>
        </div>

        <div className={styles.contactHeader}>
          <MailIcon />
          <span>Email</span>
        </div>
        <div className={styles.contactBody}>
          <a href="mailto: thetimesofsikkim@gmail.com">
            thetimesofsikkim@gmail.com
          </a>
        </div>

        <div className={styles.contactHeader}>
          <InterestsIcon />
          <span>Follow us on Social Media</span>
        </div>
        <div className={styles.contactBody}>
          <SocialMedia />
        </div>
      </div>
    </Layout>
  );
};

export default contact;

'use client';
import Layout from "@/components/Layout";
import NewsGrid from "@/components/SquareNewsGrid";
import styles from "@/styles/CategoriesPage.module.css";
import HomeStyles from "@/styles/HomePage.module.css";


export default function GridPrint({categoryDetails}){
    console.log(categoryDetails);
    return(  
        <Layout styles = {HomeStyles.LayoutStyle}>
        {categoryDetails.attributes.articles.data.length != 0 ? (
            <NewsGrid
              articles={categoryDetails.attributes.articles.data}
              header={
                "Search Results for " +
                categoryDetails.attributes.name.charAt(0).toUpperCase() +
                categoryDetails.attributes.name.substr(1).toLowerCase()
              }
              isPageGrid
            />
            // <>divvv</>
        ) : (
          <p className={styles.notAvailable}>
            No Results Found for {categoryDetails.attributes.name.charAt(0).toUpperCase()}
          </p>
        )}
        </Layout>   
    )
}
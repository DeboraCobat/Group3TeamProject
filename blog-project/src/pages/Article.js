import { useParams } from "react-router-dom";
import ArticleContent from "./ArticleContent";  // import the ArticleContent component

const Article = () => {
    const { articleId } = useParams();
    const article = ArticleContent.find(article => article.id === articleId);

    return (
        <>
        <h1>{article.title}</h1>
        {/* <p>Author: {article.author}</p>
        <p>Date Created: {article.dateCreated}</p> */}
        {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
        ))}
        </>
    );
}



export default Article;

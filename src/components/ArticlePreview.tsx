import { useLocation } from 'react-router-dom';
import {useState, useEffect } from 'react';
function ArticlePreview() {
    const [articleId, setArticleId] = useState('')
    const location = useLocation()

    useEffect(() => {
        // Estrai l'ID dell'articolo dall'URL
        // Supponendo che l'URL sia nel formato "/123456"
        const pathId = location.pathname.substring(1)
console.log(pathId)
        setArticleId(pathId)
    }, [location])

const fetchArticle = async () => {
    let url = `https://api.spaceflightnewsapi.net/v4/articles/:id`
}

    return (
        <>
        </>
    );
}

export default ArticlePreview;

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Result } from '../uility/interfacesFetchData'
import { Container, Row, Col } from'react-bootstrap';
function ArticlePreview() {
    const [articleId, setArticleId] = useState('');
    const location = useLocation();
    const [article, setArticle] = useState<Result | null>(null)

    useEffect(() => {
        const pathId = location.pathname.substring(1);
        setArticleId(pathId);
    }, [location.pathname])

    useEffect(() => {
        const fetchArticle = async () => {
            const url = `https://api.spaceflightnewsapi.net/v4/articles/${articleId}`
            try {
                const response = await fetch(url)
                if (response.ok) {
                    console.log('fetch ok')
                    setArticle(await response.json())
                }
            } catch (error) {
                console.error(error)
            } finally {
                // Setto fine loading
            }
        }

        fetchArticle()
    }, [articleId])

    return (
        <>
        <Container>
            <Row>
                <Col xs={10} className='d-flex flex-column justify-content-center align-items-center text-white'>
                    <h1>{article?.title}</h1>
                    <div className='d-flex container-fluid'>
                    <img src={article?.image_url} alt={article?.title} className='img-fluid mx-5' />
                    </div>
                    <p>{article?.summary}</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default ArticlePreview

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Result } from '../uility/interfacesFetchData';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
    article: Result;
}

function ArticleCard({ article }: ArticleCardProps) { // Destrutturazione delle props
  return (
    <Card key={article.id} className="m-2 text-white p-2 articleCard" >
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title> 
        <Card.Text className='riassuntoArticolo'>
          {article.summary} 
        </Card.Text>
        <Link to={`/${article.id}`}>
        <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;

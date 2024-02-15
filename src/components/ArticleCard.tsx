import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Result } from '../uility/interfacesFetchData';

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
        <Button variant="primary" href={article.url}>Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;

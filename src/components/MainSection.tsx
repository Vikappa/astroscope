import { useEffect, useState } from "react"
import { Welcome, Result, Launch } from "../uility/interfacesFetchData"
import ArticleCard from "./ArticleCard"

function MainSection() {
    const [currentFetchData, setData] = useState<Welcome>()

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/')
            if (response.ok) {
                const data = await response.json();
                const articles: Welcome = {
                    count: data.count,
                    next: data.next,
                    previous: data.previous,
                    results: data.results.map((result: Result) => ({
                        featured: result.featured,
                        id: result.id,
                        image_url: result.image_url,
                        news_site: result.news_site,
                        published_at: new Date(result.published_at),
                        updated_at: new Date(result.updated_at),
                        summary: result.summary,
                        title: result.title,
                        url: result.url,
                        launches: result.launches.map((launch: Launch) => ({
                            launch_id: launch.launch_id,
                            provider: launch.provider
                        }))
                    }))
                }
                 setData(articles)

            } else {
                throw new Error('Errore fetch')
            }
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {currentFetchData?.results.map((article, index) => (
                <ArticleCard key={index} article={article} />
            ))}
        </div>
    );
}

export default MainSection

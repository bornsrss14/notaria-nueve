import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { allMainArticles } from "../hooks/allMainArticles";
import { ContactoFooter } from "./ContactoFooter";
import { bannerArticles } from "../hooks/bannerArticles";
import DetailedObjectArticle from "./DetailedObjectArticle";
import MainSelectedArticleBanner from "./MainSelectedArticleBanner";
import RightItem from "./RightItem";

export const DetailedArticle = () => {
  const { id } = useParams();
  const article =
    allMainArticles.find((item) => item.id === parseInt(id)) ||
    bannerArticles.find((item) => item.id === parseInt(id));
  if (!article) {
    return <p>Article not found!</p>;
  }
  return (
    <div>
      <div>
        <MainSelectedArticleBanner articleSelectedDetail={article} />
      </div>
      <div className="container-detailed-article">
        <section>
          <div>ID del artículo: {id}</div>
          <DetailedObjectArticle objectItem={article} />
        </section>
        {/* Aquí se renderizan los articulos de la derecha en miniatura */}
        <section className="articles-thumbnail">
          {allMainArticles.map((item, index) => {
            return (
              <Link key={index} to={`/detalle-articulo/${1000 + index}`}>
                <RightItem
                  key={100 + index}
                  contentItem={item.content}
                  titleIteme={item.titleArticle}
                />
              </Link>
            );
          })}
        </section>
      </div>
      <ContactoFooter />
    </div>
  );
};
export default DetailedArticle;

import ImageFitRectangle from "./ImageFitRectangle";
export const MainSelectedArticleBanner = ({ articleSelectedDetail }) => {
  return (
    <div className="background-articles">
      <div id="grid-main-article">
        <div className="wrapper-mark-up-singleArticle">
          <p>Inicio -Artículos Notariales</p>
          <div>
            <h2>{articleSelectedDetail.titleArticle}</h2>
            <div>
              <p>{articleSelectedDetail.subTitleArticle}</p>
            </div>
          </div>
        </div>
        <div className="banner-img-article">
          <ImageFitRectangle
            width="clamp(100%, 10vw, 720px)"
            height="clamp(150px, 25vw, 300px)"
            src={articleSelectedDetail.bannerArticle}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSelectedArticleBanner;

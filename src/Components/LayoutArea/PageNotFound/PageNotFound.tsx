import ImageError from "../../../Assets/Images/page-not-found-error-404-template-vector-14996073.jpg"
import useTitle from "../../../Utils/UseTitle"
import "./PageNotFound.css"
function PageNotFound(): JSX.Element {
    useTitle("Page Not Found")
    return (
        <div className="DivError">
            <h2>404 Page not found :(</h2>
            <img src={ImageError} />
        </div>
    )
}
export default PageNotFound
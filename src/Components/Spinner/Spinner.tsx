import "./Spinner.css";
import spinner from "../../Assets/Images/Bean Eater-1s-200px.gif"

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={spinner} alt="" />
        </div>
    );
}

export default Spinner;

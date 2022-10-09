import PropTypes from "prop-types";

export default function SummaryCard({ title = "", count = 0 }) {
    return (
        <div className="divCustomizacaoPlacar">
            <p style={{ paddingTop: "10px" }}> {title} </p>
            <p style={{ fontSize: "22px", marginBottom: "25px", verticalAlign: "top", height: "25px" }}> {count} </p>
        </div>
    )
}
SummaryCard.propTypes = {
    title: PropTypes.string,
    card: PropTypes.number
}
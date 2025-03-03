import iconMoney from "../../assets/img/icon-money.webp"
function Mony(){
    return(
        <div className="feature-item">
            <img
                src={iconMoney}
                alt="Mony Icon"
                className="feature-icon"
            />
            <h3 className="feature-item-title">More savings means higher rates</h3>
            <p>
                The more you save with us, the higher your interest rate will be!
            </p>
        </div>
    )
}
export default Mony
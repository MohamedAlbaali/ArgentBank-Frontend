function HomeIcons({src, title, content}){
    return(
        <div className="feature-item">
            <img src={src} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{content}</p>
        </div>
    )
}
export default HomeIcons
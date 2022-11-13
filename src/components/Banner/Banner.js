import "./Banner.scss"


function Banner({ bgImg, heading, text, link, width, height }) {
    return (
        <div className="banner" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: `${height}px`,
            width: `${width}vw`,
            maxWidth: `${width}%`
        }
        }>
            <div className="banner__wrapper">
                <h2 className="banner__heading">{heading}</h2>
                <p className="banner__text">{text}</p>
                <a className="banner__button" href={link}>More</a>
            </div>
        </div >
    );
}
export default Banner;
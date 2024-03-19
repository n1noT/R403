export default function ButtonMenu({ image, title }) {
    return (
        <>
            <div className="menu__list-box-image">
                <img src={image} alt="" className="menu__list-img"></img>
            </div>
            <h3 className="menu__list-subtitle">{title}</h3>
        </>
  
    );
  }
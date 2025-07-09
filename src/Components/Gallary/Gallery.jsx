const galleryImages = [
    { src: "../images/2wheel.webp", alt: "2 Wheel" },
    { src: "../images/Gallery3Image.webp", alt: "2 Wheel" },
    { src: "../images/four_wheel.jpg", alt: "4 Wheel" },
    { src: "../images/truck image.png", alt: "Truck" },
  ];
const Gallery=()=>{
    return(
        <section className="gallery" id="Gallery">
            <h1>Gallery</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu magna id odio facilisis iaculis aliquet eget ante. Aliquam sem nisi, hendreFusce a neque non dolor consectetur condimentum.rit sit amet malesuada eu, vulputate sit amet metus. Phasellus aliquet mi id diam ornare luctus. Proin lacinia leo ligula.  </p> */}
            <div className="galleryList">
            {galleryImages.map((item, index) => (
              <div key={index} className="galleryItem" style={{ overflow: "hidden" }}>
                <img src={item.src} alt={item.alt} style={{ width: "100%", height: "100%" }} />
              </div>
            ))}
            </div>
        </section>)
}
export default Gallery
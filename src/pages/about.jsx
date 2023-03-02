import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="about-page-wrapper">
        <div className="about-container">
          <div className="about-text">
            <h1 className="about-title">Sobre nós</h1>
            <p>Tudo começou com um sonho...</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              consectetur, nulla ut mattis aliquet, tortor lectus ultricies
              nulla, quis pharetra neque nisl vitae tortor. Vestibulum
              vestibulum magna ut aliquam dictum. Fusce ex ex, condimentum vel
              enim sit amet, sodales vehicula urna. Aenean dignissim posuere
              arcu, at gravida felis porttitor in. Etiam blandit id justo
              egestas egestas. Nulla posuere augue a scelerisque posuere.
            </p>
            <p>
              Mauris non velit in nisi mollis accumsan eget in justo. In ac
              euismod nisi. Nulla non egestas tellus. Suspendisse in egestas
              dui. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Sed convallis convallis justo, et
              placerat dolor egestas eget. Nunc erat lectus, molestie ut justo
              et, elementum ultrices justo.{" "}
            </p>
            <Link  href="/">
              <button id="about-btn">Voltar para home</button>
            </Link>
          </div>

          <div className="about-img">
            <img
              id="rescue-dogs"
              src="/woman-playing-with-rescue-dogs-shelter.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

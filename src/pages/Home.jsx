import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Carousel from 'react-bootstrap/Carousel';
import Botao from '../Botao'


function Home() {
  return (
    <div className="site">
      <Cabeca />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carrinho"
            src="https://www.cec.com.br/files/blog/posts/2021/11_novembro/20211110/Quarto-gamer-700x409_1.png"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrinho"
            src="https://i0.statig.com.br/bancodeimagens/9b/2m/02/9b2m028pvh9gfdeecienct0m7.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrinho"
            src="https://www.kabum.com.br/hotsite/blackfriday/img/black-friday-dicas-para-comprar-um-setup-gamer-insano-na-black-friday-do-kabum.webp"
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 carrinho"
            src="https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=545&format=webp&quality=60&imagick=/wp-content/uploads/2021/09/super.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr />


      <h2 className="text-center">Sobre nós:</h2>


      <div className="text-center">



        <p className="texto">
          Bem-vindo à Inova Tech, o seu destino definitivo para periféricos gamers de alta qualidade e desempenho excepcional! Aqui na Inova Tech, estamos dedicados a proporcionar uma experiência única para os entusiastas de jogos, oferecendo uma ampla gama de produtos cuidadosamente selecionados para aprimorar o seu setup e elevar o seu jogo a novos patamares.</p>

        <p className="texto">
          Em nossa loja, você encontrará uma seleção abrangente de periféricos gamers, desde teclados mecânicos e mouses de alta precisão até headsets imersivos e mousepads de qualidade premium. Trabalhamos apenas com marcas renomadas e produtos testados para garantir que você tenha acesso ao que há de melhor no mercado.</p>

      </div>
   



    <div className="text-center">

          <Botao/>  
</div>



      <Rodape />
    </div>
  )
}

export default Home
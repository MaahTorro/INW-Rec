import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Produtos from "../Produtos";


function Home() {
  return (
    <div className="site">
      <Cabeca />
   
      <div className="produtocont">
        <Produtos image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pg-cfvp1oled-bl01014014_1.jpg" preco="1.699,99" />
        <Produtos image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pg-omgs-asc.jpg" preco="799,99" />
        <Produtos image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/z/n/zno-vzonpro-bl017.jpg" preco="99,99" />
      </div>
      <div className="produtocont">
        <Produtos image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/1/3/13950-88.jpg" preco="976,99" />
        <Produtos image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/m/p/mpe-6501-acaaw-bbr155.jpg" preco="399,99" />
        <Produtos image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/m/7/m711wp5.jpg" preco="119,90" />
      </div>
      <div className="produtocont">
        <Produtos image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/d/u/dual-rtx4060ti-o8g-white4.jpg" preco="1.799,99" />
        <Produtos image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/m/c/mcr-bhr-rgb45545.jpg" preco="999,99" />
        <Produtos image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/z/n/zns-zncr10w-rgbc01125454.jpg" preco="49,90" />
      </div>
      <Rodape />
    </div>
  )
}

export default Home
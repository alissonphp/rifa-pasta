import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Numbers from "components/Numbers";

type InfosProps = {
  partner: string;
};

const Infos = (props: InfosProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 p-5">
          <div className="row mb-4">
            <div className="col-md-12">
              <h1>Sorteio do Dia dos Namorados</h1>
              <h4>
                Uma linda pasta maçônica tamanho G, para guardar todos os paramentos e materiais para as sessões.
                Material em couro com emblema da Maçonaria.
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-4">
              <ul className="list-group">
                <div
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Valor do número</h5>
                    <small>
                      <a href="/">PIX: 98991201858 (Cunhada Franssinete)</a>
                    </small>
                  </div>
                  <p className="mb-1">R$ 30,00</p>
                </div>
                <div className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Data do sorteio</h5>
                    <small className="text-muted">às 21h00</small>
                  </div>
                  <p className="mb-1">11 de junho de 2022</p>
                </div>

                <div className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Oferecido por</h5>
                    <small className="text-muted">
                    <a href="https://wa.me/5598991201858?text=Gostaria de mais informações sobre Sorteio da Pasta"><FontAwesomeIcon icon={faWhatsapp}/> (98)
                      99120-1858</a>
                    </small>
                  </div>
                  <p className="mb-1">Clube das Samaritanas da ARLS Lauro Sodré N 03</p>
                </div>

                <div className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Regulamento</h5>
                  </div>
                  <div className="mb-1">
                      <ul>
                          <li>A venda dos bilhetes será por meio digital, utilizando essa plataforma e o Whatsapp para comunicações.</li>
                          <li>Os pagamentos devem ser feitos utilizando o PIX do ofertante: 98991201858 (Telefone)</li>
                          <li>Só poderão ser sorteados os números que tiverem os pagamento devidamente confirmados via comprovante do PIX.</li>
                          <li>O sorteio será realizado utilizando o "o globo" com bolas numeradas de 0 a 9, onde serão selecionadas 2 de forma a compor o número sorteado.</li>
                      </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-md-12">
          <Numbers partner={props.partner} />
        </div>
      </div>
    </div>
  );
};

export default Infos;

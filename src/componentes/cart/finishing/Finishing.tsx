import './Finishing.css';

function Finishing() {
    return (
        <>
            <main id='container22'>

                {/* <article id='delivery'>
                    <h2>Entrega</h2>
                    <p>Calcule aqui seu valor de entrega , insira seu CEP abaixo para simular o valor.</p>
                    <form id='formCep'>
                        <input type="address" id='cep' placeholder='00000-000' />
                        <button type="submit" value="Calcular" className="btn">Calcular</button>
                    </form>
                    <a href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" target='_blank' id='linkCep'>
                        <h4>Não sei meu CEP</h4>
                    </a>
                </article> */}
                <article id='finishing'>
                    {/* <div id='coupon'>
                        <label htmlFor="cupom" id='textCoupon'>Cupom</label>
                        <input type="text" id="labelCoupon" placeholder='CupomGreeniverse' />
                        <button type="submit" value="Aplicar" className="btn">Aplicar</button>
                    </div> */}
                    <ul id='listFin'>
                    <li>Produtos</li>
                    <li>Quantidade</li>
                    <li>Destino</li>
                    </ul>
                    <div className="divBtn">
                    <button className='btFinish' type="submit" value="Finishing" >Finalizar Pedido</button>
                    </div>
                </article>

            </main>
        </>
    );
}

export default Finishing;
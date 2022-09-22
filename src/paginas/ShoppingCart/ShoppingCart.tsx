import Finishing from '../../componentes/cart/finishing/Finishing';
import FooterTwo from '../../componentes/cart/footerTwo/FooterTwo';
import InfoProducts from '../../componentes/cart/infoProducts/InfoProducts';
import './ShoppingCart.css';


function ShoppingCart(){
    return(
        <>
        <InfoProducts />
        <Finishing />
        <FooterTwo />
        </>
    );
}

export default ShoppingCart;
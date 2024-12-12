import Header from "../components/Header";
import Footer from "../components/Footer";
import { useStoreContext } from "../context"
import { useNavigate } from "react-router-dom";

const CartView = () => {
    const { cart, setCart } = useStoreContext();
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            {cart.entrySeq().map(([key, value]) => { return (
                <>
                    <p key={key}>{value.title}</p>
                    <button onClick={() => setCart((check) => check.delete(key))}>Remove</button>
                </>
            ) })}
            <button onClick={() => navigate("/movies")}>Back</button>
            <Footer />
        </div>
    )
}

export default CartView;
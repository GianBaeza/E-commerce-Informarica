import { useState } from "react";
import "./CheckoutForm.css";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/Config";
import { Formik, Form, Field } from "formik";



const CheckoutForm = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");

    const comprar = (data) => {
        const order = {
            cliente: data,
            products: cart,
            total: totalPrice(),
        };

        const orderRef = collection(db, "orders");

        addDoc(orderRef, order).then((doc) => {
            setOrderId(doc.id);
            clearCart();
        });
    };

    if (orderId) {
        return (
            <div className="OrdenGenerada">
                <h1 className="OrdenGeneradah1"> Muchas gracias por tu compra </h1>
                <p className=""> Numero de pedido es : {orderId} </p>
            </div>
        );
    }






    return (
        <div className="ContainerCheck">
            <div className="H1 Check">
                <h1 className="CheckoutH1"> Checkout </h1>
            </div>
            <Formik
                initialValues={{ nombre: "", telefono: "", mail: '' }}
                onSubmit={(values) => comprar(values)}

            >
                <Form className="FromCheck">
                    <label className="LabelCheck">
                        Nombre
                        <Field className="InputCheck" type="text" name="nombre" />
                    </label>
                    <label className="LabelCheck">
                        Telefono
                        <Field className="InputCheck" type="text" name="telefono" />
                    </label>
                    <label className="LabelCheck">
                        Email
                        <Field className="InputCheck" type="email" name="mail" />
                    </label>
                    <div className="LabelCheck">
                        <button type="submit" className="ButtonCheck">
                            Generar orden
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default CheckoutForm;

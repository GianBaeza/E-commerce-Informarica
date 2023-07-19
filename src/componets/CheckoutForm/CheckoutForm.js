import { useState } from "react"
import './CheckoutForm.css';
import { addDoc, collection, getFirestore } from "firebase/firestore";





const CheckoutForm = ({ onConfirm }) =>{
    const [name, setName]= useState('')
    const [phone, setPhone]= useState('')
    const [email, setEmail]= useState('')

    const handleConfirm = (event)=>{
        event.preventDefault()

        const userData ={
            name, phone,email
        }
        onConfirm(userData)
    }

    

    return(
        <div className="ContainerCheck">

            <div className="H1 Check">

            <h1 className="CheckoutH1"> Checkout </h1>

            </div>
            <form onSubmit={handleConfirm} className="FromCheck">

    

                <label className="LabelCheck">
                     Nombre
                    <input className="InputCheck" type="text" value={name} onChange={({target})=> setName(target.value)}/>
                    
                    
                </label>
                <label className="LabelCheck">
                     Telefono
                    <input className="InputCheck" type="text" value={phone} onChange={({target})=> setPhone(target.value)}/>
                    
                    
                </label>
                <label className="LabelCheck">
                     Email
                    <input className="InputCheck" type="email" value={email} onChange={({target})=> setEmail(target.value)}/>
                    
                    
                </label>
                <div className="LabelCheck">

                    <button type="submit" className="ButtonCheck" > Generar orden </button>

                </div>

            </form>
        </div>
    )

}

export default CheckoutForm;
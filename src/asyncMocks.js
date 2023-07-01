const products = [
    {
        id : '1',
        name: 'G PRO X Superlight',
        price: 73.099,
        category: 'Mouse',
        img:'https://i.postimg.cc/vT1jrQ0H/Imagen-1.png',
        stock: 4,
        description: 'El nuevo favorito de los mejores profesionales de esports pesa menos de 63 gramos y se desliza sin apenas fricción. PRO X SUPERLIGHT hace gala de nuestra tecnología de diseño ZERØ OPOSICIÓN, nuestro propósito de eliminar obstáculos y crear una conexión lo más pura posible entre el jugador y el juego.'

    },

    {
        id:'2',
        name:'Logitech G203',
        price: 15.999,
        category: 'Mouse',
        img:'https://i.postimg.cc/QdpzJNr0/imagen-2.png',
        stock: 13,
        description: 'Aprovecha al máximo tu tiempo de juego con el ratón G203 para gaming, con tecnología LIGHTSYNC, un sensor para gaming y un diseño clásico con 6 botones. Anima tu juego... y tu escritorio- PREVENTA: Se despachará a partir del 26/5/2022.'

    },

    {
        id:'3',
        name: 'Logitech G305',
        price: 22.999,
        category: 'Mouse',
        img: 'https://i.postimg.cc/dVjjHLNN/imagen-3.png',
        stock: 2 ,
        description: 'Diseñado para el rendimiento, G305 incorpora el sensor Hero que ofrece un rendimiento de 12.000 dpi y conectividad inalámbrica Ligthspeed de 1 ms en una solución ya disponible y muy asequible.'

    }
]
export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}


export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{

         resolve(products.find(prod => prod.id === productId))

        }, 500)

    }) 

    
}
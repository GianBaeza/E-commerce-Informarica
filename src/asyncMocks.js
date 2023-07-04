const products = [
    {
        id :'1',
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

    },


    {
        id:'4',
        name: 'Mechanical Mini',
        price: 93.999,
        category: 'Teclado',
        img: 'https://i.postimg.cc/T1R6KCQZ/158847-1200-1200.png',
        stock: 4,
        description:'Logitech MX Mechanical Mini, un teclado minimalista con una sensación, precisión y rendimiento extraordinarios.'
    },

    {
        id:'5',
        name: 'Pro X Clicky',
        price: 74.599,
        category: 'Teclado',
        img: 'https://i.postimg.cc/y8Trds2Y/157519-1200-1200.png',
        stock: 8,
        description:'Diseñado en colaboración con profesionales de los deportes electrónicos para los más altos niveles de rendimiento, diseño compacto y elección de usuario intercambiable',
    },

    {
        id:'6',
        name: 'G Pro',
        price: 71.199,
        category: 'Teclado',
        img: 'https://i.postimg.cc/mk8tkc3y/157662-1200-1200.png',
        stock: 3,
        description:'Logitech G PRO Mechanical Gaming Keyboard - Idioma: Ingles.',
    }




];


export const getProducts = () => {

    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}


export const getProductById = (productId) => {

    return new Promise((resolve) => {
        setTimeout(() => {

         resolve(products.find(prod => prod.id === productId))

        }, 500)

    }) 

    
}

export const getProductsByCategory = (productsCategory) => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            let prodFilter = products.filter(prod => prod.category === productsCategory)
            resolve(prodFilter)
        }, 500);
    })
}
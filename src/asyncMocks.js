const products = [
    {
        id :'1',
        name: 'G PRO X Superlight',
        price: 73.099,
        category: 'Mouse',
        img:'https://i.postimg.cc/vT1jrQ0H/Imagen-1.png ',
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
        name: 'Mouse Pro Wireless',
        price: 48.399,
        category: 'Mouse',
        img: 'https://i.postimg.cc/vZjcZSxD/158874-1200-1200.png',
        stock: 6,
        description:'Logitech G colaboró con más de 50 jugadores profesionales para decidir la forma, el peso y la sensación perfectos para combinarlos con nuestras tecnologías LIGHTSPEED'

    },


    {
        id:'5',
        name: 'Mechanical Mini',
        price: 93.999,
        category: 'Teclado',
        img: 'https://i.postimg.cc/T1R6KCQZ/158847-1200-1200.png',
        stock: 4,
        description:'Logitech MX Mechanical Mini, un teclado minimalista con una sensación, precisión y rendimiento extraordinarios.'
    },

    {
        id:'6',
        name: 'K8935 TKL',
        price: 32.999,
        category: 'Teclado',
        img: 'https://i.postimg.cc/Rhng2Ytf/157858-1200-1200.png',
        stock: 7,
        description:'Teclado mecánico de aluminio con cable K835 TKL <br> Idioma: Español <br>Switch Blue'


    },

    {
        id:'7',
        name: 'Pro X Clicky',
        price: 74.599,
        category: 'Teclado',
        img: 'https://i.postimg.cc/y8Trds2Y/157519-1200-1200.png',
        stock: 8,
        description:'Diseñado en colaboración con profesionales de los deportes electrónicos para los más altos niveles de rendimiento, diseño compacto y elección de usuario intercambiable',
    },

    {
        id:'8',
        name: 'G Pro',
        price: 71.199,
        category: 'Teclado',
        img: 'https://i.postimg.cc/mk8tkc3y/157662-1200-1200.png',
        stock: 3,
        description:'Logitech G PRO Mechanical Gaming Keyboard - Idioma: Ingles.',
    },

    {
        id:'9',
        name: 'TUF Gaming',
        price: 140.999,
        category: 'Monitor',
        img: 'https://i.postimg.cc/d1W0gHFq/w692.png',
        stock: 3,
        description: 'Monitor para juegos Full HD (1920 x 1080) de 23.8 pulgadas con frecuencia de actualización ultrarrápida de 165 Hz diseñado para jugadores profesionales y juegos inmersivos.'
    },

    {
        id:'10',
        name: 'Monitor curvo',
        price: 90.999,
        category: 'Monitor',
        img: 'https://i.postimg.cc/5tr43HS0/w692.png',
        stock: 3,
        description:'Monitor de juegos curvo WFHD (2560 x 1080) 1500R de 29.5 pulgadas con frecuencia de actualización ultrarrápida de 200Hz diseñado para jugadores profesionales y juegos inmersivos. '
    },

    {

        id:'11',
        name: 'ASUS VP349CGL',
        price: 220.999,
        category: 'Monitor',
        img: 'https://i.postimg.cc/vHGs5Lwh/w692.png',
        stock: 9,
        description: 'Pantalla ultra ancha de 21: 9 3440 x 1440 IPS con ángulo de visión amplio de 178° con un diseño de borde a borde sin marco para una experiencia cinematográfica impecable y una productividad mejorada.'
    },

    {
        id:'12',
        name: 'ZAKU II',
        price: 122.999,
        category: 'Monitor',
        img: 'https://i.postimg.cc/d1W0gHFq/w692.png',
        stock: 5,
        description:'ASUS TUF Gaming VG27AQGL1A ZAKU II EDITION cuenta con un panel IPS WQHD (2560 x 1440) de 27 pulgadas que ofrece una asombrosa relación de contraste de 1,000: 1 e imágenes superiores, con colores sobresalientes en el 130% de la gama sRGB y certificación DisplayHDR™ 400.'

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
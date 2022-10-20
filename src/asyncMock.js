const products = [
    {
        id: '1',
        name: 'Toy Story ',
        price: 310,
        category: 'infantil',
        img: 'https://lumiere-a.akamaihd.net/v1/images/image_bf8739ba.jpeg?region=0,0,540,810',
        descripcion: 'blablablabla'
    },
    {
        id: '2',
        name: 'Elvis ',
        price: 290,
        category: 'biografia',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPigxpiumipUnEa9Iy54Tim341TRHedVXU9LD4DK7csPz-jSJ3AXuIBTCGmN2zInWW3s8&usqp=CAU',
        descripcion: 'blablablabla'
    },
    {
        id: '3',
        name: 'Top Gun ',
        price: 370,
        category: 'accion',
        img: 'https://images.justwatch.com/poster/266397128/s718/vesper.%7Bformat%7D',
        descripcion: 'blablablabla'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
        
    })
}
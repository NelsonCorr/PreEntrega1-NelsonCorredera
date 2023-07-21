const products = [
    {
        id: '1',
        nombre: 'Brazo robot B-501',
        precio: 20000,
        categoria: 'brazo',
        img: 'https://ordenadores-y-portatiles.com/wp-content/uploads/2020/06/Brazo-robotico.jpg',
        stock:10,
        descripcion: 'Brazo robotico con 2 puntos de articulacion de maximo 90 grados'

    },
    {
        id: '2',
        nombre: 'Torno T-202',
        precio: 15000,
        categoria: 'torno',
        img: 'https://www.joseangelmercado.com/wp-content/uploads/2017/10/Serie_TC.jpg',
        stock:50,
        descripcion: 'Torno CNC de 200 metros de largo'

    },
    {
        id: '3',
        nombre: 'Milling CM-155',
        precio: 30000,
        categoria: 'centro',
        img: 'https://www.traviscnc.com/clients/travis/product/product/images/189_medium.jpg',
        stock: 20,
        descripcion: 'Centro de mecnaizado con 4to eje'

    },
]

export const getProducts = ()=> {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}
export const getProductsByCategory = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.categoria === categoriaId))
        },500)
    })
}
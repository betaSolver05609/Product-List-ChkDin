import axios from 'axios';

const productListApi=axios.create({
    baseURL: 'https://asos2.p.rapidapi.com/products/v2/',
    params: {
        store: 'US',
        offset: '0',
        categoryId: '4209',
        limit: '48',
        country: 'US',
        sort: 'freshness',
        currency: 'USD',
        sizeSchema: 'US',
        lang: 'en-US'
      },
      headers: {
        'X-RapidAPI-Key': '176f6a3ddcmshe9df42b96c1f5d3p13f2e2jsn1cc15598e897',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
})

export async function getProductDetails() {
    let response='';
    let errorMessage='';
    try {
        let response=await productListApi.get('list');
        return response;
    }
    catch(error){
        console.log(error)
    }
}
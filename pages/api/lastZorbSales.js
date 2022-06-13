const lastZorbSales =  async (zdk) => {
    try {
        let results = await zdk.sales({ 
            'where': {
                'collectionAddresses': '0xca21d4228cdcc68d4e23807e5e370c07577dd152'
            }
            }
          );
    
        return results;
    } catch(e) {
        console.log(e);
    }
}

export default lastZorbSales;
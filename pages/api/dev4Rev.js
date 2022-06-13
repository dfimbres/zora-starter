const devs4Rev =  async (zdk) => {
    try {
        let results = await zdk.aggregateAttributes(
            { 
                'where.collectionAddresses': '0xca21d4228cdcc68d4e23807e5e370c07577dd152',
                'where.ownerAddresses': 'kidme.eth'
            }
          );
    
        console.log(results);
        return results;
    } catch(e) {
        console.log(e);
    }
}

export default devs4Rev;
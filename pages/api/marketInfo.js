const marketInfo = async (zdk, address) => {
    try {
        let results = await zdk.floorPrice({
          'where': {
            'collectionAddresses': "0xca21d4228cdcc68d4e23807e5e370c07577dd152"
          },
        });
    
        return results.aggregateStat.floorPrice;
      } catch(e) {
          console.log(e);
      }
}

export default marketInfo;
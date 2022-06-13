const marketInfo = async (zdk, address) => {
    try {
        let results = await zdk.markets({
          'where': {
            'collectionAddresses': [address]
          },
          // 'pagination': {
          //     'limit': 4
          // }
        });
    
        return results;
      } catch(e) {
          console.log(e);
      }
}

export default marketInfo;
const ownerTokens =  async (zdk, ownerAddresses) => {
    try {
      let results = await zdk.tokens({
        'where': {
          ownerAddresses
        }
      });
  
      console.log(results);
      return results;
    } catch(e) {
        console.log(e);
    }
}

export default ownerTokens;
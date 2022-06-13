const ownerTokens =  async (zdk, ownerAddresses) => {
    try {
      let results = await zdk.tokens({
        'where': {
          ownerAddresses
        }
      });
  
      return results.tokens.nodes;
    } catch(e) {
        console.log(e);
    }
}

export default ownerTokens;
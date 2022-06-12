const devs4Rev =  async (zdk) => {
    try {
        let results = await zdk.collection(
            { 'address': '0x25ed58c027921E14D86380eA2646E3a1B5C55A8b' }
          );
    
        console.log(results);
        return results;
    } catch(e) {
        console.log(e);
    }
}

export default devs4Rev;
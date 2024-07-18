const postPurge = async (client, type, urls) => {
  try {
    let result;
    const urlList = urls ? urls.split('\n').filter(url => url.trim() !== '') : [];
    
    if (urlList.length === 0) {
      throw new Error('Nenhuma URL válida fornecida');
    }

    switch (type) {
      case 'url':
        result = await client.purge.purgeURL(urlList);
        break;
      case 'cacheKey':
        result = await client.purge.purgeCacheKey(urlList);
        break;
      case 'wildcard':
        result = await client.purge.purgeWildCard(urlList);
        break;
      default:
        throw new Error('Tipo de purge inválido');
    }
    return result;
  } catch (error) {
    console.error('Erro ao executar purge:', error);
    return { error: error.message };
  }
};

export default postPurge;
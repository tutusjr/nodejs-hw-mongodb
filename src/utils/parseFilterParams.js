const isString = (query) => {
    return typeof query === 'string';
  };
  
  const parseFavourite = (isFavourite) => {
    if (!isString(isFavourite)) return;
  
    const parsedFavourite = isFavourite.toLowerCase() === 'true';
    return parsedFavourite;
  };
  
  const parseType = (type) => {
    if (!isString(type)) return;
  
    const isType = (type) => {
      return ['work', 'home', 'personal'].includes(type);
    };
    if (isType(type)) {
      return type;
    }
  };
  
  export const parseFilterParams = (query) => {
    const { type, isFavourite } = query;
    const parsedFavourite = parseFavourite(isFavourite);
    const parsedType = parseType(type);
  
    return {
      isFavourite: parsedFavourite,
      contactType: parsedType,
    };
  };
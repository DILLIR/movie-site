const uniqueObjects = (objects, param) => {
  let objectsParam = [];

  objects = objects.filter((item) => {
    let isDuplicate = objectsParam.includes(item[param]);

    if (!isDuplicate) {
      objectsParam.push(item[param]);
      return true;
    }

    return false;
  });

  return objects;
};

export default uniqueObjects;

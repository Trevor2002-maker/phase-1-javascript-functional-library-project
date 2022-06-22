const InputStandard = function(group) {
    return (group instanceof Array) ? group.slice() : Object.values(group);
  }
  
  const myEach = function(group, callback) {
    const newGroup = InputStandard(group);
  
    for (let idx = 0; idx < newGroup.length; idx++) {
      callback(newGroup[idx]);
    }
  
    return group;
  }
  
  const myMap = function(group, callback) {
    const newGroup = InputStandard(group);
  
    const newArr = [];
  
    for (let idx = 0; idx < newGroup.length; idx++) {
      newArr.push(callback(newGroup[idx]));
    }
  
    return newArr;
  }
  
  const myReduce = function(group, callback, acc) {
    let newGroup = InputStandard(collection);

    if (!acc) {
      acc = newGroup[0];
      newGroup = newGroup.slice(1);
    }
  
    const len = newGroup.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newGroup[i], newGroup);
    }
    return acc;
  }
  
  const myFind = function(group, predicate) {
    const newGroup = InputStandard(collection);
  
    for (let idx = 0; idx < newGroup.length; idx++) {
      if (predicate(newGroup[idx])) return newGroup[idx];
    }
  
    return undefined;
  }
  
  const myFilter = function(group, predicate) {
    const newGroup = InputStandard(group);
  
    const newArr = [];
  
    for (let idx = 0; idx < newGroup.length; idx++) {
      if (predicate(newGroup[idx])) newArr.push(newGroup[idx]);
    }
  
    return newArr;
  }
  
  const mySize = function(group) {
    const newGroup = InputStandard(group);
    return newGroup.length;
  }
  

  
  const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
  
  const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }
  
  const mySortBy = function(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  const unpack = function(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
  }
  
  const myFlatten = function(group, shallow, newArr=[]) {
    if (shallow) {
      for (let val of group) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
      
      for (let val of collection) {
        if (Array.isArray(val)) {
      
          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
  }
  

  
  const myKeys = function(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
  const myValues = function(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }
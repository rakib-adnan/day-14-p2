/**
 * Data send to ls
 * @param {*} key 
 * @param {*} arr 
 */
 function dataSend(key ,arr){
    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);
}

/**
 * Data get to ls
 * @param {*} key 
 * @returns 
 */

function getData(key){
    let data = localStorage.getItem(key);
    return JSON.parse(data);
}
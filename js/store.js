//从localstorage中读取数据
function getData(){
   //如果本地localstorage中不存在数据
   if(!localStorage.getIten('geojson')){
    localStorage.setItem('geojson','[]')
   }

   return JSON.parse(localStorage.getIten('geojson'))
}

 //将数据保存到localstorage中
 function saveData(data){
    localStorage.setItem('geojson',JSON.stringify(data))
 }
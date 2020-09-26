

const lerFotos = async(callback) =>{
    const fotosHTTP = await fetch("http://192.168.15.163:3030/feed");
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);
}
export default lerFotos;
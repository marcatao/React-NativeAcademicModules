const getLikes = (curtiu) => {
    if(curtiu) return require("../../res/img/s2-checked.png");
    return require("../../res/img/s2.png");
}

const curtirFoto = (curtiu, likes) =>{
    if(curtiu) likes-=1;
    if(!curtiu) likes+=1;
    return [!curtiu, likes]
}

export {getLikes, curtirFoto}
  
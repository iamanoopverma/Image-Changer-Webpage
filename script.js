const mainImage=document.getElementById("mainImage");
const imgtags=document.getElementsByTagName("img");

document.addEventListener('DOMContentLoaded',()=>{
    imgtags[1].style.border="solid #156b1a";
})
function changeImage(imagePath){
     mainImage.style.opacity=0;
    setTimeout(()=> {
        mainImage.src=imagePath;
        mainImage.style.opacity=1;
        },400)
    for(let i=1;i<imgtags.length;i++){
        imgtags[i].style.border="none";
    }
    for(let i=1;i<imgtags.length;i++){
        if(imagePath==imgtags[i].src.slice(37)){
            imgtags[i].style.border="solid #156b1a";
        }
    }
}

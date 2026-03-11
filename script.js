function order(){

let id=document.getElementById("idgame").value
let server=document.getElementById("server").value
let produk=document.getElementById("produk").value

let text=`Halo admin NexotopupStore saya mau top up

ID Game: ${id}
Server: ${server}
Produk: ${produk}`

window.open("https://wa.me/6285369408241?text="+encodeURIComponent(text))

}

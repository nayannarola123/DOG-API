// let listPrint = document.getElementById("listPrint");
// let imgShow = document.getElementById("imgShow");
// const getData = () => {
//     fetch("https://dog.ceo/api/breeds/list/all").then((res) => {
//         return res.json();
//     }).then((data) => {

//         let list = data.message;

//         for(let key in list) {

//             if(list[key].length == 0) {
//                 listPrint.innerHTML += `<li onclick ="return listimg('${key}')">${key}</li>`
//                 console.log([key]);
//             } else {
//                 let orderlist = `<ol>`
//                 list[key].forEach(element => {
//                     orderlist += `<li>${element}<li>`
//                 });
//                 orderlist +=` </ol>`
//                 listPrint.innerHTML += `<li onclick ="return listimg('${key}')">${key} ${orderlist}</li>`
//             }
//         }
//     }).catch((err) => {
//         listPrint.innerHTML = `errr 404 ${err}`
//     })
// }
// getData();

// const listimg = (breed) => {
//     fetch(`https://dog.ceo/api/breed/${breed}/images`).then((res) => {

//         return res.json();
//     }).then((data) =>{

//         listimg = data.message;
//         console.log(listimg);

//         imgShow = "";
//         listimg.forEach = (imgPass) => {
//             imgShow += `<div class="col-3" style="max-width: 100%; object-fit:cover;">
//                                          <img src="${imgPass}"  height="100%">
//                                     </div>`
//         }

//     }).catch((err) => {
//         imgShow = `errr 404 ${err}`
//     })
// }

let listPrint = document.getElementById("listPrint");
let imgShow = document.getElementById("imgShow");

const getData = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let list = data.message;

            for (let key in list) {
                if (list[key].length == 0) {
                    listPrint.innerHTML += `<li onclick="listimg('${key}')">${key}</li>`;
                } else {
                    let orderlist = `<ol>`;
                    list[key].forEach((element) => {
                        orderlist += `<li>${element}</li>`;
                    });
                    orderlist += `</ol>`;
                    listPrint.innerHTML += `<li onclick="listimg('${key}')">${key} ${orderlist}</li>`;
                }
            }
        })
        .catch((err) => {
            listPrint.innerHTML = `Error 404 ${err}`;
        });
};

getData();

const listimg = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let listimg = data.message;

            // Clear previous content of imgShow
            imgShow.innerHTML = '';

            listimg.forEach((imgPass) => {
                imgShow.innerHTML += `<div class="col-3">
                                         <img src="${imgPass}" class="img-fluid">
                                    </div>`;
            });
        })
        .catch((err) => {
            imgShow.innerHTML = `Error 404 ${err}`;
        });
};



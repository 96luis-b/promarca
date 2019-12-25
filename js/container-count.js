/** JUMBO */ 
let card_count = (id, value)=>{
    return `
    <div id="${id}" class="col text-center mb-4" style="width:auto; height:auto;">
        <div class="card font-weight-bold card-shadow display-4">
            <div class="card-body">
                <p class="pt-1 cad-title txt-shadow-simple">${value}</p>
                <div class="row pt-4 text-right">
                    <div class="col-12 temp-count container-shadow"><p class="txt-black">0</p></div>
                    <div class="col-12 mt-1 pers-count container-shadow"><p class="txt-black">0</p></div>
                    <div class="col-12 mt-1 total-count container-shadow"><p class="txt-black">0</p></div>
                </div>
            </div>
        </div>
    </div>
    `
}



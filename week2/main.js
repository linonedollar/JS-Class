var obj={
    data:{
        //定義 KEY
        UUID:'0496c7f2-4935-4593-958d-166f7c698de5',
        //建立預存商品陣列
        products:[]
    },
    getData(){
        var vm=this;
        //連結六角學院API URL 如果之後要串接別的地方也比照
        var url=`https://course-ec-api.hexschool.io/api/${vm.data.UUID}/ec/products`;
        axios.get(url)
        .then(function(res){
            vm.data.products = res.data.data;
            vm.render();
        })
        .catch(function(err){
            
        })
            
    },
    render(){
        const productinfo = document.querySelector("#productDisplay");           
        const products = this.data.products;
        var strHtml='';
        console.log(products);
        products.forEach((item,i)=>{
            strHtml+=`<div class='col-md-4 col-xs-4'>
                        <div class='card'>
                            <img class='card-img-top' src='${item.imageUrl[0]}' alt='${item.title}'>
                            <div class='card-body'>
                            <h5 class='card-title'>${item.title}</h5>
                            <p class='card-text'>售價：$${item.price}&nbsp;&nbsp;&nbsp;&nbsp;原價：<span style='text-decoration:line-through'>$${item.origin_price}</span></p>
                            <a href='#' class='btn btn-primary'>加入購物車</a>
                            </div>
                        </div>
                       </div>
                     `
        });
        productinfo.innerHTML=strHtml;
    }
};

obj.getData();
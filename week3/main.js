new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1586934917210,
        unit: '付',
        category: '耳機',
        title: '耳機(紅)',
        origin_price: 1980,
        price: 998,
        description: '標準耳機',
        content: '常用耳機，紅色',
        is_enabled: 1,
        imageUrl: 'http://pic.616pic.com/ys_bnew_img/00/40/93/pb5nlsoh4R.jpg',
      },
      {
        id: 1196934917910,
        unit: '付',
        category: '耳機',
        title: '耳機(黑)',
        origin_price: 1980,
        price: 998,
        description: '標準耳機',
        content: '常用耳機，黑色',
        is_enabled: 0,
        imageUrl: 'http://pic.616pic.com/ys_bnew_img/00/21/05/TtehX4jRZs.jpg',
      },
    ],
    //暫存商品資料
    tempProduct: {},
  },
  methods: {
    updateProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products[i] = this.tempProduct;
          }
        });
      } else {
        // 使用 Timestamp 作為ID 使用
        const id = new Date().getTime();
        this.tempProduct.id = id;
        this.products.push(this.tempProduct);
      }
      this.tempProduct = {};
      $('#editModal').modal('hide');
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          //可能會有預存的資料，所以再做一次處理，將其清空
          this.tempProduct = {};
          $('#editModal').modal('show');
          break;
        case 'edit':
          this.tempProduct = Object.assign({}, item);
          $('#editModal').modal('show');
          break;
        case 'delete':
          $('#delProductModal').modal('show');
          this.tempProduct = Object.assign({}, item);
          break;
        default:
          break;
      }
    },
    delProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products.splice(i, 1);
            this.tempProduct = {};
          }
        });
      }
      $('#delProductModal').modal('hide');
    },
  },
});

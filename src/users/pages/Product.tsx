function Product() {
  return (
    <>
      <div className="container-fluid py-3 px-3 px-md-5" id="section-phone">
        <div className="row">
          {/* Danh mục sản phẩm Left */}
          <div className="col-md-3 border-end border-1 border-dark text-start mb-3 mb-md-0">
            {/* Giá */}
            <div className="mb-3">
              <label className="form-label fw-bold">Giá :</label>
              <select
                className="form-select form-select-sm w-50 w-md-auto d-inline-block ms-md-2"
                style={{
                  fontSize: "14px",
                  appearance: "none",
                  WebkitAppearance: "none",
                }}
              >
                <option>- - - Giá - - -</option>
                <option value="asc">Từ thấp - cao</option>
                <option value="desc">Từ cao - thấp</option>
              </select>
            </div>
            {/* Danh mục sản phẩm */}
          </div>

          {/* Products Right */}
          <div className="col-md-9">
            <div className="text-end mb-2">
              <button type="button" className="btn btn-outline-primary me-2">
                <i className="fa fa-th-large"></i>
              </button>

              <button type="button" className="btn btn-outline-primary">
                <i className="fa fa-list"></i>
              </button>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mx">
              {/* Card sản phẩm */}
              <div className="col">
                <div className="card text-center">
                  <img
                    src="https://dummyimage.com/200x200/"
                    className="card-img-top"
                    alt="iPhone 15"
                    style={{
                      width: "100%",
                      height: "auto", // Thay đổi từ "200px" thành "auto"
                      objectFit: "cover", // Thay đổi thành "cover" để hình ảnh không bị méo
                      padding: 0, // Đảm bảo không có padding
                      margin: 0, // Đảm bảo không có margin
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-start">iPhone 15</h5>
                    <p className="card-text text-start">Giá: 25.000.000₫</p>
                    <div className="d-flex justify-content-center flex-wrap gap-2">
                      <button
                        className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i className="fa-solid fa-cart-shopping"></i>
                      </button>
                      <button
                        className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i className="fa-solid fa-heart"></i>
                      </button>
                      <button
                        className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Các sản phẩm khác... */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

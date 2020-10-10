/**
 * Các bước thực hiện
 * 1 Dàn layout(html css)=>> done
 * 2 Xác định data thay đổi và lưu vào state=>> done
 * 3 Lấy data trong state đi binding ra jsx=>> done
 * 4 Render mảng dữ liệu và dùng props
 * 5 Xây dựng chức năng xem chi tiết
 * 6 Đi xây dựng chức năng xem giỏ hàng
 * 7 Xây dựng chức năng xóa sản phẩm khỏi giỏ hàng
 * 8 Xây dựng chức năng tăng giảm số lượng
 * 9 Xây dựng chức năng hiển thị tổng số sản phẩm
 */
import React, { Component } from "react";
import Modal from "./Modal";
import SanPham from "./SanPham";

export default class BaiTapGioHang extends Component {
  danhSachSanPham = [
    {
      giaBan: 170000000,
      maSP: "1",
      tenSanPham: "VS Phone",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      Ram: "4 GB",
      Rom: "64 GB",
    },
    {
      giaBan: 150000000,
      maSP: "2",
      tenSanPham: "Meizu Phone",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      Ram: "8 GB",
      Rom: "64 GB",
    },
    {
      giaBan: 120000000,
      maSP: "3",
      tenSanPham: "Iphone",
      hinhAnh: "./img/applephone.jpg",
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "IOS 13",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      Ram: "4 GB",
      Rom: "64 GB",
    },
  ];
  state = {
    sanPhamChiTiet: {
      maSP: "1",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      Ram: "4 GB",
      Rom: "64 GB",
    },
    dsGioHang: [],
  };
  handleDelete = (phone) => {
    let dsGioHang = this.state.dsGioHang;
    dsGioHang = dsGioHang.filter((item) => {
      return phone.maSP !== item.maSP;
    });
  };
  renderListPhone = () => {
    return this.danhSachSanPham.map((phone, index) => {
      return (
        <div className="col-sm-4">
          <SanPham
            phone={phone}
            changeDetail={this.changeDetail}
            AddPhone={this.AddPhone}
          />
        </div>
      );
    });
  };

  AddPhone = (phone) => {
    let dsGioHang = [...this.state.dsGioHang];
    // dsGioHang.push(phone);

    /**
     * tìm xem có tồn tạitrong mãng hay không
     * Nếu có tồn tại trả về index
     * nếu không tồn tại trả về -1
     */
    const index = dsGioHang.findIndex((phone) => {
      return phone.maSP === phone.maSP;
    });
    if (index !== -1) {
      //tìm thấy
      //Cập nhật số lượng
      dsGioHang[index].soLuong += 1;
    } else {
      //không tìm thấy
      phone.soLuong = 1;
      //set số lượng ,push vào mảng
      dsGioHang = [...dsGioHang, phone];
    }
    this.setState({
      dsGioHang: dsGioHang,
    });
  };
  changeDetail = (sanPhamChiTiet) => {
    this.setState({
      sanPhamChiTiet,
    });
  };

  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng (0)
              </button>
            </div>
            <div className="container">
              <div className="row">{this.renderListPhone()}</div>
            </div>
            <Modal
              dsGioHang={this.state.dsGioHang}
              handleDelete={this.handleDelete}
            />
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.camTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.camSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.Ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.Rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

import React from 'react';
 
import { Button, Rate } from 'antd';

function OrderItem(props) {
    return (
        <div className="col-lg-12 order-product">
            <div className="row">
                <div className="col-lg-3">
                    <p className="order-title">Hình Ảnh Sản Phẩm</p>
                    <div className="order-image-product">
                        <img
                            alt=""
                            src="https://cdn.tgdd.vn/Products/Images/42/229949/samsung-galaxy-z-flip-3-cream-1-600x600.jpg"
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <p className="order-title">Thông Tin Sản Phẩm</p>
                    <div className="order-info-product">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                                Tên Sản Phẩm:{' '}
                                <p className="order-info-item-name">
                                    SamSung Galaxy ZFlip3 5G 128GB
                                </p>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Giá Sản Phẩm:{' '}
                                <p className="order-info-item-name">
                                    24.990.000 <sub>đ</sub>
                                </p>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Số Sao:{' '}
                                <p className="order-info-item-name">
                                    <Rate disabled defaultValue={2} />
                                </p>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Số Lượng:{' '}
                                <p className="order-info-item-name">2</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <p className="order-title">Thông Tin Khách Hàng Đặt Hàng</p>
                    <div className="order-info-product">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                                Tên Khách Hàng:{' '}
                                <p className="order-info-item-name">
                                    Phạm Trung Hiếu
                                </p>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Email:{' '}
                                <p className="order-info-item-name">
                                    phieu473@gmail.com
                                </p>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Số Điện Thoại:{' '}
                                <p className="order-info-item-name">
                                    0949024403
                                </p>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Địa Chỉ:{' '}
                                <p className="order-info-item-name">
                                    Thạch Đồng, thành phố Hà Tĩnh, tỉnh Hà Tĩnh
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <p className="order-title">Thông Tin Ngoài Lề</p>
                    <div className="order-info-product">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                                Hạn Sản Phẩm:{' '}
                                <p className="order-info-item-name">10 tháng</p>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Độ Uy Tín:{' '}
                                <p className="order-info-item-name">100%</p>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Mã Giảm Giá:{' '}
                                <p className="order-info-item-name">
                                    Không áp dụng
                                </p>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Xác Nhận: <br />
                                <Button type="primary">
                                    Xác Nhận Đơn Hàng
                                </Button>
                                {/* <Button type="primary">In</Button> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

OrderItem.propTypes = {};

export default OrderItem;

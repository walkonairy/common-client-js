import React, { useEffect } from "react";
import {
  updateAddress,
  changeDeposit,
} from "/originLib/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "/originLib/redux/hooks";

function ExRedux() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
  }, []);

  const _updateAddress = () => {
    dispatch(updateAddress("深圳湾壹号"));
  };

  const _changeDeposit = (type) => {
    if (type === "add") {
      dispatch(changeDeposit(user.deposit + 1000));
    } else {
      dispatch(changeDeposit(user.deposit - 1000));
    }
  };

  return (
    <React.Fragment>
      <button onClick={_updateAddress}>修改地址</button>
      <div style={{ marginBottom: 32 }} />
      <button onClick={() => _changeDeposit("add")}>增加存款1000</button>
      <div style={{ marginBottom: 32 }} />
      <button onClick={() => _changeDeposit("subtract")}>减少存款1000</button>
      <div style={{ marginBottom: 32 }} />
      <div>当前地址：{user.address}</div>
      <div style={{ marginBottom: 32 }} />
      <div>当前存款: {user.deposit}</div>
    </React.Fragment>
  );
}

export default ExRedux;
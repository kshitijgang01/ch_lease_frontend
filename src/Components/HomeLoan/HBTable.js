import React from "react";
import { Table, Toast, ToastBody, ToastHeader } from "reactstrap";

const BDTable = ({ data, totalCost }) => {
  return (
    <>
      <Table size="lg">
        <thead>
          <tr>
            <th>Buy Assumptions</th>
            {data.map((val, i) => {
              return <td>{"Year " + val[0]}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Oppotunity Cost(interest)</th>
            {data.map((val, i) => {
              return <td>{val[1]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Cash Flow</th>
            {data.map((val, i) => {
              return <td>{val[2]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Rental Savings</th>
            {data.map((val, i) => {
              return <td>{val[3]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Total Cash Flow</th>
            {data.map((val, i) => {
              return <td>{val[4]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Discounting Rate</th>
            {data.map((val, i) => {
              return <td>{val[5]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Discounted Cash Flow</th>
            {data.map((val, i) => {
              return <td>{val[6]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">House Price</th>
            {data.map((val, i) => {
              return <td>{val[7]}</td>;
            })}
          </tr>
        </tbody>
      </Table>
      <Toast
        style={{
          marginBottom: "20px",
          backgroundColor: "teal",
          color: "white",
        }}
      >
        <ToastHeader>Total cost on Buying the house</ToastHeader>
        <ToastBody>{totalCost + " Rupees"}</ToastBody>
      </Toast>
    </>
  );
};

export default BDTable;

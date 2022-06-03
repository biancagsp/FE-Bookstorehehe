import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ bukus, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Book Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Synopsis</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {bukus.map((buku, index) => {
          return (
            <tr key={index} >
              <td>{index+1}</td>
              <td>{buku.nama}</td>
              <td>{buku.author}</td>
              <td>{buku.deskripsi}</td>
              <td>Rp. {buku.harga}</td>
              <td>
                <button className="btn btn-warning mr-2" onClick={() => editData(buku.id) }>Edit</button>
                <button className="btn btn-danger" onClick={() => hapusData(buku.id) }>Hapus</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;

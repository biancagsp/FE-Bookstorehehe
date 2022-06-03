import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";
import Formulir from "./Formulir";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bukus: [],
      nama: "",
      author: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        bukus: [
          ...this.state.bukus,
          {
            id: this.state.bukus.length + 1,
            nama: this.state.nama,
            author: this.state.author,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const bukuYangSelainDiPilih = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map((filterbuku) => {
          return filterbuku;
        });

        this.setState({
            bukus: [
              ...bukuYangSelainDiPilih,
              {
                id: this.state.bukus.length + 1,
                nama: this.state.nama,
                author: this.state.author,
                deskripsi: this.state.deskripsi,
                harga: this.state.harga,
              },
            ],
          });
    }

    this.setState({
      nama: "",
      author: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const bukuYangDiPilih = this.state.bukus
      .filter((buku) => buku.id === id)
      .map((filterbuku) => {
        return filterbuku;
      });

    this.setState({
      nama: bukuYangDiPilih[0].nama,
      author: bukuYangDiPilih[0].author,
      deskripsi: bukuYangDiPilih[0].deskripsi,
      harga: bukuYangDiPilih[0].harga,
      id: bukuYangDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    const bukuBaru = this.state.bukus
    .filter((buku) => buku.id !== id)
    .map((filterbuku) => {
      return filterbuku;
    });

    this.setState({
        bukus : bukuBaru
    })

  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

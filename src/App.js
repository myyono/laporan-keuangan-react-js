import './App.css';
// import * as ReactBootstrap from "react-bootstrap";
import React from 'react';

const datas = [
  {
    tanggal: "1 Januari 2021",
    keterangan: "saldo awal",
    debit: 21000000,
    kredit: 0,
  },
  {
    tanggal: "1 Januari 2021",
    keterangan: "Gaji Karyawan",
    debit: 0,
    kredit: 3000000,
  },
  {
    tanggal: "1 Januari 2021",
    keterangan: "Service AC",
    debit: 0,
    kredit: 500000,
  },
  {
    tanggal: "1 Januari 2021",
    keterangan: "Pembelian ATK",
    debit: 0,
    kredit: 200000,
  },
  {
    tanggal: "2 Januari 2021",
    keterangan: "Pembayaran Order #3D20210001",
    debit: 500000,
    kredit: 0,
  },
  {
    tanggal: "2 Januari 2021",
    keterangan: "Pembayaran Order #3D20210002",
    debit: 200000,
    kredit: 0,
  },
  {
    tanggal: "5 Januari 2021",
    keterangan: "Pembayaran Order #3D20210005",
    debit: 500000,
    kredit: 0,
  },
  {
    tanggal: "9 Januari 2021",
    keterangan: "Pembayaran Order #3D20210021",
    debit: 100000,
    kredit: 0,
  },
  {
    tanggal: "14 Januari 2021",
    keterangan: "Pembelian Unit PC",
    debit: 0,
    kredit: 5970000,
  },
  {
    tanggal: "14 Januari 2021",
    keterangan: "Pembayaran Order #3D20210007",
    debit: 350000,
    kredit: 0,
  },
  {
    tanggal: "18 Januari 2021",
    keterangan: "Pembayaran Order #3D202100011",
    debit: 275000,
    kredit: 0,
  },
  {
    tanggal: "18 Januari 2021",
    keterangan: "Pembayaran Order #3D20210012",
    debit: 275000,
    kredit: 0,
  },
  {
    tanggal: "25 Januari 2021",
    keterangan: "Pembayaran Order #3D20210016",
    debit: 500000,
    kredit: 0,
  },
];


const Map = () => {
  return (
    <div className='Map container mt-5 mb-2'>
      <div className='py-2 mb-1 bg-warning text-center'>
        <h3>Laporan Keuangan CV Berkah Maju</h3>
        <h5>April 2021</h5>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
</svg>
      </div>
      <table class='table table-bordered border-primary table-striped table-hover text-center '>
        <thead>
          <tr>
            <th rowSpan='2' className='align-middle'>
              NO
            </th>
            <th rowSpan='2' className='align-middle'>
              Tanggal
            </th>
            <th rowSpan='2' className='align-middle'>
              Ket/Uraian
            </th>
            <th colSpan='2' className='align-middle'>
              Jumlah
            </th>
            <th rowSpan='2' className='align-middle'>
              Saldo
            </th>
          </tr>
          <tr>
            <th>Debit</th>
            <th>Kredit</th>
          </tr>
        </thead>
        
      </table>
    </div>
  );
};

export default Map;
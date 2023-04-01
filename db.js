// const sql = require('mssql');
// const {response} = require("express");
//
// const config = {
//     user: "dsrdsr7",
//     password: "NAMS9kUgcwgQS@S",
//     server: "nure-mykolchuk.database.windows.net",
//     database: "Internet_cloth_shop",
//     options: {
//         encrypt: true,
//         trustServerCertificate: false
//     },
// };
//
//
// async function getAllTours() {
//     try {
//         const response = await new Promise ((resolve, reject) => {
//             const pool = new sql.ConnectionPool(config);
//             pool.connect().then(() => {
//                 const request = new sql.Request(pool);
//                 request.query("SELECT * FROM MyTable").then((result) => {
//                     return response.send(result);
//                     pool.close();
//                 })
//                 const pool = new sql.ConnectionPool(config);
//                 pool.connect().then(() => {
//                     const request = new sql.Request(pool);
//                     request.query("SELECT * FROM MyTable").then((result) => {
//                         console.log(result)
//                         response.send(result);
//                         pool.close();
//                     }).catch((err) => {
//                         console.error(err);
//                         pool.close();
//                     });
//                 })
//     }
// }

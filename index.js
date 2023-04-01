const express = require("express");
const app = express();


const sql = require('mssql');

const config = {
    user: "dsrdsr7",
    password: "NAMS9kUgcwgQS@S",
    server: "nure-mykolchuk.database.windows.net",
    database: "Internet_cloth_shop",
    options: {
        encrypt: true,
        trustServerCertificate: false
    },
};

app.get("/allTours", function(request, response){
    const pool = new sql.ConnectionPool(config);
    pool.connect().then(() => {
        const request = new sql.Request(pool);
        request.query("SELECT * FROM MyTable").then((result) => {
            console.log(result)
            response.send(result);
            pool.close();
        }).catch((err) => {
            console.error(err);
            pool.close();
        });
    }).catch((err) => {
        console.error(err);
    });
});

app.listen(3000);
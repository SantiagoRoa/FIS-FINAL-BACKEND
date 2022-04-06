const CompraController = {}

CompraController.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let sql = 'SELECT * FROM compra';
        conn.query(sql, (err, data) => {
            if (err) {
                return res(400).send({ message: "Error en SQL" })
            }
            if (data) {
                return res.status(200).send({
                    data,
                });
            } else {
                return res.status(404).send({
                    message: "No se encuentra el dato"
                })
            }

        });
    });
};

CompraController.select = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let id = req.params.id;
      
        let sql = `SELECT * FROM compra WHERE id_compra = ${id}`
        conn.query(sql, (err, data) => {
            if (err) {
                return res(400).send({ message: "Error en SQL" })
            }
            if (data) {
                return res.status(200).send({
                    data,
                });
            } else {
                return res.status(404).send({
                    message: "No se encuentra el dato"
                })
            }

        });
    });
};

CompraController.create = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        const datos = req.body;
        let id_compra= datos.id_compra;
        let fecha_compra= datos.fecha_compra;
        let cantidad_boletas_general= datos.cantidad_boletas_general;
        let cantidad_boletas_preferencial= datos.cantidad_boletas_preferencial;
        let puntaje_boletas= datos.puntaje_boletas;
        let monto_boletas= datos.monto_boletas;
        let puntaje_comida= datos.puntaje_comida;
        let monto_comida= datos.monto_comida;
        let puntaje_total= datos.puntaje_total;
        let monto_total= datos.monto_total;
        let tipo_id_cliente= datos.tipo_id_cliente;
        let numero_id_cliente= datos.numero_id_cliente;
        let sql = `INSERT INTO compra set ${datos}`
        conn.query(`INSERT INTO compra set id_compra=?, fecha_compra=?, cantidad_boletas_general=?, cantidad_boletas_preferencial=?, puntaje_boletas=?, monto_boletas=?, puntaje_comida=?, monto_comida=?, puntaje_total=?, monto_total=?, tipo_id_cliente=?, numero_id_cliente=?`
            ,[id_compra,fecha_compra,cantidad_boletas_general,cantidad_boletas_preferencial,puntaje_boletas,monto_boletas,puntaje_comida,monto_comida,puntaje_total,monto_total,tipo_id_cliente,numero_id_cliente], (err) => {
            if (err) {
                return res(400).send({ message: "Error en SQL" })
            }
            return res.status(200).send({
                message: "Se insertó la compra"
            });
        });
    });
};

CompraController.selectByCliente = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let id = req.params.id;
        let sql = `SELECT * FROM compra WHERE numero_id_cliente = ${id}`
        conn.query(sql, (err, data) => {
            if (err) {
                return res(400).send({ message: "Error en SQL" })
            }
            if (data) {
                return res.status(200).send({
                    data,
                });
            } else {
                return res.status(404).send({
                    message: "No se encuentra el dato"
                })
            }

        });
    });
};

module.exports = CompraController;
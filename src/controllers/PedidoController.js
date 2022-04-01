const PedidoController = {}

PedidoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let sql = 'SELECT * FROM pedido';
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

PedidoController.select = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let id = req.params.id;
      
        let sql = `SELECT * FROM pedido WHERE id_pedido = ${id}`
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

PedidoController.create = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        const datos = req.body;
        let sql = `INSERT INTO pedido set ${datos}`
        conn.query(sql, (err) => {
            if (err) {
                return res(400).send({ message: "Error en SQL" })
            }
            return res.status(200).send({
                message: "Se insertó el pedido"
            });
        });
    });
};

module.exports = PedidoController;
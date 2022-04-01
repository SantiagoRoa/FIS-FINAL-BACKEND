const EmpleadoController = {}

EmpleadoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let sql = 'SELECT * FROM empleado';
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

EmpleadoController.select = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let id = req.params.id;
      
        let sql = `SELECT * FROM empleado WHERE numero_id_empleado = ${id}`
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

EmpleadoController.selectByMultiplex = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let id = req.params.id;
      
        let sql = `SELECT * FROM empleado WHERE id_multiplex = ${id}`
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

EmpleadoController.create = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        const datos = req.body;
        let sql = `INSERT INTO empleado set ${datos}`
        conn.query(sql, (err) => {
            if (err) {
                return res(400).send({ message: "Error en SQL" })
            }
            return res.status(200).send({
                message: "Se insertó la compra"
            });
        });
    });
};

module.exports = EmpleadoController;
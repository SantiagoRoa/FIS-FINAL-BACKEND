const ReporteController = {}

ReporteController.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let sql = 'SELECT * FROM reporte';
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

ReporteController.select = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let id = req.params.id;
      
        let sql = `SELECT * FROM reporte WHERE id_reporte = ${id}`
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

ReporteController.selectByMultiplex = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let id = req.params.id;
      
        let sql = `SELECT * FROM reporte WHERE id_multiplex = ${id}`
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

ReporteController.create = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        const datos = req.body;
        let sql = `INSERT INTO reporte set ${datos}`
        conn.query(sql, (err) => {
            if (err) {
                return res(400).send({ message: "Error en SQL" })
            }
            return res.status(200).send({
                message: "Se insertó el reporte"
            });
        });
    });
};

module.exports = ReporteController;
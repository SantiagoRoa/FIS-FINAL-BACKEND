const SalaController = {}

SalaController.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let sql = 'SELECT * FROM sala';
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

SalaController.select = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let id = req.params.id;

        let sql = `SELECT * FROM sala WHERE id_sala = ${id}`
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

SalaController.create = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        const datos = req.body;
        let sql = `INSERT INTO pelicula set ${datos}`
        conn.query(sql, (err) => {
            if (err) {
                return res(400).send({ message: "Error en SQL" })
            }
            return res.status(200).send({
                message: "Se insertó la sala"
            });
        });
    });
};

SalaController.substractSillaGeneral = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let datos = req.body;
        let sala = datos.id_sala;
        let multi = datos.id_multiplex;
        let amount = datos.amount;
        let sql = `UPDATE sala
        SET cantidad_sillas_general = cantidad_sillas_general - ${amount}
        WHERE id_sala = ${sala} AND id_multiplex = ${multi}`
        conn.query(sql, (err) => {
            if (err) {
                return res.status(400).send({ message: "Error en SQL" })
            }
            return res.status(200).send({
                message: `Se ocuparon ${amount} sillas generales`
            });
        });
    });
};

SalaController.substractSillaPreferencial = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ message: "Error en el servidor" })
        }
        let datos = req.body;
        let sala = datos.id_sala;
        let multi = datos.id_multiplex;
        let amount = datos.amount;
        let sql = `UPDATE sala
        SET cantidad_sillas_preferencial = cantidad_sillas_preferencial - ${amount}
        WHERE id_sala = ${sala} AND id_multiplex = ${multi}`
        conn.query(sql, (err) => {
            if (err) {
                return res.status(400).send({ message: "Error en SQL" })
            }
            return res.status(200).send({
                message: `Se ocuparon ${amount} sillas preferenciales`
            });
        });
    });
};

module.exports = SalaController;
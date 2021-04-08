const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllPlants = (req, res) => {
  pool.query('SELECT * FROM plantList', (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows)
  })
}

const getPlantById = (req, res) => {
  let sql = "SELECT * FROM plantList WHERE plant_id = ? "
  sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createPlant = (req, res) => {
  let sql = "INSERT INTO plantList (common, image, scientific, family, water, light, fertilization, soil, notes) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)" 
  console.log(req.body)
  sql = mysql.format(sql, [req.body.common,req.body.image, req.body.scientific, req.body.family, req.body.water, req.body.light, req.body.fertilization, req.body.soil, req.body.notes])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({newId: results.insertId});
  })
}

module.exports = {getAllPlants, getPlantById, createPlant}
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  console.log("login:", req.isAuthenticated())
  if (req.isAuthenticated()) {
    let querytext = `SELECT * FROM item;`
    pool.query(querytext)
      .then((response) => {
        res.send(response.rows)
      })
      .catch((error) => {
        res.sendStatus(500)
      });
  }
  else {
    res.sendStatus(403)
  }
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  console.log("login:", req.isAuthenticated())
  if (req.isAuthenticated()) {
  console.log('req body:', req.body)
  let queryText = `INSERT INTO "item"("description" , "image_url")
  VALUES($1, $2);`
  let queryParams = [req.body.description, req.body.image_url];
  pool.query(queryText, queryParams)
    .then((result) => {
      res.sendStatus(201)
    }).catch((error) => {
      res.sendStatus(500)
    })
  }
  else {
    res.sendStatus(403)
  }
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  console.log("login:", req.isAuthenticated())
  if (req.isAuthenticated()) {
  console.log(req.params.id)
  pool.query(`DELETE FROM "item" WHERE "id" = $1;`, [req.params.id])
    .then((result) => {
      res.sendStatus(200)
    }).catch((error) => {
      res.sendStatus(500)
    })
  }
  else {
    res.sendStatus(403)
  }
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  console.log(typeof (req.body))
  console.log(req.params.id)
  console.log("login:", req.isAuthenticated())
  if (req.isAuthenticated()) {
  let queryText = `UPDATE "item"
  SET "description" = $1
  WHERE "id" = $2;`
  let queryParams = [req.body.description, req.params.id];
  pool.query(queryText, queryParams)
    .then((response) => {
      res.sendStatus(200)
    }).catch((error) => {
      res.sendStatus(500)
      console.log(error)
    })
  }
  else {
    res.sendStatus(403)
  }
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  console.log("login:", req.isAuthenticated())
  if (req.isAuthenticated()) {
  let querytext = `SELECT "username", count("username") FROM "user"
  JOIN "item" ON "user"."id" = "user_id"
  GROUP BY "username";`
  pool.query(querytext)
    .then((response) => {
      res.send(response.rows)
    })
    .catch((error) => {
      res.sendStatus(500)
    });
  }
  else {
    res.sendStatus(403)
  }
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  console.log("login:", req.isAuthenticated())
  if (req.isAuthenticated()) {
  // endpoint functionality
  console.log(req.params)
  let id = req.params.id;
  let querytext = `SELECT * FROM item WHERE "id" = ${id};`
  pool.query(querytext)
    .then((response) => {
      res.send(response.rows)
    })
    .catch((error) => {
      res.sendStatus(500)
    });
  }
  else {
    res.sendStatus(403)
  }
});

module.exports = router;

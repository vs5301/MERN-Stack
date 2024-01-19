const express = require("express");
const {
  createEmployeeCtrl,
  getEmployeesCtrl,
  updateEmployeeCtrl,
  deleteEmployeeCtrl,
  getEmployeeCtrl,
} = require("../controller/employeeCtrl");

const router = express.Router();

// POST /employees
router.post("/", createEmployeeCtrl);

// GET /employees
router.get("/", getEmployeesCtrl);

// PUT /employees/:id
router.put("/:id", updateEmployeeCtrl);

// DELETE /employees/:id
router.delete("/:id", deleteEmployeeCtrl);

// GET /employees/:id
router.get("/:id", getEmployeeCtrl);

module.exports = router;
const Employee = require("../model/Employee");

// create
const createEmployeeCtrl = async (req, res) => {
  const { name, city, salary, isMarried } = req.body;
  try {
    const employee = await Employee.create({
      name,
      city,
      salary,
      isMarried,
    });
    res.json({
      status: "success",
      data: employee,
    });
  } catch (error) {
    res.json(error);
  }
};

// all
const getEmployeesCtrl = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json({
      status: "success",
      data: employees,
    });
  } catch (error) {
    res.json(error);
  }
};

//update
const updateEmployeeCtrl = async (req, res) => {
  try {
    const updatedEmp = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        city: req.body.city,
        isMarried: req.body.isMarried,
        salary: req.body.salary,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({
      status: "success",
      data: updatedEmp,
    });
  } catch (error) {
    res.json(error);
  }
};

// delete
const deleteEmployeeCtrl = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      data: "Employee has been deleted succesfully",
    });
  } catch (error) {
    res.json(error);
  }
};

// details
const getEmployeeCtrl = async (req, res) => {
  try {
    const foundEmp = await Employee.findById(req.params.id);
    res.json({
      status: "success",
      data: foundEmp,
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createEmployeeCtrl,
  getEmployeesCtrl,
  updateEmployeeCtrl,
  deleteEmployeeCtrl,
  getEmployeeCtrl,
};
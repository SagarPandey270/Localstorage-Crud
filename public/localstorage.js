// const { set } = require("lodash");

var selectedRow = null;
var dataone = [];

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) insertNewRecord(formData);
        else updateRecord(formData);

        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["id"] = new Date().getTime();
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    formData["select"] = $("#select").val();
    console.log(formData);
    return formData;
}

function getdata() {
    temp = JSON.parse(localStorage.getItem("data"));
    if (temp && temp.length > 0) {
        dataone = temp;
        dataone.map((data, index) => {
            const tablebody =
                `<tr id="tabledata">
                <td>` +
                data.id +
                `</td>
                <td>` +
                data.fullName +
                `</td>
                <td>` +
                data.empCode +
                `</td>
                <td>` +
                data.salary +
                `</td>
                <td>` +
                data.city +
                `</td>
                <td> <td><a onclick="edit(` +
                data.id +
                `)">Edit</a>
                <a onclick="deletedata(` +
                index +
                `)">Delete</a></td></td>
                </tr>`;
            console.log(tablebody);
            $("#tablebody").append(tablebody);
        });
    }
}

function deletedata(index) {
    console.log(index);

    dataone.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(dataone));
    location.reload();
}

function updateRecord() {
    var formData = {};
    formData["id"] = parseInt(document.getElementById("updateid").value);
    formData["fullName"] = document.getElementById("updatefullName").value;
    formData["empCode"] = document.getElementById("updateempCode").value;
    formData["salary"] = document.getElementById("updatesalary").value;
    formData["city"] = document.getElementById("updatecity").value;
    formData["select"] = $("#updateselect").val();
    console.log(formData);

    var updatedataone = dataone.filter((item) => item.id != formData.id);
    updatedataone.push(formData);
    localStorage.setItem("data", JSON.stringify(updatedataone));
    location.reload();
}

function edit(id) {
    $("#updateform").css("display", "block");
    $("#createform").css("display", "none");

    console.log(id);
    var updatedataone = dataone.filter((item) => item.id == id);
    console.log(updatedataone);
    updatedataone.map((data) => {
        document.querySelector('input[name="updateid"]').value = data.id;
        document.querySelector('input[name="updatefullName"]').value =
            data.fullName;
        document.querySelector('input[name="updateempCode"]').value =
            data.empCode;
        document.querySelector('input[name="updatesalary"]').value =
            data.salary;
        document.querySelector('input[name="updatecity"]').value = data.city;

        var values = data.select;
        var multi = document.getElementById("updateselect");
        multi.value = null; // Reset pre-selected options (just in case)
        var multiLen = multi.options.length;
        for (var i = 0; i < multiLen; i++) {
            if (values.indexOf(multi.options[i].value) >= 0) {
                multi.options[i].selected = true;
            }
        }
    });
}

$(document).ready(function () {
    getdata();

    $("#addbutton").on("click", function () {
        $("#updateform").css("display", "none");
        $("#createform").css("display", "block");
    });
});

function insertNewRecord(datarow) {
    console.log(datarow);
    dataone.push(datarow);
    localStorage.setItem("data", JSON.stringify(dataone));
    location.reload();
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document
            .getElementById("fullNameValidationError")
            .classList.remove("hide");
    } else {
        isValid = true;
        if (
            !document
                .getElementById("fullNameValidationError")
                .classList.contains("hide")
        )
            document
                .getElementById("fullNameValidationError")
                .classList.add("hide");
    }
    return isValid;
}

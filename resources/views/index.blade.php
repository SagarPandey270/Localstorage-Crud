<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="localstorage.js"></script>
</head>
<body>

<div class="container">

  <a class="btn btn-primary" id="addbutton">NEW</a>
  <div class="col-lg-12" id="createform">
  <h2>Demo form</h2>
  <form onsubmit="event.preventDefault();onFormSubmit();" name="form" autocomplete="off">
    <div class="form-group">
      <label for="fullName">Full Name</label><label class="validation-error hide" id="fullNameValidationError">This field is required.</label>
      <input type="text" class="form-control" id="fullName" placeholder="Enter fullName" name="fullName" required>
    </div>
    <div class="form-group">
      <label for="empCode">EMP Code</label>
      <input type="text" class="form-control" id="empCode" placeholder="Enter EMP Code" name="empCode" required>
    </div>
    <div class="form-group">
        <label for="salary">Salary</label>
        <input type="text" class="form-control" id="salary" placeholder="Enter salary" name="salary"  required>
    </div>
    <div class="form-group">
        <label for="city">City</label>
        <input type="text" class="form-control" id="city" placeholder="Enter city" name="city" required>
    </div>
    <div class="form-group">
        <label for="age">age</label>
       <select name="select[]" class="form-control" id="select" multiple="multiple" required>
           <option value="12">12</option>
           <option value="13">13</option>
           <option value="14">14</option>
       </select>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
  {{-- <a class="btn btn-primary" id="newformopen">NEW Data</a> --}}
  </div>
  <div class="col-lg-12" id="updateform" style="display:none" >
    <h2>Update form</h2>
    <form onsubmit="event.preventDefault();updateRecord()" name="updateform" autocomplete="off"> 
      <div class="form-group">
        <label for="fullName">Full Name</label><label class="validation-error hide" id="fullNameValidationError">This field is required.</label>
        <input type="text" class="form-control" id="updatefullName" placeholder="Enter fullName" name="updatefullName">
        <input type="hidden" class="form-control" id="updateid" name="updateid">
      </div>
      <div class="form-group">
        <label for="empCode">EMP Code</label>
        <input type="text" class="form-control" id="updateempCode" placeholder="Enter EMP Code" name="updateempCode">
      </div>
      <div class="form-group">
          <label for="salary">Salary</label>
          <input type="text" class="form-control" id="updatesalary" placeholder="Enter salary" name="updatesalary">
      </div>
      <div class="form-group">
          <label for="city">City</label>
          <input type="text" class="form-control" id="updatecity" placeholder="Enter city" name="updatecity">
      </div>
      <div class="form-group">
          <label for="age">age</label>
         <select name="updateselect[]" class="form-control" id="updateselect" multiple="multiple">
             <option value="12">12</option>
             <option value="13">13</option>
             <option value="14">14</option>
         </select>
      </div>
      <button type="submit" class="btn btn-default">Update</button>
    </form>
    
    </div>
    <table class="table list"  id="employeeList">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Full Name</th>
          <th scope="col">EMP Code</th>
          <th scope="col">Salary</th>
          <th scope="col">City</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody id="tablebody">
         
      </tbody>
    </table>
</div>



</body>
</html>

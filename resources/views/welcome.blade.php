<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="_token" content="{!! csrf_token() !!}"/>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"> 
    <title>Document</title>
</head>
<body>

       <script type="text/template" id="books-template">
        <thead>
        <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Author</td>
            <td>Year</td>
            <td>Genre</td>
            <td style="min-width: 210px">Action</td>
        </tr>
        </thead>
        <tbody>
        </tbody>
    </script>
    <script type="text/template" id="book-template">
        <td><%- id %></td>
        <td><%- title %></td>
        <td><%- author %></td>
        <td><%- year %></td>
        <td><%- genre %></td>
        <td>
            <a class="btn btn-small btn-success" href="#books/<%- id %>">Details</a>
            <a class="btn btn-small btn-success" href="#books/<%- id %>/edit">Edit</a>
            <a class="btn btn-small btn-success" href="#books/<%- id %>/delete">Delete</a>
        </td>
    </script>
    <script type="text/template" id="book_detail-template">
        <div class="row">
            <div class="col-md-12">
                <h1>Book details</h1>
                <h2><%- title %></h2>
                <h4>Author: <%- author %></h4>
                <h5><%- year %> Year, <%- genre %> genre</h5>
                <h6>library record id: <%- id %></h6>
            </div>
        </div>
        <div class="row" id="user">
            <div class="col-md-12">

            </div>
        </div>
    </script>

    <script type="text/template" id="users-template">
        <thead>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Surname</td>
            <td>Email</td>
            <td>Action</td>
        </tr>
        </thead>
        <tbody>
        </tbody>
    </script>
    <script type="text/template" id="user-template">
        <td><%- id %></td>
        <td><%- firstname %></td>
        <td><%- lastname %></td>
        <td><%- email %></td>
        <td>
            <a class="btn btn-small btn-success" href="#users/<%- id %>">Details</a>
        </td>
    </script>
    <script type="text/template" id="user_detail-template">
        <div class="row" id="user"></div>
        <div class="row">
            <div  id="books"></div>
        </div>
    </script>
    
    <script type="text/template" id="user_detail_info-template">
        <h1>User details</h1>
        <h2><%- firstname %> <%- lastname %></h2>
        <h4>Email: <%- email %></h4>
        <h6>id: <%- id %></h6>
    </script>

 
    <script type="text/template" id="book_edit-template">
        <div class="form-group">
            <label for="title">Title</label>
            <input class="form-control" name="title" type="text" value="<%- title %>" id="title">
        </div>

        <div class="form-group">
            <label for="author">Author</label>
            <input class="form-control" name="author" type="text" value="<%- author %>" id="author">
        </div>

        <div class="form-group">
            <label for="year">Year</label>
            <input class="form-control" name="year" type="number" value="<%- year %>" id="year">
        </div>

        <div class="form-group">
            <label for="genre">Genre</label>
            <input class="form-control" name="genre" type="text" value="<%- genre %>" id="genre">
        </div>

        <input class="btn btn-success" type="submit" value="Save">
    </script>
    <script src="library/underscore.js"></script>
    <script src="library/jquery.js"></script>
    <script src="library/backbone.js"></script>
    <script src="library/backbone.marionette.js"></script>
    <script src="app/main.js"></script>
    <script src="app/model.js"></script>

</body>
</html>
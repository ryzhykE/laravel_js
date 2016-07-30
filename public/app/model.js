var BookModel = Backbone.Model.extend({
    urlRoot : 'http://localhost:8000/books/',
    defaults: {
            title: "",
            author: "",
            year: "",
            genre: ""
        },
    url: function() {
        if(this.id) {
            return this.urlRoot + this.id;
        }
        else
        {
            return "http://localhost:8000/books/";
        }
    },
    validate: function (attrs, options) {
            var regular = /^[a-zA-Z ]+$/;
            var reglar_year = /^\d{4}$/;
            
            if(!regular.test(attrs.title)) return "Wrong title";
            if(!regular.test(attrs.author)) return "Wrong author";
            if(!regular.test(attrs.genre))return "Wrong genre";
            if(!reglar_year.test(attrs.year)) return "Incorrect year";
        }
    });
    
    BookList = Backbone.Collection.extend({
        url: 'http://localhost:8000/books/',
        model: BookModel
    });
    
       UserModel = Backbone.Model.extend({
        urlRoot: 'http://localhost:8000/users/',
        url: function() {
        if(this.id) {
            return this.urlRoot + this.id;
        }
        else
        {
            return "http://localhost:8000/users/"
        }
    },
        defaults: {
            firstname: "",
            lastname: "",
            email: "",
        },
        
        validate: function (attrs, options) {
            var regular = /^[a-zA-Z ]+$/;
            var reglar_mail = /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/;
            
            if(!regular.test(attrs.firstname))return "Wrong firstname";
            if(!regular.test(attrs.lastname)) return "Wrong lastname";
            if(!reglar_mail.test(attrs.email)) return "Wrong email";
        }
    });
    UserList = Backbone.Collection.extend({
        url: 'http://localhost:8000/api/users',
        model: UserModel
    });
    





	App = new Backbone.Marionette.Application();

	App.addRegions({
	    'nav': '#nav',
	    'content': '#content'
	});
    
    Loading = {
    show: function () {
        $("#loading").show();
    },
    
    hide: function () {
        $("#loading").hide();
    }};
    
	App.on(){	    
	    Backbone.history.start();
	});

	$(document).ready(function(){
    App.start();
        });
        
        
 {
    Users = Backbone.Collection.extend({
  model: User
    });
    
    UserView = Backbone.Marionette.ItemView.extend({
        template: "#user-template",
        tagName: 'tr'
    });
    UsersView = Backbone.Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-responsive table-hover table-bordered",
        template: "#users-template",
        childView: UserView
    });
    
    UserDetailBooksView = Backbone.Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-responsive table-hover table-bordered",
        template: "#books-template",
        childView: UserDetailBookView,
        childViewContainer: "tbody"
    });
    UserDetailInfoView = Backbone.Marionette.CompositeView.extend({
        tagName: "div",
        className: "col-md-12",
        template: "#user_detail_info-template"
    });
    UserDetailView = Backbone.Marionette.CompositeView.extend({
        template: "#user_detail-template",
        tagName: "div",
        className: "row",
        regions: {
            user: "#user",
            books: "#books"
        },
        onRender: function() {
            this.showChildView('books', new UserDetailBooksView({
                collection: this.collection
            }));

            this.showChildView('user', new UserDetailInfoView({
                model: this.model
            }));
        }
    });
    BookView = Backbone.Marionette.CompositeView.extend({
        template: "#book-template",
        tagName: 'tr'
    });
    BooksView = Backbone.Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-responsive table-hover table-bordered",
        template: "#books-template",
        childView: BookView,
        childViewContainer: "tbody"
    });
    BookDetailView = Backbone.Marionette.CompositeView.extend({
        template: "#book_detail-template",
        tagName: "div",
        className: "row"
    });
    BookEditView = Backbone.Marionette.CompositeView.extend({
        template: "#book_edit-template",
        tagName: "form",
        events: {
            'submit': 'submitForm',
        },
        submitForm: function (e) {
            e.preventDefault();
            var model = this.model;
            var arr = this.$el.serializeArray();
            var data = _(arr).reduce(function (acc, field) {
                model.set(field.name, field.value);
            }, {});
            if (!model.isValid()) {
                alert(model.validationError);
                return;
            }
            model.save(data, {success: function () {
                Backbone.history.navigate('/books', {
                    trigger: true
                });
            }});
        }
    });
    
}   
    
var router = new Marionette.AppRouter({
    appRoutes: {
        "books": "books",
        "users": "users",
        "books/:id/edit": "book_edit",
        "books/:id/delete": "book_delete"
    },
    controller: {
        index: function () {
            App.content.show(new WelcomeView());
        },
        books: function () {
            Loading.show();
            var books = new BookList();
            books.fetch({
                success: function (coll) {
                    App.content.show(new BooksView({
                        collection: coll
                    }));
                    Loading.hide();
                }
            });

        },
        book: function (id) {
            Loading.show();
            var book = new BookModel({id: id});
            book.fetch({
                success: function (book) {
                    App.content.show(new BookDetailView({
                        model: book
                    }));
                    Loading.hide();
                }
            });
        },
        book_edit: function (id) {
            Loading.show();
            var book = new BookModel({id: id});
            book.fetch({
                success: function (book) {
                    App.content.show(new BookEditView({
                        model: book
                    }));
                    Loading.hide();
                }
            });
        },
        book_delete: function (id) {
            Loading.show();
            var book = new BookModel({id: id});
            book.destroy({
                success: function () {
                    Backbone.history.navigate('/books', {
                        trigger: true
                    });
                }
            });
        },
        book_add: function () {
            var book = new BookModel();
            App.content.show(new BookEditView({ model: book}));
        },
        
        users: function () {
            Loading.show();
            var users = new UserList();
            users.fetch({
                success: function (coll) {
                    App.content.show(new UsersView({
                        collection: coll
                    }));
                    Loading.hide();
                }
            });
        },
        user:function (id) {
            Loading.show();
            var user = new UserModel({id: id});
            user.fetch({
                success: function (user) {
                    App.content.show(new UserDetailView({
                        model: user,
                        collection: new Backbone.Collection(user.attributes.books)
                    }));
                    Loading.hide();
                }
            })
        },
    },    
    
    


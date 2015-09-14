// Execute all this code after the page is loaded
$(document).ready(function() {

    // When "new movie" button is clicked, add the new movie form again
    $('#new-movie').click(function() {
        $('#new-movies').append('<div class="new-movie">' +
                '<div class="form-group">' +
                    '<label for="new-movie-name">Movie Name</label>' +
                    '<input type="text" class="form-control new-movie-name">' +
                '</div>' +
                '<div class="form-group">' +
                    '<label for="new-movie-director">Movie Director</label>' +
                    '<input type="text" class="form-control new-movie-director">' +
                '</div>' +
                '<div class="form-group">' +
                    '<label for="new-movie-genre">Movie Genre</label>' +
                    '<input type="text" class="form-control new-movie-genre">' +
                '</div>' +
                '<div class="form-group">' +
                    '<label for="new-movie-runtime">Movie Runtime</label>' +
                    '<input type="text" class="form-control new-movie-runtime">' +
                '</div>' +
            '</div>');
    });

    // All of the logic goes inside of the new-theater form submit call-back function
    $("form#new-theater").submit(function(event) {
        event.preventDefault();

        var inputtedName = $('input#new-name').val();
        var inputtedLocation = $('input#new-location').val();

        // Create a new theater object with input from theater form, no movies yet
        var newTheater = {
            name: inputtedName,
            location: inputtedLocation,
            movies: []
        };

        console.log("Just made newTheater it is " + newTheater);

        // Get the input data for any movies that have been added along with
        // this theater.
        $(".new-movie").each(function() {
            var newMovieName = $(this).find("input.new-movie-name").val();
            var newMovieDirector = $(this).find("input.new-movie-director").val();
            var newMovieGenre = $(this).find("input.new-movie-genre").val();
            var newMovieRuntime = $(this).find("input.new-movie-runtime").val();

            var newMovie = {
                name: newMovieName,
                director: newMovieDirector,
                genre: newMovieGenre,
                runtime: newMovieRuntime
            };

            newTheater.movies.push(newMovie);
        });

        // Add this theater to the theater display
        $("ul#theaters").append("<li><span class='theater'>" + newTheater.name + "</span></li>");
        console.log("newTheater.name is " + newTheater);

        // Display a clicked theater using jQuery's data-binding
        $(".theater").last().click(function() {
            $("#show-theater").show();
            $("show-theater h2").text(newTheater.name);

            $(".location").text(newTheater.location);

            // Clear movies from the generic list shared between theaters before adding movies for this just-added theater
            $("ul#movie").text("");

            // Display all the movies for this theater
            newTheater.movies.forEach(function(movie) {
                $("ul#movie").append(
                    "<li>" + movie.name + ", " + movie.director + ", " + movie.genre + ", " + movie.runtime + "</li>"
                );
            });
        });

        // Reset all form values so that the user can add new data
        $("input#new-name").val("");
        $("input#new-location").val("");
        $("input.new-movie-name").val("");
        $("input.new-movie-director").val("");
        $("input.new-movie-genre").val("");
        $("input.new-movie-runtime").val("");


    });

});

define(function(require) {
    var DataUtils = require('utils/DataUtils'),
        expect = require('unexpected');

    describe("Other Activity", function() {
        it('should be OK', function() {
            expect(DataUtils, 'to be ok');
        });
    });
});

/* TODO:
- RUN THE TESTS                                                 DONE
- LOOK INTO UNEXPECTED                                          DONE
- IMPROVE BUILD JOB TO LOOK IN UTILS FOLDER AS WELL
- REWRITE THIS TEST
- LOOK INTO WRITING TESTS FOR REACT
*/
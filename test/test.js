var expect = chai.expect;
// var should = chai.should();

describe('Letter Grader', function () {
    it('should take a number between 0 and 100', function () {
        expect(letterGrader('a')).to.equal('Please provide only test scores from 0 to 100');
        expect(letterGrader(101)).to.equal('Please provide only test scores from 0 to 100');
    });
    it('should return the correct grade', function () {
        expect(letterGrader(95)).to.equal('A');
        expect(letterGrader(10)).to.equal('F');
        expect(letterGrader(89)).to.equal('B+');
        expect(letterGrader(72)).to.equal('C-');
    });
});

describe('Average Score', function () {
    it('Return the average of an array of scores', function () {
        expect(averageScore([90, 95, 87, 60])).to.equal(83);
        expect(averageScore([90, 95, 87, -60])).to.equal('Please provide only test scores from 0 to 100');
        expect(averageScore([90, 95, 87, 'A'])).to.equal('Please provide only test scores from 0 to 100');
    });
});

describe('Median Score', function () {
    it('Return the median of an array of scores', function () {
        expect(medianScore([52, 80, 80, 86, 94])).to.equal(80);
        expect(medianScore([90, 95, 87, -60])).to.equal('Please provide only test scores from 0 to 100');
        expect(medianScore([90, 95, 87, 'A'])).to.equal('Please provide only test scores from 0 to 100');
        expect(medianScore([52, 80, 80, 86, 94, 99])).to.equal(83);
    });
});

describe('mode Score', function () {
    it('Return the mode of an array of scores', function () {
        expect(modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).to.equal(92);
        expect(modeScore([90, 95, 87, -60])).to.equal('Please provide only test scores from 0 to 100');
        expect(modeScore([90, 95, 87, 'A'])).to.equal('Please provide only test scores from 0 to 100');
    });
});
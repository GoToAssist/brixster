define(function(require) {
    var expect = require('unexpected');
    var React = require('react/addons');
    var PositionLayout = require('../position-layout.jsx');
    var TestUtils = React.addons.TestUtils;

    var positionVariants = [
        'centered',
        'topRight',
        'topLeft',
        'bottomRight',
        'bottomRight',
        'bottom'
    ];

    describe('PositionLayout Element', function() {
        
        describe('without attributes', function() {
            it('should render', function() {
                expect(function() {
                    var target = TestUtils.renderIntoDocument(<PositionLayout />);
                    var element = TestUtils.findRenderedDOMComponentWithClass(target, 'brx-position-layout');
                }, 'to be ok');
            });
        });

        describe('attribute: fiexd', function() {
            it('should render fixed', function() {
                expect(function() {
                    var target = TestUtils.renderIntoDocument(<PositionLayout fixed={true} />);
                    var element = TestUtils.findRenderedDOMComponentWithClass(target, 'brx-fixed');
                }, 'to be ok');
            });
            it('should render without fixed', function() {
                expect(function() {
                    var target = TestUtils.renderIntoDocument(<PositionLayout fixed={false} />);
                    var element = TestUtils.findRenderedDOMComponentWithClass(target, 'brx-fixed');
                }, 'to be ok');
            });
        });

        describe('attribute: position', function() {
            positionVariants.forEach(function(position) {
                var target;
                var expectedPositionClass = 'brx-' + position;

                beforeEach(function() {
                    target = TestUtils.renderIntoDocument(<PositionLayout position={position} />);
                });

                it(position, function() {
                    expect(function() {
                        TestUtils.findRenderedDOMComponentWithClass(target, expectedPositionClass);
                    }, 'to be ok');
                });
            });
        });

    });
});
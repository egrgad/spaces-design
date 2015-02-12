/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */


define(function (require, exports, module) {
    "use strict";

    var React = require("react"),
        Fluxxor = require("fluxxor"),
        FluxMixin = Fluxxor.FluxMixin(React),
        Immutable = require("immutable");

    var BlendMode = require("jsx!./BlendMode"),
        Gutter = require("jsx!js/jsx/shared/Gutter"),
        Label = require("jsx!js/jsx/shared/Label"),
        NumberInput = require("jsx!js/jsx/shared/NumberInput"),
        strings = require("i18n!nls/strings"),
        synchronization = require("js/util/synchronization"),
        collection = require("js/util/collection");

    var Opacity = React.createClass({
        mixins: [FluxMixin],

        shouldComponentUpdate: function (nextProps) {
            var getRelevantProps = function (props) {
                var layers = props.document.layers.selected;

                return collection.pluckAll(layers, ["id", "blendMode", "opacity"]);
            };

            return !Immutable.is(getRelevantProps(this.props), getRelevantProps(nextProps));
        },

        /**
         * Debounced instance of actions.layers.setOpacity
         * @private
         * @type {function()}
         */
        _setOpacityDebounced: null,

        /**
         * Set the layer opacity.
         *
         * @param {SyntheticEvent} event
         * @param {number} opacity A percentage in [0,100]
         */
        _handleOpacityChange: function (layers, event, opacity) {
            var document = this.props.document;
                
            this._setOpacityDebounced(document, layers, opacity);
        },

        componentWillMount: function () {
            var flux = this.getFlux();
            
            this._setOpacityDebounced = synchronization.debounce(flux.actions.layers.setOpacity);
        },

        render: function () {
            var document = this.props.document,
                layers = document.layers.selected.filterNot(function (layer) {
                    return layer.isBackground;
                });
            
            if (layers.isEmpty()) {
                return null;
            }

            var opacities = collection.pluck(layers, "opacity");
            return (
                <div className="formline">
                    <Label
                        title={strings.TOOLTIPS.SET_OPACITY}>
                        {strings.STYLE.OPACITY}
                    </Label>
                    <Gutter />
                    <NumberInput
                        value={opacities}
                        onChange={this._handleOpacityChange.bind(this, layers)}
                        min={0}
                        max={100}
                        disabled={this.props.readOnly}
                        size="column-4" />
                    <Gutter />
                    <BlendMode
                        {...this.props} />
                    <Gutter
                        size="column-2" />
                </div>
            );
        }
    });

    module.exports = Opacity;
});

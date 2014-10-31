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

/*global define */

define(function (require, exports, module) {

    "use strict";

    module.exports = {
        APP_NAME: "Designshop",
        MENU: {
            APPLICATION: {
                $MENU: "Application",
                ABOUT: "About Photoshop..."
            },
            FILE: {
                $MENU: "File",
                NEW: "New...",
                OPEN: "Open...",
                OPEN_RECENT: {
                    $MENU: "Open Recent",
                    RECENT_ENTRY_ONE: "A recent file",
                    RECENT_ENTRY_TWO: "Another recent file",
                    RECENT_ENTRY_THREE: "Yet another recent file"
                },
                CLOSE: "Close",
                SAVE: "Save",
                SAVE_AS: "Save As..."
            },
            EDIT: {
                $MENU: "Edit",
                CUT: "Cut",
                COPY: "Copy",
                PASTE: "Paste",
                UNDO: "Undo"
            },
            IMAGE: {
                $MENU: "Image"
            },
            LAYER: {
                $MENU: "Layer",
                GROUP_SELECTED: "Group selected"
            },
            TYPE: {
                $MENU: "Type"
            },
            SELECT: {
                $MENU: "Select"
            },
            VIEW: {
                $MENU: "View"
            },
            WINDOW: {
                $MENU: "Window"
            },
            HELP: {
                $MENU: "Help",
                TEST: "Testing 1, 2, 3"
            }
        },
        TITLE_PAGES: "PAGES",
        TITLE_STYLE: "STYLE",
        TITLE_TRANSFORM: "TRANSFORM",
        TRANSFORM: {
            X: "X",
            Y: "Y",
            W: "W",
            H: "H",
            MIXED: "mixed"
        },
        STYLE: {
            BLEND: {
                NORMAL:"Normal",
                DISSOLVE: "Dissolve",
                DARKEN: "Darken",
                LIGHTEN: "Lighten",
                SCREEN: "Screen",
                OVERLAY: "Overlay",
                MULTIPLY: "Multiply",
                COLORBURN: "Color Burn",
                LINEARBURN: "Linear Burn",
                DARKERCOLOR: "Darker Color"
            },
            OPACITY: "Opacity",
            COMBINE: "Combine",
            FILL: {
                TITLE: "Fill",
                ALPHA: "Alpha"
            },
            STROKE: {
                TITLE: "Stroke",
                SIZE: "Size"
            },
            TYPE: {
                TITLE: "Type",
                TYPEFACE: "Typeface",
                WEIGHT: "Weight",
                SIZE: "Size",
                LETTER: "Letter",
                LINE: "Line",
                ALIGN: "Align"
            }
        }
    };
});

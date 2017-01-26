/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

export const styles:any[] = ['$tooltip-bg: rgba(0, 0, 0, .75);\n$tooltip-color: #fff;\n$tooltip-caret-bg: $tooltip-bg;\n$tooltip-border: transparent;\n$tooltip-spacing: 10px;\n\n$popover-bg: #fff;\n$popover-color: #060709;\n$popover-caret-bg: $popover-bg;\n$popover-border: #72809b;\n$popover-spacing: 10px;\n\n$shadow-key-umbra-opacity: 0.2;\n$shadow-key-penumbra-opacity: 0.14;\n$shadow-ambient-shadow-opacity: 0.12;\n$shadow:\n  0 1px 3px 0 rgba(0, 0, 0, $shadow-key-umbra-opacity),\n  0 1px 1px 0 rgba(0, 0, 0, $shadow-key-penumbra-opacity),\n  0 2px 1px -1px rgba(0, 0, 0, $shadow-ambient-shadow-opacity);\n\n\n.ngx-tooltip-content {\n  position: fixed;\n  border-radius: 3px;\n  z-index: 5000;\n  display: block;\n  font-weight: normal;\n  opacity: 0;\n  pointer-events: none !important;\n\n  &.type-popover {\n    background: $popover-bg;\n    color: $popover-color;\n    border: 1px solid $popover-border;\n    box-shadow: $shadow;\n    font-size: 13px;\n    padding: 4px;\n\n   .tooltip-caret {\n     position: absolute;\n     z-index: 5001;\n     width: 0;\n     height: 0;\n\n     &.position-left {\n       border-top: 7px solid transparent;\n       border-bottom: 7px solid transparent;\n       border-left: 7px solid $popover-caret-bg;\n     }\n\n     &.position-top {\n       border-left: 7px solid transparent;\n       border-right: 7px solid transparent;\n       border-top: 7px solid $popover-caret-bg;\n     }\n\n     &.position-right {\n       border-top: 7px solid transparent;\n       border-bottom: 7px solid transparent;\n       border-right: 7px solid $popover-caret-bg;\n     }\n\n     &.position-bottom {\n       border-left: 7px solid transparent;\n       border-right: 7px solid transparent;\n       border-bottom: 7px solid $popover-caret-bg;\n     }\n   }\n  }\n\n  &.type-tooltip {\n   color: $tooltip-color;\n   background: $tooltip-bg;\n   font-size: 12px;\n   padding: 0 10px;\n   text-align: center;\n   pointer-events: auto;\n\n   .tooltip-caret {\n     &.position-left {\n       border-top: 7px solid transparent;\n       border-bottom: 7px solid transparent;\n       border-left: 7px solid $tooltip-caret-bg;\n     }\n\n     &.position-top {\n       border-left: 7px solid transparent;\n       border-right: 7px solid transparent;\n       border-top: 7px solid $tooltip-caret-bg;\n     }\n\n     &.position-right {\n       border-top: 7px solid transparent;\n       border-bottom: 7px solid transparent;\n       border-right: 7px solid $tooltip-caret-bg;\n     }\n\n     &.position-bottom {\n       border-left: 7px solid transparent;\n       border-right: 7px solid transparent;\n       border-bottom: 7px solid $tooltip-caret-bg;\n     }\n   }\n  }\n\n  .tooltip-label {\n    display: block;\n    line-height: 1em;\n    padding: 8px 5px 5px 5px;\n    font-size: 1em;\n  }\n\n  .tooltip-val {\n    display: block;\n    font-size: 1.3em;\n    line-height: 1em;\n    padding: 0 5px 8px 5px;\n  }\n\n  .tooltip-caret {\n    position: absolute;\n    z-index: 5001;\n    width: 0;\n    height: 0;\n  }\n\n  &.position-right {\n   transform: translate3d(10px, 0, 0);\n  }\n\n  &.position-left {\n   transform: translate3d(-10px, 0, 0);\n  }\n\n  &.position-top {\n   transform: translate3d(0, -10px, 0);\n  }\n\n  &.position-bottom {\n   transform: translate3d(0, 10px, 0);\n  }\n\n  &.animate {\n    opacity: 1;\n    transition: opacity 0.3s, transform 0.3s;\n    transform: translate3d(0, 0, 0);\n    pointer-events: auto;\n  }\n\n}\n\n.area-tooltip-container {\n  padding: 5px 0;\n  pointer-events: none;\n}\n\n\n.tooltip-item{\n  text-align: left;\n  line-height: 1.2em;\n  padding: 5px 0;\n\n  .tooltip-item-color {\n    display: inline-block;\n    height: 12px;\n    width: 12px;\n    margin-right: 5px;\n    color: #5b646b;\n    border-radius: 3px;\n  }\n}\n'];
(function(){"use strict";try{if(typeof document!="undefined"){var n=document.createElement("style");n.appendChild(document.createTextNode(`@charset "UTF-8";/** if false, disabled buttons will be greyed out */
.v-application {
  display: flex;
  background: rgb(var(--v-theme-background));
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
.v-application__wrap {
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 100%;
  min-height: 100vh;
  position: relative;
}/** if false, disabled buttons will be greyed out */
.v-btn {
  align-items: center;
  border-radius: 4px;
  display: inline-grid;
  grid-template-areas: "prepend content append";
  grid-template-columns: max-content auto max-content;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  max-width: 100%;
  outline: none;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-property: box-shadow, transform, opacity, background;
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  vertical-align: middle;
  flex-shrink: 0;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
}
.v-btn--size-x-small {
  --v-btn-size: 0.625rem;
  --v-btn-height: 20px;
  font-size: 0.625rem;
  min-width: 36px;
  padding: 0 8px;
}
.v-btn--size-small {
  --v-btn-size: 0.75rem;
  --v-btn-height: 28px;
  font-size: 0.75rem;
  min-width: 50px;
  padding: 0 12px;
}
.v-btn--size-default {
  --v-btn-size: 0.875rem;
  --v-btn-height: 36px;
  font-size: 0.875rem;
  min-width: 64px;
  padding: 0 16px;
}
.v-btn--size-large {
  --v-btn-size: 1rem;
  --v-btn-height: 44px;
  font-size: 1rem;
  min-width: 78px;
  padding: 0 20px;
}
.v-btn--size-x-large {
  --v-btn-size: 1.125rem;
  --v-btn-height: 52px;
  font-size: 1.125rem;
  min-width: 92px;
  padding: 0 24px;
}
.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 0px);
}
.v-btn.v-btn--density-comfortable {
  height: calc(var(--v-btn-height) + -8px);
}
.v-btn.v-btn--density-compact {
  height: calc(var(--v-btn-height) + -12px);
}
.v-btn--border {
  border-width: thin;
  box-shadow: none;
}
.v-btn--absolute {
  position: absolute;
}
.v-btn--fixed {
  position: fixed;
}
.v-btn:hover > .v-btn__overlay {
  opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
}
.v-btn:focus-visible > .v-btn__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-btn:focus > .v-btn__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }
}
.v-btn--active > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true] > .v-btn__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
.v-btn--active:hover > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true]:hover > .v-btn__overlay {
  opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
}
.v-btn--active:focus-visible > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible > .v-btn__overlay {
  opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-btn--active:focus > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true]:focus > .v-btn__overlay {
    opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
  }
}
.v-btn--variant-plain, .v-btn--variant-outlined, .v-btn--variant-text, .v-btn--variant-tonal {
  background: transparent;
  color: inherit;
}
.v-btn--variant-plain {
  opacity: 0.62;
}
.v-btn--variant-plain:focus, .v-btn--variant-plain:hover {
  opacity: 1;
}
.v-btn--variant-plain .v-btn__overlay {
  display: none;
}
.v-btn--variant-elevated, .v-btn--variant-flat {
  background: rgb(var(--v-theme-surface));
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
.v-btn--variant-elevated {
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-btn--variant-flat {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-btn--variant-outlined {
  border: thin solid currentColor;
}
.v-btn--variant-text .v-btn__overlay {
  background: currentColor;
}
.v-btn--variant-tonal .v-btn__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
@supports selector(:focus-visible) {
  .v-btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border: 2px solid currentColor;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  .v-btn:focus-visible::after {
    opacity: calc(0.25 * var(--v-theme-overlay-multiplier));
  }
}
.v-btn--icon {
  border-radius: 50%;
  min-width: 0;
  padding: 0;
}
.v-btn--icon.v-btn--size-default {
  font-size: 1rem;
}
.v-btn--icon.v-btn--density-default {
  width: calc(var(--v-btn-height) + 12px);
  height: calc(var(--v-btn-height) + 12px);
}
.v-btn--icon.v-btn--density-comfortable {
  width: calc(var(--v-btn-height) + 0px);
  height: calc(var(--v-btn-height) + 0px);
}
.v-btn--icon.v-btn--density-compact {
  width: calc(var(--v-btn-height) + -8px);
  height: calc(var(--v-btn-height) + -8px);
}
.v-btn--elevated:hover, .v-btn--elevated:focus {
  box-shadow: 0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-btn--elevated:active {
  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-btn--flat {
  box-shadow: none;
}
.v-btn--block {
  display: flex;
  flex: 1 0 auto;
  min-width: 100%;
}
.v-btn--disabled {
  pointer-events: none;
  opacity: 0.26;
}
.v-btn--disabled.v-btn--variant-elevated, .v-btn--disabled.v-btn--variant-flat {
  box-shadow: none;
  opacity: 1;
  color: rgba(var(--v-theme-on-surface), 0.26);
  background: rgb(var(--v-theme-surface));
}
.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay, .v-btn--disabled.v-btn--variant-flat .v-btn__overlay {
  opacity: 0.4615384615;
}
.v-btn--loading {
  pointer-events: none;
}
.v-btn--loading .v-btn__content,
.v-btn--loading .v-btn__prepend,
.v-btn--loading .v-btn__append {
  opacity: 0;
}
.v-btn--stacked {
  grid-template-areas: "prepend" "content" "append";
  grid-template-columns: auto;
  grid-template-rows: max-content max-content max-content;
  justify-items: center;
  align-content: center;
}
.v-btn--stacked .v-btn__content {
  flex-direction: column;
  line-height: 1.25;
}
.v-btn--stacked .v-btn__prepend,
.v-btn--stacked .v-btn__append,
.v-btn--stacked .v-btn__content > .v-icon--start,
.v-btn--stacked .v-btn__content > .v-icon--end {
  margin-inline-start: 0;
  margin-inline-end: 0;
}
.v-btn--stacked .v-btn__prepend,
.v-btn--stacked .v-btn__content > .v-icon--start {
  margin-bottom: 4px;
}
.v-btn--stacked .v-btn__append,
.v-btn--stacked .v-btn__content > .v-icon--end {
  margin-top: 4px;
}
.v-btn--stacked.v-btn--size-x-small {
  --v-btn-size: 0.625rem;
  --v-btn-height: 56px;
  font-size: 0.625rem;
  min-width: 56px;
  padding: 0 12px;
}
.v-btn--stacked.v-btn--size-small {
  --v-btn-size: 0.75rem;
  --v-btn-height: 64px;
  font-size: 0.75rem;
  min-width: 64px;
  padding: 0 14px;
}
.v-btn--stacked.v-btn--size-default {
  --v-btn-size: 0.875rem;
  --v-btn-height: 72px;
  font-size: 0.875rem;
  min-width: 72px;
  padding: 0 16px;
}
.v-btn--stacked.v-btn--size-large {
  --v-btn-size: 1rem;
  --v-btn-height: 80px;
  font-size: 1rem;
  min-width: 80px;
  padding: 0 18px;
}
.v-btn--stacked.v-btn--size-x-large {
  --v-btn-size: 1.125rem;
  --v-btn-height: 88px;
  font-size: 1.125rem;
  min-width: 88px;
  padding: 0 20px;
}
.v-btn--stacked.v-btn--density-default {
  height: calc(var(--v-btn-height) + 0px);
}
.v-btn--stacked.v-btn--density-comfortable {
  height: calc(var(--v-btn-height) + -16px);
}
.v-btn--stacked.v-btn--density-compact {
  height: calc(var(--v-btn-height) + -24px);
}
.v-btn--rounded {
  border-radius: 24px;
}
.v-btn .v-icon {
  --v-icon-size-multiplier: 0.8571428571;
}
.v-btn--icon .v-icon {
  --v-icon-size-multiplier: 1;
}
.v-btn--stacked .v-icon {
  --v-icon-size-multiplier: 1.1428571429;
}
.v-btn__loader {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.v-btn__content,
.v-btn__prepend,
.v-btn__append {
  align-items: center;
  display: flex;
  transition: transform, opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.v-btn__prepend {
  grid-area: prepend;
  margin-inline-start: calc(var(--v-btn-height) / -9);
  margin-inline-end: calc(var(--v-btn-height) / 4.5);
}
.v-btn__append {
  grid-area: append;
  margin-inline-start: calc(var(--v-btn-height) / 4.5);
  margin-inline-end: calc(var(--v-btn-height) / -9);
}
.v-btn__content {
  grid-area: content;
  justify-content: center;
  white-space: nowrap;
}
.v-btn__content > .v-icon--start {
  margin-inline-start: calc(var(--v-btn-height) / -9);
  margin-inline-end: calc(var(--v-btn-height) / 4.5);
}
.v-btn__content > .v-icon--end {
  margin-inline-start: calc(var(--v-btn-height) / 4.5);
  margin-inline-end: calc(var(--v-btn-height) / -9);
}
.v-btn--stacked .v-btn__content {
  white-space: normal;
}
.v-btn__overlay {
  background-color: currentColor;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
.v-btn__overlay,
.v-btn__underlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.v-app-bar .v-btn {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-card-actions .v-btn {
  padding: 0 8px;
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-card-actions .v-btn ~ .v-btn {
  margin-inline-start: 0.5rem;
}
.v-banner-actions .v-btn {
  padding: 0 8px;
}
.v-pagination .v-btn {
  border-radius: 4px;
}
.v-btn__overlay {
  transition: none;
}
.v-pagination__item--is-active .v-btn__overlay {
  opacity: var(--v-border-opacity);
}
.v-snackbar-actions .v-btn {
  padding: 0 8px;
}/** if false, disabled buttons will be greyed out */
.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay {
  opacity: var(--v-activated-opacity);
}/** if false, disabled buttons will be greyed out */
.v-btn-group {
  display: inline-flex;
  flex-wrap: nowrap;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  vertical-align: middle;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 4px;
  background: transparent;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
.v-btn-group--border {
  border-width: thin;
  box-shadow: none;
}
.v-btn-group--density-default.v-btn-group {
  height: 48px;
}
.v-btn-group--density-comfortable.v-btn-group {
  height: 40px;
}
.v-btn-group--density-compact.v-btn-group {
  height: 36px;
}
.v-btn-group .v-btn {
  border-radius: 0;
  border-color: inherit;
}
.v-btn-group .v-btn:not(:last-child) {
  border-inline-end: none;
}
.v-btn-group .v-btn:not(:first-child) {
  border-inline-start: none;
}
.v-btn-group .v-btn:first-child {
  border-start-start-radius: inherit;
  border-end-start-radius: inherit;
}
.v-btn-group .v-btn:last-child {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}
.v-btn-group--divided .v-btn:not(:last-child) {
  border-inline-end-width: thin;
  border-inline-end-style: solid;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity));
}
.v-btn-group--tile {
  border-radius: 0;
}/** if false, disabled buttons will be greyed out */
.v-icon {
  --v-icon-size-multiplier: 1;
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  height: 1em;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  user-select: none;
  vertical-align: middle;
  width: 1em;
}
.v-icon--clickable {
  cursor: pointer;
}
.v-icon--size-x-small {
  font-size: calc(var(--v-icon-size-multiplier) * 1em);
}
.v-icon--size-small {
  font-size: calc(var(--v-icon-size-multiplier) * 1.25em);
}
.v-icon--size-default {
  font-size: calc(var(--v-icon-size-multiplier) * 1.5em);
}
.v-icon--size-large {
  font-size: calc(var(--v-icon-size-multiplier) * 1.75em);
}
.v-icon--size-x-large {
  font-size: calc(var(--v-icon-size-multiplier) * 2em);
}
.v-icon__svg {
  fill: currentColor;
  width: 100%;
  height: 100%;
}
.v-icon--start {
  margin-inline-end: 8px;
}
.v-icon--end {
  margin-inline-start: 8px;
}/** if false, disabled buttons will be greyed out */
.v-progress-circular {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  vertical-align: middle;
}
.v-progress-circular > svg {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}
.v-progress-circular__content {
  align-items: center;
  display: flex;
  justify-content: center;
}
.v-progress-circular__underlay {
  color: rgba(var(--v-border-color), var(--v-border-opacity));
  stroke: currentColor;
  z-index: 1;
}
.v-progress-circular__overlay {
  stroke: currentColor;
  transition: all 0.2s ease-in-out, stroke-width 0s;
  z-index: 2;
}
.v-progress-circular--size-x-small {
  height: 16px;
  width: 16px;
}
.v-progress-circular--size-small {
  height: 24px;
  width: 24px;
}
.v-progress-circular--size-default {
  height: 32px;
  width: 32px;
}
.v-progress-circular--size-large {
  height: 48px;
  width: 48px;
}
.v-progress-circular--size-x-large {
  height: 64px;
  width: 64px;
}
.v-progress-circular--indeterminate > svg {
  animation: progress-circular-rotate 1.4s linear infinite;
  transform-origin: center center;
  transition: all 0.2s ease-in-out;
}
.v-progress-circular--indeterminate .v-progress-circular__overlay {
  animation: progress-circular-dash 1.4s ease-in-out infinite;
  stroke-dasharray: 25, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
}
.v-progress-circular--disable-shrink > svg {
  animation-duration: 0.7s;
}
.v-progress-circular--disable-shrink .v-progress-circular__overlay {
  animation: none;
}
.v-progress-circular--indeterminate:not(.v-progress-circular--visible) > svg,
.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay {
  animation-play-state: paused !important;
}
@keyframes progress-circular-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes progress-circular-rotate {
  100% {
    transform: rotate(270deg);
  }
}/** if false, disabled buttons will be greyed out */
.v-ripple__container {
  color: inherit;
  border-radius: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  contain: strict;
}
.v-ripple__animation {
  color: inherit;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  will-change: transform, opacity;
}
.v-ripple__animation--enter {
  transition: none;
}
.v-ripple__animation--in {
  transition: transform 0.25s cubic-bezier(0, 0, 0.2, 1), opacity 0.1s cubic-bezier(0, 0, 0.2, 1);
}
.v-ripple__animation--out {
  transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
}/** if false, disabled buttons will be greyed out */
.v-progress-linear {
  background: transparent;
  overflow: hidden;
  position: relative;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}
.v-progress-linear__background {
  background: currentColor;
  bottom: 0;
  left: 0;
  opacity: var(--v-border-opacity);
  position: absolute;
  top: 0;
  transition-property: width, left, right;
  transition: inherit;
}
.v-progress-linear__content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
}
.v-progress-linear__determinate,
.v-progress-linear__indeterminate {
  background: currentColor;
}
.v-progress-linear__determinate {
  height: inherit;
  left: 0;
  position: absolute;
  transition: inherit;
  transition-property: width, left, right;
}
.v-progress-linear__indeterminate .long, .v-progress-linear__indeterminate .short {
  animation-play-state: paused;
  animation-duration: 2.2s;
  animation-iteration-count: infinite;
  bottom: 0;
  height: inherit;
  left: 0;
  position: absolute;
  right: auto;
  top: 0;
  width: auto;
  will-change: left, right;
}
.v-progress-linear__indeterminate .long {
  animation-name: indeterminate-ltr;
}
.v-progress-linear__indeterminate .short {
  animation-name: indeterminate-short-ltr;
}
.v-progress-linear__stream {
  animation: stream 0.25s infinite linear;
  animation-play-state: paused;
  bottom: 0;
  left: auto;
  opacity: 0.3;
  pointer-events: none;
  position: absolute;
  transition: inherit;
  transition-property: width, left, right;
}
.v-progress-linear--reverse .v-progress-linear__background,
.v-progress-linear--reverse .v-progress-linear__determinate,
.v-progress-linear--reverse .v-progress-linear__content {
  left: auto;
  right: 0;
}
.v-progress-linear--reverse .v-progress-linear__indeterminate .long, .v-progress-linear--reverse .v-progress-linear__indeterminate .short {
  left: auto;
  right: 0;
}
.v-progress-linear--reverse .v-progress-linear__indeterminate .long {
  animation-name: indeterminate-rtl;
}
.v-progress-linear--reverse .v-progress-linear__indeterminate .short {
  animation-name: indeterminate-short-rtl;
}
.v-progress-linear--reverse .v-progress-linear__stream {
  right: auto;
}
.v-progress-linear--absolute,
.v-progress-linear--fixed {
  left: 0;
  z-index: 1;
}
.v-progress-linear--absolute {
  position: absolute;
}
.v-progress-linear--fixed {
  position: fixed;
}
.v-progress-linear--rounded {
  border-radius: 4px;
}
.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,
.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate {
  border-radius: inherit;
}
.v-progress-linear--striped .v-progress-linear__determinate {
  animation: progress-linear-stripes 1s infinite linear;
  background-image: linear-gradient(135deg, hsla(0, 0%, 100%, 0.25) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, 0.25) 0, hsla(0, 0%, 100%, 0.25) 75%, transparent 0, transparent);
  background-repeat: repeat;
  background-size: var(--v-progress-linear-height);
}
.v-progress-linear--active .v-progress-linear__indeterminate .long, .v-progress-linear--active .v-progress-linear__indeterminate .short {
  animation-play-state: running;
}
.v-progress-linear--active .v-progress-linear__stream {
  animation-play-state: running;
}
.v-progress-linear--rounded-bar .v-progress-linear__determinate,
.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,
.v-progress-linear--rounded-bar .v-progress-linear__stream + .v-progress-linear__background {
  border-radius: 4px;
}
.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr, .v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl, .v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
@keyframes indeterminate-ltr {
  0% {
    left: -90%;
    right: 100%;
  }
  60% {
    left: -90%;
    right: 100%;
  }
  100% {
    left: 100%;
    right: -35%;
  }
}
@keyframes indeterminate-rtl {
  0% {
    left: 100%;
    right: -90%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: -35%;
    right: 100%;
  }
}
@keyframes indeterminate-short-ltr {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}
@keyframes indeterminate-short-rtl {
  0% {
    left: 100%;
    right: -200%;
  }
  60% {
    left: -8%;
    right: 107%;
  }
  100% {
    left: -8%;
    right: 107%;
  }
}
@keyframes stream {
  to {
    transform: translateX(var(--v-progress-linear-stream-to));
  }
}
@keyframes progress-linear-stripes {
  0% {
    background-position-x: var(--v-progress-linear-height);
  }
}/** if false, disabled buttons will be greyed out */
.v-card {
  display: block;
  overflow: hidden;
  overflow-wrap: break-word;
  position: relative;
  padding: 0;
  text-decoration: none;
  transition-duration: 0.28s;
  transition-property: box-shadow, opacity, background;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  border-radius: 4px;
}
.v-card--border {
  border-width: thin;
  box-shadow: none;
}
.v-card--absolute {
  position: absolute;
}
.v-card--fixed {
  position: fixed;
}
.v-card:hover > .v-card__overlay {
  opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
}
.v-card:focus-visible > .v-card__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-card:focus > .v-card__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }
}
.v-card--active > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true] > .v-card__overlay {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
.v-card--active:hover > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true]:hover > .v-card__overlay {
  opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
}
.v-card--active:focus-visible > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true]:focus-visible > .v-card__overlay {
  opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
}
@supports not selector(:focus-visible) {
  .v-card--active:focus > .v-card__overlay, .v-card[aria-haspopup=menu][aria-expanded=true]:focus > .v-card__overlay {
    opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
  }
}
.v-card--variant-plain, .v-card--variant-outlined, .v-card--variant-text, .v-card--variant-tonal {
  background: transparent;
  color: inherit;
}
.v-card--variant-plain {
  opacity: 0.62;
}
.v-card--variant-plain:focus, .v-card--variant-plain:hover {
  opacity: 1;
}
.v-card--variant-plain .v-card__overlay {
  display: none;
}
.v-card--variant-elevated, .v-card--variant-flat {
  background: rgb(var(--v-theme-surface));
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
.v-card--variant-elevated {
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-card--variant-flat {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-card--variant-outlined {
  border: thin solid currentColor;
}
.v-card--variant-text .v-card__overlay {
  background: currentColor;
}
.v-card--variant-tonal .v-card__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.v-card--disabled {
  pointer-events: none;
  user-select: none;
}
.v-card--disabled > :not(.v-card__loader) {
  opacity: 0.6;
}
.v-card--flat {
  box-shadow: none;
}
.v-card--hover {
  cursor: pointer;
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-card--hover::before, .v-card--hover::after {
  border-radius: inherit;
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: inherit;
}
.v-card--hover::before {
  opacity: 1;
  z-index: -1;
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-card--hover::after {
  z-index: 1;
  opacity: 0;
  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-card--hover:hover::after {
  opacity: 1;
}
.v-card--hover:hover::before {
  opacity: 0;
}
.v-card--link {
  cursor: pointer;
}
.v-card-actions {
  align-items: center;
  display: flex;
  flex: none;
  min-height: 52px;
  padding: 0.5rem;
}
.v-card-item {
  align-items: center;
  display: grid;
  flex: none;
  grid-template-areas: "prepend content append";
  grid-template-columns: max-content auto max-content;
  padding: 0.625rem 1rem;
}
.v-card-item + .v-card-text {
  padding-top: 0;
}
.v-card-item__prepend {
  grid-area: prepend;
  padding-inline-end: 1rem;
}
.v-card-item__append {
  grid-area: append;
  padding-inline-start: 1rem;
}
.v-card-item__content {
  align-self: center;
  grid-area: content;
  overflow: hidden;
}
.v-card-title {
  display: block;
  flex: none;
  font-size: 1.25rem;
  font-weight: 500;
  hyphens: auto;
  letter-spacing: 0.0125em;
  min-width: 0;
  overflow-wrap: normal;
  overflow: hidden;
  padding: 0.5rem 1rem;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
  word-break: normal;
  word-wrap: break-word;
}
.v-card .v-card-title {
  line-height: 2rem;
}
.v-card--density-comfortable .v-card-title {
  line-height: 1.75rem;
}
.v-card--density-compact .v-card-title {
  line-height: 1.55rem;
}
.v-card-item .v-card-title {
  padding: 0;
}
.v-card-title + .v-card-text,
.v-card-title + .v-card-actions {
  padding-top: 0;
}
.v-card-subtitle {
  display: block;
  flex: none;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  opacity: var(--v-medium-emphasis-opacity);
  overflow: hidden;
  padding: 0 1rem;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
}
.v-card .v-card-subtitle {
  line-height: 1.25rem;
}
.v-card--density-comfortable .v-card-subtitle {
  line-height: 1.125rem;
}
.v-card--density-compact .v-card-subtitle {
  line-height: 1rem;
}
.v-card-item .v-card-subtitle {
  padding: 0 0 0.25rem;
}
.v-card-text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  padding: 1rem;
  text-transform: none;
}
.v-card .v-card-text {
  line-height: 1.25rem;
}
.v-card--density-comfortable .v-card-text {
  line-height: 1.2rem;
}
.v-card--density-compact .v-card-text {
  line-height: 1.15rem;
}
.v-card__image {
  display: flex;
  height: 100%;
  flex: 1 1 auto;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}
.v-card__content {
  border-radius: inherit;
  overflow: hidden;
  position: relative;
}
.v-card__loader {
  bottom: auto;
  top: 0;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 1;
}
.v-card__overlay {
  background-color: currentColor;
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}/** if false, disabled buttons will be greyed out */
.v-avatar {
  flex: none;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: width, height;
  vertical-align: middle;
  border-radius: 50%;
}
.v-avatar.v-avatar--size-x-small {
  --v-avatar-height: 24px;
}
.v-avatar.v-avatar--size-small {
  --v-avatar-height: 32px;
}
.v-avatar.v-avatar--size-default {
  --v-avatar-height: 40px;
}
.v-avatar.v-avatar--size-large {
  --v-avatar-height: 48px;
}
.v-avatar.v-avatar--size-x-large {
  --v-avatar-height: 56px;
}
.v-avatar.v-avatar--density-default {
  height: calc(var(--v-avatar-height) + 0px);
  width: calc(var(--v-avatar-height) + 0px);
}
.v-avatar.v-avatar--density-comfortable {
  height: calc(var(--v-avatar-height) + -4px);
  width: calc(var(--v-avatar-height) + -4px);
}
.v-avatar.v-avatar--density-compact {
  height: calc(var(--v-avatar-height) + -8px);
  width: calc(var(--v-avatar-height) + -8px);
}
.v-avatar--variant-plain, .v-avatar--variant-outlined, .v-avatar--variant-text, .v-avatar--variant-tonal {
  background: transparent;
  color: inherit;
}
.v-avatar--variant-plain {
  opacity: 0.62;
}
.v-avatar--variant-plain:focus, .v-avatar--variant-plain:hover {
  opacity: 1;
}
.v-avatar--variant-plain .v-avatar__overlay {
  display: none;
}
.v-avatar--variant-elevated, .v-avatar--variant-flat {
  background: var(--v-theme-surface);
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}
.v-avatar--variant-elevated {
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-avatar--variant-flat {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.v-avatar--variant-outlined {
  border: thin solid currentColor;
}
.v-avatar--variant-text .v-avatar__overlay {
  background: currentColor;
}
.v-avatar--variant-tonal .v-avatar__underlay {
  background: currentColor;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.v-avatar--rounded {
  border-radius: 4px;
}
.v-avatar .v-img {
  height: 100%;
  width: 100%;
}/** if false, disabled buttons will be greyed out */
.v-img {
  --v-theme-overlay-multiplier: 3;
  z-index: 0;
}
.v-img--booting .v-responsive__sizer {
  transition: none;
}
.v-img__img,
.v-img__picture,
.v-img__gradient,
.v-img__placeholder,
.v-img__error {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-img__img--preload {
  filter: blur(4px);
}
.v-img__img--contain {
  object-fit: contain;
}
.v-img__img--cover {
  object-fit: cover;
}
.v-img__gradient {
  background-repeat: no-repeat;
}/** if false, disabled buttons will be greyed out */
.v-responsive {
  display: flex;
  flex: 1 0 auto;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
}
.v-responsive__content {
  flex: 1 0 0px;
  max-width: 100%;
}
.v-responsive__sizer ~ .v-responsive__content {
  margin-inline-start: -100%;
}
.v-responsive__sizer {
  flex: 1 0 0px;
  transition: padding-bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}/** if false, disabled buttons will be greyed out */
.v-main {
  flex: 1 0 auto;
  max-width: 100%;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  padding-left: var(--v-layout-left);
  padding-right: var(--v-layout-right);
  padding-top: var(--v-layout-top);
  padding-bottom: var(--v-layout-bottom);
}
.v-main__scroller {
  max-width: 100%;
  position: relative;
}
.v-main--scrollable {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-main--scrollable > .v-main__scroller {
  flex: 1 1 auto;
  overflow-y: auto;
  --v-layout-left: 0px;
  --v-layout-right: 0px;
  --v-layout-top: 0px;
  --v-layout-bottom: 0px;
}/** if false, disabled buttons will be greyed out */
.v-tooltip .v-overlay__content {
  background: rgba(var(--v-theme-surface-variant), 0.7);
  color: rgb(var(--v-theme-on-surface-variant));
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.6;
  display: inline-block;
  padding: 5px 16px;
  text-transform: initial;
  width: auto;
  opacity: 1;
  pointer-events: none;
  transition-property: opacity, transform;
}
.v-tooltip .v-overlay__content[class*=enter-active] {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 150ms;
}
.v-tooltip .v-overlay__content[class*=leave-active] {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 75ms;
}/** if false, disabled buttons will be greyed out */
.v-overlay-container {
  contain: layout;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  display: contents;
}
.v-overlay-scroll-blocked {
  padding-inline-end: var(--v-scrollbar-offset);
  overflow-y: hidden !important;
}
html.v-overlay-scroll-blocked {
  position: fixed;
  top: var(--v-body-scroll-y);
  left: var(--v-body-scroll-x);
  width: 100%;
  height: 100%;
}
.v-overlay {
  border-radius: inherit;
  display: flex;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
}
.v-overlay__content {
  outline: none;
  position: absolute;
  pointer-events: auto;
  contain: layout;
}
.v-overlay__scrim {
  pointer-events: auto;
  background: rgb(var(--v-theme-on-surface));
  border-radius: inherit;
  bottom: 0;
  left: 0;
  opacity: 32%;
  position: fixed;
  right: 0;
  top: 0;
}
.v-overlay--absolute {
  position: absolute;
}
.v-overlay--contained .v-overlay__scrim {
  position: absolute;
}
.v-overlay--scroll-blocked {
  padding-inline-end: var(--v-scrollbar-offset);
}
/** if false, disabled buttons will be greyed out */
@keyframes v-shake {
  59% {
    margin-left: 0;
  }
  60%, 80% {
    margin-left: 2px;
  }
  70%, 90% {
    margin-left: -2px;
  }
}
.bg-black {
  background-color: #000000 !important;
  color: #FFFFFF !important;
}
.bg-white {
  background-color: #FFFFFF !important;
  color: #000000 !important;
}
.bg-transparent {
  background-color: transparent !important;
  color: currentColor !important;
}
.bg-red {
  background-color: #F44336 !important;
  color: #FFFFFF !important;
}
.bg-red-lighten-5 {
  background-color: #FFEBEE !important;
  color: #000000 !important;
}
.bg-red-lighten-4 {
  background-color: #FFCDD2 !important;
  color: #000000 !important;
}
.bg-red-lighten-3 {
  background-color: #EF9A9A !important;
  color: #000000 !important;
}
.bg-red-lighten-2 {
  background-color: #E57373 !important;
  color: #FFFFFF !important;
}
.bg-red-lighten-1 {
  background-color: #EF5350 !important;
  color: #FFFFFF !important;
}
.bg-red-darken-1 {
  background-color: #E53935 !important;
  color: #FFFFFF !important;
}
.bg-red-darken-2 {
  background-color: #D32F2F !important;
  color: #FFFFFF !important;
}
.bg-red-darken-3 {
  background-color: #C62828 !important;
  color: #FFFFFF !important;
}
.bg-red-darken-4 {
  background-color: #B71C1C !important;
  color: #FFFFFF !important;
}
.bg-red-accent-1 {
  background-color: #FF8A80 !important;
  color: #000000 !important;
}
.bg-red-accent-2 {
  background-color: #FF5252 !important;
  color: #FFFFFF !important;
}
.bg-red-accent-3 {
  background-color: #FF1744 !important;
  color: #FFFFFF !important;
}
.bg-red-accent-4 {
  background-color: #D50000 !important;
  color: #FFFFFF !important;
}
.bg-pink {
  background-color: #e91e63 !important;
  color: #FFFFFF !important;
}
.bg-pink-lighten-5 {
  background-color: #fce4ec !important;
  color: #000000 !important;
}
.bg-pink-lighten-4 {
  background-color: #f8bbd0 !important;
  color: #000000 !important;
}
.bg-pink-lighten-3 {
  background-color: #f48fb1 !important;
  color: #000000 !important;
}
.bg-pink-lighten-2 {
  background-color: #f06292 !important;
  color: #FFFFFF !important;
}
.bg-pink-lighten-1 {
  background-color: #ec407a !important;
  color: #FFFFFF !important;
}
.bg-pink-darken-1 {
  background-color: #d81b60 !important;
  color: #FFFFFF !important;
}
.bg-pink-darken-2 {
  background-color: #c2185b !important;
  color: #FFFFFF !important;
}
.bg-pink-darken-3 {
  background-color: #ad1457 !important;
  color: #FFFFFF !important;
}
.bg-pink-darken-4 {
  background-color: #880e4f !important;
  color: #FFFFFF !important;
}
.bg-pink-accent-1 {
  background-color: #ff80ab !important;
  color: #FFFFFF !important;
}
.bg-pink-accent-2 {
  background-color: #ff4081 !important;
  color: #FFFFFF !important;
}
.bg-pink-accent-3 {
  background-color: #f50057 !important;
  color: #FFFFFF !important;
}
.bg-pink-accent-4 {
  background-color: #c51162 !important;
  color: #FFFFFF !important;
}
.bg-purple {
  background-color: #9c27b0 !important;
  color: #FFFFFF !important;
}
.bg-purple-lighten-5 {
  background-color: #f3e5f5 !important;
  color: #000000 !important;
}
.bg-purple-lighten-4 {
  background-color: #e1bee7 !important;
  color: #000000 !important;
}
.bg-purple-lighten-3 {
  background-color: #ce93d8 !important;
  color: #FFFFFF !important;
}
.bg-purple-lighten-2 {
  background-color: #ba68c8 !important;
  color: #FFFFFF !important;
}
.bg-purple-lighten-1 {
  background-color: #ab47bc !important;
  color: #FFFFFF !important;
}
.bg-purple-darken-1 {
  background-color: #8e24aa !important;
  color: #FFFFFF !important;
}
.bg-purple-darken-2 {
  background-color: #7b1fa2 !important;
  color: #FFFFFF !important;
}
.bg-purple-darken-3 {
  background-color: #6a1b9a !important;
  color: #FFFFFF !important;
}
.bg-purple-darken-4 {
  background-color: #4a148c !important;
  color: #FFFFFF !important;
}
.bg-purple-accent-1 {
  background-color: #ea80fc !important;
  color: #FFFFFF !important;
}
.bg-purple-accent-2 {
  background-color: #e040fb !important;
  color: #FFFFFF !important;
}
.bg-purple-accent-3 {
  background-color: #d500f9 !important;
  color: #FFFFFF !important;
}
.bg-purple-accent-4 {
  background-color: #aa00ff !important;
  color: #FFFFFF !important;
}
.bg-deep-purple {
  background-color: #673ab7 !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-lighten-5 {
  background-color: #ede7f6 !important;
  color: #000000 !important;
}
.bg-deep-purple-lighten-4 {
  background-color: #d1c4e9 !important;
  color: #000000 !important;
}
.bg-deep-purple-lighten-3 {
  background-color: #b39ddb !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-lighten-2 {
  background-color: #9575cd !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-lighten-1 {
  background-color: #7e57c2 !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-darken-1 {
  background-color: #5e35b1 !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-darken-2 {
  background-color: #512da8 !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-darken-3 {
  background-color: #4527a0 !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-darken-4 {
  background-color: #311b92 !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-accent-1 {
  background-color: #b388ff !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-accent-2 {
  background-color: #7c4dff !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-accent-3 {
  background-color: #651fff !important;
  color: #FFFFFF !important;
}
.bg-deep-purple-accent-4 {
  background-color: #6200ea !important;
  color: #FFFFFF !important;
}
.bg-indigo {
  background-color: #3f51b5 !important;
  color: #FFFFFF !important;
}
.bg-indigo-lighten-5 {
  background-color: #e8eaf6 !important;
  color: #000000 !important;
}
.bg-indigo-lighten-4 {
  background-color: #c5cae9 !important;
  color: #000000 !important;
}
.bg-indigo-lighten-3 {
  background-color: #9fa8da !important;
  color: #FFFFFF !important;
}
.bg-indigo-lighten-2 {
  background-color: #7986cb !important;
  color: #FFFFFF !important;
}
.bg-indigo-lighten-1 {
  background-color: #5c6bc0 !important;
  color: #FFFFFF !important;
}
.bg-indigo-darken-1 {
  background-color: #3949ab !important;
  color: #FFFFFF !important;
}
.bg-indigo-darken-2 {
  background-color: #303f9f !important;
  color: #FFFFFF !important;
}
.bg-indigo-darken-3 {
  background-color: #283593 !important;
  color: #FFFFFF !important;
}
.bg-indigo-darken-4 {
  background-color: #1a237e !important;
  color: #FFFFFF !important;
}
.bg-indigo-accent-1 {
  background-color: #8c9eff !important;
  color: #FFFFFF !important;
}
.bg-indigo-accent-2 {
  background-color: #536dfe !important;
  color: #FFFFFF !important;
}
.bg-indigo-accent-3 {
  background-color: #3d5afe !important;
  color: #FFFFFF !important;
}
.bg-indigo-accent-4 {
  background-color: #304ffe !important;
  color: #FFFFFF !important;
}
.bg-blue {
  background-color: #2196F3 !important;
  color: #FFFFFF !important;
}
.bg-blue-lighten-5 {
  background-color: #E3F2FD !important;
  color: #000000 !important;
}
.bg-blue-lighten-4 {
  background-color: #BBDEFB !important;
  color: #000000 !important;
}
.bg-blue-lighten-3 {
  background-color: #90CAF9 !important;
  color: #000000 !important;
}
.bg-blue-lighten-2 {
  background-color: #64B5F6 !important;
  color: #000000 !important;
}
.bg-blue-lighten-1 {
  background-color: #42A5F5 !important;
  color: #FFFFFF !important;
}
.bg-blue-darken-1 {
  background-color: #1E88E5 !important;
  color: #FFFFFF !important;
}
.bg-blue-darken-2 {
  background-color: #1976D2 !important;
  color: #FFFFFF !important;
}
.bg-blue-darken-3 {
  background-color: #1565C0 !important;
  color: #FFFFFF !important;
}
.bg-blue-darken-4 {
  background-color: #0D47A1 !important;
  color: #FFFFFF !important;
}
.bg-blue-accent-1 {
  background-color: #82B1FF !important;
  color: #000000 !important;
}
.bg-blue-accent-2 {
  background-color: #448AFF !important;
  color: #FFFFFF !important;
}
.bg-blue-accent-3 {
  background-color: #2979FF !important;
  color: #FFFFFF !important;
}
.bg-blue-accent-4 {
  background-color: #2962FF !important;
  color: #FFFFFF !important;
}
.bg-light-blue {
  background-color: #03a9f4 !important;
  color: #FFFFFF !important;
}
.bg-light-blue-lighten-5 {
  background-color: #e1f5fe !important;
  color: #000000 !important;
}
.bg-light-blue-lighten-4 {
  background-color: #b3e5fc !important;
  color: #000000 !important;
}
.bg-light-blue-lighten-3 {
  background-color: #81d4fa !important;
  color: #000000 !important;
}
.bg-light-blue-lighten-2 {
  background-color: #4fc3f7 !important;
  color: #000000 !important;
}
.bg-light-blue-lighten-1 {
  background-color: #29b6f6 !important;
  color: #000000 !important;
}
.bg-light-blue-darken-1 {
  background-color: #039be5 !important;
  color: #FFFFFF !important;
}
.bg-light-blue-darken-2 {
  background-color: #0288d1 !important;
  color: #FFFFFF !important;
}
.bg-light-blue-darken-3 {
  background-color: #0277bd !important;
  color: #FFFFFF !important;
}
.bg-light-blue-darken-4 {
  background-color: #01579b !important;
  color: #FFFFFF !important;
}
.bg-light-blue-accent-1 {
  background-color: #80d8ff !important;
  color: #000000 !important;
}
.bg-light-blue-accent-2 {
  background-color: #40c4ff !important;
  color: #000000 !important;
}
.bg-light-blue-accent-3 {
  background-color: #00b0ff !important;
  color: #FFFFFF !important;
}
.bg-light-blue-accent-4 {
  background-color: #0091ea !important;
  color: #FFFFFF !important;
}
.bg-cyan {
  background-color: #00bcd4 !important;
  color: #000000 !important;
}
.bg-cyan-lighten-5 {
  background-color: #e0f7fa !important;
  color: #000000 !important;
}
.bg-cyan-lighten-4 {
  background-color: #b2ebf2 !important;
  color: #000000 !important;
}
.bg-cyan-lighten-3 {
  background-color: #80deea !important;
  color: #000000 !important;
}
.bg-cyan-lighten-2 {
  background-color: #4dd0e1 !important;
  color: #000000 !important;
}
.bg-cyan-lighten-1 {
  background-color: #26c6da !important;
  color: #000000 !important;
}
.bg-cyan-darken-1 {
  background-color: #00acc1 !important;
  color: #FFFFFF !important;
}
.bg-cyan-darken-2 {
  background-color: #0097a7 !important;
  color: #FFFFFF !important;
}
.bg-cyan-darken-3 {
  background-color: #00838f !important;
  color: #FFFFFF !important;
}
.bg-cyan-darken-4 {
  background-color: #006064 !important;
  color: #FFFFFF !important;
}
.bg-cyan-accent-1 {
  background-color: #84ffff !important;
  color: #000000 !important;
}
.bg-cyan-accent-2 {
  background-color: #18ffff !important;
  color: #000000 !important;
}
.bg-cyan-accent-3 {
  background-color: #00e5ff !important;
  color: #000000 !important;
}
.bg-cyan-accent-4 {
  background-color: #00b8d4 !important;
  color: #FFFFFF !important;
}
.bg-teal {
  background-color: #009688 !important;
  color: #FFFFFF !important;
}
.bg-teal-lighten-5 {
  background-color: #e0f2f1 !important;
  color: #000000 !important;
}
.bg-teal-lighten-4 {
  background-color: #b2dfdb !important;
  color: #000000 !important;
}
.bg-teal-lighten-3 {
  background-color: #80cbc4 !important;
  color: #000000 !important;
}
.bg-teal-lighten-2 {
  background-color: #4db6ac !important;
  color: #FFFFFF !important;
}
.bg-teal-lighten-1 {
  background-color: #26a69a !important;
  color: #FFFFFF !important;
}
.bg-teal-darken-1 {
  background-color: #00897b !important;
  color: #FFFFFF !important;
}
.bg-teal-darken-2 {
  background-color: #00796b !important;
  color: #FFFFFF !important;
}
.bg-teal-darken-3 {
  background-color: #00695c !important;
  color: #FFFFFF !important;
}
.bg-teal-darken-4 {
  background-color: #004d40 !important;
  color: #FFFFFF !important;
}
.bg-teal-accent-1 {
  background-color: #a7ffeb !important;
  color: #000000 !important;
}
.bg-teal-accent-2 {
  background-color: #64ffda !important;
  color: #000000 !important;
}
.bg-teal-accent-3 {
  background-color: #1de9b6 !important;
  color: #000000 !important;
}
.bg-teal-accent-4 {
  background-color: #00bfa5 !important;
  color: #FFFFFF !important;
}
.bg-green {
  background-color: #4CAF50 !important;
  color: #FFFFFF !important;
}
.bg-green-lighten-5 {
  background-color: #E8F5E9 !important;
  color: #000000 !important;
}
.bg-green-lighten-4 {
  background-color: #C8E6C9 !important;
  color: #000000 !important;
}
.bg-green-lighten-3 {
  background-color: #A5D6A7 !important;
  color: #000000 !important;
}
.bg-green-lighten-2 {
  background-color: #81C784 !important;
  color: #000000 !important;
}
.bg-green-lighten-1 {
  background-color: #66BB6A !important;
  color: #FFFFFF !important;
}
.bg-green-darken-1 {
  background-color: #43A047 !important;
  color: #FFFFFF !important;
}
.bg-green-darken-2 {
  background-color: #388E3C !important;
  color: #FFFFFF !important;
}
.bg-green-darken-3 {
  background-color: #2E7D32 !important;
  color: #FFFFFF !important;
}
.bg-green-darken-4 {
  background-color: #1B5E20 !important;
  color: #FFFFFF !important;
}
.bg-green-accent-1 {
  background-color: #B9F6CA !important;
  color: #000000 !important;
}
.bg-green-accent-2 {
  background-color: #69F0AE !important;
  color: #000000 !important;
}
.bg-green-accent-3 {
  background-color: #00E676 !important;
  color: #000000 !important;
}
.bg-green-accent-4 {
  background-color: #00C853 !important;
  color: #000000 !important;
}
.bg-light-green {
  background-color: #8bc34a !important;
  color: #000000 !important;
}
.bg-light-green-lighten-5 {
  background-color: #f1f8e9 !important;
  color: #000000 !important;
}
.bg-light-green-lighten-4 {
  background-color: #dcedc8 !important;
  color: #000000 !important;
}
.bg-light-green-lighten-3 {
  background-color: #c5e1a5 !important;
  color: #000000 !important;
}
.bg-light-green-lighten-2 {
  background-color: #aed581 !important;
  color: #000000 !important;
}
.bg-light-green-lighten-1 {
  background-color: #9ccc65 !important;
  color: #000000 !important;
}
.bg-light-green-darken-1 {
  background-color: #7cb342 !important;
  color: #FFFFFF !important;
}
.bg-light-green-darken-2 {
  background-color: #689f38 !important;
  color: #FFFFFF !important;
}
.bg-light-green-darken-3 {
  background-color: #558b2f !important;
  color: #FFFFFF !important;
}
.bg-light-green-darken-4 {
  background-color: #33691e !important;
  color: #FFFFFF !important;
}
.bg-light-green-accent-1 {
  background-color: #ccff90 !important;
  color: #000000 !important;
}
.bg-light-green-accent-2 {
  background-color: #b2ff59 !important;
  color: #000000 !important;
}
.bg-light-green-accent-3 {
  background-color: #76ff03 !important;
  color: #000000 !important;
}
.bg-light-green-accent-4 {
  background-color: #64dd17 !important;
  color: #000000 !important;
}
.bg-lime {
  background-color: #cddc39 !important;
  color: #000000 !important;
}
.bg-lime-lighten-5 {
  background-color: #f9fbe7 !important;
  color: #000000 !important;
}
.bg-lime-lighten-4 {
  background-color: #f0f4c3 !important;
  color: #000000 !important;
}
.bg-lime-lighten-3 {
  background-color: #e6ee9c !important;
  color: #000000 !important;
}
.bg-lime-lighten-2 {
  background-color: #dce775 !important;
  color: #000000 !important;
}
.bg-lime-lighten-1 {
  background-color: #d4e157 !important;
  color: #000000 !important;
}
.bg-lime-darken-1 {
  background-color: #c0ca33 !important;
  color: #000000 !important;
}
.bg-lime-darken-2 {
  background-color: #afb42b !important;
  color: #000000 !important;
}
.bg-lime-darken-3 {
  background-color: #9e9d24 !important;
  color: #FFFFFF !important;
}
.bg-lime-darken-4 {
  background-color: #827717 !important;
  color: #FFFFFF !important;
}
.bg-lime-accent-1 {
  background-color: #f4ff81 !important;
  color: #000000 !important;
}
.bg-lime-accent-2 {
  background-color: #eeff41 !important;
  color: #000000 !important;
}
.bg-lime-accent-3 {
  background-color: #c6ff00 !important;
  color: #000000 !important;
}
.bg-lime-accent-4 {
  background-color: #aeea00 !important;
  color: #000000 !important;
}
.bg-yellow {
  background-color: #ffeb3b !important;
  color: #000000 !important;
}
.bg-yellow-lighten-5 {
  background-color: #fffde7 !important;
  color: #000000 !important;
}
.bg-yellow-lighten-4 {
  background-color: #fff9c4 !important;
  color: #000000 !important;
}
.bg-yellow-lighten-3 {
  background-color: #fff59d !important;
  color: #000000 !important;
}
.bg-yellow-lighten-2 {
  background-color: #fff176 !important;
  color: #000000 !important;
}
.bg-yellow-lighten-1 {
  background-color: #ffee58 !important;
  color: #000000 !important;
}
.bg-yellow-darken-1 {
  background-color: #fdd835 !important;
  color: #000000 !important;
}
.bg-yellow-darken-2 {
  background-color: #fbc02d !important;
  color: #000000 !important;
}
.bg-yellow-darken-3 {
  background-color: #f9a825 !important;
  color: #000000 !important;
}
.bg-yellow-darken-4 {
  background-color: #f57f17 !important;
  color: #FFFFFF !important;
}
.bg-yellow-accent-1 {
  background-color: #ffff8d !important;
  color: #000000 !important;
}
.bg-yellow-accent-2 {
  background-color: #ffff00 !important;
  color: #000000 !important;
}
.bg-yellow-accent-3 {
  background-color: #ffea00 !important;
  color: #000000 !important;
}
.bg-yellow-accent-4 {
  background-color: #ffd600 !important;
  color: #000000 !important;
}
.bg-amber {
  background-color: #ffc107 !important;
  color: #000000 !important;
}
.bg-amber-lighten-5 {
  background-color: #fff8e1 !important;
  color: #000000 !important;
}
.bg-amber-lighten-4 {
  background-color: #ffecb3 !important;
  color: #000000 !important;
}
.bg-amber-lighten-3 {
  background-color: #ffe082 !important;
  color: #000000 !important;
}
.bg-amber-lighten-2 {
  background-color: #ffd54f !important;
  color: #000000 !important;
}
.bg-amber-lighten-1 {
  background-color: #ffca28 !important;
  color: #000000 !important;
}
.bg-amber-darken-1 {
  background-color: #ffb300 !important;
  color: #000000 !important;
}
.bg-amber-darken-2 {
  background-color: #ffa000 !important;
  color: #000000 !important;
}
.bg-amber-darken-3 {
  background-color: #ff8f00 !important;
  color: #000000 !important;
}
.bg-amber-darken-4 {
  background-color: #ff6f00 !important;
  color: #FFFFFF !important;
}
.bg-amber-accent-1 {
  background-color: #ffe57f !important;
  color: #000000 !important;
}
.bg-amber-accent-2 {
  background-color: #ffd740 !important;
  color: #000000 !important;
}
.bg-amber-accent-3 {
  background-color: #ffc400 !important;
  color: #000000 !important;
}
.bg-amber-accent-4 {
  background-color: #ffab00 !important;
  color: #000000 !important;
}
.bg-orange {
  background-color: #ff9800 !important;
  color: #000000 !important;
}
.bg-orange-lighten-5 {
  background-color: #fff3e0 !important;
  color: #000000 !important;
}
.bg-orange-lighten-4 {
  background-color: #ffe0b2 !important;
  color: #000000 !important;
}
.bg-orange-lighten-3 {
  background-color: #ffcc80 !important;
  color: #000000 !important;
}
.bg-orange-lighten-2 {
  background-color: #ffb74d !important;
  color: #000000 !important;
}
.bg-orange-lighten-1 {
  background-color: #ffa726 !important;
  color: #000000 !important;
}
.bg-orange-darken-1 {
  background-color: #fb8c00 !important;
  color: #FFFFFF !important;
}
.bg-orange-darken-2 {
  background-color: #f57c00 !important;
  color: #FFFFFF !important;
}
.bg-orange-darken-3 {
  background-color: #ef6c00 !important;
  color: #FFFFFF !important;
}
.bg-orange-darken-4 {
  background-color: #e65100 !important;
  color: #FFFFFF !important;
}
.bg-orange-accent-1 {
  background-color: #ffd180 !important;
  color: #000000 !important;
}
.bg-orange-accent-2 {
  background-color: #ffab40 !important;
  color: #000000 !important;
}
.bg-orange-accent-3 {
  background-color: #ff9100 !important;
  color: #000000 !important;
}
.bg-orange-accent-4 {
  background-color: #ff6d00 !important;
  color: #FFFFFF !important;
}
.bg-deep-orange {
  background-color: #ff5722 !important;
  color: #FFFFFF !important;
}
.bg-deep-orange-lighten-5 {
  background-color: #fbe9e7 !important;
  color: #000000 !important;
}
.bg-deep-orange-lighten-4 {
  background-color: #ffccbc !important;
  color: #000000 !important;
}
.bg-deep-orange-lighten-3 {
  background-color: #ffab91 !important;
  color: #000000 !important;
}
.bg-deep-orange-lighten-2 {
  background-color: #ff8a65 !important;
  color: #000000 !important;
}
.bg-deep-orange-lighten-1 {
  background-color: #ff7043 !important;
  color: #FFFFFF !important;
}
.bg-deep-orange-darken-1 {
  background-color: #f4511e !important;
  color: #FFFFFF !important;
}
.bg-deep-orange-darken-2 {
  background-color: #e64a19 !important;
  color: #FFFFFF !important;
}
.bg-deep-orange-darken-3 {
  background-color: #d84315 !important;
  color: #FFFFFF !important;
}
.bg-deep-orange-darken-4 {
  background-color: #bf360c !important;
  color: #FFFFFF !important;
}
.bg-deep-orange-accent-1 {
  background-color: #ff9e80 !important;
  color: #000000 !important;
}
.bg-deep-orange-accent-2 {
  background-color: #ff6e40 !important;
  color: #FFFFFF !important;
}
.bg-deep-orange-accent-3 {
  background-color: #ff3d00 !important;
  color: #FFFFFF !important;
}
.bg-deep-orange-accent-4 {
  background-color: #dd2c00 !important;
  color: #FFFFFF !important;
}
.bg-brown {
  background-color: #795548 !important;
  color: #FFFFFF !important;
}
.bg-brown-lighten-5 {
  background-color: #efebe9 !important;
  color: #000000 !important;
}
.bg-brown-lighten-4 {
  background-color: #d7ccc8 !important;
  color: #000000 !important;
}
.bg-brown-lighten-3 {
  background-color: #bcaaa4 !important;
  color: #000000 !important;
}
.bg-brown-lighten-2 {
  background-color: #a1887f !important;
  color: #FFFFFF !important;
}
.bg-brown-lighten-1 {
  background-color: #8d6e63 !important;
  color: #FFFFFF !important;
}
.bg-brown-darken-1 {
  background-color: #6d4c41 !important;
  color: #FFFFFF !important;
}
.bg-brown-darken-2 {
  background-color: #5d4037 !important;
  color: #FFFFFF !important;
}
.bg-brown-darken-3 {
  background-color: #4e342e !important;
  color: #FFFFFF !important;
}
.bg-brown-darken-4 {
  background-color: #3e2723 !important;
  color: #FFFFFF !important;
}
.bg-blue-grey {
  background-color: #607d8b !important;
  color: #FFFFFF !important;
}
.bg-blue-grey-lighten-5 {
  background-color: #eceff1 !important;
  color: #000000 !important;
}
.bg-blue-grey-lighten-4 {
  background-color: #cfd8dc !important;
  color: #000000 !important;
}
.bg-blue-grey-lighten-3 {
  background-color: #b0bec5 !important;
  color: #000000 !important;
}
.bg-blue-grey-lighten-2 {
  background-color: #90a4ae !important;
  color: #FFFFFF !important;
}
.bg-blue-grey-lighten-1 {
  background-color: #78909c !important;
  color: #FFFFFF !important;
}
.bg-blue-grey-darken-1 {
  background-color: #546e7a !important;
  color: #FFFFFF !important;
}
.bg-blue-grey-darken-2 {
  background-color: #455a64 !important;
  color: #FFFFFF !important;
}
.bg-blue-grey-darken-3 {
  background-color: #37474f !important;
  color: #FFFFFF !important;
}
.bg-blue-grey-darken-4 {
  background-color: #263238 !important;
  color: #FFFFFF !important;
}
.bg-grey {
  background-color: #9e9e9e !important;
  color: #FFFFFF !important;
}
.bg-grey-lighten-5 {
  background-color: #fafafa !important;
  color: #000000 !important;
}
.bg-grey-lighten-4 {
  background-color: #f5f5f5 !important;
  color: #000000 !important;
}
.bg-grey-lighten-3 {
  background-color: #eeeeee !important;
  color: #000000 !important;
}
.bg-grey-lighten-2 {
  background-color: #e0e0e0 !important;
  color: #000000 !important;
}
.bg-grey-lighten-1 {
  background-color: #bdbdbd !important;
  color: #000000 !important;
}
.bg-grey-darken-1 {
  background-color: #757575 !important;
  color: #FFFFFF !important;
}
.bg-grey-darken-2 {
  background-color: #616161 !important;
  color: #FFFFFF !important;
}
.bg-grey-darken-3 {
  background-color: #424242 !important;
  color: #FFFFFF !important;
}
.bg-grey-darken-4 {
  background-color: #212121 !important;
  color: #FFFFFF !important;
}
.bg-shades-black {
  background-color: #000000 !important;
  color: #FFFFFF !important;
}
.bg-shades-white {
  background-color: #FFFFFF !important;
  color: #000000 !important;
}
.bg-shades-transparent {
  background-color: transparent !important;
  color: currentColor !important;
}
.text-black {
  color: #000000 !important;
}
.text-white {
  color: #FFFFFF !important;
}
.text-transparent {
  color: transparent !important;
}
.text-red {
  color: #F44336 !important;
}
.text-red-lighten-5 {
  color: #FFEBEE !important;
}
.text-red-lighten-4 {
  color: #FFCDD2 !important;
}
.text-red-lighten-3 {
  color: #EF9A9A !important;
}
.text-red-lighten-2 {
  color: #E57373 !important;
}
.text-red-lighten-1 {
  color: #EF5350 !important;
}
.text-red-darken-1 {
  color: #E53935 !important;
}
.text-red-darken-2 {
  color: #D32F2F !important;
}
.text-red-darken-3 {
  color: #C62828 !important;
}
.text-red-darken-4 {
  color: #B71C1C !important;
}
.text-red-accent-1 {
  color: #FF8A80 !important;
}
.text-red-accent-2 {
  color: #FF5252 !important;
}
.text-red-accent-3 {
  color: #FF1744 !important;
}
.text-red-accent-4 {
  color: #D50000 !important;
}
.text-pink {
  color: #e91e63 !important;
}
.text-pink-lighten-5 {
  color: #fce4ec !important;
}
.text-pink-lighten-4 {
  color: #f8bbd0 !important;
}
.text-pink-lighten-3 {
  color: #f48fb1 !important;
}
.text-pink-lighten-2 {
  color: #f06292 !important;
}
.text-pink-lighten-1 {
  color: #ec407a !important;
}
.text-pink-darken-1 {
  color: #d81b60 !important;
}
.text-pink-darken-2 {
  color: #c2185b !important;
}
.text-pink-darken-3 {
  color: #ad1457 !important;
}
.text-pink-darken-4 {
  color: #880e4f !important;
}
.text-pink-accent-1 {
  color: #ff80ab !important;
}
.text-pink-accent-2 {
  color: #ff4081 !important;
}
.text-pink-accent-3 {
  color: #f50057 !important;
}
.text-pink-accent-4 {
  color: #c51162 !important;
}
.text-purple {
  color: #9c27b0 !important;
}
.text-purple-lighten-5 {
  color: #f3e5f5 !important;
}
.text-purple-lighten-4 {
  color: #e1bee7 !important;
}
.text-purple-lighten-3 {
  color: #ce93d8 !important;
}
.text-purple-lighten-2 {
  color: #ba68c8 !important;
}
.text-purple-lighten-1 {
  color: #ab47bc !important;
}
.text-purple-darken-1 {
  color: #8e24aa !important;
}
.text-purple-darken-2 {
  color: #7b1fa2 !important;
}
.text-purple-darken-3 {
  color: #6a1b9a !important;
}
.text-purple-darken-4 {
  color: #4a148c !important;
}
.text-purple-accent-1 {
  color: #ea80fc !important;
}
.text-purple-accent-2 {
  color: #e040fb !important;
}
.text-purple-accent-3 {
  color: #d500f9 !important;
}
.text-purple-accent-4 {
  color: #aa00ff !important;
}
.text-deep-purple {
  color: #673ab7 !important;
}
.text-deep-purple-lighten-5 {
  color: #ede7f6 !important;
}
.text-deep-purple-lighten-4 {
  color: #d1c4e9 !important;
}
.text-deep-purple-lighten-3 {
  color: #b39ddb !important;
}
.text-deep-purple-lighten-2 {
  color: #9575cd !important;
}
.text-deep-purple-lighten-1 {
  color: #7e57c2 !important;
}
.text-deep-purple-darken-1 {
  color: #5e35b1 !important;
}
.text-deep-purple-darken-2 {
  color: #512da8 !important;
}
.text-deep-purple-darken-3 {
  color: #4527a0 !important;
}
.text-deep-purple-darken-4 {
  color: #311b92 !important;
}
.text-deep-purple-accent-1 {
  color: #b388ff !important;
}
.text-deep-purple-accent-2 {
  color: #7c4dff !important;
}
.text-deep-purple-accent-3 {
  color: #651fff !important;
}
.text-deep-purple-accent-4 {
  color: #6200ea !important;
}
.text-indigo {
  color: #3f51b5 !important;
}
.text-indigo-lighten-5 {
  color: #e8eaf6 !important;
}
.text-indigo-lighten-4 {
  color: #c5cae9 !important;
}
.text-indigo-lighten-3 {
  color: #9fa8da !important;
}
.text-indigo-lighten-2 {
  color: #7986cb !important;
}
.text-indigo-lighten-1 {
  color: #5c6bc0 !important;
}
.text-indigo-darken-1 {
  color: #3949ab !important;
}
.text-indigo-darken-2 {
  color: #303f9f !important;
}
.text-indigo-darken-3 {
  color: #283593 !important;
}
.text-indigo-darken-4 {
  color: #1a237e !important;
}
.text-indigo-accent-1 {
  color: #8c9eff !important;
}
.text-indigo-accent-2 {
  color: #536dfe !important;
}
.text-indigo-accent-3 {
  color: #3d5afe !important;
}
.text-indigo-accent-4 {
  color: #304ffe !important;
}
.text-blue {
  color: #2196F3 !important;
}
.text-blue-lighten-5 {
  color: #E3F2FD !important;
}
.text-blue-lighten-4 {
  color: #BBDEFB !important;
}
.text-blue-lighten-3 {
  color: #90CAF9 !important;
}
.text-blue-lighten-2 {
  color: #64B5F6 !important;
}
.text-blue-lighten-1 {
  color: #42A5F5 !important;
}
.text-blue-darken-1 {
  color: #1E88E5 !important;
}
.text-blue-darken-2 {
  color: #1976D2 !important;
}
.text-blue-darken-3 {
  color: #1565C0 !important;
}
.text-blue-darken-4 {
  color: #0D47A1 !important;
}
.text-blue-accent-1 {
  color: #82B1FF !important;
}
.text-blue-accent-2 {
  color: #448AFF !important;
}
.text-blue-accent-3 {
  color: #2979FF !important;
}
.text-blue-accent-4 {
  color: #2962FF !important;
}
.text-light-blue {
  color: #03a9f4 !important;
}
.text-light-blue-lighten-5 {
  color: #e1f5fe !important;
}
.text-light-blue-lighten-4 {
  color: #b3e5fc !important;
}
.text-light-blue-lighten-3 {
  color: #81d4fa !important;
}
.text-light-blue-lighten-2 {
  color: #4fc3f7 !important;
}
.text-light-blue-lighten-1 {
  color: #29b6f6 !important;
}
.text-light-blue-darken-1 {
  color: #039be5 !important;
}
.text-light-blue-darken-2 {
  color: #0288d1 !important;
}
.text-light-blue-darken-3 {
  color: #0277bd !important;
}
.text-light-blue-darken-4 {
  color: #01579b !important;
}
.text-light-blue-accent-1 {
  color: #80d8ff !important;
}
.text-light-blue-accent-2 {
  color: #40c4ff !important;
}
.text-light-blue-accent-3 {
  color: #00b0ff !important;
}
.text-light-blue-accent-4 {
  color: #0091ea !important;
}
.text-cyan {
  color: #00bcd4 !important;
}
.text-cyan-lighten-5 {
  color: #e0f7fa !important;
}
.text-cyan-lighten-4 {
  color: #b2ebf2 !important;
}
.text-cyan-lighten-3 {
  color: #80deea !important;
}
.text-cyan-lighten-2 {
  color: #4dd0e1 !important;
}
.text-cyan-lighten-1 {
  color: #26c6da !important;
}
.text-cyan-darken-1 {
  color: #00acc1 !important;
}
.text-cyan-darken-2 {
  color: #0097a7 !important;
}
.text-cyan-darken-3 {
  color: #00838f !important;
}
.text-cyan-darken-4 {
  color: #006064 !important;
}
.text-cyan-accent-1 {
  color: #84ffff !important;
}
.text-cyan-accent-2 {
  color: #18ffff !important;
}
.text-cyan-accent-3 {
  color: #00e5ff !important;
}
.text-cyan-accent-4 {
  color: #00b8d4 !important;
}
.text-teal {
  color: #009688 !important;
}
.text-teal-lighten-5 {
  color: #e0f2f1 !important;
}
.text-teal-lighten-4 {
  color: #b2dfdb !important;
}
.text-teal-lighten-3 {
  color: #80cbc4 !important;
}
.text-teal-lighten-2 {
  color: #4db6ac !important;
}
.text-teal-lighten-1 {
  color: #26a69a !important;
}
.text-teal-darken-1 {
  color: #00897b !important;
}
.text-teal-darken-2 {
  color: #00796b !important;
}
.text-teal-darken-3 {
  color: #00695c !important;
}
.text-teal-darken-4 {
  color: #004d40 !important;
}
.text-teal-accent-1 {
  color: #a7ffeb !important;
}
.text-teal-accent-2 {
  color: #64ffda !important;
}
.text-teal-accent-3 {
  color: #1de9b6 !important;
}
.text-teal-accent-4 {
  color: #00bfa5 !important;
}
.text-green {
  color: #4CAF50 !important;
}
.text-green-lighten-5 {
  color: #E8F5E9 !important;
}
.text-green-lighten-4 {
  color: #C8E6C9 !important;
}
.text-green-lighten-3 {
  color: #A5D6A7 !important;
}
.text-green-lighten-2 {
  color: #81C784 !important;
}
.text-green-lighten-1 {
  color: #66BB6A !important;
}
.text-green-darken-1 {
  color: #43A047 !important;
}
.text-green-darken-2 {
  color: #388E3C !important;
}
.text-green-darken-3 {
  color: #2E7D32 !important;
}
.text-green-darken-4 {
  color: #1B5E20 !important;
}
.text-green-accent-1 {
  color: #B9F6CA !important;
}
.text-green-accent-2 {
  color: #69F0AE !important;
}
.text-green-accent-3 {
  color: #00E676 !important;
}
.text-green-accent-4 {
  color: #00C853 !important;
}
.text-light-green {
  color: #8bc34a !important;
}
.text-light-green-lighten-5 {
  color: #f1f8e9 !important;
}
.text-light-green-lighten-4 {
  color: #dcedc8 !important;
}
.text-light-green-lighten-3 {
  color: #c5e1a5 !important;
}
.text-light-green-lighten-2 {
  color: #aed581 !important;
}
.text-light-green-lighten-1 {
  color: #9ccc65 !important;
}
.text-light-green-darken-1 {
  color: #7cb342 !important;
}
.text-light-green-darken-2 {
  color: #689f38 !important;
}
.text-light-green-darken-3 {
  color: #558b2f !important;
}
.text-light-green-darken-4 {
  color: #33691e !important;
}
.text-light-green-accent-1 {
  color: #ccff90 !important;
}
.text-light-green-accent-2 {
  color: #b2ff59 !important;
}
.text-light-green-accent-3 {
  color: #76ff03 !important;
}
.text-light-green-accent-4 {
  color: #64dd17 !important;
}
.text-lime {
  color: #cddc39 !important;
}
.text-lime-lighten-5 {
  color: #f9fbe7 !important;
}
.text-lime-lighten-4 {
  color: #f0f4c3 !important;
}
.text-lime-lighten-3 {
  color: #e6ee9c !important;
}
.text-lime-lighten-2 {
  color: #dce775 !important;
}
.text-lime-lighten-1 {
  color: #d4e157 !important;
}
.text-lime-darken-1 {
  color: #c0ca33 !important;
}
.text-lime-darken-2 {
  color: #afb42b !important;
}
.text-lime-darken-3 {
  color: #9e9d24 !important;
}
.text-lime-darken-4 {
  color: #827717 !important;
}
.text-lime-accent-1 {
  color: #f4ff81 !important;
}
.text-lime-accent-2 {
  color: #eeff41 !important;
}
.text-lime-accent-3 {
  color: #c6ff00 !important;
}
.text-lime-accent-4 {
  color: #aeea00 !important;
}
.text-yellow {
  color: #ffeb3b !important;
}
.text-yellow-lighten-5 {
  color: #fffde7 !important;
}
.text-yellow-lighten-4 {
  color: #fff9c4 !important;
}
.text-yellow-lighten-3 {
  color: #fff59d !important;
}
.text-yellow-lighten-2 {
  color: #fff176 !important;
}
.text-yellow-lighten-1 {
  color: #ffee58 !important;
}
.text-yellow-darken-1 {
  color: #fdd835 !important;
}
.text-yellow-darken-2 {
  color: #fbc02d !important;
}
.text-yellow-darken-3 {
  color: #f9a825 !important;
}
.text-yellow-darken-4 {
  color: #f57f17 !important;
}
.text-yellow-accent-1 {
  color: #ffff8d !important;
}
.text-yellow-accent-2 {
  color: #ffff00 !important;
}
.text-yellow-accent-3 {
  color: #ffea00 !important;
}
.text-yellow-accent-4 {
  color: #ffd600 !important;
}
.text-amber {
  color: #ffc107 !important;
}
.text-amber-lighten-5 {
  color: #fff8e1 !important;
}
.text-amber-lighten-4 {
  color: #ffecb3 !important;
}
.text-amber-lighten-3 {
  color: #ffe082 !important;
}
.text-amber-lighten-2 {
  color: #ffd54f !important;
}
.text-amber-lighten-1 {
  color: #ffca28 !important;
}
.text-amber-darken-1 {
  color: #ffb300 !important;
}
.text-amber-darken-2 {
  color: #ffa000 !important;
}
.text-amber-darken-3 {
  color: #ff8f00 !important;
}
.text-amber-darken-4 {
  color: #ff6f00 !important;
}
.text-amber-accent-1 {
  color: #ffe57f !important;
}
.text-amber-accent-2 {
  color: #ffd740 !important;
}
.text-amber-accent-3 {
  color: #ffc400 !important;
}
.text-amber-accent-4 {
  color: #ffab00 !important;
}
.text-orange {
  color: #ff9800 !important;
}
.text-orange-lighten-5 {
  color: #fff3e0 !important;
}
.text-orange-lighten-4 {
  color: #ffe0b2 !important;
}
.text-orange-lighten-3 {
  color: #ffcc80 !important;
}
.text-orange-lighten-2 {
  color: #ffb74d !important;
}
.text-orange-lighten-1 {
  color: #ffa726 !important;
}
.text-orange-darken-1 {
  color: #fb8c00 !important;
}
.text-orange-darken-2 {
  color: #f57c00 !important;
}
.text-orange-darken-3 {
  color: #ef6c00 !important;
}
.text-orange-darken-4 {
  color: #e65100 !important;
}
.text-orange-accent-1 {
  color: #ffd180 !important;
}
.text-orange-accent-2 {
  color: #ffab40 !important;
}
.text-orange-accent-3 {
  color: #ff9100 !important;
}
.text-orange-accent-4 {
  color: #ff6d00 !important;
}
.text-deep-orange {
  color: #ff5722 !important;
}
.text-deep-orange-lighten-5 {
  color: #fbe9e7 !important;
}
.text-deep-orange-lighten-4 {
  color: #ffccbc !important;
}
.text-deep-orange-lighten-3 {
  color: #ffab91 !important;
}
.text-deep-orange-lighten-2 {
  color: #ff8a65 !important;
}
.text-deep-orange-lighten-1 {
  color: #ff7043 !important;
}
.text-deep-orange-darken-1 {
  color: #f4511e !important;
}
.text-deep-orange-darken-2 {
  color: #e64a19 !important;
}
.text-deep-orange-darken-3 {
  color: #d84315 !important;
}
.text-deep-orange-darken-4 {
  color: #bf360c !important;
}
.text-deep-orange-accent-1 {
  color: #ff9e80 !important;
}
.text-deep-orange-accent-2 {
  color: #ff6e40 !important;
}
.text-deep-orange-accent-3 {
  color: #ff3d00 !important;
}
.text-deep-orange-accent-4 {
  color: #dd2c00 !important;
}
.text-brown {
  color: #795548 !important;
}
.text-brown-lighten-5 {
  color: #efebe9 !important;
}
.text-brown-lighten-4 {
  color: #d7ccc8 !important;
}
.text-brown-lighten-3 {
  color: #bcaaa4 !important;
}
.text-brown-lighten-2 {
  color: #a1887f !important;
}
.text-brown-lighten-1 {
  color: #8d6e63 !important;
}
.text-brown-darken-1 {
  color: #6d4c41 !important;
}
.text-brown-darken-2 {
  color: #5d4037 !important;
}
.text-brown-darken-3 {
  color: #4e342e !important;
}
.text-brown-darken-4 {
  color: #3e2723 !important;
}
.text-blue-grey {
  color: #607d8b !important;
}
.text-blue-grey-lighten-5 {
  color: #eceff1 !important;
}
.text-blue-grey-lighten-4 {
  color: #cfd8dc !important;
}
.text-blue-grey-lighten-3 {
  color: #b0bec5 !important;
}
.text-blue-grey-lighten-2 {
  color: #90a4ae !important;
}
.text-blue-grey-lighten-1 {
  color: #78909c !important;
}
.text-blue-grey-darken-1 {
  color: #546e7a !important;
}
.text-blue-grey-darken-2 {
  color: #455a64 !important;
}
.text-blue-grey-darken-3 {
  color: #37474f !important;
}
.text-blue-grey-darken-4 {
  color: #263238 !important;
}
.text-grey {
  color: #9e9e9e !important;
}
.text-grey-lighten-5 {
  color: #fafafa !important;
}
.text-grey-lighten-4 {
  color: #f5f5f5 !important;
}
.text-grey-lighten-3 {
  color: #eeeeee !important;
}
.text-grey-lighten-2 {
  color: #e0e0e0 !important;
}
.text-grey-lighten-1 {
  color: #bdbdbd !important;
}
.text-grey-darken-1 {
  color: #757575 !important;
}
.text-grey-darken-2 {
  color: #616161 !important;
}
.text-grey-darken-3 {
  color: #424242 !important;
}
.text-grey-darken-4 {
  color: #212121 !important;
}
.text-shades-black {
  color: #000000 !important;
}
.text-shades-white {
  color: #FFFFFF !important;
}
.text-shades-transparent {
  color: transparent !important;
}
/*!
 * ress.css \u2022 v2.0.4
 * MIT License
 * github.com/filipelinhares/ress
 */
/* # =================================================================
   # Global selectors
   # ================================================================= */
html {
  box-sizing: border-box;
  overflow-y: scroll; /* All browsers without overlaying scrollbars */
  -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS */
  word-break: normal;
  -moz-tab-size: 4;
  tab-size: 4;
}
*,
::before,
::after {
  background-repeat: no-repeat; /* Set \`background-repeat: no-repeat\` to all elements and pseudo elements */
  box-sizing: inherit;
}
::before,
::after {
  text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
  vertical-align: inherit;
}
* {
  padding: 0; /* Reset \`padding\` and \`margin\` of all elements */
  margin: 0;
}
/* # =================================================================
   # General elements
   # ================================================================= */
hr {
  overflow: visible; /* Show the overflow in Edge and IE */
  height: 0; /* Add the correct box sizing in Firefox */
}
details,
main {
  display: block; /* Render the \`main\` element consistently in IE. */
}
summary {
  display: list-item; /* Add the correct display in all browsers */
}
small {
  font-size: 80%; /* Set font-size to 80% in \`small\` elements */
}
[hidden] {
  display: none; /* Add the correct display in IE */
}
abbr[title] {
  border-bottom: none; /* Remove the bottom border in Chrome 57 */
  /* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
  text-decoration: underline;
  text-decoration: underline dotted;
}
a {
  background-color: transparent; /* Remove the gray background on active links in IE 10 */
}
a:active,
a:hover {
  outline-width: 0; /* Remove the outline when hovering in all browsers */
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace; /* Specify the font family of code elements */
}
pre {
  font-size: 1em; /* Correct the odd \`em\` font sizing in all browsers */
}
b,
strong {
  font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
}
/* https://gist.github.com/unruthless/413930 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
/* # =================================================================
   # Forms
   # ================================================================= */
input {
  border-radius: 0;
}
/* Replace pointer cursor in disabled elements */
[disabled] {
  cursor: default;
}
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto; /* Correct the cursor style of increment and decrement buttons in Chrome */
}
[type=search] {
  -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */
  outline-offset: -2px; /* Correct the outline style in Safari */
}
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none; /* Remove the inner padding in Chrome and Safari on macOS */
}
textarea {
  overflow: auto; /* Internet Explorer 11+ */
  resize: vertical; /* Specify textarea resizability */
}
button,
input,
optgroup,
select,
textarea {
  font: inherit; /* Specify font inheritance of form elements */
}
optgroup {
  font-weight: bold; /* Restore the font weight unset by the previous rule */
}
button {
  overflow: visible; /* Address \`overflow\` set to \`hidden\` in IE 8/9/10/11 */
}
button,
select {
  text-transform: none; /* Firefox 40+, Internet Explorer 11- */
}
/* Apply cursor pointer to button elements */
button,
[type=button],
[type=reset],
[type=submit],
[role=button] {
  cursor: pointer;
  color: inherit;
}
/* Remove inner padding and border in Firefox 4+ */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
/* Replace focus style removed in the border reset above */
button:-moz-focusring,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  outline: 1px dotted ButtonText;
}
button,
html [type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */
}
/* Remove the default button styling in all browsers */
button,
input,
select,
textarea {
  background-color: transparent;
  border-style: none;
}
/* Style select like a standard input */
select {
  -moz-appearance: none; /* Firefox 36+ */
  -webkit-appearance: none; /* Chrome 41+ */
}
select::-ms-expand {
  display: none; /* Internet Explorer 11+ */
}
select::-ms-value {
  color: currentColor; /* Internet Explorer 11+ */
}
legend {
  border: 0; /* Correct \`color\` not being inherited in IE 8/9/10/11 */
  color: inherit; /* Correct the color inheritance from \`fieldset\` elements in IE */
  display: table; /* Correct the text wrapping in Edge and IE */
  max-width: 100%; /* Correct the text wrapping in Edge and IE */
  white-space: normal; /* Correct the text wrapping in Edge and IE */
  max-width: 100%; /* Correct the text wrapping in Edge 18- and IE */
}
::-webkit-file-upload-button {
  /* Correct the inability to style clickable types in iOS and Safari */
  -webkit-appearance: button;
  color: inherit;
  font: inherit; /* Change font properties to \`inherit\` in Chrome and Safari */
}
::-ms-clear,
::-ms-reveal {
  display: none;
}
/* # =================================================================
   # Specify media element style
   # ================================================================= */
img {
  border-style: none; /* Remove border when inside \`a\` element in IE 8/9/10 */
}
/* Add the correct vertical alignment in Chrome, Firefox, and Opera */
progress {
  vertical-align: baseline;
}
/* # =================================================================
   # Accessibility
   # ================================================================= */
/* Hide content from screens but not screenreaders */
@media screen {
  [hidden~=screen] {
    display: inherit;
  }
  [hidden~=screen]:not(:active):not(:focus):not(:target) {
    position: absolute !important;
    clip: rect(0 0 0 0) !important;
  }
}
/* Specify the progress cursor of updating elements */
[aria-busy=true] {
  cursor: progress;
}
/* Specify the pointer cursor of trigger elements */
[aria-controls] {
  cursor: pointer;
}
/* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */
[aria-disabled=true] {
  cursor: default;
}
.elevation-24 {
  box-shadow: 0px 11px 15px -7px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 24px 38px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 9px 46px 8px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-23 {
  box-shadow: 0px 11px 14px -7px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 23px 36px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 9px 44px 8px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-22 {
  box-shadow: 0px 10px 14px -6px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 22px 35px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 8px 42px 7px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-21 {
  box-shadow: 0px 10px 13px -6px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 21px 33px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 8px 40px 7px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-20 {
  box-shadow: 0px 10px 13px -6px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 20px 31px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 8px 38px 7px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-19 {
  box-shadow: 0px 9px 12px -6px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 19px 29px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 7px 36px 6px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-18 {
  box-shadow: 0px 9px 11px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 18px 28px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 7px 34px 6px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-17 {
  box-shadow: 0px 8px 11px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 17px 26px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 6px 32px 5px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-16 {
  box-shadow: 0px 8px 10px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 16px 24px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 6px 30px 5px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-15 {
  box-shadow: 0px 8px 9px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 15px 22px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 6px 28px 5px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-14 {
  box-shadow: 0px 7px 9px -4px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 14px 21px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 5px 26px 4px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-13 {
  box-shadow: 0px 7px 8px -4px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 13px 19px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 5px 24px 4px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-12 {
  box-shadow: 0px 7px 8px -4px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 12px 17px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 5px 22px 4px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-11 {
  box-shadow: 0px 6px 7px -4px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 11px 15px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 4px 20px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-10 {
  box-shadow: 0px 6px 6px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 10px 14px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 4px 18px 3px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-9 {
  box-shadow: 0px 5px 6px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 9px 12px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 16px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-8 {
  box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-7 {
  box-shadow: 0px 4px 5px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 7px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 2px 16px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-6 {
  box-shadow: 0px 3px 5px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 6px 10px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 18px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-5 {
  box-shadow: 0px 3px 5px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 5px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 14px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-4 {
  box-shadow: 0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-3 {
  box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-2 {
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-1 {
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.elevation-0 {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.dialog-transition-enter-active,
.dialog-bottom-transition-enter-active,
.dialog-top-transition-enter-active {
  transition: 225ms cubic-bezier(0, 0, 0.2, 1);
}
.dialog-transition-leave-active,
.dialog-bottom-transition-leave-active,
.dialog-top-transition-leave-active {
  transition: 125ms cubic-bezier(0.4, 0, 1, 1);
}
.dialog-transition-enter-active, .dialog-transition-leave-active,
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active,
.dialog-top-transition-enter-active,
.dialog-top-transition-leave-active {
  transition-property: transform, opacity;
  pointer-events: none;
}
.dialog-transition-enter-from, .dialog-transition-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.dialog-transition-enter-to, .dialog-transition-leave-from {
  opacity: 1;
}
.dialog-bottom-transition-enter-from, .dialog-bottom-transition-leave-to {
  transform: translateY(calc(50vh + 50%));
}
.dialog-top-transition-enter-from, .dialog-top-transition-leave-to {
  transform: translateY(calc(-50vh - 50%));
}
.picker-transition-enter-active,
.picker-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.picker-transition-leave-active,
.picker-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.picker-transition-move,
.picker-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.picker-transition-enter-from, .picker-transition-leave-to,
.picker-reverse-transition-enter-from,
.picker-reverse-transition-leave-to {
  opacity: 0;
}
.picker-transition-leave-from, .picker-transition-leave-active, .picker-transition-leave-to,
.picker-reverse-transition-leave-from,
.picker-reverse-transition-leave-active,
.picker-reverse-transition-leave-to {
  position: absolute !important;
}
.picker-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.picker-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.picker-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.picker-transition-enter-from {
  transform: translate(0, 100%);
}
.picker-transition-leave-to {
  transform: translate(0, -100%);
}
.picker-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.picker-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.picker-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.picker-reverse-transition-enter-from {
  transform: translate(0, -100%);
}
.picker-reverse-transition-leave-to {
  transform: translate(0, 100%);
}
.expand-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-x-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-x-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-x-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-transition-enter-from, .scale-transition-leave-from, .scale-transition-leave-to {
  opacity: 0;
  transform: scale(0);
}
.scale-rotate-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-transition-enter-from, .scale-rotate-transition-leave, .scale-rotate-transition-leave-to {
  opacity: 0;
  transform: scale(0) rotate(-45deg);
}
.scale-rotate-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-rotate-reverse-transition-enter-from, .scale-rotate-reverse-transition-leave-from, .scale-rotate-reverse-transition-leave-to {
  opacity: 0;
  transform: scale(0) rotate(45deg);
}
.message-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.message-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.message-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.message-transition-enter-from, .message-transition-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
.message-transition-leave-from, .message-transition-leave-active {
  position: absolute;
}
.slide-y-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-transition-enter-from, .slide-y-transition-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
.slide-y-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-y-reverse-transition-enter-from, .slide-y-reverse-transition-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
.scroll-y-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-transition-enter-from, .scroll-y-transition-leave-to {
  opacity: 0;
}
.scroll-y-transition-enter-from {
  transform: translateY(-15px);
}
.scroll-y-transition-leave-to {
  transform: translateY(15px);
}
.scroll-y-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-y-reverse-transition-enter-from, .scroll-y-reverse-transition-leave-to {
  opacity: 0;
}
.scroll-y-reverse-transition-enter-from {
  transform: translateY(15px);
}
.scroll-y-reverse-transition-leave-to {
  transform: translateY(-15px);
}
.scroll-x-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-transition-enter-from, .scroll-x-transition-leave-to {
  opacity: 0;
}
.scroll-x-transition-enter-from {
  transform: translateX(-15px);
}
.scroll-x-transition-leave-to {
  transform: translateX(15px);
}
.scroll-x-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-x-reverse-transition-enter-from, .scroll-x-reverse-transition-leave-to {
  opacity: 0;
}
.scroll-x-reverse-transition-enter-from {
  transform: translateX(15px);
}
.scroll-x-reverse-transition-leave-to {
  transform: translateX(-15px);
}
.slide-x-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-transition-enter-from, .slide-x-transition-leave-to {
  opacity: 0;
  transform: translateX(-15px);
}
.slide-x-reverse-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-reverse-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-reverse-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-x-reverse-transition-enter-from, .slide-x-reverse-transition-leave-to {
  opacity: 0;
  transform: translateX(15px);
}
.fade-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-transition-enter-from, .fade-transition-leave-to {
  opacity: 0 !important;
}
.fab-transition-enter-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fab-transition-leave-active {
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fab-transition-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fab-transition-enter-from, .fab-transition-leave-to {
  transform: scale(0) rotate(-45deg);
}
.v-locale--is-rtl {
  direction: rtl;
}
.v-locale--is-ltr {
  direction: ltr;
}
.blockquote {
  padding: 16px 0 16px 24px;
  font-size: 18px;
  font-weight: 300;
}
html {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  font-size: 1rem;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html.overflow-y-hidden {
  overflow-y: hidden !important;
}
:root {
  --v-theme-background: #fff;
  --v-theme-on-background: #000;
  --v-theme-surface: #fff;
  --v-theme-on-surface: #000;
  --v-theme-overlay-multiplier: 1;
  --v-scrollbar-offset: 0px;
}
@supports (-webkit-touch-callout: none) {
  body {
    cursor: pointer;
  }
}
@media only print {
  .hidden-print-only {
    display: none !important;
  }
}
@media only screen {
  .hidden-screen-only {
    display: none !important;
  }
}
@media (max-width: 599.98px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 600px) and (max-width: 959.98px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 960px) and (max-width: 1279.98px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1280px) and (max-width: 1919.98px) {
  .hidden-lg {
    display: none !important;
  }
}
@media (min-width: 1920px) and (max-width: 2559.98px) {
  .hidden-xl {
    display: none !important;
  }
}
@media (min-width: 2560px) {
  .hidden-xxl {
    display: none !important;
  }
}
@media (min-width: 600px) {
  .hidden-sm-and-up {
    display: none !important;
  }
}
@media (min-width: 960px) {
  .hidden-md-and-up {
    display: none !important;
  }
}
@media (min-width: 1280px) {
  .hidden-lg-and-up {
    display: none !important;
  }
}
@media (min-width: 1920px) {
  .hidden-xl-and-up {
    display: none !important;
  }
}
@media (max-width: 959.98px) {
  .hidden-sm-and-down {
    display: none !important;
  }
}
@media (max-width: 1279.98px) {
  .hidden-md-and-down {
    display: none !important;
  }
}
@media (max-width: 1919.98px) {
  .hidden-lg-and-down {
    display: none !important;
  }
}
@media (max-width: 2559.98px) {
  .hidden-xl-and-down {
    display: none !important;
  }
}
.d-sr-only,
.d-sr-only-focusable:not(:focus) {
  border: 0 !important;
  clip: rect(0, 0, 0, 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
}
.overflow-auto {
  overflow: auto !important;
}
.overflow-hidden {
  overflow: hidden !important;
}
.overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto !important;
}
.overflow-x-hidden {
  overflow-x: hidden !important;
}
.overflow-y-auto {
  overflow-y: auto !important;
}
.overflow-y-hidden {
  overflow-y: hidden !important;
}
.d-none {
  display: none !important;
}
.d-inline {
  display: inline !important;
}
.d-inline-block {
  display: inline-block !important;
}
.d-block {
  display: block !important;
}
.d-table {
  display: table !important;
}
.d-table-row {
  display: table-row !important;
}
.d-table-cell {
  display: table-cell !important;
}
.d-flex {
  display: flex !important;
}
.d-inline-flex {
  display: inline-flex !important;
}
.float-none {
  float: none !important;
}
.float-left {
  float: left !important;
}
.float-right {
  float: right !important;
}
.v-locale--is-rtl .float-end {
  float: left !important;
}
.v-locale--is-rtl .float-start {
  float: right !important;
}
.v-locale--is-ltr .float-end {
  float: right !important;
}
.v-locale--is-ltr .float-start {
  float: left !important;
}
.flex-fill {
  flex: 1 1 auto !important;
}
.flex-row {
  flex-direction: row !important;
}
.flex-column {
  flex-direction: column !important;
}
.flex-row-reverse {
  flex-direction: row-reverse !important;
}
.flex-column-reverse {
  flex-direction: column-reverse !important;
}
.flex-grow-0 {
  flex-grow: 0 !important;
}
.flex-grow-1 {
  flex-grow: 1 !important;
}
.flex-shrink-0 {
  flex-shrink: 0 !important;
}
.flex-shrink-1 {
  flex-shrink: 1 !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.flex-nowrap {
  flex-wrap: nowrap !important;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
.justify-start {
  justify-content: flex-start !important;
}
.justify-end {
  justify-content: flex-end !important;
}
.justify-center {
  justify-content: center !important;
}
.justify-space-between {
  justify-content: space-between !important;
}
.justify-space-around {
  justify-content: space-around !important;
}
.justify-space-evenly {
  justify-content: space-evenly !important;
}
.align-start {
  align-items: flex-start !important;
}
.align-end {
  align-items: flex-end !important;
}
.align-center {
  align-items: center !important;
}
.align-baseline {
  align-items: baseline !important;
}
.align-stretch {
  align-items: stretch !important;
}
.align-content-start {
  align-content: flex-start !important;
}
.align-content-end {
  align-content: flex-end !important;
}
.align-content-center {
  align-content: center !important;
}
.align-content-space-between {
  align-content: space-between !important;
}
.align-content-space-around {
  align-content: space-around !important;
}
.align-content-space-evenly {
  align-content: space-evenly !important;
}
.align-content-stretch {
  align-content: stretch !important;
}
.align-self-auto {
  align-self: auto !important;
}
.align-self-start {
  align-self: flex-start !important;
}
.align-self-end {
  align-self: flex-end !important;
}
.align-self-center {
  align-self: center !important;
}
.align-self-baseline {
  align-self: baseline !important;
}
.align-self-stretch {
  align-self: stretch !important;
}
.order-first {
  order: -1 !important;
}
.order-0 {
  order: 0 !important;
}
.order-1 {
  order: 1 !important;
}
.order-2 {
  order: 2 !important;
}
.order-3 {
  order: 3 !important;
}
.order-4 {
  order: 4 !important;
}
.order-5 {
  order: 5 !important;
}
.order-6 {
  order: 6 !important;
}
.order-7 {
  order: 7 !important;
}
.order-8 {
  order: 8 !important;
}
.order-9 {
  order: 9 !important;
}
.order-10 {
  order: 10 !important;
}
.order-11 {
  order: 11 !important;
}
.order-12 {
  order: 12 !important;
}
.order-last {
  order: 13 !important;
}
.ma-0 {
  margin: 0px !important;
}
.ma-1 {
  margin: 4px !important;
}
.ma-2 {
  margin: 8px !important;
}
.ma-3 {
  margin: 12px !important;
}
.ma-4 {
  margin: 16px !important;
}
.ma-5 {
  margin: 20px !important;
}
.ma-6 {
  margin: 24px !important;
}
.ma-7 {
  margin: 28px !important;
}
.ma-8 {
  margin: 32px !important;
}
.ma-9 {
  margin: 36px !important;
}
.ma-10 {
  margin: 40px !important;
}
.ma-11 {
  margin: 44px !important;
}
.ma-12 {
  margin: 48px !important;
}
.ma-13 {
  margin: 52px !important;
}
.ma-14 {
  margin: 56px !important;
}
.ma-15 {
  margin: 60px !important;
}
.ma-16 {
  margin: 64px !important;
}
.ma-auto {
  margin: auto !important;
}
.mx-0 {
  margin-right: 0px !important;
  margin-left: 0px !important;
}
.mx-1 {
  margin-right: 4px !important;
  margin-left: 4px !important;
}
.mx-2 {
  margin-right: 8px !important;
  margin-left: 8px !important;
}
.mx-3 {
  margin-right: 12px !important;
  margin-left: 12px !important;
}
.mx-4 {
  margin-right: 16px !important;
  margin-left: 16px !important;
}
.mx-5 {
  margin-right: 20px !important;
  margin-left: 20px !important;
}
.mx-6 {
  margin-right: 24px !important;
  margin-left: 24px !important;
}
.mx-7 {
  margin-right: 28px !important;
  margin-left: 28px !important;
}
.mx-8 {
  margin-right: 32px !important;
  margin-left: 32px !important;
}
.mx-9 {
  margin-right: 36px !important;
  margin-left: 36px !important;
}
.mx-10 {
  margin-right: 40px !important;
  margin-left: 40px !important;
}
.mx-11 {
  margin-right: 44px !important;
  margin-left: 44px !important;
}
.mx-12 {
  margin-right: 48px !important;
  margin-left: 48px !important;
}
.mx-13 {
  margin-right: 52px !important;
  margin-left: 52px !important;
}
.mx-14 {
  margin-right: 56px !important;
  margin-left: 56px !important;
}
.mx-15 {
  margin-right: 60px !important;
  margin-left: 60px !important;
}
.mx-16 {
  margin-right: 64px !important;
  margin-left: 64px !important;
}
.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
.my-0 {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.my-1 {
  margin-top: 4px !important;
  margin-bottom: 4px !important;
}
.my-2 {
  margin-top: 8px !important;
  margin-bottom: 8px !important;
}
.my-3 {
  margin-top: 12px !important;
  margin-bottom: 12px !important;
}
.my-4 {
  margin-top: 16px !important;
  margin-bottom: 16px !important;
}
.my-5 {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}
.my-6 {
  margin-top: 24px !important;
  margin-bottom: 24px !important;
}
.my-7 {
  margin-top: 28px !important;
  margin-bottom: 28px !important;
}
.my-8 {
  margin-top: 32px !important;
  margin-bottom: 32px !important;
}
.my-9 {
  margin-top: 36px !important;
  margin-bottom: 36px !important;
}
.my-10 {
  margin-top: 40px !important;
  margin-bottom: 40px !important;
}
.my-11 {
  margin-top: 44px !important;
  margin-bottom: 44px !important;
}
.my-12 {
  margin-top: 48px !important;
  margin-bottom: 48px !important;
}
.my-13 {
  margin-top: 52px !important;
  margin-bottom: 52px !important;
}
.my-14 {
  margin-top: 56px !important;
  margin-bottom: 56px !important;
}
.my-15 {
  margin-top: 60px !important;
  margin-bottom: 60px !important;
}
.my-16 {
  margin-top: 64px !important;
  margin-bottom: 64px !important;
}
.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
.mt-0 {
  margin-top: 0px !important;
}
.mt-1 {
  margin-top: 4px !important;
}
.mt-2 {
  margin-top: 8px !important;
}
.mt-3 {
  margin-top: 12px !important;
}
.mt-4 {
  margin-top: 16px !important;
}
.mt-5 {
  margin-top: 20px !important;
}
.mt-6 {
  margin-top: 24px !important;
}
.mt-7 {
  margin-top: 28px !important;
}
.mt-8 {
  margin-top: 32px !important;
}
.mt-9 {
  margin-top: 36px !important;
}
.mt-10 {
  margin-top: 40px !important;
}
.mt-11 {
  margin-top: 44px !important;
}
.mt-12 {
  margin-top: 48px !important;
}
.mt-13 {
  margin-top: 52px !important;
}
.mt-14 {
  margin-top: 56px !important;
}
.mt-15 {
  margin-top: 60px !important;
}
.mt-16 {
  margin-top: 64px !important;
}
.mt-auto {
  margin-top: auto !important;
}
.mr-0 {
  margin-right: 0px !important;
}
.mr-1 {
  margin-right: 4px !important;
}
.mr-2 {
  margin-right: 8px !important;
}
.mr-3 {
  margin-right: 12px !important;
}
.mr-4 {
  margin-right: 16px !important;
}
.mr-5 {
  margin-right: 20px !important;
}
.mr-6 {
  margin-right: 24px !important;
}
.mr-7 {
  margin-right: 28px !important;
}
.mr-8 {
  margin-right: 32px !important;
}
.mr-9 {
  margin-right: 36px !important;
}
.mr-10 {
  margin-right: 40px !important;
}
.mr-11 {
  margin-right: 44px !important;
}
.mr-12 {
  margin-right: 48px !important;
}
.mr-13 {
  margin-right: 52px !important;
}
.mr-14 {
  margin-right: 56px !important;
}
.mr-15 {
  margin-right: 60px !important;
}
.mr-16 {
  margin-right: 64px !important;
}
.mr-auto {
  margin-right: auto !important;
}
.mb-0 {
  margin-bottom: 0px !important;
}
.mb-1 {
  margin-bottom: 4px !important;
}
.mb-2 {
  margin-bottom: 8px !important;
}
.mb-3 {
  margin-bottom: 12px !important;
}
.mb-4 {
  margin-bottom: 16px !important;
}
.mb-5 {
  margin-bottom: 20px !important;
}
.mb-6 {
  margin-bottom: 24px !important;
}
.mb-7 {
  margin-bottom: 28px !important;
}
.mb-8 {
  margin-bottom: 32px !important;
}
.mb-9 {
  margin-bottom: 36px !important;
}
.mb-10 {
  margin-bottom: 40px !important;
}
.mb-11 {
  margin-bottom: 44px !important;
}
.mb-12 {
  margin-bottom: 48px !important;
}
.mb-13 {
  margin-bottom: 52px !important;
}
.mb-14 {
  margin-bottom: 56px !important;
}
.mb-15 {
  margin-bottom: 60px !important;
}
.mb-16 {
  margin-bottom: 64px !important;
}
.mb-auto {
  margin-bottom: auto !important;
}
.ml-0 {
  margin-left: 0px !important;
}
.ml-1 {
  margin-left: 4px !important;
}
.ml-2 {
  margin-left: 8px !important;
}
.ml-3 {
  margin-left: 12px !important;
}
.ml-4 {
  margin-left: 16px !important;
}
.ml-5 {
  margin-left: 20px !important;
}
.ml-6 {
  margin-left: 24px !important;
}
.ml-7 {
  margin-left: 28px !important;
}
.ml-8 {
  margin-left: 32px !important;
}
.ml-9 {
  margin-left: 36px !important;
}
.ml-10 {
  margin-left: 40px !important;
}
.ml-11 {
  margin-left: 44px !important;
}
.ml-12 {
  margin-left: 48px !important;
}
.ml-13 {
  margin-left: 52px !important;
}
.ml-14 {
  margin-left: 56px !important;
}
.ml-15 {
  margin-left: 60px !important;
}
.ml-16 {
  margin-left: 64px !important;
}
.ml-auto {
  margin-left: auto !important;
}
.ms-0 {
  margin-inline-start: 0px !important;
}
.ms-1 {
  margin-inline-start: 4px !important;
}
.ms-2 {
  margin-inline-start: 8px !important;
}
.ms-3 {
  margin-inline-start: 12px !important;
}
.ms-4 {
  margin-inline-start: 16px !important;
}
.ms-5 {
  margin-inline-start: 20px !important;
}
.ms-6 {
  margin-inline-start: 24px !important;
}
.ms-7 {
  margin-inline-start: 28px !important;
}
.ms-8 {
  margin-inline-start: 32px !important;
}
.ms-9 {
  margin-inline-start: 36px !important;
}
.ms-10 {
  margin-inline-start: 40px !important;
}
.ms-11 {
  margin-inline-start: 44px !important;
}
.ms-12 {
  margin-inline-start: 48px !important;
}
.ms-13 {
  margin-inline-start: 52px !important;
}
.ms-14 {
  margin-inline-start: 56px !important;
}
.ms-15 {
  margin-inline-start: 60px !important;
}
.ms-16 {
  margin-inline-start: 64px !important;
}
.ms-auto {
  margin-inline-start: auto !important;
}
.me-0 {
  margin-inline-end: 0px !important;
}
.me-1 {
  margin-inline-end: 4px !important;
}
.me-2 {
  margin-inline-end: 8px !important;
}
.me-3 {
  margin-inline-end: 12px !important;
}
.me-4 {
  margin-inline-end: 16px !important;
}
.me-5 {
  margin-inline-end: 20px !important;
}
.me-6 {
  margin-inline-end: 24px !important;
}
.me-7 {
  margin-inline-end: 28px !important;
}
.me-8 {
  margin-inline-end: 32px !important;
}
.me-9 {
  margin-inline-end: 36px !important;
}
.me-10 {
  margin-inline-end: 40px !important;
}
.me-11 {
  margin-inline-end: 44px !important;
}
.me-12 {
  margin-inline-end: 48px !important;
}
.me-13 {
  margin-inline-end: 52px !important;
}
.me-14 {
  margin-inline-end: 56px !important;
}
.me-15 {
  margin-inline-end: 60px !important;
}
.me-16 {
  margin-inline-end: 64px !important;
}
.me-auto {
  margin-inline-end: auto !important;
}
.ma-n1 {
  margin: -4px !important;
}
.ma-n2 {
  margin: -8px !important;
}
.ma-n3 {
  margin: -12px !important;
}
.ma-n4 {
  margin: -16px !important;
}
.ma-n5 {
  margin: -20px !important;
}
.ma-n6 {
  margin: -24px !important;
}
.ma-n7 {
  margin: -28px !important;
}
.ma-n8 {
  margin: -32px !important;
}
.ma-n9 {
  margin: -36px !important;
}
.ma-n10 {
  margin: -40px !important;
}
.ma-n11 {
  margin: -44px !important;
}
.ma-n12 {
  margin: -48px !important;
}
.ma-n13 {
  margin: -52px !important;
}
.ma-n14 {
  margin: -56px !important;
}
.ma-n15 {
  margin: -60px !important;
}
.ma-n16 {
  margin: -64px !important;
}
.mx-n1 {
  margin-right: -4px !important;
  margin-left: -4px !important;
}
.mx-n2 {
  margin-right: -8px !important;
  margin-left: -8px !important;
}
.mx-n3 {
  margin-right: -12px !important;
  margin-left: -12px !important;
}
.mx-n4 {
  margin-right: -16px !important;
  margin-left: -16px !important;
}
.mx-n5 {
  margin-right: -20px !important;
  margin-left: -20px !important;
}
.mx-n6 {
  margin-right: -24px !important;
  margin-left: -24px !important;
}
.mx-n7 {
  margin-right: -28px !important;
  margin-left: -28px !important;
}
.mx-n8 {
  margin-right: -32px !important;
  margin-left: -32px !important;
}
.mx-n9 {
  margin-right: -36px !important;
  margin-left: -36px !important;
}
.mx-n10 {
  margin-right: -40px !important;
  margin-left: -40px !important;
}
.mx-n11 {
  margin-right: -44px !important;
  margin-left: -44px !important;
}
.mx-n12 {
  margin-right: -48px !important;
  margin-left: -48px !important;
}
.mx-n13 {
  margin-right: -52px !important;
  margin-left: -52px !important;
}
.mx-n14 {
  margin-right: -56px !important;
  margin-left: -56px !important;
}
.mx-n15 {
  margin-right: -60px !important;
  margin-left: -60px !important;
}
.mx-n16 {
  margin-right: -64px !important;
  margin-left: -64px !important;
}
.my-n1 {
  margin-top: -4px !important;
  margin-bottom: -4px !important;
}
.my-n2 {
  margin-top: -8px !important;
  margin-bottom: -8px !important;
}
.my-n3 {
  margin-top: -12px !important;
  margin-bottom: -12px !important;
}
.my-n4 {
  margin-top: -16px !important;
  margin-bottom: -16px !important;
}
.my-n5 {
  margin-top: -20px !important;
  margin-bottom: -20px !important;
}
.my-n6 {
  margin-top: -24px !important;
  margin-bottom: -24px !important;
}
.my-n7 {
  margin-top: -28px !important;
  margin-bottom: -28px !important;
}
.my-n8 {
  margin-top: -32px !important;
  margin-bottom: -32px !important;
}
.my-n9 {
  margin-top: -36px !important;
  margin-bottom: -36px !important;
}
.my-n10 {
  margin-top: -40px !important;
  margin-bottom: -40px !important;
}
.my-n11 {
  margin-top: -44px !important;
  margin-bottom: -44px !important;
}
.my-n12 {
  margin-top: -48px !important;
  margin-bottom: -48px !important;
}
.my-n13 {
  margin-top: -52px !important;
  margin-bottom: -52px !important;
}
.my-n14 {
  margin-top: -56px !important;
  margin-bottom: -56px !important;
}
.my-n15 {
  margin-top: -60px !important;
  margin-bottom: -60px !important;
}
.my-n16 {
  margin-top: -64px !important;
  margin-bottom: -64px !important;
}
.mt-n1 {
  margin-top: -4px !important;
}
.mt-n2 {
  margin-top: -8px !important;
}
.mt-n3 {
  margin-top: -12px !important;
}
.mt-n4 {
  margin-top: -16px !important;
}
.mt-n5 {
  margin-top: -20px !important;
}
.mt-n6 {
  margin-top: -24px !important;
}
.mt-n7 {
  margin-top: -28px !important;
}
.mt-n8 {
  margin-top: -32px !important;
}
.mt-n9 {
  margin-top: -36px !important;
}
.mt-n10 {
  margin-top: -40px !important;
}
.mt-n11 {
  margin-top: -44px !important;
}
.mt-n12 {
  margin-top: -48px !important;
}
.mt-n13 {
  margin-top: -52px !important;
}
.mt-n14 {
  margin-top: -56px !important;
}
.mt-n15 {
  margin-top: -60px !important;
}
.mt-n16 {
  margin-top: -64px !important;
}
.mr-n1 {
  margin-right: -4px !important;
}
.mr-n2 {
  margin-right: -8px !important;
}
.mr-n3 {
  margin-right: -12px !important;
}
.mr-n4 {
  margin-right: -16px !important;
}
.mr-n5 {
  margin-right: -20px !important;
}
.mr-n6 {
  margin-right: -24px !important;
}
.mr-n7 {
  margin-right: -28px !important;
}
.mr-n8 {
  margin-right: -32px !important;
}
.mr-n9 {
  margin-right: -36px !important;
}
.mr-n10 {
  margin-right: -40px !important;
}
.mr-n11 {
  margin-right: -44px !important;
}
.mr-n12 {
  margin-right: -48px !important;
}
.mr-n13 {
  margin-right: -52px !important;
}
.mr-n14 {
  margin-right: -56px !important;
}
.mr-n15 {
  margin-right: -60px !important;
}
.mr-n16 {
  margin-right: -64px !important;
}
.mb-n1 {
  margin-bottom: -4px !important;
}
.mb-n2 {
  margin-bottom: -8px !important;
}
.mb-n3 {
  margin-bottom: -12px !important;
}
.mb-n4 {
  margin-bottom: -16px !important;
}
.mb-n5 {
  margin-bottom: -20px !important;
}
.mb-n6 {
  margin-bottom: -24px !important;
}
.mb-n7 {
  margin-bottom: -28px !important;
}
.mb-n8 {
  margin-bottom: -32px !important;
}
.mb-n9 {
  margin-bottom: -36px !important;
}
.mb-n10 {
  margin-bottom: -40px !important;
}
.mb-n11 {
  margin-bottom: -44px !important;
}
.mb-n12 {
  margin-bottom: -48px !important;
}
.mb-n13 {
  margin-bottom: -52px !important;
}
.mb-n14 {
  margin-bottom: -56px !important;
}
.mb-n15 {
  margin-bottom: -60px !important;
}
.mb-n16 {
  margin-bottom: -64px !important;
}
.ml-n1 {
  margin-left: -4px !important;
}
.ml-n2 {
  margin-left: -8px !important;
}
.ml-n3 {
  margin-left: -12px !important;
}
.ml-n4 {
  margin-left: -16px !important;
}
.ml-n5 {
  margin-left: -20px !important;
}
.ml-n6 {
  margin-left: -24px !important;
}
.ml-n7 {
  margin-left: -28px !important;
}
.ml-n8 {
  margin-left: -32px !important;
}
.ml-n9 {
  margin-left: -36px !important;
}
.ml-n10 {
  margin-left: -40px !important;
}
.ml-n11 {
  margin-left: -44px !important;
}
.ml-n12 {
  margin-left: -48px !important;
}
.ml-n13 {
  margin-left: -52px !important;
}
.ml-n14 {
  margin-left: -56px !important;
}
.ml-n15 {
  margin-left: -60px !important;
}
.ml-n16 {
  margin-left: -64px !important;
}
.ms-n1 {
  margin-inline-start: -4px !important;
}
.ms-n2 {
  margin-inline-start: -8px !important;
}
.ms-n3 {
  margin-inline-start: -12px !important;
}
.ms-n4 {
  margin-inline-start: -16px !important;
}
.ms-n5 {
  margin-inline-start: -20px !important;
}
.ms-n6 {
  margin-inline-start: -24px !important;
}
.ms-n7 {
  margin-inline-start: -28px !important;
}
.ms-n8 {
  margin-inline-start: -32px !important;
}
.ms-n9 {
  margin-inline-start: -36px !important;
}
.ms-n10 {
  margin-inline-start: -40px !important;
}
.ms-n11 {
  margin-inline-start: -44px !important;
}
.ms-n12 {
  margin-inline-start: -48px !important;
}
.ms-n13 {
  margin-inline-start: -52px !important;
}
.ms-n14 {
  margin-inline-start: -56px !important;
}
.ms-n15 {
  margin-inline-start: -60px !important;
}
.ms-n16 {
  margin-inline-start: -64px !important;
}
.me-n1 {
  margin-inline-end: -4px !important;
}
.me-n2 {
  margin-inline-end: -8px !important;
}
.me-n3 {
  margin-inline-end: -12px !important;
}
.me-n4 {
  margin-inline-end: -16px !important;
}
.me-n5 {
  margin-inline-end: -20px !important;
}
.me-n6 {
  margin-inline-end: -24px !important;
}
.me-n7 {
  margin-inline-end: -28px !important;
}
.me-n8 {
  margin-inline-end: -32px !important;
}
.me-n9 {
  margin-inline-end: -36px !important;
}
.me-n10 {
  margin-inline-end: -40px !important;
}
.me-n11 {
  margin-inline-end: -44px !important;
}
.me-n12 {
  margin-inline-end: -48px !important;
}
.me-n13 {
  margin-inline-end: -52px !important;
}
.me-n14 {
  margin-inline-end: -56px !important;
}
.me-n15 {
  margin-inline-end: -60px !important;
}
.me-n16 {
  margin-inline-end: -64px !important;
}
.pa-0 {
  padding: 0px !important;
}
.pa-1 {
  padding: 4px !important;
}
.pa-2 {
  padding: 8px !important;
}
.pa-3 {
  padding: 12px !important;
}
.pa-4 {
  padding: 16px !important;
}
.pa-5 {
  padding: 20px !important;
}
.pa-6 {
  padding: 24px !important;
}
.pa-7 {
  padding: 28px !important;
}
.pa-8 {
  padding: 32px !important;
}
.pa-9 {
  padding: 36px !important;
}
.pa-10 {
  padding: 40px !important;
}
.pa-11 {
  padding: 44px !important;
}
.pa-12 {
  padding: 48px !important;
}
.pa-13 {
  padding: 52px !important;
}
.pa-14 {
  padding: 56px !important;
}
.pa-15 {
  padding: 60px !important;
}
.pa-16 {
  padding: 64px !important;
}
.px-0 {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.px-1 {
  padding-right: 4px !important;
  padding-left: 4px !important;
}
.px-2 {
  padding-right: 8px !important;
  padding-left: 8px !important;
}
.px-3 {
  padding-right: 12px !important;
  padding-left: 12px !important;
}
.px-4 {
  padding-right: 16px !important;
  padding-left: 16px !important;
}
.px-5 {
  padding-right: 20px !important;
  padding-left: 20px !important;
}
.px-6 {
  padding-right: 24px !important;
  padding-left: 24px !important;
}
.px-7 {
  padding-right: 28px !important;
  padding-left: 28px !important;
}
.px-8 {
  padding-right: 32px !important;
  padding-left: 32px !important;
}
.px-9 {
  padding-right: 36px !important;
  padding-left: 36px !important;
}
.px-10 {
  padding-right: 40px !important;
  padding-left: 40px !important;
}
.px-11 {
  padding-right: 44px !important;
  padding-left: 44px !important;
}
.px-12 {
  padding-right: 48px !important;
  padding-left: 48px !important;
}
.px-13 {
  padding-right: 52px !important;
  padding-left: 52px !important;
}
.px-14 {
  padding-right: 56px !important;
  padding-left: 56px !important;
}
.px-15 {
  padding-right: 60px !important;
  padding-left: 60px !important;
}
.px-16 {
  padding-right: 64px !important;
  padding-left: 64px !important;
}
.py-0 {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.py-1 {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}
.py-2 {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}
.py-3 {
  padding-top: 12px !important;
  padding-bottom: 12px !important;
}
.py-4 {
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}
.py-5 {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}
.py-6 {
  padding-top: 24px !important;
  padding-bottom: 24px !important;
}
.py-7 {
  padding-top: 28px !important;
  padding-bottom: 28px !important;
}
.py-8 {
  padding-top: 32px !important;
  padding-bottom: 32px !important;
}
.py-9 {
  padding-top: 36px !important;
  padding-bottom: 36px !important;
}
.py-10 {
  padding-top: 40px !important;
  padding-bottom: 40px !important;
}
.py-11 {
  padding-top: 44px !important;
  padding-bottom: 44px !important;
}
.py-12 {
  padding-top: 48px !important;
  padding-bottom: 48px !important;
}
.py-13 {
  padding-top: 52px !important;
  padding-bottom: 52px !important;
}
.py-14 {
  padding-top: 56px !important;
  padding-bottom: 56px !important;
}
.py-15 {
  padding-top: 60px !important;
  padding-bottom: 60px !important;
}
.py-16 {
  padding-top: 64px !important;
  padding-bottom: 64px !important;
}
.pt-0 {
  padding-top: 0px !important;
}
.pt-1 {
  padding-top: 4px !important;
}
.pt-2 {
  padding-top: 8px !important;
}
.pt-3 {
  padding-top: 12px !important;
}
.pt-4 {
  padding-top: 16px !important;
}
.pt-5 {
  padding-top: 20px !important;
}
.pt-6 {
  padding-top: 24px !important;
}
.pt-7 {
  padding-top: 28px !important;
}
.pt-8 {
  padding-top: 32px !important;
}
.pt-9 {
  padding-top: 36px !important;
}
.pt-10 {
  padding-top: 40px !important;
}
.pt-11 {
  padding-top: 44px !important;
}
.pt-12 {
  padding-top: 48px !important;
}
.pt-13 {
  padding-top: 52px !important;
}
.pt-14 {
  padding-top: 56px !important;
}
.pt-15 {
  padding-top: 60px !important;
}
.pt-16 {
  padding-top: 64px !important;
}
.pr-0 {
  padding-right: 0px !important;
}
.pr-1 {
  padding-right: 4px !important;
}
.pr-2 {
  padding-right: 8px !important;
}
.pr-3 {
  padding-right: 12px !important;
}
.pr-4 {
  padding-right: 16px !important;
}
.pr-5 {
  padding-right: 20px !important;
}
.pr-6 {
  padding-right: 24px !important;
}
.pr-7 {
  padding-right: 28px !important;
}
.pr-8 {
  padding-right: 32px !important;
}
.pr-9 {
  padding-right: 36px !important;
}
.pr-10 {
  padding-right: 40px !important;
}
.pr-11 {
  padding-right: 44px !important;
}
.pr-12 {
  padding-right: 48px !important;
}
.pr-13 {
  padding-right: 52px !important;
}
.pr-14 {
  padding-right: 56px !important;
}
.pr-15 {
  padding-right: 60px !important;
}
.pr-16 {
  padding-right: 64px !important;
}
.pb-0 {
  padding-bottom: 0px !important;
}
.pb-1 {
  padding-bottom: 4px !important;
}
.pb-2 {
  padding-bottom: 8px !important;
}
.pb-3 {
  padding-bottom: 12px !important;
}
.pb-4 {
  padding-bottom: 16px !important;
}
.pb-5 {
  padding-bottom: 20px !important;
}
.pb-6 {
  padding-bottom: 24px !important;
}
.pb-7 {
  padding-bottom: 28px !important;
}
.pb-8 {
  padding-bottom: 32px !important;
}
.pb-9 {
  padding-bottom: 36px !important;
}
.pb-10 {
  padding-bottom: 40px !important;
}
.pb-11 {
  padding-bottom: 44px !important;
}
.pb-12 {
  padding-bottom: 48px !important;
}
.pb-13 {
  padding-bottom: 52px !important;
}
.pb-14 {
  padding-bottom: 56px !important;
}
.pb-15 {
  padding-bottom: 60px !important;
}
.pb-16 {
  padding-bottom: 64px !important;
}
.pl-0 {
  padding-left: 0px !important;
}
.pl-1 {
  padding-left: 4px !important;
}
.pl-2 {
  padding-left: 8px !important;
}
.pl-3 {
  padding-left: 12px !important;
}
.pl-4 {
  padding-left: 16px !important;
}
.pl-5 {
  padding-left: 20px !important;
}
.pl-6 {
  padding-left: 24px !important;
}
.pl-7 {
  padding-left: 28px !important;
}
.pl-8 {
  padding-left: 32px !important;
}
.pl-9 {
  padding-left: 36px !important;
}
.pl-10 {
  padding-left: 40px !important;
}
.pl-11 {
  padding-left: 44px !important;
}
.pl-12 {
  padding-left: 48px !important;
}
.pl-13 {
  padding-left: 52px !important;
}
.pl-14 {
  padding-left: 56px !important;
}
.pl-15 {
  padding-left: 60px !important;
}
.pl-16 {
  padding-left: 64px !important;
}
.ps-0 {
  padding-inline-start: 0px !important;
}
.ps-1 {
  padding-inline-start: 4px !important;
}
.ps-2 {
  padding-inline-start: 8px !important;
}
.ps-3 {
  padding-inline-start: 12px !important;
}
.ps-4 {
  padding-inline-start: 16px !important;
}
.ps-5 {
  padding-inline-start: 20px !important;
}
.ps-6 {
  padding-inline-start: 24px !important;
}
.ps-7 {
  padding-inline-start: 28px !important;
}
.ps-8 {
  padding-inline-start: 32px !important;
}
.ps-9 {
  padding-inline-start: 36px !important;
}
.ps-10 {
  padding-inline-start: 40px !important;
}
.ps-11 {
  padding-inline-start: 44px !important;
}
.ps-12 {
  padding-inline-start: 48px !important;
}
.ps-13 {
  padding-inline-start: 52px !important;
}
.ps-14 {
  padding-inline-start: 56px !important;
}
.ps-15 {
  padding-inline-start: 60px !important;
}
.ps-16 {
  padding-inline-start: 64px !important;
}
.pe-0 {
  padding-inline-end: 0px !important;
}
.pe-1 {
  padding-inline-end: 4px !important;
}
.pe-2 {
  padding-inline-end: 8px !important;
}
.pe-3 {
  padding-inline-end: 12px !important;
}
.pe-4 {
  padding-inline-end: 16px !important;
}
.pe-5 {
  padding-inline-end: 20px !important;
}
.pe-6 {
  padding-inline-end: 24px !important;
}
.pe-7 {
  padding-inline-end: 28px !important;
}
.pe-8 {
  padding-inline-end: 32px !important;
}
.pe-9 {
  padding-inline-end: 36px !important;
}
.pe-10 {
  padding-inline-end: 40px !important;
}
.pe-11 {
  padding-inline-end: 44px !important;
}
.pe-12 {
  padding-inline-end: 48px !important;
}
.pe-13 {
  padding-inline-end: 52px !important;
}
.pe-14 {
  padding-inline-end: 56px !important;
}
.pe-15 {
  padding-inline-end: 60px !important;
}
.pe-16 {
  padding-inline-end: 64px !important;
}
.rounded-0 {
  border-radius: 0 !important;
}
.rounded-sm {
  border-radius: 2px !important;
}
.rounded {
  border-radius: 4px !important;
}
.rounded-lg {
  border-radius: 8px !important;
}
.rounded-xl {
  border-radius: 24px !important;
}
.rounded-pill {
  border-radius: 9999px !important;
}
.rounded-circle {
  border-radius: 50% !important;
}
.rounded-shaped {
  border-radius: 24px 0 !important;
}
.rounded-t-0 {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
.rounded-t-sm {
  border-top-left-radius: 2px !important;
  border-top-right-radius: 2px !important;
}
.rounded-t {
  border-top-left-radius: 4px !important;
  border-top-right-radius: 4px !important;
}
.rounded-t-lg {
  border-top-left-radius: 8px !important;
  border-top-right-radius: 8px !important;
}
.rounded-t-xl {
  border-top-left-radius: 24px !important;
  border-top-right-radius: 24px !important;
}
.rounded-t-pill {
  border-top-left-radius: 9999px !important;
  border-top-right-radius: 9999px !important;
}
.rounded-t-circle {
  border-top-left-radius: 50% !important;
  border-top-right-radius: 50% !important;
}
.rounded-t-shaped {
  border-top-left-radius: 24px !important;
  border-top-right-radius: 0 !important;
}
.v-locale--is-ltr .rounded-e-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.v-locale--is-rtl .rounded-e-0 {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.v-locale--is-ltr .rounded-e-sm {
  border-top-right-radius: 2px !important;
  border-bottom-right-radius: 2px !important;
}
.v-locale--is-rtl .rounded-e-sm {
  border-top-left-radius: 2px !important;
  border-bottom-left-radius: 2px !important;
}
.v-locale--is-ltr .rounded-e {
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}
.v-locale--is-rtl .rounded-e {
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
}
.v-locale--is-ltr .rounded-e-lg {
  border-top-right-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}
.v-locale--is-rtl .rounded-e-lg {
  border-top-left-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}
.v-locale--is-ltr .rounded-e-xl {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}
.v-locale--is-rtl .rounded-e-xl {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 24px !important;
}
.v-locale--is-ltr .rounded-e-pill {
  border-top-right-radius: 9999px !important;
  border-bottom-right-radius: 9999px !important;
}
.v-locale--is-rtl .rounded-e-pill {
  border-top-left-radius: 9999px !important;
  border-bottom-left-radius: 9999px !important;
}
.v-locale--is-ltr .rounded-e-circle {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}
.v-locale--is-rtl .rounded-e-circle {
  border-top-left-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}
.v-locale--is-ltr .rounded-e-shaped {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 0 !important;
}
.v-locale--is-rtl .rounded-e-shaped {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 0 !important;
}
.rounded-b-0 {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.rounded-b-sm {
  border-bottom-left-radius: 2px !important;
  border-bottom-right-radius: 2px !important;
}
.rounded-b {
  border-bottom-left-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}
.rounded-b-lg {
  border-bottom-left-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}
.rounded-b-xl {
  border-bottom-left-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}
.rounded-b-pill {
  border-bottom-left-radius: 9999px !important;
  border-bottom-right-radius: 9999px !important;
}
.rounded-b-circle {
  border-bottom-left-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}
.rounded-b-shaped {
  border-bottom-left-radius: 24px !important;
  border-bottom-right-radius: 0 !important;
}
.v-locale--is-ltr .rounded-s-0 {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.v-locale--is-rtl .rounded-s-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.v-locale--is-ltr .rounded-s-sm {
  border-top-left-radius: 2px !important;
  border-bottom-left-radius: 2px !important;
}
.v-locale--is-rtl .rounded-s-sm {
  border-top-right-radius: 2px !important;
  border-bottom-right-radius: 2px !important;
}
.v-locale--is-ltr .rounded-s {
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
}
.v-locale--is-rtl .rounded-s {
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}
.v-locale--is-ltr .rounded-s-lg {
  border-top-left-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}
.v-locale--is-rtl .rounded-s-lg {
  border-top-right-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}
.v-locale--is-ltr .rounded-s-xl {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 24px !important;
}
.v-locale--is-rtl .rounded-s-xl {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}
.v-locale--is-ltr .rounded-s-pill {
  border-top-left-radius: 9999px !important;
  border-bottom-left-radius: 9999px !important;
}
.v-locale--is-rtl .rounded-s-pill {
  border-top-right-radius: 9999px !important;
  border-bottom-right-radius: 9999px !important;
}
.v-locale--is-ltr .rounded-s-circle {
  border-top-left-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}
.v-locale--is-rtl .rounded-s-circle {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}
.v-locale--is-ltr .rounded-s-shaped {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 0 !important;
}
.v-locale--is-rtl .rounded-s-shaped {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 0 !important;
}
.v-locale--is-ltr .rounded-ts-0 {
  border-top-left-radius: 0 !important;
}
.v-locale--is-rtl .rounded-ts-0 {
  border-top-right-radius: 0 !important;
}
.v-locale--is-ltr .rounded-ts-sm {
  border-top-left-radius: 2px !important;
}
.v-locale--is-rtl .rounded-ts-sm {
  border-top-right-radius: 2px !important;
}
.v-locale--is-ltr .rounded-ts {
  border-top-left-radius: 4px !important;
}
.v-locale--is-rtl .rounded-ts {
  border-top-right-radius: 4px !important;
}
.v-locale--is-ltr .rounded-ts-lg {
  border-top-left-radius: 8px !important;
}
.v-locale--is-rtl .rounded-ts-lg {
  border-top-right-radius: 8px !important;
}
.v-locale--is-ltr .rounded-ts-xl {
  border-top-left-radius: 24px !important;
}
.v-locale--is-rtl .rounded-ts-xl {
  border-top-right-radius: 24px !important;
}
.v-locale--is-ltr .rounded-ts-pill {
  border-top-left-radius: 9999px !important;
}
.v-locale--is-rtl .rounded-ts-pill {
  border-top-right-radius: 9999px !important;
}
.v-locale--is-ltr .rounded-ts-circle {
  border-top-left-radius: 50% !important;
}
.v-locale--is-rtl .rounded-ts-circle {
  border-top-right-radius: 50% !important;
}
.v-locale--is-ltr .rounded-ts-shaped {
  border-top-left-radius: 24px 0 !important;
}
.v-locale--is-rtl .rounded-ts-shaped {
  border-top-right-radius: 24px 0 !important;
}
.v-locale--is-ltr .rounded-te-0 {
  border-top-right-radius: 0 !important;
}
.v-locale--is-rtl .rounded-te-0 {
  border-top-left-radius: 0 !important;
}
.v-locale--is-ltr .rounded-te-sm {
  border-top-right-radius: 2px !important;
}
.v-locale--is-rtl .rounded-te-sm {
  border-top-left-radius: 2px !important;
}
.v-locale--is-ltr .rounded-te {
  border-top-right-radius: 4px !important;
}
.v-locale--is-rtl .rounded-te {
  border-top-left-radius: 4px !important;
}
.v-locale--is-ltr .rounded-te-lg {
  border-top-right-radius: 8px !important;
}
.v-locale--is-rtl .rounded-te-lg {
  border-top-left-radius: 8px !important;
}
.v-locale--is-ltr .rounded-te-xl {
  border-top-right-radius: 24px !important;
}
.v-locale--is-rtl .rounded-te-xl {
  border-top-left-radius: 24px !important;
}
.v-locale--is-ltr .rounded-te-pill {
  border-top-right-radius: 9999px !important;
}
.v-locale--is-rtl .rounded-te-pill {
  border-top-left-radius: 9999px !important;
}
.v-locale--is-ltr .rounded-te-circle {
  border-top-right-radius: 50% !important;
}
.v-locale--is-rtl .rounded-te-circle {
  border-top-left-radius: 50% !important;
}
.v-locale--is-ltr .rounded-te-shaped {
  border-top-right-radius: 24px 0 !important;
}
.v-locale--is-rtl .rounded-te-shaped {
  border-top-left-radius: 24px 0 !important;
}
.v-locale--is-ltr .rounded-be-0 {
  border-bottom-right-radius: 0 !important;
}
.v-locale--is-rtl .rounded-be-0 {
  border-bottom-left-radius: 0 !important;
}
.v-locale--is-ltr .rounded-be-sm {
  border-bottom-right-radius: 2px !important;
}
.v-locale--is-rtl .rounded-be-sm {
  border-bottom-left-radius: 2px !important;
}
.v-locale--is-ltr .rounded-be {
  border-bottom-right-radius: 4px !important;
}
.v-locale--is-rtl .rounded-be {
  border-bottom-left-radius: 4px !important;
}
.v-locale--is-ltr .rounded-be-lg {
  border-bottom-right-radius: 8px !important;
}
.v-locale--is-rtl .rounded-be-lg {
  border-bottom-left-radius: 8px !important;
}
.v-locale--is-ltr .rounded-be-xl {
  border-bottom-right-radius: 24px !important;
}
.v-locale--is-rtl .rounded-be-xl {
  border-bottom-left-radius: 24px !important;
}
.v-locale--is-ltr .rounded-be-pill {
  border-bottom-right-radius: 9999px !important;
}
.v-locale--is-rtl .rounded-be-pill {
  border-bottom-left-radius: 9999px !important;
}
.v-locale--is-ltr .rounded-be-circle {
  border-bottom-right-radius: 50% !important;
}
.v-locale--is-rtl .rounded-be-circle {
  border-bottom-left-radius: 50% !important;
}
.v-locale--is-ltr .rounded-be-shaped {
  border-bottom-right-radius: 24px 0 !important;
}
.v-locale--is-rtl .rounded-be-shaped {
  border-bottom-left-radius: 24px 0 !important;
}
.v-locale--is-ltr .rounded-bs-0 {
  border-bottom-left-radius: 0 !important;
}
.v-locale--is-rtl .rounded-bs-0 {
  border-bottom-right-radius: 0 !important;
}
.v-locale--is-ltr .rounded-bs-sm {
  border-bottom-left-radius: 2px !important;
}
.v-locale--is-rtl .rounded-bs-sm {
  border-bottom-right-radius: 2px !important;
}
.v-locale--is-ltr .rounded-bs {
  border-bottom-left-radius: 4px !important;
}
.v-locale--is-rtl .rounded-bs {
  border-bottom-right-radius: 4px !important;
}
.v-locale--is-ltr .rounded-bs-lg {
  border-bottom-left-radius: 8px !important;
}
.v-locale--is-rtl .rounded-bs-lg {
  border-bottom-right-radius: 8px !important;
}
.v-locale--is-ltr .rounded-bs-xl {
  border-bottom-left-radius: 24px !important;
}
.v-locale--is-rtl .rounded-bs-xl {
  border-bottom-right-radius: 24px !important;
}
.v-locale--is-ltr .rounded-bs-pill {
  border-bottom-left-radius: 9999px !important;
}
.v-locale--is-rtl .rounded-bs-pill {
  border-bottom-right-radius: 9999px !important;
}
.v-locale--is-ltr .rounded-bs-circle {
  border-bottom-left-radius: 50% !important;
}
.v-locale--is-rtl .rounded-bs-circle {
  border-bottom-right-radius: 50% !important;
}
.v-locale--is-ltr .rounded-bs-shaped {
  border-bottom-left-radius: 24px 0 !important;
}
.v-locale--is-rtl .rounded-bs-shaped {
  border-bottom-right-radius: 24px 0 !important;
}
.border-0 {
  border-width: 0 !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border {
  border-width: thin !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-sm {
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-md {
  border-width: 2px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-lg {
  border-width: 4px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-xl {
  border-width: 8px !important;
  border-style: solid !important;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-opacity-0 {
  --v-border-opacity: 0 !important;
}
.border-opacity {
  --v-border-opacity: 0.12 !important;
}
.border-opacity-25 {
  --v-border-opacity: 0.25 !important;
}
.border-opacity-50 {
  --v-border-opacity: 0.5 !important;
}
.border-opacity-75 {
  --v-border-opacity: 0.75 !important;
}
.border-opacity-100 {
  --v-border-opacity: 1 !important;
}
.border-t-0 {
  border-block-start-width: 0 !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-t {
  border-block-start-width: thin !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-t-sm {
  border-block-start-width: 1px !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-t-md {
  border-block-start-width: 2px !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-t-lg {
  border-block-start-width: 4px !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-t-xl {
  border-block-start-width: 8px !important;
  border-block-start-style: solid !important;
  border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-e-0 {
  border-inline-end-width: 0 !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-e {
  border-inline-end-width: thin !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-e-sm {
  border-inline-end-width: 1px !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-e-md {
  border-inline-end-width: 2px !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-e-lg {
  border-inline-end-width: 4px !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-e-xl {
  border-inline-end-width: 8px !important;
  border-inline-end-style: solid !important;
  border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-b-0 {
  border-block-end-width: 0 !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-b {
  border-block-end-width: thin !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-b-sm {
  border-block-end-width: 1px !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-b-md {
  border-block-end-width: 2px !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-b-lg {
  border-block-end-width: 4px !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-b-xl {
  border-block-end-width: 8px !important;
  border-block-end-style: solid !important;
  border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-s-0 {
  border-inline-start-width: 0 !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-s {
  border-inline-start-width: thin !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-s-sm {
  border-inline-start-width: 1px !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-s-md {
  border-inline-start-width: 2px !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-s-lg {
  border-inline-start-width: 4px !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-s-xl {
  border-inline-start-width: 8px !important;
  border-inline-start-style: solid !important;
  border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.border-solid {
  border-style: solid !important;
}
.border-dashed {
  border-style: dashed !important;
}
.border-dotted {
  border-style: dotted !important;
}
.border-double {
  border-style: double !important;
}
.border-none {
  border-style: none !important;
}
.text-left {
  text-align: left !important;
}
.text-right {
  text-align: right !important;
}
.text-center {
  text-align: center !important;
}
.text-justify {
  text-align: justify !important;
}
.text-start {
  text-align: start !important;
}
.text-end {
  text-align: end !important;
}
.text-decoration-line-through {
  text-decoration: line-through !important;
}
.text-decoration-none {
  text-decoration: none !important;
}
.text-decoration-overline {
  text-decoration: overline !important;
}
.text-decoration-underline {
  text-decoration: underline !important;
}
.text-wrap {
  white-space: normal !important;
}
.text-no-wrap {
  white-space: nowrap !important;
}
.text-pre {
  white-space: pre !important;
}
.text-pre-line {
  white-space: pre-line !important;
}
.text-pre-wrap {
  white-space: pre-wrap !important;
}
.text-break {
  overflow-wrap: break-word !important;
  word-break: break-word !important;
}
.text-high-emphasis {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity)) !important;
}
.text-medium-emphasis {
  color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity)) !important;
}
.text-disabled {
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity)) !important;
}
.text-truncate {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
.text-h1 {
  font-size: 6rem !important;
  font-weight: 300;
  line-height: 6rem;
  letter-spacing: -0.015625em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-h2 {
  font-size: 3.75rem !important;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-h3 {
  font-size: 3rem !important;
  font-weight: 400;
  line-height: 3.125rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-h4 {
  font-size: 2.125rem !important;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-h5 {
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-h6 {
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-subtitle-1 {
  font-size: 1rem !important;
  font-weight: normal;
  line-height: 1.75rem;
  letter-spacing: 0.009375em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-subtitle-2 {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-body-1 {
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.03125em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-body-2 {
  font-size: 0.875rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0178571429em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-button {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: 0.0892857143em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: uppercase !important;
}
.text-caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
.text-overline {
  font-size: 0.75rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.1666666667em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: uppercase !important;
}
.text-none {
  text-transform: none !important;
}
.text-capitalize {
  text-transform: capitalize !important;
}
.text-lowercase {
  text-transform: lowercase !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.font-weight-thin {
  font-weight: 100 !important;
}
.font-weight-light {
  font-weight: 300 !important;
}
.font-weight-regular {
  font-weight: 400 !important;
}
.font-weight-medium {
  font-weight: 500 !important;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.font-weight-black {
  font-weight: 900 !important;
}
.font-italic {
  font-style: italic !important;
}
.text-mono {
  font-family: monospace !important;
}
.position-static {
  position: static !important;
}
.position-relative {
  position: relative !important;
}
.position-fixed {
  position: fixed !important;
}
.position-absolute {
  position: absolute !important;
}
.position-sticky {
  position: sticky !important;
}
.fill-height {
  height: 100% !important;
}
.h-auto {
  height: auto !important;
}
.h-screen {
  height: 100vh !important;
}
.h-0 {
  height: 0 !important;
}
.h-25 {
  height: 25% !important;
}
.h-50 {
  height: 50% !important;
}
.h-75 {
  height: 75% !important;
}
.h-100 {
  height: 100% !important;
}
.w-auto {
  width: auto !important;
}
.w-0 {
  width: 0 !important;
}
.w-25 {
  width: 25% !important;
}
.w-33 {
  width: 33% !important;
}
.w-50 {
  width: 50% !important;
}
.w-66 {
  width: 66% !important;
}
.w-75 {
  width: 75% !important;
}
.w-100 {
  width: 100% !important;
}
@media (min-width: 600px) {
  .d-sm-none {
    display: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
  .float-sm-none {
    float: none !important;
  }
  .float-sm-left {
    float: left !important;
  }
  .float-sm-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-sm-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-sm-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-sm-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-sm-start {
    float: left !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-sm-start {
    justify-content: flex-start !important;
  }
  .justify-sm-end {
    justify-content: flex-end !important;
  }
  .justify-sm-center {
    justify-content: center !important;
  }
  .justify-sm-space-between {
    justify-content: space-between !important;
  }
  .justify-sm-space-around {
    justify-content: space-around !important;
  }
  .justify-sm-space-evenly {
    justify-content: space-evenly !important;
  }
  .align-sm-start {
    align-items: flex-start !important;
  }
  .align-sm-end {
    align-items: flex-end !important;
  }
  .align-sm-center {
    align-items: center !important;
  }
  .align-sm-baseline {
    align-items: baseline !important;
  }
  .align-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-space-between {
    align-content: space-between !important;
  }
  .align-content-sm-space-around {
    align-content: space-around !important;
  }
  .align-content-sm-space-evenly {
    align-content: space-evenly !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
  .order-sm-first {
    order: -1 !important;
  }
  .order-sm-0 {
    order: 0 !important;
  }
  .order-sm-1 {
    order: 1 !important;
  }
  .order-sm-2 {
    order: 2 !important;
  }
  .order-sm-3 {
    order: 3 !important;
  }
  .order-sm-4 {
    order: 4 !important;
  }
  .order-sm-5 {
    order: 5 !important;
  }
  .order-sm-6 {
    order: 6 !important;
  }
  .order-sm-7 {
    order: 7 !important;
  }
  .order-sm-8 {
    order: 8 !important;
  }
  .order-sm-9 {
    order: 9 !important;
  }
  .order-sm-10 {
    order: 10 !important;
  }
  .order-sm-11 {
    order: 11 !important;
  }
  .order-sm-12 {
    order: 12 !important;
  }
  .order-sm-last {
    order: 13 !important;
  }
  .ma-sm-0 {
    margin: 0px !important;
  }
  .ma-sm-1 {
    margin: 4px !important;
  }
  .ma-sm-2 {
    margin: 8px !important;
  }
  .ma-sm-3 {
    margin: 12px !important;
  }
  .ma-sm-4 {
    margin: 16px !important;
  }
  .ma-sm-5 {
    margin: 20px !important;
  }
  .ma-sm-6 {
    margin: 24px !important;
  }
  .ma-sm-7 {
    margin: 28px !important;
  }
  .ma-sm-8 {
    margin: 32px !important;
  }
  .ma-sm-9 {
    margin: 36px !important;
  }
  .ma-sm-10 {
    margin: 40px !important;
  }
  .ma-sm-11 {
    margin: 44px !important;
  }
  .ma-sm-12 {
    margin: 48px !important;
  }
  .ma-sm-13 {
    margin: 52px !important;
  }
  .ma-sm-14 {
    margin: 56px !important;
  }
  .ma-sm-15 {
    margin: 60px !important;
  }
  .ma-sm-16 {
    margin: 64px !important;
  }
  .ma-sm-auto {
    margin: auto !important;
  }
  .mx-sm-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .mx-sm-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-sm-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-sm-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
  .mx-sm-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-sm-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
  .mx-sm-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-sm-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }
  .mx-sm-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }
  .mx-sm-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }
  .mx-sm-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }
  .mx-sm-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }
  .mx-sm-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-sm-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }
  .mx-sm-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }
  .mx-sm-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
  .mx-sm-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-sm-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .my-sm-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-sm-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-sm-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .my-sm-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-sm-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .my-sm-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-sm-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }
  .my-sm-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .my-sm-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }
  .my-sm-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .my-sm-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }
  .my-sm-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-sm-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }
  .my-sm-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }
  .my-sm-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }
  .my-sm-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-sm-0 {
    margin-top: 0px !important;
  }
  .mt-sm-1 {
    margin-top: 4px !important;
  }
  .mt-sm-2 {
    margin-top: 8px !important;
  }
  .mt-sm-3 {
    margin-top: 12px !important;
  }
  .mt-sm-4 {
    margin-top: 16px !important;
  }
  .mt-sm-5 {
    margin-top: 20px !important;
  }
  .mt-sm-6 {
    margin-top: 24px !important;
  }
  .mt-sm-7 {
    margin-top: 28px !important;
  }
  .mt-sm-8 {
    margin-top: 32px !important;
  }
  .mt-sm-9 {
    margin-top: 36px !important;
  }
  .mt-sm-10 {
    margin-top: 40px !important;
  }
  .mt-sm-11 {
    margin-top: 44px !important;
  }
  .mt-sm-12 {
    margin-top: 48px !important;
  }
  .mt-sm-13 {
    margin-top: 52px !important;
  }
  .mt-sm-14 {
    margin-top: 56px !important;
  }
  .mt-sm-15 {
    margin-top: 60px !important;
  }
  .mt-sm-16 {
    margin-top: 64px !important;
  }
  .mt-sm-auto {
    margin-top: auto !important;
  }
  .mr-sm-0 {
    margin-right: 0px !important;
  }
  .mr-sm-1 {
    margin-right: 4px !important;
  }
  .mr-sm-2 {
    margin-right: 8px !important;
  }
  .mr-sm-3 {
    margin-right: 12px !important;
  }
  .mr-sm-4 {
    margin-right: 16px !important;
  }
  .mr-sm-5 {
    margin-right: 20px !important;
  }
  .mr-sm-6 {
    margin-right: 24px !important;
  }
  .mr-sm-7 {
    margin-right: 28px !important;
  }
  .mr-sm-8 {
    margin-right: 32px !important;
  }
  .mr-sm-9 {
    margin-right: 36px !important;
  }
  .mr-sm-10 {
    margin-right: 40px !important;
  }
  .mr-sm-11 {
    margin-right: 44px !important;
  }
  .mr-sm-12 {
    margin-right: 48px !important;
  }
  .mr-sm-13 {
    margin-right: 52px !important;
  }
  .mr-sm-14 {
    margin-right: 56px !important;
  }
  .mr-sm-15 {
    margin-right: 60px !important;
  }
  .mr-sm-16 {
    margin-right: 64px !important;
  }
  .mr-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-0 {
    margin-bottom: 0px !important;
  }
  .mb-sm-1 {
    margin-bottom: 4px !important;
  }
  .mb-sm-2 {
    margin-bottom: 8px !important;
  }
  .mb-sm-3 {
    margin-bottom: 12px !important;
  }
  .mb-sm-4 {
    margin-bottom: 16px !important;
  }
  .mb-sm-5 {
    margin-bottom: 20px !important;
  }
  .mb-sm-6 {
    margin-bottom: 24px !important;
  }
  .mb-sm-7 {
    margin-bottom: 28px !important;
  }
  .mb-sm-8 {
    margin-bottom: 32px !important;
  }
  .mb-sm-9 {
    margin-bottom: 36px !important;
  }
  .mb-sm-10 {
    margin-bottom: 40px !important;
  }
  .mb-sm-11 {
    margin-bottom: 44px !important;
  }
  .mb-sm-12 {
    margin-bottom: 48px !important;
  }
  .mb-sm-13 {
    margin-bottom: 52px !important;
  }
  .mb-sm-14 {
    margin-bottom: 56px !important;
  }
  .mb-sm-15 {
    margin-bottom: 60px !important;
  }
  .mb-sm-16 {
    margin-bottom: 64px !important;
  }
  .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .ml-sm-0 {
    margin-left: 0px !important;
  }
  .ml-sm-1 {
    margin-left: 4px !important;
  }
  .ml-sm-2 {
    margin-left: 8px !important;
  }
  .ml-sm-3 {
    margin-left: 12px !important;
  }
  .ml-sm-4 {
    margin-left: 16px !important;
  }
  .ml-sm-5 {
    margin-left: 20px !important;
  }
  .ml-sm-6 {
    margin-left: 24px !important;
  }
  .ml-sm-7 {
    margin-left: 28px !important;
  }
  .ml-sm-8 {
    margin-left: 32px !important;
  }
  .ml-sm-9 {
    margin-left: 36px !important;
  }
  .ml-sm-10 {
    margin-left: 40px !important;
  }
  .ml-sm-11 {
    margin-left: 44px !important;
  }
  .ml-sm-12 {
    margin-left: 48px !important;
  }
  .ml-sm-13 {
    margin-left: 52px !important;
  }
  .ml-sm-14 {
    margin-left: 56px !important;
  }
  .ml-sm-15 {
    margin-left: 60px !important;
  }
  .ml-sm-16 {
    margin-left: 64px !important;
  }
  .ml-sm-auto {
    margin-left: auto !important;
  }
  .ms-sm-0 {
    margin-inline-start: 0px !important;
  }
  .ms-sm-1 {
    margin-inline-start: 4px !important;
  }
  .ms-sm-2 {
    margin-inline-start: 8px !important;
  }
  .ms-sm-3 {
    margin-inline-start: 12px !important;
  }
  .ms-sm-4 {
    margin-inline-start: 16px !important;
  }
  .ms-sm-5 {
    margin-inline-start: 20px !important;
  }
  .ms-sm-6 {
    margin-inline-start: 24px !important;
  }
  .ms-sm-7 {
    margin-inline-start: 28px !important;
  }
  .ms-sm-8 {
    margin-inline-start: 32px !important;
  }
  .ms-sm-9 {
    margin-inline-start: 36px !important;
  }
  .ms-sm-10 {
    margin-inline-start: 40px !important;
  }
  .ms-sm-11 {
    margin-inline-start: 44px !important;
  }
  .ms-sm-12 {
    margin-inline-start: 48px !important;
  }
  .ms-sm-13 {
    margin-inline-start: 52px !important;
  }
  .ms-sm-14 {
    margin-inline-start: 56px !important;
  }
  .ms-sm-15 {
    margin-inline-start: 60px !important;
  }
  .ms-sm-16 {
    margin-inline-start: 64px !important;
  }
  .ms-sm-auto {
    margin-inline-start: auto !important;
  }
  .me-sm-0 {
    margin-inline-end: 0px !important;
  }
  .me-sm-1 {
    margin-inline-end: 4px !important;
  }
  .me-sm-2 {
    margin-inline-end: 8px !important;
  }
  .me-sm-3 {
    margin-inline-end: 12px !important;
  }
  .me-sm-4 {
    margin-inline-end: 16px !important;
  }
  .me-sm-5 {
    margin-inline-end: 20px !important;
  }
  .me-sm-6 {
    margin-inline-end: 24px !important;
  }
  .me-sm-7 {
    margin-inline-end: 28px !important;
  }
  .me-sm-8 {
    margin-inline-end: 32px !important;
  }
  .me-sm-9 {
    margin-inline-end: 36px !important;
  }
  .me-sm-10 {
    margin-inline-end: 40px !important;
  }
  .me-sm-11 {
    margin-inline-end: 44px !important;
  }
  .me-sm-12 {
    margin-inline-end: 48px !important;
  }
  .me-sm-13 {
    margin-inline-end: 52px !important;
  }
  .me-sm-14 {
    margin-inline-end: 56px !important;
  }
  .me-sm-15 {
    margin-inline-end: 60px !important;
  }
  .me-sm-16 {
    margin-inline-end: 64px !important;
  }
  .me-sm-auto {
    margin-inline-end: auto !important;
  }
  .ma-sm-n1 {
    margin: -4px !important;
  }
  .ma-sm-n2 {
    margin: -8px !important;
  }
  .ma-sm-n3 {
    margin: -12px !important;
  }
  .ma-sm-n4 {
    margin: -16px !important;
  }
  .ma-sm-n5 {
    margin: -20px !important;
  }
  .ma-sm-n6 {
    margin: -24px !important;
  }
  .ma-sm-n7 {
    margin: -28px !important;
  }
  .ma-sm-n8 {
    margin: -32px !important;
  }
  .ma-sm-n9 {
    margin: -36px !important;
  }
  .ma-sm-n10 {
    margin: -40px !important;
  }
  .ma-sm-n11 {
    margin: -44px !important;
  }
  .ma-sm-n12 {
    margin: -48px !important;
  }
  .ma-sm-n13 {
    margin: -52px !important;
  }
  .ma-sm-n14 {
    margin: -56px !important;
  }
  .ma-sm-n15 {
    margin: -60px !important;
  }
  .ma-sm-n16 {
    margin: -64px !important;
  }
  .mx-sm-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }
  .mx-sm-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }
  .mx-sm-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }
  .mx-sm-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }
  .mx-sm-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }
  .mx-sm-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }
  .mx-sm-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }
  .mx-sm-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }
  .mx-sm-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }
  .mx-sm-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }
  .mx-sm-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }
  .mx-sm-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }
  .mx-sm-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }
  .mx-sm-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }
  .mx-sm-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }
  .mx-sm-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }
  .my-sm-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }
  .my-sm-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }
  .my-sm-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }
  .my-sm-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }
  .my-sm-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }
  .my-sm-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }
  .my-sm-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }
  .my-sm-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }
  .my-sm-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }
  .my-sm-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }
  .my-sm-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }
  .my-sm-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }
  .my-sm-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }
  .my-sm-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }
  .my-sm-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }
  .my-sm-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }
  .mt-sm-n1 {
    margin-top: -4px !important;
  }
  .mt-sm-n2 {
    margin-top: -8px !important;
  }
  .mt-sm-n3 {
    margin-top: -12px !important;
  }
  .mt-sm-n4 {
    margin-top: -16px !important;
  }
  .mt-sm-n5 {
    margin-top: -20px !important;
  }
  .mt-sm-n6 {
    margin-top: -24px !important;
  }
  .mt-sm-n7 {
    margin-top: -28px !important;
  }
  .mt-sm-n8 {
    margin-top: -32px !important;
  }
  .mt-sm-n9 {
    margin-top: -36px !important;
  }
  .mt-sm-n10 {
    margin-top: -40px !important;
  }
  .mt-sm-n11 {
    margin-top: -44px !important;
  }
  .mt-sm-n12 {
    margin-top: -48px !important;
  }
  .mt-sm-n13 {
    margin-top: -52px !important;
  }
  .mt-sm-n14 {
    margin-top: -56px !important;
  }
  .mt-sm-n15 {
    margin-top: -60px !important;
  }
  .mt-sm-n16 {
    margin-top: -64px !important;
  }
  .mr-sm-n1 {
    margin-right: -4px !important;
  }
  .mr-sm-n2 {
    margin-right: -8px !important;
  }
  .mr-sm-n3 {
    margin-right: -12px !important;
  }
  .mr-sm-n4 {
    margin-right: -16px !important;
  }
  .mr-sm-n5 {
    margin-right: -20px !important;
  }
  .mr-sm-n6 {
    margin-right: -24px !important;
  }
  .mr-sm-n7 {
    margin-right: -28px !important;
  }
  .mr-sm-n8 {
    margin-right: -32px !important;
  }
  .mr-sm-n9 {
    margin-right: -36px !important;
  }
  .mr-sm-n10 {
    margin-right: -40px !important;
  }
  .mr-sm-n11 {
    margin-right: -44px !important;
  }
  .mr-sm-n12 {
    margin-right: -48px !important;
  }
  .mr-sm-n13 {
    margin-right: -52px !important;
  }
  .mr-sm-n14 {
    margin-right: -56px !important;
  }
  .mr-sm-n15 {
    margin-right: -60px !important;
  }
  .mr-sm-n16 {
    margin-right: -64px !important;
  }
  .mb-sm-n1 {
    margin-bottom: -4px !important;
  }
  .mb-sm-n2 {
    margin-bottom: -8px !important;
  }
  .mb-sm-n3 {
    margin-bottom: -12px !important;
  }
  .mb-sm-n4 {
    margin-bottom: -16px !important;
  }
  .mb-sm-n5 {
    margin-bottom: -20px !important;
  }
  .mb-sm-n6 {
    margin-bottom: -24px !important;
  }
  .mb-sm-n7 {
    margin-bottom: -28px !important;
  }
  .mb-sm-n8 {
    margin-bottom: -32px !important;
  }
  .mb-sm-n9 {
    margin-bottom: -36px !important;
  }
  .mb-sm-n10 {
    margin-bottom: -40px !important;
  }
  .mb-sm-n11 {
    margin-bottom: -44px !important;
  }
  .mb-sm-n12 {
    margin-bottom: -48px !important;
  }
  .mb-sm-n13 {
    margin-bottom: -52px !important;
  }
  .mb-sm-n14 {
    margin-bottom: -56px !important;
  }
  .mb-sm-n15 {
    margin-bottom: -60px !important;
  }
  .mb-sm-n16 {
    margin-bottom: -64px !important;
  }
  .ml-sm-n1 {
    margin-left: -4px !important;
  }
  .ml-sm-n2 {
    margin-left: -8px !important;
  }
  .ml-sm-n3 {
    margin-left: -12px !important;
  }
  .ml-sm-n4 {
    margin-left: -16px !important;
  }
  .ml-sm-n5 {
    margin-left: -20px !important;
  }
  .ml-sm-n6 {
    margin-left: -24px !important;
  }
  .ml-sm-n7 {
    margin-left: -28px !important;
  }
  .ml-sm-n8 {
    margin-left: -32px !important;
  }
  .ml-sm-n9 {
    margin-left: -36px !important;
  }
  .ml-sm-n10 {
    margin-left: -40px !important;
  }
  .ml-sm-n11 {
    margin-left: -44px !important;
  }
  .ml-sm-n12 {
    margin-left: -48px !important;
  }
  .ml-sm-n13 {
    margin-left: -52px !important;
  }
  .ml-sm-n14 {
    margin-left: -56px !important;
  }
  .ml-sm-n15 {
    margin-left: -60px !important;
  }
  .ml-sm-n16 {
    margin-left: -64px !important;
  }
  .ms-sm-n1 {
    margin-inline-start: -4px !important;
  }
  .ms-sm-n2 {
    margin-inline-start: -8px !important;
  }
  .ms-sm-n3 {
    margin-inline-start: -12px !important;
  }
  .ms-sm-n4 {
    margin-inline-start: -16px !important;
  }
  .ms-sm-n5 {
    margin-inline-start: -20px !important;
  }
  .ms-sm-n6 {
    margin-inline-start: -24px !important;
  }
  .ms-sm-n7 {
    margin-inline-start: -28px !important;
  }
  .ms-sm-n8 {
    margin-inline-start: -32px !important;
  }
  .ms-sm-n9 {
    margin-inline-start: -36px !important;
  }
  .ms-sm-n10 {
    margin-inline-start: -40px !important;
  }
  .ms-sm-n11 {
    margin-inline-start: -44px !important;
  }
  .ms-sm-n12 {
    margin-inline-start: -48px !important;
  }
  .ms-sm-n13 {
    margin-inline-start: -52px !important;
  }
  .ms-sm-n14 {
    margin-inline-start: -56px !important;
  }
  .ms-sm-n15 {
    margin-inline-start: -60px !important;
  }
  .ms-sm-n16 {
    margin-inline-start: -64px !important;
  }
  .me-sm-n1 {
    margin-inline-end: -4px !important;
  }
  .me-sm-n2 {
    margin-inline-end: -8px !important;
  }
  .me-sm-n3 {
    margin-inline-end: -12px !important;
  }
  .me-sm-n4 {
    margin-inline-end: -16px !important;
  }
  .me-sm-n5 {
    margin-inline-end: -20px !important;
  }
  .me-sm-n6 {
    margin-inline-end: -24px !important;
  }
  .me-sm-n7 {
    margin-inline-end: -28px !important;
  }
  .me-sm-n8 {
    margin-inline-end: -32px !important;
  }
  .me-sm-n9 {
    margin-inline-end: -36px !important;
  }
  .me-sm-n10 {
    margin-inline-end: -40px !important;
  }
  .me-sm-n11 {
    margin-inline-end: -44px !important;
  }
  .me-sm-n12 {
    margin-inline-end: -48px !important;
  }
  .me-sm-n13 {
    margin-inline-end: -52px !important;
  }
  .me-sm-n14 {
    margin-inline-end: -56px !important;
  }
  .me-sm-n15 {
    margin-inline-end: -60px !important;
  }
  .me-sm-n16 {
    margin-inline-end: -64px !important;
  }
  .pa-sm-0 {
    padding: 0px !important;
  }
  .pa-sm-1 {
    padding: 4px !important;
  }
  .pa-sm-2 {
    padding: 8px !important;
  }
  .pa-sm-3 {
    padding: 12px !important;
  }
  .pa-sm-4 {
    padding: 16px !important;
  }
  .pa-sm-5 {
    padding: 20px !important;
  }
  .pa-sm-6 {
    padding: 24px !important;
  }
  .pa-sm-7 {
    padding: 28px !important;
  }
  .pa-sm-8 {
    padding: 32px !important;
  }
  .pa-sm-9 {
    padding: 36px !important;
  }
  .pa-sm-10 {
    padding: 40px !important;
  }
  .pa-sm-11 {
    padding: 44px !important;
  }
  .pa-sm-12 {
    padding: 48px !important;
  }
  .pa-sm-13 {
    padding: 52px !important;
  }
  .pa-sm-14 {
    padding: 56px !important;
  }
  .pa-sm-15 {
    padding: 60px !important;
  }
  .pa-sm-16 {
    padding: 64px !important;
  }
  .px-sm-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .px-sm-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-sm-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-sm-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
  .px-sm-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-sm-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .px-sm-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-sm-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }
  .px-sm-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
  .px-sm-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }
  .px-sm-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .px-sm-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }
  .px-sm-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .px-sm-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }
  .px-sm-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }
  .px-sm-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  .px-sm-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  .py-sm-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .py-sm-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-sm-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-sm-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }
  .py-sm-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-sm-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
  .py-sm-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-sm-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }
  .py-sm-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .py-sm-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }
  .py-sm-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .py-sm-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }
  .py-sm-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .py-sm-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }
  .py-sm-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }
  .py-sm-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .py-sm-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pt-sm-0 {
    padding-top: 0px !important;
  }
  .pt-sm-1 {
    padding-top: 4px !important;
  }
  .pt-sm-2 {
    padding-top: 8px !important;
  }
  .pt-sm-3 {
    padding-top: 12px !important;
  }
  .pt-sm-4 {
    padding-top: 16px !important;
  }
  .pt-sm-5 {
    padding-top: 20px !important;
  }
  .pt-sm-6 {
    padding-top: 24px !important;
  }
  .pt-sm-7 {
    padding-top: 28px !important;
  }
  .pt-sm-8 {
    padding-top: 32px !important;
  }
  .pt-sm-9 {
    padding-top: 36px !important;
  }
  .pt-sm-10 {
    padding-top: 40px !important;
  }
  .pt-sm-11 {
    padding-top: 44px !important;
  }
  .pt-sm-12 {
    padding-top: 48px !important;
  }
  .pt-sm-13 {
    padding-top: 52px !important;
  }
  .pt-sm-14 {
    padding-top: 56px !important;
  }
  .pt-sm-15 {
    padding-top: 60px !important;
  }
  .pt-sm-16 {
    padding-top: 64px !important;
  }
  .pr-sm-0 {
    padding-right: 0px !important;
  }
  .pr-sm-1 {
    padding-right: 4px !important;
  }
  .pr-sm-2 {
    padding-right: 8px !important;
  }
  .pr-sm-3 {
    padding-right: 12px !important;
  }
  .pr-sm-4 {
    padding-right: 16px !important;
  }
  .pr-sm-5 {
    padding-right: 20px !important;
  }
  .pr-sm-6 {
    padding-right: 24px !important;
  }
  .pr-sm-7 {
    padding-right: 28px !important;
  }
  .pr-sm-8 {
    padding-right: 32px !important;
  }
  .pr-sm-9 {
    padding-right: 36px !important;
  }
  .pr-sm-10 {
    padding-right: 40px !important;
  }
  .pr-sm-11 {
    padding-right: 44px !important;
  }
  .pr-sm-12 {
    padding-right: 48px !important;
  }
  .pr-sm-13 {
    padding-right: 52px !important;
  }
  .pr-sm-14 {
    padding-right: 56px !important;
  }
  .pr-sm-15 {
    padding-right: 60px !important;
  }
  .pr-sm-16 {
    padding-right: 64px !important;
  }
  .pb-sm-0 {
    padding-bottom: 0px !important;
  }
  .pb-sm-1 {
    padding-bottom: 4px !important;
  }
  .pb-sm-2 {
    padding-bottom: 8px !important;
  }
  .pb-sm-3 {
    padding-bottom: 12px !important;
  }
  .pb-sm-4 {
    padding-bottom: 16px !important;
  }
  .pb-sm-5 {
    padding-bottom: 20px !important;
  }
  .pb-sm-6 {
    padding-bottom: 24px !important;
  }
  .pb-sm-7 {
    padding-bottom: 28px !important;
  }
  .pb-sm-8 {
    padding-bottom: 32px !important;
  }
  .pb-sm-9 {
    padding-bottom: 36px !important;
  }
  .pb-sm-10 {
    padding-bottom: 40px !important;
  }
  .pb-sm-11 {
    padding-bottom: 44px !important;
  }
  .pb-sm-12 {
    padding-bottom: 48px !important;
  }
  .pb-sm-13 {
    padding-bottom: 52px !important;
  }
  .pb-sm-14 {
    padding-bottom: 56px !important;
  }
  .pb-sm-15 {
    padding-bottom: 60px !important;
  }
  .pb-sm-16 {
    padding-bottom: 64px !important;
  }
  .pl-sm-0 {
    padding-left: 0px !important;
  }
  .pl-sm-1 {
    padding-left: 4px !important;
  }
  .pl-sm-2 {
    padding-left: 8px !important;
  }
  .pl-sm-3 {
    padding-left: 12px !important;
  }
  .pl-sm-4 {
    padding-left: 16px !important;
  }
  .pl-sm-5 {
    padding-left: 20px !important;
  }
  .pl-sm-6 {
    padding-left: 24px !important;
  }
  .pl-sm-7 {
    padding-left: 28px !important;
  }
  .pl-sm-8 {
    padding-left: 32px !important;
  }
  .pl-sm-9 {
    padding-left: 36px !important;
  }
  .pl-sm-10 {
    padding-left: 40px !important;
  }
  .pl-sm-11 {
    padding-left: 44px !important;
  }
  .pl-sm-12 {
    padding-left: 48px !important;
  }
  .pl-sm-13 {
    padding-left: 52px !important;
  }
  .pl-sm-14 {
    padding-left: 56px !important;
  }
  .pl-sm-15 {
    padding-left: 60px !important;
  }
  .pl-sm-16 {
    padding-left: 64px !important;
  }
  .ps-sm-0 {
    padding-inline-start: 0px !important;
  }
  .ps-sm-1 {
    padding-inline-start: 4px !important;
  }
  .ps-sm-2 {
    padding-inline-start: 8px !important;
  }
  .ps-sm-3 {
    padding-inline-start: 12px !important;
  }
  .ps-sm-4 {
    padding-inline-start: 16px !important;
  }
  .ps-sm-5 {
    padding-inline-start: 20px !important;
  }
  .ps-sm-6 {
    padding-inline-start: 24px !important;
  }
  .ps-sm-7 {
    padding-inline-start: 28px !important;
  }
  .ps-sm-8 {
    padding-inline-start: 32px !important;
  }
  .ps-sm-9 {
    padding-inline-start: 36px !important;
  }
  .ps-sm-10 {
    padding-inline-start: 40px !important;
  }
  .ps-sm-11 {
    padding-inline-start: 44px !important;
  }
  .ps-sm-12 {
    padding-inline-start: 48px !important;
  }
  .ps-sm-13 {
    padding-inline-start: 52px !important;
  }
  .ps-sm-14 {
    padding-inline-start: 56px !important;
  }
  .ps-sm-15 {
    padding-inline-start: 60px !important;
  }
  .ps-sm-16 {
    padding-inline-start: 64px !important;
  }
  .pe-sm-0 {
    padding-inline-end: 0px !important;
  }
  .pe-sm-1 {
    padding-inline-end: 4px !important;
  }
  .pe-sm-2 {
    padding-inline-end: 8px !important;
  }
  .pe-sm-3 {
    padding-inline-end: 12px !important;
  }
  .pe-sm-4 {
    padding-inline-end: 16px !important;
  }
  .pe-sm-5 {
    padding-inline-end: 20px !important;
  }
  .pe-sm-6 {
    padding-inline-end: 24px !important;
  }
  .pe-sm-7 {
    padding-inline-end: 28px !important;
  }
  .pe-sm-8 {
    padding-inline-end: 32px !important;
  }
  .pe-sm-9 {
    padding-inline-end: 36px !important;
  }
  .pe-sm-10 {
    padding-inline-end: 40px !important;
  }
  .pe-sm-11 {
    padding-inline-end: 44px !important;
  }
  .pe-sm-12 {
    padding-inline-end: 48px !important;
  }
  .pe-sm-13 {
    padding-inline-end: 52px !important;
  }
  .pe-sm-14 {
    padding-inline-end: 56px !important;
  }
  .pe-sm-15 {
    padding-inline-end: 60px !important;
  }
  .pe-sm-16 {
    padding-inline-end: 64px !important;
  }
  .text-sm-left {
    text-align: left !important;
  }
  .text-sm-right {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
  .text-sm-justify {
    text-align: justify !important;
  }
  .text-sm-start {
    text-align: start !important;
  }
  .text-sm-end {
    text-align: end !important;
  }
  .text-sm-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
  .text-sm-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-sm-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
}
@media (min-width: 960px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
  .float-md-none {
    float: none !important;
  }
  .float-md-left {
    float: left !important;
  }
  .float-md-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-md-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-md-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-md-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-md-start {
    float: left !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-md-start {
    justify-content: flex-start !important;
  }
  .justify-md-end {
    justify-content: flex-end !important;
  }
  .justify-md-center {
    justify-content: center !important;
  }
  .justify-md-space-between {
    justify-content: space-between !important;
  }
  .justify-md-space-around {
    justify-content: space-around !important;
  }
  .justify-md-space-evenly {
    justify-content: space-evenly !important;
  }
  .align-md-start {
    align-items: flex-start !important;
  }
  .align-md-end {
    align-items: flex-end !important;
  }
  .align-md-center {
    align-items: center !important;
  }
  .align-md-baseline {
    align-items: baseline !important;
  }
  .align-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-space-between {
    align-content: space-between !important;
  }
  .align-content-md-space-around {
    align-content: space-around !important;
  }
  .align-content-md-space-evenly {
    align-content: space-evenly !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
  .order-md-first {
    order: -1 !important;
  }
  .order-md-0 {
    order: 0 !important;
  }
  .order-md-1 {
    order: 1 !important;
  }
  .order-md-2 {
    order: 2 !important;
  }
  .order-md-3 {
    order: 3 !important;
  }
  .order-md-4 {
    order: 4 !important;
  }
  .order-md-5 {
    order: 5 !important;
  }
  .order-md-6 {
    order: 6 !important;
  }
  .order-md-7 {
    order: 7 !important;
  }
  .order-md-8 {
    order: 8 !important;
  }
  .order-md-9 {
    order: 9 !important;
  }
  .order-md-10 {
    order: 10 !important;
  }
  .order-md-11 {
    order: 11 !important;
  }
  .order-md-12 {
    order: 12 !important;
  }
  .order-md-last {
    order: 13 !important;
  }
  .ma-md-0 {
    margin: 0px !important;
  }
  .ma-md-1 {
    margin: 4px !important;
  }
  .ma-md-2 {
    margin: 8px !important;
  }
  .ma-md-3 {
    margin: 12px !important;
  }
  .ma-md-4 {
    margin: 16px !important;
  }
  .ma-md-5 {
    margin: 20px !important;
  }
  .ma-md-6 {
    margin: 24px !important;
  }
  .ma-md-7 {
    margin: 28px !important;
  }
  .ma-md-8 {
    margin: 32px !important;
  }
  .ma-md-9 {
    margin: 36px !important;
  }
  .ma-md-10 {
    margin: 40px !important;
  }
  .ma-md-11 {
    margin: 44px !important;
  }
  .ma-md-12 {
    margin: 48px !important;
  }
  .ma-md-13 {
    margin: 52px !important;
  }
  .ma-md-14 {
    margin: 56px !important;
  }
  .ma-md-15 {
    margin: 60px !important;
  }
  .ma-md-16 {
    margin: 64px !important;
  }
  .ma-md-auto {
    margin: auto !important;
  }
  .mx-md-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .mx-md-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-md-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-md-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
  .mx-md-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-md-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
  .mx-md-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-md-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }
  .mx-md-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }
  .mx-md-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }
  .mx-md-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }
  .mx-md-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }
  .mx-md-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-md-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }
  .mx-md-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }
  .mx-md-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
  .mx-md-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-md-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .my-md-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-md-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-md-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .my-md-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-md-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .my-md-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-md-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }
  .my-md-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .my-md-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }
  .my-md-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .my-md-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }
  .my-md-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-md-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }
  .my-md-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }
  .my-md-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }
  .my-md-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-md-0 {
    margin-top: 0px !important;
  }
  .mt-md-1 {
    margin-top: 4px !important;
  }
  .mt-md-2 {
    margin-top: 8px !important;
  }
  .mt-md-3 {
    margin-top: 12px !important;
  }
  .mt-md-4 {
    margin-top: 16px !important;
  }
  .mt-md-5 {
    margin-top: 20px !important;
  }
  .mt-md-6 {
    margin-top: 24px !important;
  }
  .mt-md-7 {
    margin-top: 28px !important;
  }
  .mt-md-8 {
    margin-top: 32px !important;
  }
  .mt-md-9 {
    margin-top: 36px !important;
  }
  .mt-md-10 {
    margin-top: 40px !important;
  }
  .mt-md-11 {
    margin-top: 44px !important;
  }
  .mt-md-12 {
    margin-top: 48px !important;
  }
  .mt-md-13 {
    margin-top: 52px !important;
  }
  .mt-md-14 {
    margin-top: 56px !important;
  }
  .mt-md-15 {
    margin-top: 60px !important;
  }
  .mt-md-16 {
    margin-top: 64px !important;
  }
  .mt-md-auto {
    margin-top: auto !important;
  }
  .mr-md-0 {
    margin-right: 0px !important;
  }
  .mr-md-1 {
    margin-right: 4px !important;
  }
  .mr-md-2 {
    margin-right: 8px !important;
  }
  .mr-md-3 {
    margin-right: 12px !important;
  }
  .mr-md-4 {
    margin-right: 16px !important;
  }
  .mr-md-5 {
    margin-right: 20px !important;
  }
  .mr-md-6 {
    margin-right: 24px !important;
  }
  .mr-md-7 {
    margin-right: 28px !important;
  }
  .mr-md-8 {
    margin-right: 32px !important;
  }
  .mr-md-9 {
    margin-right: 36px !important;
  }
  .mr-md-10 {
    margin-right: 40px !important;
  }
  .mr-md-11 {
    margin-right: 44px !important;
  }
  .mr-md-12 {
    margin-right: 48px !important;
  }
  .mr-md-13 {
    margin-right: 52px !important;
  }
  .mr-md-14 {
    margin-right: 56px !important;
  }
  .mr-md-15 {
    margin-right: 60px !important;
  }
  .mr-md-16 {
    margin-right: 64px !important;
  }
  .mr-md-auto {
    margin-right: auto !important;
  }
  .mb-md-0 {
    margin-bottom: 0px !important;
  }
  .mb-md-1 {
    margin-bottom: 4px !important;
  }
  .mb-md-2 {
    margin-bottom: 8px !important;
  }
  .mb-md-3 {
    margin-bottom: 12px !important;
  }
  .mb-md-4 {
    margin-bottom: 16px !important;
  }
  .mb-md-5 {
    margin-bottom: 20px !important;
  }
  .mb-md-6 {
    margin-bottom: 24px !important;
  }
  .mb-md-7 {
    margin-bottom: 28px !important;
  }
  .mb-md-8 {
    margin-bottom: 32px !important;
  }
  .mb-md-9 {
    margin-bottom: 36px !important;
  }
  .mb-md-10 {
    margin-bottom: 40px !important;
  }
  .mb-md-11 {
    margin-bottom: 44px !important;
  }
  .mb-md-12 {
    margin-bottom: 48px !important;
  }
  .mb-md-13 {
    margin-bottom: 52px !important;
  }
  .mb-md-14 {
    margin-bottom: 56px !important;
  }
  .mb-md-15 {
    margin-bottom: 60px !important;
  }
  .mb-md-16 {
    margin-bottom: 64px !important;
  }
  .mb-md-auto {
    margin-bottom: auto !important;
  }
  .ml-md-0 {
    margin-left: 0px !important;
  }
  .ml-md-1 {
    margin-left: 4px !important;
  }
  .ml-md-2 {
    margin-left: 8px !important;
  }
  .ml-md-3 {
    margin-left: 12px !important;
  }
  .ml-md-4 {
    margin-left: 16px !important;
  }
  .ml-md-5 {
    margin-left: 20px !important;
  }
  .ml-md-6 {
    margin-left: 24px !important;
  }
  .ml-md-7 {
    margin-left: 28px !important;
  }
  .ml-md-8 {
    margin-left: 32px !important;
  }
  .ml-md-9 {
    margin-left: 36px !important;
  }
  .ml-md-10 {
    margin-left: 40px !important;
  }
  .ml-md-11 {
    margin-left: 44px !important;
  }
  .ml-md-12 {
    margin-left: 48px !important;
  }
  .ml-md-13 {
    margin-left: 52px !important;
  }
  .ml-md-14 {
    margin-left: 56px !important;
  }
  .ml-md-15 {
    margin-left: 60px !important;
  }
  .ml-md-16 {
    margin-left: 64px !important;
  }
  .ml-md-auto {
    margin-left: auto !important;
  }
  .ms-md-0 {
    margin-inline-start: 0px !important;
  }
  .ms-md-1 {
    margin-inline-start: 4px !important;
  }
  .ms-md-2 {
    margin-inline-start: 8px !important;
  }
  .ms-md-3 {
    margin-inline-start: 12px !important;
  }
  .ms-md-4 {
    margin-inline-start: 16px !important;
  }
  .ms-md-5 {
    margin-inline-start: 20px !important;
  }
  .ms-md-6 {
    margin-inline-start: 24px !important;
  }
  .ms-md-7 {
    margin-inline-start: 28px !important;
  }
  .ms-md-8 {
    margin-inline-start: 32px !important;
  }
  .ms-md-9 {
    margin-inline-start: 36px !important;
  }
  .ms-md-10 {
    margin-inline-start: 40px !important;
  }
  .ms-md-11 {
    margin-inline-start: 44px !important;
  }
  .ms-md-12 {
    margin-inline-start: 48px !important;
  }
  .ms-md-13 {
    margin-inline-start: 52px !important;
  }
  .ms-md-14 {
    margin-inline-start: 56px !important;
  }
  .ms-md-15 {
    margin-inline-start: 60px !important;
  }
  .ms-md-16 {
    margin-inline-start: 64px !important;
  }
  .ms-md-auto {
    margin-inline-start: auto !important;
  }
  .me-md-0 {
    margin-inline-end: 0px !important;
  }
  .me-md-1 {
    margin-inline-end: 4px !important;
  }
  .me-md-2 {
    margin-inline-end: 8px !important;
  }
  .me-md-3 {
    margin-inline-end: 12px !important;
  }
  .me-md-4 {
    margin-inline-end: 16px !important;
  }
  .me-md-5 {
    margin-inline-end: 20px !important;
  }
  .me-md-6 {
    margin-inline-end: 24px !important;
  }
  .me-md-7 {
    margin-inline-end: 28px !important;
  }
  .me-md-8 {
    margin-inline-end: 32px !important;
  }
  .me-md-9 {
    margin-inline-end: 36px !important;
  }
  .me-md-10 {
    margin-inline-end: 40px !important;
  }
  .me-md-11 {
    margin-inline-end: 44px !important;
  }
  .me-md-12 {
    margin-inline-end: 48px !important;
  }
  .me-md-13 {
    margin-inline-end: 52px !important;
  }
  .me-md-14 {
    margin-inline-end: 56px !important;
  }
  .me-md-15 {
    margin-inline-end: 60px !important;
  }
  .me-md-16 {
    margin-inline-end: 64px !important;
  }
  .me-md-auto {
    margin-inline-end: auto !important;
  }
  .ma-md-n1 {
    margin: -4px !important;
  }
  .ma-md-n2 {
    margin: -8px !important;
  }
  .ma-md-n3 {
    margin: -12px !important;
  }
  .ma-md-n4 {
    margin: -16px !important;
  }
  .ma-md-n5 {
    margin: -20px !important;
  }
  .ma-md-n6 {
    margin: -24px !important;
  }
  .ma-md-n7 {
    margin: -28px !important;
  }
  .ma-md-n8 {
    margin: -32px !important;
  }
  .ma-md-n9 {
    margin: -36px !important;
  }
  .ma-md-n10 {
    margin: -40px !important;
  }
  .ma-md-n11 {
    margin: -44px !important;
  }
  .ma-md-n12 {
    margin: -48px !important;
  }
  .ma-md-n13 {
    margin: -52px !important;
  }
  .ma-md-n14 {
    margin: -56px !important;
  }
  .ma-md-n15 {
    margin: -60px !important;
  }
  .ma-md-n16 {
    margin: -64px !important;
  }
  .mx-md-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }
  .mx-md-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }
  .mx-md-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }
  .mx-md-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }
  .mx-md-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }
  .mx-md-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }
  .mx-md-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }
  .mx-md-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }
  .mx-md-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }
  .mx-md-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }
  .mx-md-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }
  .mx-md-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }
  .mx-md-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }
  .mx-md-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }
  .mx-md-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }
  .mx-md-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }
  .my-md-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }
  .my-md-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }
  .my-md-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }
  .my-md-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }
  .my-md-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }
  .my-md-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }
  .my-md-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }
  .my-md-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }
  .my-md-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }
  .my-md-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }
  .my-md-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }
  .my-md-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }
  .my-md-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }
  .my-md-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }
  .my-md-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }
  .my-md-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }
  .mt-md-n1 {
    margin-top: -4px !important;
  }
  .mt-md-n2 {
    margin-top: -8px !important;
  }
  .mt-md-n3 {
    margin-top: -12px !important;
  }
  .mt-md-n4 {
    margin-top: -16px !important;
  }
  .mt-md-n5 {
    margin-top: -20px !important;
  }
  .mt-md-n6 {
    margin-top: -24px !important;
  }
  .mt-md-n7 {
    margin-top: -28px !important;
  }
  .mt-md-n8 {
    margin-top: -32px !important;
  }
  .mt-md-n9 {
    margin-top: -36px !important;
  }
  .mt-md-n10 {
    margin-top: -40px !important;
  }
  .mt-md-n11 {
    margin-top: -44px !important;
  }
  .mt-md-n12 {
    margin-top: -48px !important;
  }
  .mt-md-n13 {
    margin-top: -52px !important;
  }
  .mt-md-n14 {
    margin-top: -56px !important;
  }
  .mt-md-n15 {
    margin-top: -60px !important;
  }
  .mt-md-n16 {
    margin-top: -64px !important;
  }
  .mr-md-n1 {
    margin-right: -4px !important;
  }
  .mr-md-n2 {
    margin-right: -8px !important;
  }
  .mr-md-n3 {
    margin-right: -12px !important;
  }
  .mr-md-n4 {
    margin-right: -16px !important;
  }
  .mr-md-n5 {
    margin-right: -20px !important;
  }
  .mr-md-n6 {
    margin-right: -24px !important;
  }
  .mr-md-n7 {
    margin-right: -28px !important;
  }
  .mr-md-n8 {
    margin-right: -32px !important;
  }
  .mr-md-n9 {
    margin-right: -36px !important;
  }
  .mr-md-n10 {
    margin-right: -40px !important;
  }
  .mr-md-n11 {
    margin-right: -44px !important;
  }
  .mr-md-n12 {
    margin-right: -48px !important;
  }
  .mr-md-n13 {
    margin-right: -52px !important;
  }
  .mr-md-n14 {
    margin-right: -56px !important;
  }
  .mr-md-n15 {
    margin-right: -60px !important;
  }
  .mr-md-n16 {
    margin-right: -64px !important;
  }
  .mb-md-n1 {
    margin-bottom: -4px !important;
  }
  .mb-md-n2 {
    margin-bottom: -8px !important;
  }
  .mb-md-n3 {
    margin-bottom: -12px !important;
  }
  .mb-md-n4 {
    margin-bottom: -16px !important;
  }
  .mb-md-n5 {
    margin-bottom: -20px !important;
  }
  .mb-md-n6 {
    margin-bottom: -24px !important;
  }
  .mb-md-n7 {
    margin-bottom: -28px !important;
  }
  .mb-md-n8 {
    margin-bottom: -32px !important;
  }
  .mb-md-n9 {
    margin-bottom: -36px !important;
  }
  .mb-md-n10 {
    margin-bottom: -40px !important;
  }
  .mb-md-n11 {
    margin-bottom: -44px !important;
  }
  .mb-md-n12 {
    margin-bottom: -48px !important;
  }
  .mb-md-n13 {
    margin-bottom: -52px !important;
  }
  .mb-md-n14 {
    margin-bottom: -56px !important;
  }
  .mb-md-n15 {
    margin-bottom: -60px !important;
  }
  .mb-md-n16 {
    margin-bottom: -64px !important;
  }
  .ml-md-n1 {
    margin-left: -4px !important;
  }
  .ml-md-n2 {
    margin-left: -8px !important;
  }
  .ml-md-n3 {
    margin-left: -12px !important;
  }
  .ml-md-n4 {
    margin-left: -16px !important;
  }
  .ml-md-n5 {
    margin-left: -20px !important;
  }
  .ml-md-n6 {
    margin-left: -24px !important;
  }
  .ml-md-n7 {
    margin-left: -28px !important;
  }
  .ml-md-n8 {
    margin-left: -32px !important;
  }
  .ml-md-n9 {
    margin-left: -36px !important;
  }
  .ml-md-n10 {
    margin-left: -40px !important;
  }
  .ml-md-n11 {
    margin-left: -44px !important;
  }
  .ml-md-n12 {
    margin-left: -48px !important;
  }
  .ml-md-n13 {
    margin-left: -52px !important;
  }
  .ml-md-n14 {
    margin-left: -56px !important;
  }
  .ml-md-n15 {
    margin-left: -60px !important;
  }
  .ml-md-n16 {
    margin-left: -64px !important;
  }
  .ms-md-n1 {
    margin-inline-start: -4px !important;
  }
  .ms-md-n2 {
    margin-inline-start: -8px !important;
  }
  .ms-md-n3 {
    margin-inline-start: -12px !important;
  }
  .ms-md-n4 {
    margin-inline-start: -16px !important;
  }
  .ms-md-n5 {
    margin-inline-start: -20px !important;
  }
  .ms-md-n6 {
    margin-inline-start: -24px !important;
  }
  .ms-md-n7 {
    margin-inline-start: -28px !important;
  }
  .ms-md-n8 {
    margin-inline-start: -32px !important;
  }
  .ms-md-n9 {
    margin-inline-start: -36px !important;
  }
  .ms-md-n10 {
    margin-inline-start: -40px !important;
  }
  .ms-md-n11 {
    margin-inline-start: -44px !important;
  }
  .ms-md-n12 {
    margin-inline-start: -48px !important;
  }
  .ms-md-n13 {
    margin-inline-start: -52px !important;
  }
  .ms-md-n14 {
    margin-inline-start: -56px !important;
  }
  .ms-md-n15 {
    margin-inline-start: -60px !important;
  }
  .ms-md-n16 {
    margin-inline-start: -64px !important;
  }
  .me-md-n1 {
    margin-inline-end: -4px !important;
  }
  .me-md-n2 {
    margin-inline-end: -8px !important;
  }
  .me-md-n3 {
    margin-inline-end: -12px !important;
  }
  .me-md-n4 {
    margin-inline-end: -16px !important;
  }
  .me-md-n5 {
    margin-inline-end: -20px !important;
  }
  .me-md-n6 {
    margin-inline-end: -24px !important;
  }
  .me-md-n7 {
    margin-inline-end: -28px !important;
  }
  .me-md-n8 {
    margin-inline-end: -32px !important;
  }
  .me-md-n9 {
    margin-inline-end: -36px !important;
  }
  .me-md-n10 {
    margin-inline-end: -40px !important;
  }
  .me-md-n11 {
    margin-inline-end: -44px !important;
  }
  .me-md-n12 {
    margin-inline-end: -48px !important;
  }
  .me-md-n13 {
    margin-inline-end: -52px !important;
  }
  .me-md-n14 {
    margin-inline-end: -56px !important;
  }
  .me-md-n15 {
    margin-inline-end: -60px !important;
  }
  .me-md-n16 {
    margin-inline-end: -64px !important;
  }
  .pa-md-0 {
    padding: 0px !important;
  }
  .pa-md-1 {
    padding: 4px !important;
  }
  .pa-md-2 {
    padding: 8px !important;
  }
  .pa-md-3 {
    padding: 12px !important;
  }
  .pa-md-4 {
    padding: 16px !important;
  }
  .pa-md-5 {
    padding: 20px !important;
  }
  .pa-md-6 {
    padding: 24px !important;
  }
  .pa-md-7 {
    padding: 28px !important;
  }
  .pa-md-8 {
    padding: 32px !important;
  }
  .pa-md-9 {
    padding: 36px !important;
  }
  .pa-md-10 {
    padding: 40px !important;
  }
  .pa-md-11 {
    padding: 44px !important;
  }
  .pa-md-12 {
    padding: 48px !important;
  }
  .pa-md-13 {
    padding: 52px !important;
  }
  .pa-md-14 {
    padding: 56px !important;
  }
  .pa-md-15 {
    padding: 60px !important;
  }
  .pa-md-16 {
    padding: 64px !important;
  }
  .px-md-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .px-md-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-md-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-md-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
  .px-md-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-md-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .px-md-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-md-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }
  .px-md-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
  .px-md-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }
  .px-md-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .px-md-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }
  .px-md-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .px-md-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }
  .px-md-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }
  .px-md-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  .px-md-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  .py-md-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .py-md-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-md-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-md-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }
  .py-md-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-md-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
  .py-md-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-md-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }
  .py-md-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .py-md-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }
  .py-md-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .py-md-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }
  .py-md-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .py-md-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }
  .py-md-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }
  .py-md-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .py-md-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pt-md-0 {
    padding-top: 0px !important;
  }
  .pt-md-1 {
    padding-top: 4px !important;
  }
  .pt-md-2 {
    padding-top: 8px !important;
  }
  .pt-md-3 {
    padding-top: 12px !important;
  }
  .pt-md-4 {
    padding-top: 16px !important;
  }
  .pt-md-5 {
    padding-top: 20px !important;
  }
  .pt-md-6 {
    padding-top: 24px !important;
  }
  .pt-md-7 {
    padding-top: 28px !important;
  }
  .pt-md-8 {
    padding-top: 32px !important;
  }
  .pt-md-9 {
    padding-top: 36px !important;
  }
  .pt-md-10 {
    padding-top: 40px !important;
  }
  .pt-md-11 {
    padding-top: 44px !important;
  }
  .pt-md-12 {
    padding-top: 48px !important;
  }
  .pt-md-13 {
    padding-top: 52px !important;
  }
  .pt-md-14 {
    padding-top: 56px !important;
  }
  .pt-md-15 {
    padding-top: 60px !important;
  }
  .pt-md-16 {
    padding-top: 64px !important;
  }
  .pr-md-0 {
    padding-right: 0px !important;
  }
  .pr-md-1 {
    padding-right: 4px !important;
  }
  .pr-md-2 {
    padding-right: 8px !important;
  }
  .pr-md-3 {
    padding-right: 12px !important;
  }
  .pr-md-4 {
    padding-right: 16px !important;
  }
  .pr-md-5 {
    padding-right: 20px !important;
  }
  .pr-md-6 {
    padding-right: 24px !important;
  }
  .pr-md-7 {
    padding-right: 28px !important;
  }
  .pr-md-8 {
    padding-right: 32px !important;
  }
  .pr-md-9 {
    padding-right: 36px !important;
  }
  .pr-md-10 {
    padding-right: 40px !important;
  }
  .pr-md-11 {
    padding-right: 44px !important;
  }
  .pr-md-12 {
    padding-right: 48px !important;
  }
  .pr-md-13 {
    padding-right: 52px !important;
  }
  .pr-md-14 {
    padding-right: 56px !important;
  }
  .pr-md-15 {
    padding-right: 60px !important;
  }
  .pr-md-16 {
    padding-right: 64px !important;
  }
  .pb-md-0 {
    padding-bottom: 0px !important;
  }
  .pb-md-1 {
    padding-bottom: 4px !important;
  }
  .pb-md-2 {
    padding-bottom: 8px !important;
  }
  .pb-md-3 {
    padding-bottom: 12px !important;
  }
  .pb-md-4 {
    padding-bottom: 16px !important;
  }
  .pb-md-5 {
    padding-bottom: 20px !important;
  }
  .pb-md-6 {
    padding-bottom: 24px !important;
  }
  .pb-md-7 {
    padding-bottom: 28px !important;
  }
  .pb-md-8 {
    padding-bottom: 32px !important;
  }
  .pb-md-9 {
    padding-bottom: 36px !important;
  }
  .pb-md-10 {
    padding-bottom: 40px !important;
  }
  .pb-md-11 {
    padding-bottom: 44px !important;
  }
  .pb-md-12 {
    padding-bottom: 48px !important;
  }
  .pb-md-13 {
    padding-bottom: 52px !important;
  }
  .pb-md-14 {
    padding-bottom: 56px !important;
  }
  .pb-md-15 {
    padding-bottom: 60px !important;
  }
  .pb-md-16 {
    padding-bottom: 64px !important;
  }
  .pl-md-0 {
    padding-left: 0px !important;
  }
  .pl-md-1 {
    padding-left: 4px !important;
  }
  .pl-md-2 {
    padding-left: 8px !important;
  }
  .pl-md-3 {
    padding-left: 12px !important;
  }
  .pl-md-4 {
    padding-left: 16px !important;
  }
  .pl-md-5 {
    padding-left: 20px !important;
  }
  .pl-md-6 {
    padding-left: 24px !important;
  }
  .pl-md-7 {
    padding-left: 28px !important;
  }
  .pl-md-8 {
    padding-left: 32px !important;
  }
  .pl-md-9 {
    padding-left: 36px !important;
  }
  .pl-md-10 {
    padding-left: 40px !important;
  }
  .pl-md-11 {
    padding-left: 44px !important;
  }
  .pl-md-12 {
    padding-left: 48px !important;
  }
  .pl-md-13 {
    padding-left: 52px !important;
  }
  .pl-md-14 {
    padding-left: 56px !important;
  }
  .pl-md-15 {
    padding-left: 60px !important;
  }
  .pl-md-16 {
    padding-left: 64px !important;
  }
  .ps-md-0 {
    padding-inline-start: 0px !important;
  }
  .ps-md-1 {
    padding-inline-start: 4px !important;
  }
  .ps-md-2 {
    padding-inline-start: 8px !important;
  }
  .ps-md-3 {
    padding-inline-start: 12px !important;
  }
  .ps-md-4 {
    padding-inline-start: 16px !important;
  }
  .ps-md-5 {
    padding-inline-start: 20px !important;
  }
  .ps-md-6 {
    padding-inline-start: 24px !important;
  }
  .ps-md-7 {
    padding-inline-start: 28px !important;
  }
  .ps-md-8 {
    padding-inline-start: 32px !important;
  }
  .ps-md-9 {
    padding-inline-start: 36px !important;
  }
  .ps-md-10 {
    padding-inline-start: 40px !important;
  }
  .ps-md-11 {
    padding-inline-start: 44px !important;
  }
  .ps-md-12 {
    padding-inline-start: 48px !important;
  }
  .ps-md-13 {
    padding-inline-start: 52px !important;
  }
  .ps-md-14 {
    padding-inline-start: 56px !important;
  }
  .ps-md-15 {
    padding-inline-start: 60px !important;
  }
  .ps-md-16 {
    padding-inline-start: 64px !important;
  }
  .pe-md-0 {
    padding-inline-end: 0px !important;
  }
  .pe-md-1 {
    padding-inline-end: 4px !important;
  }
  .pe-md-2 {
    padding-inline-end: 8px !important;
  }
  .pe-md-3 {
    padding-inline-end: 12px !important;
  }
  .pe-md-4 {
    padding-inline-end: 16px !important;
  }
  .pe-md-5 {
    padding-inline-end: 20px !important;
  }
  .pe-md-6 {
    padding-inline-end: 24px !important;
  }
  .pe-md-7 {
    padding-inline-end: 28px !important;
  }
  .pe-md-8 {
    padding-inline-end: 32px !important;
  }
  .pe-md-9 {
    padding-inline-end: 36px !important;
  }
  .pe-md-10 {
    padding-inline-end: 40px !important;
  }
  .pe-md-11 {
    padding-inline-end: 44px !important;
  }
  .pe-md-12 {
    padding-inline-end: 48px !important;
  }
  .pe-md-13 {
    padding-inline-end: 52px !important;
  }
  .pe-md-14 {
    padding-inline-end: 56px !important;
  }
  .pe-md-15 {
    padding-inline-end: 60px !important;
  }
  .pe-md-16 {
    padding-inline-end: 64px !important;
  }
  .text-md-left {
    text-align: left !important;
  }
  .text-md-right {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
  .text-md-justify {
    text-align: justify !important;
  }
  .text-md-start {
    text-align: start !important;
  }
  .text-md-end {
    text-align: end !important;
  }
  .text-md-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
  .text-md-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-md-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
}
@media (min-width: 1280px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
  .float-lg-none {
    float: none !important;
  }
  .float-lg-left {
    float: left !important;
  }
  .float-lg-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-lg-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-lg-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-lg-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-lg-start {
    float: left !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-lg-start {
    justify-content: flex-start !important;
  }
  .justify-lg-end {
    justify-content: flex-end !important;
  }
  .justify-lg-center {
    justify-content: center !important;
  }
  .justify-lg-space-between {
    justify-content: space-between !important;
  }
  .justify-lg-space-around {
    justify-content: space-around !important;
  }
  .justify-lg-space-evenly {
    justify-content: space-evenly !important;
  }
  .align-lg-start {
    align-items: flex-start !important;
  }
  .align-lg-end {
    align-items: flex-end !important;
  }
  .align-lg-center {
    align-items: center !important;
  }
  .align-lg-baseline {
    align-items: baseline !important;
  }
  .align-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-space-between {
    align-content: space-between !important;
  }
  .align-content-lg-space-around {
    align-content: space-around !important;
  }
  .align-content-lg-space-evenly {
    align-content: space-evenly !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
  .order-lg-first {
    order: -1 !important;
  }
  .order-lg-0 {
    order: 0 !important;
  }
  .order-lg-1 {
    order: 1 !important;
  }
  .order-lg-2 {
    order: 2 !important;
  }
  .order-lg-3 {
    order: 3 !important;
  }
  .order-lg-4 {
    order: 4 !important;
  }
  .order-lg-5 {
    order: 5 !important;
  }
  .order-lg-6 {
    order: 6 !important;
  }
  .order-lg-7 {
    order: 7 !important;
  }
  .order-lg-8 {
    order: 8 !important;
  }
  .order-lg-9 {
    order: 9 !important;
  }
  .order-lg-10 {
    order: 10 !important;
  }
  .order-lg-11 {
    order: 11 !important;
  }
  .order-lg-12 {
    order: 12 !important;
  }
  .order-lg-last {
    order: 13 !important;
  }
  .ma-lg-0 {
    margin: 0px !important;
  }
  .ma-lg-1 {
    margin: 4px !important;
  }
  .ma-lg-2 {
    margin: 8px !important;
  }
  .ma-lg-3 {
    margin: 12px !important;
  }
  .ma-lg-4 {
    margin: 16px !important;
  }
  .ma-lg-5 {
    margin: 20px !important;
  }
  .ma-lg-6 {
    margin: 24px !important;
  }
  .ma-lg-7 {
    margin: 28px !important;
  }
  .ma-lg-8 {
    margin: 32px !important;
  }
  .ma-lg-9 {
    margin: 36px !important;
  }
  .ma-lg-10 {
    margin: 40px !important;
  }
  .ma-lg-11 {
    margin: 44px !important;
  }
  .ma-lg-12 {
    margin: 48px !important;
  }
  .ma-lg-13 {
    margin: 52px !important;
  }
  .ma-lg-14 {
    margin: 56px !important;
  }
  .ma-lg-15 {
    margin: 60px !important;
  }
  .ma-lg-16 {
    margin: 64px !important;
  }
  .ma-lg-auto {
    margin: auto !important;
  }
  .mx-lg-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .mx-lg-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-lg-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-lg-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
  .mx-lg-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-lg-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
  .mx-lg-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-lg-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }
  .mx-lg-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }
  .mx-lg-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }
  .mx-lg-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }
  .mx-lg-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }
  .mx-lg-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-lg-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }
  .mx-lg-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }
  .mx-lg-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
  .mx-lg-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-lg-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .my-lg-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-lg-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-lg-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .my-lg-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-lg-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .my-lg-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-lg-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }
  .my-lg-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .my-lg-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }
  .my-lg-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .my-lg-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }
  .my-lg-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-lg-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }
  .my-lg-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }
  .my-lg-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }
  .my-lg-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-lg-0 {
    margin-top: 0px !important;
  }
  .mt-lg-1 {
    margin-top: 4px !important;
  }
  .mt-lg-2 {
    margin-top: 8px !important;
  }
  .mt-lg-3 {
    margin-top: 12px !important;
  }
  .mt-lg-4 {
    margin-top: 16px !important;
  }
  .mt-lg-5 {
    margin-top: 20px !important;
  }
  .mt-lg-6 {
    margin-top: 24px !important;
  }
  .mt-lg-7 {
    margin-top: 28px !important;
  }
  .mt-lg-8 {
    margin-top: 32px !important;
  }
  .mt-lg-9 {
    margin-top: 36px !important;
  }
  .mt-lg-10 {
    margin-top: 40px !important;
  }
  .mt-lg-11 {
    margin-top: 44px !important;
  }
  .mt-lg-12 {
    margin-top: 48px !important;
  }
  .mt-lg-13 {
    margin-top: 52px !important;
  }
  .mt-lg-14 {
    margin-top: 56px !important;
  }
  .mt-lg-15 {
    margin-top: 60px !important;
  }
  .mt-lg-16 {
    margin-top: 64px !important;
  }
  .mt-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-0 {
    margin-right: 0px !important;
  }
  .mr-lg-1 {
    margin-right: 4px !important;
  }
  .mr-lg-2 {
    margin-right: 8px !important;
  }
  .mr-lg-3 {
    margin-right: 12px !important;
  }
  .mr-lg-4 {
    margin-right: 16px !important;
  }
  .mr-lg-5 {
    margin-right: 20px !important;
  }
  .mr-lg-6 {
    margin-right: 24px !important;
  }
  .mr-lg-7 {
    margin-right: 28px !important;
  }
  .mr-lg-8 {
    margin-right: 32px !important;
  }
  .mr-lg-9 {
    margin-right: 36px !important;
  }
  .mr-lg-10 {
    margin-right: 40px !important;
  }
  .mr-lg-11 {
    margin-right: 44px !important;
  }
  .mr-lg-12 {
    margin-right: 48px !important;
  }
  .mr-lg-13 {
    margin-right: 52px !important;
  }
  .mr-lg-14 {
    margin-right: 56px !important;
  }
  .mr-lg-15 {
    margin-right: 60px !important;
  }
  .mr-lg-16 {
    margin-right: 64px !important;
  }
  .mr-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-0 {
    margin-bottom: 0px !important;
  }
  .mb-lg-1 {
    margin-bottom: 4px !important;
  }
  .mb-lg-2 {
    margin-bottom: 8px !important;
  }
  .mb-lg-3 {
    margin-bottom: 12px !important;
  }
  .mb-lg-4 {
    margin-bottom: 16px !important;
  }
  .mb-lg-5 {
    margin-bottom: 20px !important;
  }
  .mb-lg-6 {
    margin-bottom: 24px !important;
  }
  .mb-lg-7 {
    margin-bottom: 28px !important;
  }
  .mb-lg-8 {
    margin-bottom: 32px !important;
  }
  .mb-lg-9 {
    margin-bottom: 36px !important;
  }
  .mb-lg-10 {
    margin-bottom: 40px !important;
  }
  .mb-lg-11 {
    margin-bottom: 44px !important;
  }
  .mb-lg-12 {
    margin-bottom: 48px !important;
  }
  .mb-lg-13 {
    margin-bottom: 52px !important;
  }
  .mb-lg-14 {
    margin-bottom: 56px !important;
  }
  .mb-lg-15 {
    margin-bottom: 60px !important;
  }
  .mb-lg-16 {
    margin-bottom: 64px !important;
  }
  .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-0 {
    margin-left: 0px !important;
  }
  .ml-lg-1 {
    margin-left: 4px !important;
  }
  .ml-lg-2 {
    margin-left: 8px !important;
  }
  .ml-lg-3 {
    margin-left: 12px !important;
  }
  .ml-lg-4 {
    margin-left: 16px !important;
  }
  .ml-lg-5 {
    margin-left: 20px !important;
  }
  .ml-lg-6 {
    margin-left: 24px !important;
  }
  .ml-lg-7 {
    margin-left: 28px !important;
  }
  .ml-lg-8 {
    margin-left: 32px !important;
  }
  .ml-lg-9 {
    margin-left: 36px !important;
  }
  .ml-lg-10 {
    margin-left: 40px !important;
  }
  .ml-lg-11 {
    margin-left: 44px !important;
  }
  .ml-lg-12 {
    margin-left: 48px !important;
  }
  .ml-lg-13 {
    margin-left: 52px !important;
  }
  .ml-lg-14 {
    margin-left: 56px !important;
  }
  .ml-lg-15 {
    margin-left: 60px !important;
  }
  .ml-lg-16 {
    margin-left: 64px !important;
  }
  .ml-lg-auto {
    margin-left: auto !important;
  }
  .ms-lg-0 {
    margin-inline-start: 0px !important;
  }
  .ms-lg-1 {
    margin-inline-start: 4px !important;
  }
  .ms-lg-2 {
    margin-inline-start: 8px !important;
  }
  .ms-lg-3 {
    margin-inline-start: 12px !important;
  }
  .ms-lg-4 {
    margin-inline-start: 16px !important;
  }
  .ms-lg-5 {
    margin-inline-start: 20px !important;
  }
  .ms-lg-6 {
    margin-inline-start: 24px !important;
  }
  .ms-lg-7 {
    margin-inline-start: 28px !important;
  }
  .ms-lg-8 {
    margin-inline-start: 32px !important;
  }
  .ms-lg-9 {
    margin-inline-start: 36px !important;
  }
  .ms-lg-10 {
    margin-inline-start: 40px !important;
  }
  .ms-lg-11 {
    margin-inline-start: 44px !important;
  }
  .ms-lg-12 {
    margin-inline-start: 48px !important;
  }
  .ms-lg-13 {
    margin-inline-start: 52px !important;
  }
  .ms-lg-14 {
    margin-inline-start: 56px !important;
  }
  .ms-lg-15 {
    margin-inline-start: 60px !important;
  }
  .ms-lg-16 {
    margin-inline-start: 64px !important;
  }
  .ms-lg-auto {
    margin-inline-start: auto !important;
  }
  .me-lg-0 {
    margin-inline-end: 0px !important;
  }
  .me-lg-1 {
    margin-inline-end: 4px !important;
  }
  .me-lg-2 {
    margin-inline-end: 8px !important;
  }
  .me-lg-3 {
    margin-inline-end: 12px !important;
  }
  .me-lg-4 {
    margin-inline-end: 16px !important;
  }
  .me-lg-5 {
    margin-inline-end: 20px !important;
  }
  .me-lg-6 {
    margin-inline-end: 24px !important;
  }
  .me-lg-7 {
    margin-inline-end: 28px !important;
  }
  .me-lg-8 {
    margin-inline-end: 32px !important;
  }
  .me-lg-9 {
    margin-inline-end: 36px !important;
  }
  .me-lg-10 {
    margin-inline-end: 40px !important;
  }
  .me-lg-11 {
    margin-inline-end: 44px !important;
  }
  .me-lg-12 {
    margin-inline-end: 48px !important;
  }
  .me-lg-13 {
    margin-inline-end: 52px !important;
  }
  .me-lg-14 {
    margin-inline-end: 56px !important;
  }
  .me-lg-15 {
    margin-inline-end: 60px !important;
  }
  .me-lg-16 {
    margin-inline-end: 64px !important;
  }
  .me-lg-auto {
    margin-inline-end: auto !important;
  }
  .ma-lg-n1 {
    margin: -4px !important;
  }
  .ma-lg-n2 {
    margin: -8px !important;
  }
  .ma-lg-n3 {
    margin: -12px !important;
  }
  .ma-lg-n4 {
    margin: -16px !important;
  }
  .ma-lg-n5 {
    margin: -20px !important;
  }
  .ma-lg-n6 {
    margin: -24px !important;
  }
  .ma-lg-n7 {
    margin: -28px !important;
  }
  .ma-lg-n8 {
    margin: -32px !important;
  }
  .ma-lg-n9 {
    margin: -36px !important;
  }
  .ma-lg-n10 {
    margin: -40px !important;
  }
  .ma-lg-n11 {
    margin: -44px !important;
  }
  .ma-lg-n12 {
    margin: -48px !important;
  }
  .ma-lg-n13 {
    margin: -52px !important;
  }
  .ma-lg-n14 {
    margin: -56px !important;
  }
  .ma-lg-n15 {
    margin: -60px !important;
  }
  .ma-lg-n16 {
    margin: -64px !important;
  }
  .mx-lg-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }
  .mx-lg-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }
  .mx-lg-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }
  .mx-lg-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }
  .mx-lg-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }
  .mx-lg-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }
  .mx-lg-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }
  .mx-lg-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }
  .mx-lg-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }
  .mx-lg-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }
  .mx-lg-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }
  .mx-lg-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }
  .mx-lg-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }
  .mx-lg-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }
  .mx-lg-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }
  .mx-lg-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }
  .my-lg-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }
  .my-lg-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }
  .my-lg-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }
  .my-lg-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }
  .my-lg-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }
  .my-lg-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }
  .my-lg-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }
  .my-lg-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }
  .my-lg-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }
  .my-lg-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }
  .my-lg-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }
  .my-lg-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }
  .my-lg-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }
  .my-lg-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }
  .my-lg-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }
  .my-lg-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }
  .mt-lg-n1 {
    margin-top: -4px !important;
  }
  .mt-lg-n2 {
    margin-top: -8px !important;
  }
  .mt-lg-n3 {
    margin-top: -12px !important;
  }
  .mt-lg-n4 {
    margin-top: -16px !important;
  }
  .mt-lg-n5 {
    margin-top: -20px !important;
  }
  .mt-lg-n6 {
    margin-top: -24px !important;
  }
  .mt-lg-n7 {
    margin-top: -28px !important;
  }
  .mt-lg-n8 {
    margin-top: -32px !important;
  }
  .mt-lg-n9 {
    margin-top: -36px !important;
  }
  .mt-lg-n10 {
    margin-top: -40px !important;
  }
  .mt-lg-n11 {
    margin-top: -44px !important;
  }
  .mt-lg-n12 {
    margin-top: -48px !important;
  }
  .mt-lg-n13 {
    margin-top: -52px !important;
  }
  .mt-lg-n14 {
    margin-top: -56px !important;
  }
  .mt-lg-n15 {
    margin-top: -60px !important;
  }
  .mt-lg-n16 {
    margin-top: -64px !important;
  }
  .mr-lg-n1 {
    margin-right: -4px !important;
  }
  .mr-lg-n2 {
    margin-right: -8px !important;
  }
  .mr-lg-n3 {
    margin-right: -12px !important;
  }
  .mr-lg-n4 {
    margin-right: -16px !important;
  }
  .mr-lg-n5 {
    margin-right: -20px !important;
  }
  .mr-lg-n6 {
    margin-right: -24px !important;
  }
  .mr-lg-n7 {
    margin-right: -28px !important;
  }
  .mr-lg-n8 {
    margin-right: -32px !important;
  }
  .mr-lg-n9 {
    margin-right: -36px !important;
  }
  .mr-lg-n10 {
    margin-right: -40px !important;
  }
  .mr-lg-n11 {
    margin-right: -44px !important;
  }
  .mr-lg-n12 {
    margin-right: -48px !important;
  }
  .mr-lg-n13 {
    margin-right: -52px !important;
  }
  .mr-lg-n14 {
    margin-right: -56px !important;
  }
  .mr-lg-n15 {
    margin-right: -60px !important;
  }
  .mr-lg-n16 {
    margin-right: -64px !important;
  }
  .mb-lg-n1 {
    margin-bottom: -4px !important;
  }
  .mb-lg-n2 {
    margin-bottom: -8px !important;
  }
  .mb-lg-n3 {
    margin-bottom: -12px !important;
  }
  .mb-lg-n4 {
    margin-bottom: -16px !important;
  }
  .mb-lg-n5 {
    margin-bottom: -20px !important;
  }
  .mb-lg-n6 {
    margin-bottom: -24px !important;
  }
  .mb-lg-n7 {
    margin-bottom: -28px !important;
  }
  .mb-lg-n8 {
    margin-bottom: -32px !important;
  }
  .mb-lg-n9 {
    margin-bottom: -36px !important;
  }
  .mb-lg-n10 {
    margin-bottom: -40px !important;
  }
  .mb-lg-n11 {
    margin-bottom: -44px !important;
  }
  .mb-lg-n12 {
    margin-bottom: -48px !important;
  }
  .mb-lg-n13 {
    margin-bottom: -52px !important;
  }
  .mb-lg-n14 {
    margin-bottom: -56px !important;
  }
  .mb-lg-n15 {
    margin-bottom: -60px !important;
  }
  .mb-lg-n16 {
    margin-bottom: -64px !important;
  }
  .ml-lg-n1 {
    margin-left: -4px !important;
  }
  .ml-lg-n2 {
    margin-left: -8px !important;
  }
  .ml-lg-n3 {
    margin-left: -12px !important;
  }
  .ml-lg-n4 {
    margin-left: -16px !important;
  }
  .ml-lg-n5 {
    margin-left: -20px !important;
  }
  .ml-lg-n6 {
    margin-left: -24px !important;
  }
  .ml-lg-n7 {
    margin-left: -28px !important;
  }
  .ml-lg-n8 {
    margin-left: -32px !important;
  }
  .ml-lg-n9 {
    margin-left: -36px !important;
  }
  .ml-lg-n10 {
    margin-left: -40px !important;
  }
  .ml-lg-n11 {
    margin-left: -44px !important;
  }
  .ml-lg-n12 {
    margin-left: -48px !important;
  }
  .ml-lg-n13 {
    margin-left: -52px !important;
  }
  .ml-lg-n14 {
    margin-left: -56px !important;
  }
  .ml-lg-n15 {
    margin-left: -60px !important;
  }
  .ml-lg-n16 {
    margin-left: -64px !important;
  }
  .ms-lg-n1 {
    margin-inline-start: -4px !important;
  }
  .ms-lg-n2 {
    margin-inline-start: -8px !important;
  }
  .ms-lg-n3 {
    margin-inline-start: -12px !important;
  }
  .ms-lg-n4 {
    margin-inline-start: -16px !important;
  }
  .ms-lg-n5 {
    margin-inline-start: -20px !important;
  }
  .ms-lg-n6 {
    margin-inline-start: -24px !important;
  }
  .ms-lg-n7 {
    margin-inline-start: -28px !important;
  }
  .ms-lg-n8 {
    margin-inline-start: -32px !important;
  }
  .ms-lg-n9 {
    margin-inline-start: -36px !important;
  }
  .ms-lg-n10 {
    margin-inline-start: -40px !important;
  }
  .ms-lg-n11 {
    margin-inline-start: -44px !important;
  }
  .ms-lg-n12 {
    margin-inline-start: -48px !important;
  }
  .ms-lg-n13 {
    margin-inline-start: -52px !important;
  }
  .ms-lg-n14 {
    margin-inline-start: -56px !important;
  }
  .ms-lg-n15 {
    margin-inline-start: -60px !important;
  }
  .ms-lg-n16 {
    margin-inline-start: -64px !important;
  }
  .me-lg-n1 {
    margin-inline-end: -4px !important;
  }
  .me-lg-n2 {
    margin-inline-end: -8px !important;
  }
  .me-lg-n3 {
    margin-inline-end: -12px !important;
  }
  .me-lg-n4 {
    margin-inline-end: -16px !important;
  }
  .me-lg-n5 {
    margin-inline-end: -20px !important;
  }
  .me-lg-n6 {
    margin-inline-end: -24px !important;
  }
  .me-lg-n7 {
    margin-inline-end: -28px !important;
  }
  .me-lg-n8 {
    margin-inline-end: -32px !important;
  }
  .me-lg-n9 {
    margin-inline-end: -36px !important;
  }
  .me-lg-n10 {
    margin-inline-end: -40px !important;
  }
  .me-lg-n11 {
    margin-inline-end: -44px !important;
  }
  .me-lg-n12 {
    margin-inline-end: -48px !important;
  }
  .me-lg-n13 {
    margin-inline-end: -52px !important;
  }
  .me-lg-n14 {
    margin-inline-end: -56px !important;
  }
  .me-lg-n15 {
    margin-inline-end: -60px !important;
  }
  .me-lg-n16 {
    margin-inline-end: -64px !important;
  }
  .pa-lg-0 {
    padding: 0px !important;
  }
  .pa-lg-1 {
    padding: 4px !important;
  }
  .pa-lg-2 {
    padding: 8px !important;
  }
  .pa-lg-3 {
    padding: 12px !important;
  }
  .pa-lg-4 {
    padding: 16px !important;
  }
  .pa-lg-5 {
    padding: 20px !important;
  }
  .pa-lg-6 {
    padding: 24px !important;
  }
  .pa-lg-7 {
    padding: 28px !important;
  }
  .pa-lg-8 {
    padding: 32px !important;
  }
  .pa-lg-9 {
    padding: 36px !important;
  }
  .pa-lg-10 {
    padding: 40px !important;
  }
  .pa-lg-11 {
    padding: 44px !important;
  }
  .pa-lg-12 {
    padding: 48px !important;
  }
  .pa-lg-13 {
    padding: 52px !important;
  }
  .pa-lg-14 {
    padding: 56px !important;
  }
  .pa-lg-15 {
    padding: 60px !important;
  }
  .pa-lg-16 {
    padding: 64px !important;
  }
  .px-lg-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .px-lg-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-lg-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-lg-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
  .px-lg-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-lg-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .px-lg-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-lg-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }
  .px-lg-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
  .px-lg-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }
  .px-lg-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .px-lg-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }
  .px-lg-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .px-lg-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }
  .px-lg-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }
  .px-lg-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  .px-lg-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  .py-lg-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .py-lg-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-lg-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-lg-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }
  .py-lg-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-lg-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
  .py-lg-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-lg-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }
  .py-lg-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .py-lg-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }
  .py-lg-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .py-lg-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }
  .py-lg-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .py-lg-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }
  .py-lg-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }
  .py-lg-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .py-lg-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pt-lg-0 {
    padding-top: 0px !important;
  }
  .pt-lg-1 {
    padding-top: 4px !important;
  }
  .pt-lg-2 {
    padding-top: 8px !important;
  }
  .pt-lg-3 {
    padding-top: 12px !important;
  }
  .pt-lg-4 {
    padding-top: 16px !important;
  }
  .pt-lg-5 {
    padding-top: 20px !important;
  }
  .pt-lg-6 {
    padding-top: 24px !important;
  }
  .pt-lg-7 {
    padding-top: 28px !important;
  }
  .pt-lg-8 {
    padding-top: 32px !important;
  }
  .pt-lg-9 {
    padding-top: 36px !important;
  }
  .pt-lg-10 {
    padding-top: 40px !important;
  }
  .pt-lg-11 {
    padding-top: 44px !important;
  }
  .pt-lg-12 {
    padding-top: 48px !important;
  }
  .pt-lg-13 {
    padding-top: 52px !important;
  }
  .pt-lg-14 {
    padding-top: 56px !important;
  }
  .pt-lg-15 {
    padding-top: 60px !important;
  }
  .pt-lg-16 {
    padding-top: 64px !important;
  }
  .pr-lg-0 {
    padding-right: 0px !important;
  }
  .pr-lg-1 {
    padding-right: 4px !important;
  }
  .pr-lg-2 {
    padding-right: 8px !important;
  }
  .pr-lg-3 {
    padding-right: 12px !important;
  }
  .pr-lg-4 {
    padding-right: 16px !important;
  }
  .pr-lg-5 {
    padding-right: 20px !important;
  }
  .pr-lg-6 {
    padding-right: 24px !important;
  }
  .pr-lg-7 {
    padding-right: 28px !important;
  }
  .pr-lg-8 {
    padding-right: 32px !important;
  }
  .pr-lg-9 {
    padding-right: 36px !important;
  }
  .pr-lg-10 {
    padding-right: 40px !important;
  }
  .pr-lg-11 {
    padding-right: 44px !important;
  }
  .pr-lg-12 {
    padding-right: 48px !important;
  }
  .pr-lg-13 {
    padding-right: 52px !important;
  }
  .pr-lg-14 {
    padding-right: 56px !important;
  }
  .pr-lg-15 {
    padding-right: 60px !important;
  }
  .pr-lg-16 {
    padding-right: 64px !important;
  }
  .pb-lg-0 {
    padding-bottom: 0px !important;
  }
  .pb-lg-1 {
    padding-bottom: 4px !important;
  }
  .pb-lg-2 {
    padding-bottom: 8px !important;
  }
  .pb-lg-3 {
    padding-bottom: 12px !important;
  }
  .pb-lg-4 {
    padding-bottom: 16px !important;
  }
  .pb-lg-5 {
    padding-bottom: 20px !important;
  }
  .pb-lg-6 {
    padding-bottom: 24px !important;
  }
  .pb-lg-7 {
    padding-bottom: 28px !important;
  }
  .pb-lg-8 {
    padding-bottom: 32px !important;
  }
  .pb-lg-9 {
    padding-bottom: 36px !important;
  }
  .pb-lg-10 {
    padding-bottom: 40px !important;
  }
  .pb-lg-11 {
    padding-bottom: 44px !important;
  }
  .pb-lg-12 {
    padding-bottom: 48px !important;
  }
  .pb-lg-13 {
    padding-bottom: 52px !important;
  }
  .pb-lg-14 {
    padding-bottom: 56px !important;
  }
  .pb-lg-15 {
    padding-bottom: 60px !important;
  }
  .pb-lg-16 {
    padding-bottom: 64px !important;
  }
  .pl-lg-0 {
    padding-left: 0px !important;
  }
  .pl-lg-1 {
    padding-left: 4px !important;
  }
  .pl-lg-2 {
    padding-left: 8px !important;
  }
  .pl-lg-3 {
    padding-left: 12px !important;
  }
  .pl-lg-4 {
    padding-left: 16px !important;
  }
  .pl-lg-5 {
    padding-left: 20px !important;
  }
  .pl-lg-6 {
    padding-left: 24px !important;
  }
  .pl-lg-7 {
    padding-left: 28px !important;
  }
  .pl-lg-8 {
    padding-left: 32px !important;
  }
  .pl-lg-9 {
    padding-left: 36px !important;
  }
  .pl-lg-10 {
    padding-left: 40px !important;
  }
  .pl-lg-11 {
    padding-left: 44px !important;
  }
  .pl-lg-12 {
    padding-left: 48px !important;
  }
  .pl-lg-13 {
    padding-left: 52px !important;
  }
  .pl-lg-14 {
    padding-left: 56px !important;
  }
  .pl-lg-15 {
    padding-left: 60px !important;
  }
  .pl-lg-16 {
    padding-left: 64px !important;
  }
  .ps-lg-0 {
    padding-inline-start: 0px !important;
  }
  .ps-lg-1 {
    padding-inline-start: 4px !important;
  }
  .ps-lg-2 {
    padding-inline-start: 8px !important;
  }
  .ps-lg-3 {
    padding-inline-start: 12px !important;
  }
  .ps-lg-4 {
    padding-inline-start: 16px !important;
  }
  .ps-lg-5 {
    padding-inline-start: 20px !important;
  }
  .ps-lg-6 {
    padding-inline-start: 24px !important;
  }
  .ps-lg-7 {
    padding-inline-start: 28px !important;
  }
  .ps-lg-8 {
    padding-inline-start: 32px !important;
  }
  .ps-lg-9 {
    padding-inline-start: 36px !important;
  }
  .ps-lg-10 {
    padding-inline-start: 40px !important;
  }
  .ps-lg-11 {
    padding-inline-start: 44px !important;
  }
  .ps-lg-12 {
    padding-inline-start: 48px !important;
  }
  .ps-lg-13 {
    padding-inline-start: 52px !important;
  }
  .ps-lg-14 {
    padding-inline-start: 56px !important;
  }
  .ps-lg-15 {
    padding-inline-start: 60px !important;
  }
  .ps-lg-16 {
    padding-inline-start: 64px !important;
  }
  .pe-lg-0 {
    padding-inline-end: 0px !important;
  }
  .pe-lg-1 {
    padding-inline-end: 4px !important;
  }
  .pe-lg-2 {
    padding-inline-end: 8px !important;
  }
  .pe-lg-3 {
    padding-inline-end: 12px !important;
  }
  .pe-lg-4 {
    padding-inline-end: 16px !important;
  }
  .pe-lg-5 {
    padding-inline-end: 20px !important;
  }
  .pe-lg-6 {
    padding-inline-end: 24px !important;
  }
  .pe-lg-7 {
    padding-inline-end: 28px !important;
  }
  .pe-lg-8 {
    padding-inline-end: 32px !important;
  }
  .pe-lg-9 {
    padding-inline-end: 36px !important;
  }
  .pe-lg-10 {
    padding-inline-end: 40px !important;
  }
  .pe-lg-11 {
    padding-inline-end: 44px !important;
  }
  .pe-lg-12 {
    padding-inline-end: 48px !important;
  }
  .pe-lg-13 {
    padding-inline-end: 52px !important;
  }
  .pe-lg-14 {
    padding-inline-end: 56px !important;
  }
  .pe-lg-15 {
    padding-inline-end: 60px !important;
  }
  .pe-lg-16 {
    padding-inline-end: 64px !important;
  }
  .text-lg-left {
    text-align: left !important;
  }
  .text-lg-right {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
  .text-lg-justify {
    text-align: justify !important;
  }
  .text-lg-start {
    text-align: start !important;
  }
  .text-lg-end {
    text-align: end !important;
  }
  .text-lg-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
  .text-lg-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-lg-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
}
@media (min-width: 1920px) {
  .d-xl-none {
    display: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
  .float-xl-none {
    float: none !important;
  }
  .float-xl-left {
    float: left !important;
  }
  .float-xl-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-xl-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-xl-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-xl-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-xl-start {
    float: left !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-xl-start {
    justify-content: flex-start !important;
  }
  .justify-xl-end {
    justify-content: flex-end !important;
  }
  .justify-xl-center {
    justify-content: center !important;
  }
  .justify-xl-space-between {
    justify-content: space-between !important;
  }
  .justify-xl-space-around {
    justify-content: space-around !important;
  }
  .justify-xl-space-evenly {
    justify-content: space-evenly !important;
  }
  .align-xl-start {
    align-items: flex-start !important;
  }
  .align-xl-end {
    align-items: flex-end !important;
  }
  .align-xl-center {
    align-items: center !important;
  }
  .align-xl-baseline {
    align-items: baseline !important;
  }
  .align-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-space-between {
    align-content: space-between !important;
  }
  .align-content-xl-space-around {
    align-content: space-around !important;
  }
  .align-content-xl-space-evenly {
    align-content: space-evenly !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
  .order-xl-first {
    order: -1 !important;
  }
  .order-xl-0 {
    order: 0 !important;
  }
  .order-xl-1 {
    order: 1 !important;
  }
  .order-xl-2 {
    order: 2 !important;
  }
  .order-xl-3 {
    order: 3 !important;
  }
  .order-xl-4 {
    order: 4 !important;
  }
  .order-xl-5 {
    order: 5 !important;
  }
  .order-xl-6 {
    order: 6 !important;
  }
  .order-xl-7 {
    order: 7 !important;
  }
  .order-xl-8 {
    order: 8 !important;
  }
  .order-xl-9 {
    order: 9 !important;
  }
  .order-xl-10 {
    order: 10 !important;
  }
  .order-xl-11 {
    order: 11 !important;
  }
  .order-xl-12 {
    order: 12 !important;
  }
  .order-xl-last {
    order: 13 !important;
  }
  .ma-xl-0 {
    margin: 0px !important;
  }
  .ma-xl-1 {
    margin: 4px !important;
  }
  .ma-xl-2 {
    margin: 8px !important;
  }
  .ma-xl-3 {
    margin: 12px !important;
  }
  .ma-xl-4 {
    margin: 16px !important;
  }
  .ma-xl-5 {
    margin: 20px !important;
  }
  .ma-xl-6 {
    margin: 24px !important;
  }
  .ma-xl-7 {
    margin: 28px !important;
  }
  .ma-xl-8 {
    margin: 32px !important;
  }
  .ma-xl-9 {
    margin: 36px !important;
  }
  .ma-xl-10 {
    margin: 40px !important;
  }
  .ma-xl-11 {
    margin: 44px !important;
  }
  .ma-xl-12 {
    margin: 48px !important;
  }
  .ma-xl-13 {
    margin: 52px !important;
  }
  .ma-xl-14 {
    margin: 56px !important;
  }
  .ma-xl-15 {
    margin: 60px !important;
  }
  .ma-xl-16 {
    margin: 64px !important;
  }
  .ma-xl-auto {
    margin: auto !important;
  }
  .mx-xl-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .mx-xl-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-xl-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-xl-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
  .mx-xl-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-xl-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
  .mx-xl-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-xl-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }
  .mx-xl-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }
  .mx-xl-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }
  .mx-xl-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }
  .mx-xl-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }
  .mx-xl-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-xl-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }
  .mx-xl-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }
  .mx-xl-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
  .mx-xl-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xl-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .my-xl-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-xl-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-xl-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .my-xl-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-xl-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .my-xl-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-xl-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }
  .my-xl-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .my-xl-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }
  .my-xl-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .my-xl-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }
  .my-xl-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-xl-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }
  .my-xl-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }
  .my-xl-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }
  .my-xl-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xl-0 {
    margin-top: 0px !important;
  }
  .mt-xl-1 {
    margin-top: 4px !important;
  }
  .mt-xl-2 {
    margin-top: 8px !important;
  }
  .mt-xl-3 {
    margin-top: 12px !important;
  }
  .mt-xl-4 {
    margin-top: 16px !important;
  }
  .mt-xl-5 {
    margin-top: 20px !important;
  }
  .mt-xl-6 {
    margin-top: 24px !important;
  }
  .mt-xl-7 {
    margin-top: 28px !important;
  }
  .mt-xl-8 {
    margin-top: 32px !important;
  }
  .mt-xl-9 {
    margin-top: 36px !important;
  }
  .mt-xl-10 {
    margin-top: 40px !important;
  }
  .mt-xl-11 {
    margin-top: 44px !important;
  }
  .mt-xl-12 {
    margin-top: 48px !important;
  }
  .mt-xl-13 {
    margin-top: 52px !important;
  }
  .mt-xl-14 {
    margin-top: 56px !important;
  }
  .mt-xl-15 {
    margin-top: 60px !important;
  }
  .mt-xl-16 {
    margin-top: 64px !important;
  }
  .mt-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-0 {
    margin-right: 0px !important;
  }
  .mr-xl-1 {
    margin-right: 4px !important;
  }
  .mr-xl-2 {
    margin-right: 8px !important;
  }
  .mr-xl-3 {
    margin-right: 12px !important;
  }
  .mr-xl-4 {
    margin-right: 16px !important;
  }
  .mr-xl-5 {
    margin-right: 20px !important;
  }
  .mr-xl-6 {
    margin-right: 24px !important;
  }
  .mr-xl-7 {
    margin-right: 28px !important;
  }
  .mr-xl-8 {
    margin-right: 32px !important;
  }
  .mr-xl-9 {
    margin-right: 36px !important;
  }
  .mr-xl-10 {
    margin-right: 40px !important;
  }
  .mr-xl-11 {
    margin-right: 44px !important;
  }
  .mr-xl-12 {
    margin-right: 48px !important;
  }
  .mr-xl-13 {
    margin-right: 52px !important;
  }
  .mr-xl-14 {
    margin-right: 56px !important;
  }
  .mr-xl-15 {
    margin-right: 60px !important;
  }
  .mr-xl-16 {
    margin-right: 64px !important;
  }
  .mr-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-0 {
    margin-bottom: 0px !important;
  }
  .mb-xl-1 {
    margin-bottom: 4px !important;
  }
  .mb-xl-2 {
    margin-bottom: 8px !important;
  }
  .mb-xl-3 {
    margin-bottom: 12px !important;
  }
  .mb-xl-4 {
    margin-bottom: 16px !important;
  }
  .mb-xl-5 {
    margin-bottom: 20px !important;
  }
  .mb-xl-6 {
    margin-bottom: 24px !important;
  }
  .mb-xl-7 {
    margin-bottom: 28px !important;
  }
  .mb-xl-8 {
    margin-bottom: 32px !important;
  }
  .mb-xl-9 {
    margin-bottom: 36px !important;
  }
  .mb-xl-10 {
    margin-bottom: 40px !important;
  }
  .mb-xl-11 {
    margin-bottom: 44px !important;
  }
  .mb-xl-12 {
    margin-bottom: 48px !important;
  }
  .mb-xl-13 {
    margin-bottom: 52px !important;
  }
  .mb-xl-14 {
    margin-bottom: 56px !important;
  }
  .mb-xl-15 {
    margin-bottom: 60px !important;
  }
  .mb-xl-16 {
    margin-bottom: 64px !important;
  }
  .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-0 {
    margin-left: 0px !important;
  }
  .ml-xl-1 {
    margin-left: 4px !important;
  }
  .ml-xl-2 {
    margin-left: 8px !important;
  }
  .ml-xl-3 {
    margin-left: 12px !important;
  }
  .ml-xl-4 {
    margin-left: 16px !important;
  }
  .ml-xl-5 {
    margin-left: 20px !important;
  }
  .ml-xl-6 {
    margin-left: 24px !important;
  }
  .ml-xl-7 {
    margin-left: 28px !important;
  }
  .ml-xl-8 {
    margin-left: 32px !important;
  }
  .ml-xl-9 {
    margin-left: 36px !important;
  }
  .ml-xl-10 {
    margin-left: 40px !important;
  }
  .ml-xl-11 {
    margin-left: 44px !important;
  }
  .ml-xl-12 {
    margin-left: 48px !important;
  }
  .ml-xl-13 {
    margin-left: 52px !important;
  }
  .ml-xl-14 {
    margin-left: 56px !important;
  }
  .ml-xl-15 {
    margin-left: 60px !important;
  }
  .ml-xl-16 {
    margin-left: 64px !important;
  }
  .ml-xl-auto {
    margin-left: auto !important;
  }
  .ms-xl-0 {
    margin-inline-start: 0px !important;
  }
  .ms-xl-1 {
    margin-inline-start: 4px !important;
  }
  .ms-xl-2 {
    margin-inline-start: 8px !important;
  }
  .ms-xl-3 {
    margin-inline-start: 12px !important;
  }
  .ms-xl-4 {
    margin-inline-start: 16px !important;
  }
  .ms-xl-5 {
    margin-inline-start: 20px !important;
  }
  .ms-xl-6 {
    margin-inline-start: 24px !important;
  }
  .ms-xl-7 {
    margin-inline-start: 28px !important;
  }
  .ms-xl-8 {
    margin-inline-start: 32px !important;
  }
  .ms-xl-9 {
    margin-inline-start: 36px !important;
  }
  .ms-xl-10 {
    margin-inline-start: 40px !important;
  }
  .ms-xl-11 {
    margin-inline-start: 44px !important;
  }
  .ms-xl-12 {
    margin-inline-start: 48px !important;
  }
  .ms-xl-13 {
    margin-inline-start: 52px !important;
  }
  .ms-xl-14 {
    margin-inline-start: 56px !important;
  }
  .ms-xl-15 {
    margin-inline-start: 60px !important;
  }
  .ms-xl-16 {
    margin-inline-start: 64px !important;
  }
  .ms-xl-auto {
    margin-inline-start: auto !important;
  }
  .me-xl-0 {
    margin-inline-end: 0px !important;
  }
  .me-xl-1 {
    margin-inline-end: 4px !important;
  }
  .me-xl-2 {
    margin-inline-end: 8px !important;
  }
  .me-xl-3 {
    margin-inline-end: 12px !important;
  }
  .me-xl-4 {
    margin-inline-end: 16px !important;
  }
  .me-xl-5 {
    margin-inline-end: 20px !important;
  }
  .me-xl-6 {
    margin-inline-end: 24px !important;
  }
  .me-xl-7 {
    margin-inline-end: 28px !important;
  }
  .me-xl-8 {
    margin-inline-end: 32px !important;
  }
  .me-xl-9 {
    margin-inline-end: 36px !important;
  }
  .me-xl-10 {
    margin-inline-end: 40px !important;
  }
  .me-xl-11 {
    margin-inline-end: 44px !important;
  }
  .me-xl-12 {
    margin-inline-end: 48px !important;
  }
  .me-xl-13 {
    margin-inline-end: 52px !important;
  }
  .me-xl-14 {
    margin-inline-end: 56px !important;
  }
  .me-xl-15 {
    margin-inline-end: 60px !important;
  }
  .me-xl-16 {
    margin-inline-end: 64px !important;
  }
  .me-xl-auto {
    margin-inline-end: auto !important;
  }
  .ma-xl-n1 {
    margin: -4px !important;
  }
  .ma-xl-n2 {
    margin: -8px !important;
  }
  .ma-xl-n3 {
    margin: -12px !important;
  }
  .ma-xl-n4 {
    margin: -16px !important;
  }
  .ma-xl-n5 {
    margin: -20px !important;
  }
  .ma-xl-n6 {
    margin: -24px !important;
  }
  .ma-xl-n7 {
    margin: -28px !important;
  }
  .ma-xl-n8 {
    margin: -32px !important;
  }
  .ma-xl-n9 {
    margin: -36px !important;
  }
  .ma-xl-n10 {
    margin: -40px !important;
  }
  .ma-xl-n11 {
    margin: -44px !important;
  }
  .ma-xl-n12 {
    margin: -48px !important;
  }
  .ma-xl-n13 {
    margin: -52px !important;
  }
  .ma-xl-n14 {
    margin: -56px !important;
  }
  .ma-xl-n15 {
    margin: -60px !important;
  }
  .ma-xl-n16 {
    margin: -64px !important;
  }
  .mx-xl-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }
  .mx-xl-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }
  .mx-xl-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }
  .mx-xl-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }
  .mx-xl-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }
  .mx-xl-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }
  .mx-xl-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }
  .mx-xl-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }
  .mx-xl-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }
  .mx-xl-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }
  .mx-xl-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }
  .mx-xl-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }
  .mx-xl-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }
  .mx-xl-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }
  .mx-xl-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }
  .mx-xl-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }
  .my-xl-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }
  .my-xl-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }
  .my-xl-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }
  .my-xl-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }
  .my-xl-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }
  .my-xl-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }
  .my-xl-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }
  .my-xl-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }
  .my-xl-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }
  .my-xl-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }
  .my-xl-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }
  .my-xl-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }
  .my-xl-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }
  .my-xl-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }
  .my-xl-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }
  .my-xl-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }
  .mt-xl-n1 {
    margin-top: -4px !important;
  }
  .mt-xl-n2 {
    margin-top: -8px !important;
  }
  .mt-xl-n3 {
    margin-top: -12px !important;
  }
  .mt-xl-n4 {
    margin-top: -16px !important;
  }
  .mt-xl-n5 {
    margin-top: -20px !important;
  }
  .mt-xl-n6 {
    margin-top: -24px !important;
  }
  .mt-xl-n7 {
    margin-top: -28px !important;
  }
  .mt-xl-n8 {
    margin-top: -32px !important;
  }
  .mt-xl-n9 {
    margin-top: -36px !important;
  }
  .mt-xl-n10 {
    margin-top: -40px !important;
  }
  .mt-xl-n11 {
    margin-top: -44px !important;
  }
  .mt-xl-n12 {
    margin-top: -48px !important;
  }
  .mt-xl-n13 {
    margin-top: -52px !important;
  }
  .mt-xl-n14 {
    margin-top: -56px !important;
  }
  .mt-xl-n15 {
    margin-top: -60px !important;
  }
  .mt-xl-n16 {
    margin-top: -64px !important;
  }
  .mr-xl-n1 {
    margin-right: -4px !important;
  }
  .mr-xl-n2 {
    margin-right: -8px !important;
  }
  .mr-xl-n3 {
    margin-right: -12px !important;
  }
  .mr-xl-n4 {
    margin-right: -16px !important;
  }
  .mr-xl-n5 {
    margin-right: -20px !important;
  }
  .mr-xl-n6 {
    margin-right: -24px !important;
  }
  .mr-xl-n7 {
    margin-right: -28px !important;
  }
  .mr-xl-n8 {
    margin-right: -32px !important;
  }
  .mr-xl-n9 {
    margin-right: -36px !important;
  }
  .mr-xl-n10 {
    margin-right: -40px !important;
  }
  .mr-xl-n11 {
    margin-right: -44px !important;
  }
  .mr-xl-n12 {
    margin-right: -48px !important;
  }
  .mr-xl-n13 {
    margin-right: -52px !important;
  }
  .mr-xl-n14 {
    margin-right: -56px !important;
  }
  .mr-xl-n15 {
    margin-right: -60px !important;
  }
  .mr-xl-n16 {
    margin-right: -64px !important;
  }
  .mb-xl-n1 {
    margin-bottom: -4px !important;
  }
  .mb-xl-n2 {
    margin-bottom: -8px !important;
  }
  .mb-xl-n3 {
    margin-bottom: -12px !important;
  }
  .mb-xl-n4 {
    margin-bottom: -16px !important;
  }
  .mb-xl-n5 {
    margin-bottom: -20px !important;
  }
  .mb-xl-n6 {
    margin-bottom: -24px !important;
  }
  .mb-xl-n7 {
    margin-bottom: -28px !important;
  }
  .mb-xl-n8 {
    margin-bottom: -32px !important;
  }
  .mb-xl-n9 {
    margin-bottom: -36px !important;
  }
  .mb-xl-n10 {
    margin-bottom: -40px !important;
  }
  .mb-xl-n11 {
    margin-bottom: -44px !important;
  }
  .mb-xl-n12 {
    margin-bottom: -48px !important;
  }
  .mb-xl-n13 {
    margin-bottom: -52px !important;
  }
  .mb-xl-n14 {
    margin-bottom: -56px !important;
  }
  .mb-xl-n15 {
    margin-bottom: -60px !important;
  }
  .mb-xl-n16 {
    margin-bottom: -64px !important;
  }
  .ml-xl-n1 {
    margin-left: -4px !important;
  }
  .ml-xl-n2 {
    margin-left: -8px !important;
  }
  .ml-xl-n3 {
    margin-left: -12px !important;
  }
  .ml-xl-n4 {
    margin-left: -16px !important;
  }
  .ml-xl-n5 {
    margin-left: -20px !important;
  }
  .ml-xl-n6 {
    margin-left: -24px !important;
  }
  .ml-xl-n7 {
    margin-left: -28px !important;
  }
  .ml-xl-n8 {
    margin-left: -32px !important;
  }
  .ml-xl-n9 {
    margin-left: -36px !important;
  }
  .ml-xl-n10 {
    margin-left: -40px !important;
  }
  .ml-xl-n11 {
    margin-left: -44px !important;
  }
  .ml-xl-n12 {
    margin-left: -48px !important;
  }
  .ml-xl-n13 {
    margin-left: -52px !important;
  }
  .ml-xl-n14 {
    margin-left: -56px !important;
  }
  .ml-xl-n15 {
    margin-left: -60px !important;
  }
  .ml-xl-n16 {
    margin-left: -64px !important;
  }
  .ms-xl-n1 {
    margin-inline-start: -4px !important;
  }
  .ms-xl-n2 {
    margin-inline-start: -8px !important;
  }
  .ms-xl-n3 {
    margin-inline-start: -12px !important;
  }
  .ms-xl-n4 {
    margin-inline-start: -16px !important;
  }
  .ms-xl-n5 {
    margin-inline-start: -20px !important;
  }
  .ms-xl-n6 {
    margin-inline-start: -24px !important;
  }
  .ms-xl-n7 {
    margin-inline-start: -28px !important;
  }
  .ms-xl-n8 {
    margin-inline-start: -32px !important;
  }
  .ms-xl-n9 {
    margin-inline-start: -36px !important;
  }
  .ms-xl-n10 {
    margin-inline-start: -40px !important;
  }
  .ms-xl-n11 {
    margin-inline-start: -44px !important;
  }
  .ms-xl-n12 {
    margin-inline-start: -48px !important;
  }
  .ms-xl-n13 {
    margin-inline-start: -52px !important;
  }
  .ms-xl-n14 {
    margin-inline-start: -56px !important;
  }
  .ms-xl-n15 {
    margin-inline-start: -60px !important;
  }
  .ms-xl-n16 {
    margin-inline-start: -64px !important;
  }
  .me-xl-n1 {
    margin-inline-end: -4px !important;
  }
  .me-xl-n2 {
    margin-inline-end: -8px !important;
  }
  .me-xl-n3 {
    margin-inline-end: -12px !important;
  }
  .me-xl-n4 {
    margin-inline-end: -16px !important;
  }
  .me-xl-n5 {
    margin-inline-end: -20px !important;
  }
  .me-xl-n6 {
    margin-inline-end: -24px !important;
  }
  .me-xl-n7 {
    margin-inline-end: -28px !important;
  }
  .me-xl-n8 {
    margin-inline-end: -32px !important;
  }
  .me-xl-n9 {
    margin-inline-end: -36px !important;
  }
  .me-xl-n10 {
    margin-inline-end: -40px !important;
  }
  .me-xl-n11 {
    margin-inline-end: -44px !important;
  }
  .me-xl-n12 {
    margin-inline-end: -48px !important;
  }
  .me-xl-n13 {
    margin-inline-end: -52px !important;
  }
  .me-xl-n14 {
    margin-inline-end: -56px !important;
  }
  .me-xl-n15 {
    margin-inline-end: -60px !important;
  }
  .me-xl-n16 {
    margin-inline-end: -64px !important;
  }
  .pa-xl-0 {
    padding: 0px !important;
  }
  .pa-xl-1 {
    padding: 4px !important;
  }
  .pa-xl-2 {
    padding: 8px !important;
  }
  .pa-xl-3 {
    padding: 12px !important;
  }
  .pa-xl-4 {
    padding: 16px !important;
  }
  .pa-xl-5 {
    padding: 20px !important;
  }
  .pa-xl-6 {
    padding: 24px !important;
  }
  .pa-xl-7 {
    padding: 28px !important;
  }
  .pa-xl-8 {
    padding: 32px !important;
  }
  .pa-xl-9 {
    padding: 36px !important;
  }
  .pa-xl-10 {
    padding: 40px !important;
  }
  .pa-xl-11 {
    padding: 44px !important;
  }
  .pa-xl-12 {
    padding: 48px !important;
  }
  .pa-xl-13 {
    padding: 52px !important;
  }
  .pa-xl-14 {
    padding: 56px !important;
  }
  .pa-xl-15 {
    padding: 60px !important;
  }
  .pa-xl-16 {
    padding: 64px !important;
  }
  .px-xl-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .px-xl-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-xl-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-xl-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
  .px-xl-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-xl-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .px-xl-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-xl-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }
  .px-xl-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
  .px-xl-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }
  .px-xl-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .px-xl-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }
  .px-xl-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .px-xl-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }
  .px-xl-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }
  .px-xl-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  .px-xl-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  .py-xl-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .py-xl-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-xl-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-xl-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }
  .py-xl-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-xl-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
  .py-xl-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-xl-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }
  .py-xl-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .py-xl-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }
  .py-xl-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .py-xl-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }
  .py-xl-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .py-xl-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }
  .py-xl-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }
  .py-xl-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .py-xl-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pt-xl-0 {
    padding-top: 0px !important;
  }
  .pt-xl-1 {
    padding-top: 4px !important;
  }
  .pt-xl-2 {
    padding-top: 8px !important;
  }
  .pt-xl-3 {
    padding-top: 12px !important;
  }
  .pt-xl-4 {
    padding-top: 16px !important;
  }
  .pt-xl-5 {
    padding-top: 20px !important;
  }
  .pt-xl-6 {
    padding-top: 24px !important;
  }
  .pt-xl-7 {
    padding-top: 28px !important;
  }
  .pt-xl-8 {
    padding-top: 32px !important;
  }
  .pt-xl-9 {
    padding-top: 36px !important;
  }
  .pt-xl-10 {
    padding-top: 40px !important;
  }
  .pt-xl-11 {
    padding-top: 44px !important;
  }
  .pt-xl-12 {
    padding-top: 48px !important;
  }
  .pt-xl-13 {
    padding-top: 52px !important;
  }
  .pt-xl-14 {
    padding-top: 56px !important;
  }
  .pt-xl-15 {
    padding-top: 60px !important;
  }
  .pt-xl-16 {
    padding-top: 64px !important;
  }
  .pr-xl-0 {
    padding-right: 0px !important;
  }
  .pr-xl-1 {
    padding-right: 4px !important;
  }
  .pr-xl-2 {
    padding-right: 8px !important;
  }
  .pr-xl-3 {
    padding-right: 12px !important;
  }
  .pr-xl-4 {
    padding-right: 16px !important;
  }
  .pr-xl-5 {
    padding-right: 20px !important;
  }
  .pr-xl-6 {
    padding-right: 24px !important;
  }
  .pr-xl-7 {
    padding-right: 28px !important;
  }
  .pr-xl-8 {
    padding-right: 32px !important;
  }
  .pr-xl-9 {
    padding-right: 36px !important;
  }
  .pr-xl-10 {
    padding-right: 40px !important;
  }
  .pr-xl-11 {
    padding-right: 44px !important;
  }
  .pr-xl-12 {
    padding-right: 48px !important;
  }
  .pr-xl-13 {
    padding-right: 52px !important;
  }
  .pr-xl-14 {
    padding-right: 56px !important;
  }
  .pr-xl-15 {
    padding-right: 60px !important;
  }
  .pr-xl-16 {
    padding-right: 64px !important;
  }
  .pb-xl-0 {
    padding-bottom: 0px !important;
  }
  .pb-xl-1 {
    padding-bottom: 4px !important;
  }
  .pb-xl-2 {
    padding-bottom: 8px !important;
  }
  .pb-xl-3 {
    padding-bottom: 12px !important;
  }
  .pb-xl-4 {
    padding-bottom: 16px !important;
  }
  .pb-xl-5 {
    padding-bottom: 20px !important;
  }
  .pb-xl-6 {
    padding-bottom: 24px !important;
  }
  .pb-xl-7 {
    padding-bottom: 28px !important;
  }
  .pb-xl-8 {
    padding-bottom: 32px !important;
  }
  .pb-xl-9 {
    padding-bottom: 36px !important;
  }
  .pb-xl-10 {
    padding-bottom: 40px !important;
  }
  .pb-xl-11 {
    padding-bottom: 44px !important;
  }
  .pb-xl-12 {
    padding-bottom: 48px !important;
  }
  .pb-xl-13 {
    padding-bottom: 52px !important;
  }
  .pb-xl-14 {
    padding-bottom: 56px !important;
  }
  .pb-xl-15 {
    padding-bottom: 60px !important;
  }
  .pb-xl-16 {
    padding-bottom: 64px !important;
  }
  .pl-xl-0 {
    padding-left: 0px !important;
  }
  .pl-xl-1 {
    padding-left: 4px !important;
  }
  .pl-xl-2 {
    padding-left: 8px !important;
  }
  .pl-xl-3 {
    padding-left: 12px !important;
  }
  .pl-xl-4 {
    padding-left: 16px !important;
  }
  .pl-xl-5 {
    padding-left: 20px !important;
  }
  .pl-xl-6 {
    padding-left: 24px !important;
  }
  .pl-xl-7 {
    padding-left: 28px !important;
  }
  .pl-xl-8 {
    padding-left: 32px !important;
  }
  .pl-xl-9 {
    padding-left: 36px !important;
  }
  .pl-xl-10 {
    padding-left: 40px !important;
  }
  .pl-xl-11 {
    padding-left: 44px !important;
  }
  .pl-xl-12 {
    padding-left: 48px !important;
  }
  .pl-xl-13 {
    padding-left: 52px !important;
  }
  .pl-xl-14 {
    padding-left: 56px !important;
  }
  .pl-xl-15 {
    padding-left: 60px !important;
  }
  .pl-xl-16 {
    padding-left: 64px !important;
  }
  .ps-xl-0 {
    padding-inline-start: 0px !important;
  }
  .ps-xl-1 {
    padding-inline-start: 4px !important;
  }
  .ps-xl-2 {
    padding-inline-start: 8px !important;
  }
  .ps-xl-3 {
    padding-inline-start: 12px !important;
  }
  .ps-xl-4 {
    padding-inline-start: 16px !important;
  }
  .ps-xl-5 {
    padding-inline-start: 20px !important;
  }
  .ps-xl-6 {
    padding-inline-start: 24px !important;
  }
  .ps-xl-7 {
    padding-inline-start: 28px !important;
  }
  .ps-xl-8 {
    padding-inline-start: 32px !important;
  }
  .ps-xl-9 {
    padding-inline-start: 36px !important;
  }
  .ps-xl-10 {
    padding-inline-start: 40px !important;
  }
  .ps-xl-11 {
    padding-inline-start: 44px !important;
  }
  .ps-xl-12 {
    padding-inline-start: 48px !important;
  }
  .ps-xl-13 {
    padding-inline-start: 52px !important;
  }
  .ps-xl-14 {
    padding-inline-start: 56px !important;
  }
  .ps-xl-15 {
    padding-inline-start: 60px !important;
  }
  .ps-xl-16 {
    padding-inline-start: 64px !important;
  }
  .pe-xl-0 {
    padding-inline-end: 0px !important;
  }
  .pe-xl-1 {
    padding-inline-end: 4px !important;
  }
  .pe-xl-2 {
    padding-inline-end: 8px !important;
  }
  .pe-xl-3 {
    padding-inline-end: 12px !important;
  }
  .pe-xl-4 {
    padding-inline-end: 16px !important;
  }
  .pe-xl-5 {
    padding-inline-end: 20px !important;
  }
  .pe-xl-6 {
    padding-inline-end: 24px !important;
  }
  .pe-xl-7 {
    padding-inline-end: 28px !important;
  }
  .pe-xl-8 {
    padding-inline-end: 32px !important;
  }
  .pe-xl-9 {
    padding-inline-end: 36px !important;
  }
  .pe-xl-10 {
    padding-inline-end: 40px !important;
  }
  .pe-xl-11 {
    padding-inline-end: 44px !important;
  }
  .pe-xl-12 {
    padding-inline-end: 48px !important;
  }
  .pe-xl-13 {
    padding-inline-end: 52px !important;
  }
  .pe-xl-14 {
    padding-inline-end: 56px !important;
  }
  .pe-xl-15 {
    padding-inline-end: 60px !important;
  }
  .pe-xl-16 {
    padding-inline-end: 64px !important;
  }
  .text-xl-left {
    text-align: left !important;
  }
  .text-xl-right {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
  .text-xl-justify {
    text-align: justify !important;
  }
  .text-xl-start {
    text-align: start !important;
  }
  .text-xl-end {
    text-align: end !important;
  }
  .text-xl-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
  .text-xl-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xl-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
}
@media (min-width: 2560px) {
  .d-xxl-none {
    display: none !important;
  }
  .d-xxl-inline {
    display: inline !important;
  }
  .d-xxl-inline-block {
    display: inline-block !important;
  }
  .d-xxl-block {
    display: block !important;
  }
  .d-xxl-table {
    display: table !important;
  }
  .d-xxl-table-row {
    display: table-row !important;
  }
  .d-xxl-table-cell {
    display: table-cell !important;
  }
  .d-xxl-flex {
    display: flex !important;
  }
  .d-xxl-inline-flex {
    display: inline-flex !important;
  }
  .float-xxl-none {
    float: none !important;
  }
  .float-xxl-left {
    float: left !important;
  }
  .float-xxl-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-xxl-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-xxl-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-xxl-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-xxl-start {
    float: left !important;
  }
  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xxl-row {
    flex-direction: row !important;
  }
  .flex-xxl-column {
    flex-direction: column !important;
  }
  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-xxl-start {
    justify-content: flex-start !important;
  }
  .justify-xxl-end {
    justify-content: flex-end !important;
  }
  .justify-xxl-center {
    justify-content: center !important;
  }
  .justify-xxl-space-between {
    justify-content: space-between !important;
  }
  .justify-xxl-space-around {
    justify-content: space-around !important;
  }
  .justify-xxl-space-evenly {
    justify-content: space-evenly !important;
  }
  .align-xxl-start {
    align-items: flex-start !important;
  }
  .align-xxl-end {
    align-items: flex-end !important;
  }
  .align-xxl-center {
    align-items: center !important;
  }
  .align-xxl-baseline {
    align-items: baseline !important;
  }
  .align-xxl-stretch {
    align-items: stretch !important;
  }
  .align-content-xxl-start {
    align-content: flex-start !important;
  }
  .align-content-xxl-end {
    align-content: flex-end !important;
  }
  .align-content-xxl-center {
    align-content: center !important;
  }
  .align-content-xxl-space-between {
    align-content: space-between !important;
  }
  .align-content-xxl-space-around {
    align-content: space-around !important;
  }
  .align-content-xxl-space-evenly {
    align-content: space-evenly !important;
  }
  .align-content-xxl-stretch {
    align-content: stretch !important;
  }
  .align-self-xxl-auto {
    align-self: auto !important;
  }
  .align-self-xxl-start {
    align-self: flex-start !important;
  }
  .align-self-xxl-end {
    align-self: flex-end !important;
  }
  .align-self-xxl-center {
    align-self: center !important;
  }
  .align-self-xxl-baseline {
    align-self: baseline !important;
  }
  .align-self-xxl-stretch {
    align-self: stretch !important;
  }
  .order-xxl-first {
    order: -1 !important;
  }
  .order-xxl-0 {
    order: 0 !important;
  }
  .order-xxl-1 {
    order: 1 !important;
  }
  .order-xxl-2 {
    order: 2 !important;
  }
  .order-xxl-3 {
    order: 3 !important;
  }
  .order-xxl-4 {
    order: 4 !important;
  }
  .order-xxl-5 {
    order: 5 !important;
  }
  .order-xxl-6 {
    order: 6 !important;
  }
  .order-xxl-7 {
    order: 7 !important;
  }
  .order-xxl-8 {
    order: 8 !important;
  }
  .order-xxl-9 {
    order: 9 !important;
  }
  .order-xxl-10 {
    order: 10 !important;
  }
  .order-xxl-11 {
    order: 11 !important;
  }
  .order-xxl-12 {
    order: 12 !important;
  }
  .order-xxl-last {
    order: 13 !important;
  }
  .ma-xxl-0 {
    margin: 0px !important;
  }
  .ma-xxl-1 {
    margin: 4px !important;
  }
  .ma-xxl-2 {
    margin: 8px !important;
  }
  .ma-xxl-3 {
    margin: 12px !important;
  }
  .ma-xxl-4 {
    margin: 16px !important;
  }
  .ma-xxl-5 {
    margin: 20px !important;
  }
  .ma-xxl-6 {
    margin: 24px !important;
  }
  .ma-xxl-7 {
    margin: 28px !important;
  }
  .ma-xxl-8 {
    margin: 32px !important;
  }
  .ma-xxl-9 {
    margin: 36px !important;
  }
  .ma-xxl-10 {
    margin: 40px !important;
  }
  .ma-xxl-11 {
    margin: 44px !important;
  }
  .ma-xxl-12 {
    margin: 48px !important;
  }
  .ma-xxl-13 {
    margin: 52px !important;
  }
  .ma-xxl-14 {
    margin: 56px !important;
  }
  .ma-xxl-15 {
    margin: 60px !important;
  }
  .ma-xxl-16 {
    margin: 64px !important;
  }
  .ma-xxl-auto {
    margin: auto !important;
  }
  .mx-xxl-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .mx-xxl-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-xxl-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-xxl-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
  .mx-xxl-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-xxl-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
  .mx-xxl-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-xxl-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }
  .mx-xxl-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }
  .mx-xxl-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }
  .mx-xxl-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }
  .mx-xxl-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }
  .mx-xxl-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-xxl-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }
  .mx-xxl-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }
  .mx-xxl-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
  .mx-xxl-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }
  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xxl-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .my-xxl-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-xxl-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-xxl-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
  .my-xxl-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-xxl-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  .my-xxl-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-xxl-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }
  .my-xxl-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .my-xxl-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }
  .my-xxl-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .my-xxl-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }
  .my-xxl-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-xxl-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }
  .my-xxl-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }
  .my-xxl-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }
  .my-xxl-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }
  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xxl-0 {
    margin-top: 0px !important;
  }
  .mt-xxl-1 {
    margin-top: 4px !important;
  }
  .mt-xxl-2 {
    margin-top: 8px !important;
  }
  .mt-xxl-3 {
    margin-top: 12px !important;
  }
  .mt-xxl-4 {
    margin-top: 16px !important;
  }
  .mt-xxl-5 {
    margin-top: 20px !important;
  }
  .mt-xxl-6 {
    margin-top: 24px !important;
  }
  .mt-xxl-7 {
    margin-top: 28px !important;
  }
  .mt-xxl-8 {
    margin-top: 32px !important;
  }
  .mt-xxl-9 {
    margin-top: 36px !important;
  }
  .mt-xxl-10 {
    margin-top: 40px !important;
  }
  .mt-xxl-11 {
    margin-top: 44px !important;
  }
  .mt-xxl-12 {
    margin-top: 48px !important;
  }
  .mt-xxl-13 {
    margin-top: 52px !important;
  }
  .mt-xxl-14 {
    margin-top: 56px !important;
  }
  .mt-xxl-15 {
    margin-top: 60px !important;
  }
  .mt-xxl-16 {
    margin-top: 64px !important;
  }
  .mt-xxl-auto {
    margin-top: auto !important;
  }
  .mr-xxl-0 {
    margin-right: 0px !important;
  }
  .mr-xxl-1 {
    margin-right: 4px !important;
  }
  .mr-xxl-2 {
    margin-right: 8px !important;
  }
  .mr-xxl-3 {
    margin-right: 12px !important;
  }
  .mr-xxl-4 {
    margin-right: 16px !important;
  }
  .mr-xxl-5 {
    margin-right: 20px !important;
  }
  .mr-xxl-6 {
    margin-right: 24px !important;
  }
  .mr-xxl-7 {
    margin-right: 28px !important;
  }
  .mr-xxl-8 {
    margin-right: 32px !important;
  }
  .mr-xxl-9 {
    margin-right: 36px !important;
  }
  .mr-xxl-10 {
    margin-right: 40px !important;
  }
  .mr-xxl-11 {
    margin-right: 44px !important;
  }
  .mr-xxl-12 {
    margin-right: 48px !important;
  }
  .mr-xxl-13 {
    margin-right: 52px !important;
  }
  .mr-xxl-14 {
    margin-right: 56px !important;
  }
  .mr-xxl-15 {
    margin-right: 60px !important;
  }
  .mr-xxl-16 {
    margin-right: 64px !important;
  }
  .mr-xxl-auto {
    margin-right: auto !important;
  }
  .mb-xxl-0 {
    margin-bottom: 0px !important;
  }
  .mb-xxl-1 {
    margin-bottom: 4px !important;
  }
  .mb-xxl-2 {
    margin-bottom: 8px !important;
  }
  .mb-xxl-3 {
    margin-bottom: 12px !important;
  }
  .mb-xxl-4 {
    margin-bottom: 16px !important;
  }
  .mb-xxl-5 {
    margin-bottom: 20px !important;
  }
  .mb-xxl-6 {
    margin-bottom: 24px !important;
  }
  .mb-xxl-7 {
    margin-bottom: 28px !important;
  }
  .mb-xxl-8 {
    margin-bottom: 32px !important;
  }
  .mb-xxl-9 {
    margin-bottom: 36px !important;
  }
  .mb-xxl-10 {
    margin-bottom: 40px !important;
  }
  .mb-xxl-11 {
    margin-bottom: 44px !important;
  }
  .mb-xxl-12 {
    margin-bottom: 48px !important;
  }
  .mb-xxl-13 {
    margin-bottom: 52px !important;
  }
  .mb-xxl-14 {
    margin-bottom: 56px !important;
  }
  .mb-xxl-15 {
    margin-bottom: 60px !important;
  }
  .mb-xxl-16 {
    margin-bottom: 64px !important;
  }
  .mb-xxl-auto {
    margin-bottom: auto !important;
  }
  .ml-xxl-0 {
    margin-left: 0px !important;
  }
  .ml-xxl-1 {
    margin-left: 4px !important;
  }
  .ml-xxl-2 {
    margin-left: 8px !important;
  }
  .ml-xxl-3 {
    margin-left: 12px !important;
  }
  .ml-xxl-4 {
    margin-left: 16px !important;
  }
  .ml-xxl-5 {
    margin-left: 20px !important;
  }
  .ml-xxl-6 {
    margin-left: 24px !important;
  }
  .ml-xxl-7 {
    margin-left: 28px !important;
  }
  .ml-xxl-8 {
    margin-left: 32px !important;
  }
  .ml-xxl-9 {
    margin-left: 36px !important;
  }
  .ml-xxl-10 {
    margin-left: 40px !important;
  }
  .ml-xxl-11 {
    margin-left: 44px !important;
  }
  .ml-xxl-12 {
    margin-left: 48px !important;
  }
  .ml-xxl-13 {
    margin-left: 52px !important;
  }
  .ml-xxl-14 {
    margin-left: 56px !important;
  }
  .ml-xxl-15 {
    margin-left: 60px !important;
  }
  .ml-xxl-16 {
    margin-left: 64px !important;
  }
  .ml-xxl-auto {
    margin-left: auto !important;
  }
  .ms-xxl-0 {
    margin-inline-start: 0px !important;
  }
  .ms-xxl-1 {
    margin-inline-start: 4px !important;
  }
  .ms-xxl-2 {
    margin-inline-start: 8px !important;
  }
  .ms-xxl-3 {
    margin-inline-start: 12px !important;
  }
  .ms-xxl-4 {
    margin-inline-start: 16px !important;
  }
  .ms-xxl-5 {
    margin-inline-start: 20px !important;
  }
  .ms-xxl-6 {
    margin-inline-start: 24px !important;
  }
  .ms-xxl-7 {
    margin-inline-start: 28px !important;
  }
  .ms-xxl-8 {
    margin-inline-start: 32px !important;
  }
  .ms-xxl-9 {
    margin-inline-start: 36px !important;
  }
  .ms-xxl-10 {
    margin-inline-start: 40px !important;
  }
  .ms-xxl-11 {
    margin-inline-start: 44px !important;
  }
  .ms-xxl-12 {
    margin-inline-start: 48px !important;
  }
  .ms-xxl-13 {
    margin-inline-start: 52px !important;
  }
  .ms-xxl-14 {
    margin-inline-start: 56px !important;
  }
  .ms-xxl-15 {
    margin-inline-start: 60px !important;
  }
  .ms-xxl-16 {
    margin-inline-start: 64px !important;
  }
  .ms-xxl-auto {
    margin-inline-start: auto !important;
  }
  .me-xxl-0 {
    margin-inline-end: 0px !important;
  }
  .me-xxl-1 {
    margin-inline-end: 4px !important;
  }
  .me-xxl-2 {
    margin-inline-end: 8px !important;
  }
  .me-xxl-3 {
    margin-inline-end: 12px !important;
  }
  .me-xxl-4 {
    margin-inline-end: 16px !important;
  }
  .me-xxl-5 {
    margin-inline-end: 20px !important;
  }
  .me-xxl-6 {
    margin-inline-end: 24px !important;
  }
  .me-xxl-7 {
    margin-inline-end: 28px !important;
  }
  .me-xxl-8 {
    margin-inline-end: 32px !important;
  }
  .me-xxl-9 {
    margin-inline-end: 36px !important;
  }
  .me-xxl-10 {
    margin-inline-end: 40px !important;
  }
  .me-xxl-11 {
    margin-inline-end: 44px !important;
  }
  .me-xxl-12 {
    margin-inline-end: 48px !important;
  }
  .me-xxl-13 {
    margin-inline-end: 52px !important;
  }
  .me-xxl-14 {
    margin-inline-end: 56px !important;
  }
  .me-xxl-15 {
    margin-inline-end: 60px !important;
  }
  .me-xxl-16 {
    margin-inline-end: 64px !important;
  }
  .me-xxl-auto {
    margin-inline-end: auto !important;
  }
  .ma-xxl-n1 {
    margin: -4px !important;
  }
  .ma-xxl-n2 {
    margin: -8px !important;
  }
  .ma-xxl-n3 {
    margin: -12px !important;
  }
  .ma-xxl-n4 {
    margin: -16px !important;
  }
  .ma-xxl-n5 {
    margin: -20px !important;
  }
  .ma-xxl-n6 {
    margin: -24px !important;
  }
  .ma-xxl-n7 {
    margin: -28px !important;
  }
  .ma-xxl-n8 {
    margin: -32px !important;
  }
  .ma-xxl-n9 {
    margin: -36px !important;
  }
  .ma-xxl-n10 {
    margin: -40px !important;
  }
  .ma-xxl-n11 {
    margin: -44px !important;
  }
  .ma-xxl-n12 {
    margin: -48px !important;
  }
  .ma-xxl-n13 {
    margin: -52px !important;
  }
  .ma-xxl-n14 {
    margin: -56px !important;
  }
  .ma-xxl-n15 {
    margin: -60px !important;
  }
  .ma-xxl-n16 {
    margin: -64px !important;
  }
  .mx-xxl-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }
  .mx-xxl-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }
  .mx-xxl-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }
  .mx-xxl-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }
  .mx-xxl-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }
  .mx-xxl-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }
  .mx-xxl-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }
  .mx-xxl-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }
  .mx-xxl-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }
  .mx-xxl-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }
  .mx-xxl-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }
  .mx-xxl-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }
  .mx-xxl-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }
  .mx-xxl-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }
  .mx-xxl-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }
  .mx-xxl-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }
  .my-xxl-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }
  .my-xxl-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }
  .my-xxl-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }
  .my-xxl-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }
  .my-xxl-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }
  .my-xxl-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }
  .my-xxl-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }
  .my-xxl-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }
  .my-xxl-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }
  .my-xxl-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }
  .my-xxl-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }
  .my-xxl-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }
  .my-xxl-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }
  .my-xxl-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }
  .my-xxl-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }
  .my-xxl-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }
  .mt-xxl-n1 {
    margin-top: -4px !important;
  }
  .mt-xxl-n2 {
    margin-top: -8px !important;
  }
  .mt-xxl-n3 {
    margin-top: -12px !important;
  }
  .mt-xxl-n4 {
    margin-top: -16px !important;
  }
  .mt-xxl-n5 {
    margin-top: -20px !important;
  }
  .mt-xxl-n6 {
    margin-top: -24px !important;
  }
  .mt-xxl-n7 {
    margin-top: -28px !important;
  }
  .mt-xxl-n8 {
    margin-top: -32px !important;
  }
  .mt-xxl-n9 {
    margin-top: -36px !important;
  }
  .mt-xxl-n10 {
    margin-top: -40px !important;
  }
  .mt-xxl-n11 {
    margin-top: -44px !important;
  }
  .mt-xxl-n12 {
    margin-top: -48px !important;
  }
  .mt-xxl-n13 {
    margin-top: -52px !important;
  }
  .mt-xxl-n14 {
    margin-top: -56px !important;
  }
  .mt-xxl-n15 {
    margin-top: -60px !important;
  }
  .mt-xxl-n16 {
    margin-top: -64px !important;
  }
  .mr-xxl-n1 {
    margin-right: -4px !important;
  }
  .mr-xxl-n2 {
    margin-right: -8px !important;
  }
  .mr-xxl-n3 {
    margin-right: -12px !important;
  }
  .mr-xxl-n4 {
    margin-right: -16px !important;
  }
  .mr-xxl-n5 {
    margin-right: -20px !important;
  }
  .mr-xxl-n6 {
    margin-right: -24px !important;
  }
  .mr-xxl-n7 {
    margin-right: -28px !important;
  }
  .mr-xxl-n8 {
    margin-right: -32px !important;
  }
  .mr-xxl-n9 {
    margin-right: -36px !important;
  }
  .mr-xxl-n10 {
    margin-right: -40px !important;
  }
  .mr-xxl-n11 {
    margin-right: -44px !important;
  }
  .mr-xxl-n12 {
    margin-right: -48px !important;
  }
  .mr-xxl-n13 {
    margin-right: -52px !important;
  }
  .mr-xxl-n14 {
    margin-right: -56px !important;
  }
  .mr-xxl-n15 {
    margin-right: -60px !important;
  }
  .mr-xxl-n16 {
    margin-right: -64px !important;
  }
  .mb-xxl-n1 {
    margin-bottom: -4px !important;
  }
  .mb-xxl-n2 {
    margin-bottom: -8px !important;
  }
  .mb-xxl-n3 {
    margin-bottom: -12px !important;
  }
  .mb-xxl-n4 {
    margin-bottom: -16px !important;
  }
  .mb-xxl-n5 {
    margin-bottom: -20px !important;
  }
  .mb-xxl-n6 {
    margin-bottom: -24px !important;
  }
  .mb-xxl-n7 {
    margin-bottom: -28px !important;
  }
  .mb-xxl-n8 {
    margin-bottom: -32px !important;
  }
  .mb-xxl-n9 {
    margin-bottom: -36px !important;
  }
  .mb-xxl-n10 {
    margin-bottom: -40px !important;
  }
  .mb-xxl-n11 {
    margin-bottom: -44px !important;
  }
  .mb-xxl-n12 {
    margin-bottom: -48px !important;
  }
  .mb-xxl-n13 {
    margin-bottom: -52px !important;
  }
  .mb-xxl-n14 {
    margin-bottom: -56px !important;
  }
  .mb-xxl-n15 {
    margin-bottom: -60px !important;
  }
  .mb-xxl-n16 {
    margin-bottom: -64px !important;
  }
  .ml-xxl-n1 {
    margin-left: -4px !important;
  }
  .ml-xxl-n2 {
    margin-left: -8px !important;
  }
  .ml-xxl-n3 {
    margin-left: -12px !important;
  }
  .ml-xxl-n4 {
    margin-left: -16px !important;
  }
  .ml-xxl-n5 {
    margin-left: -20px !important;
  }
  .ml-xxl-n6 {
    margin-left: -24px !important;
  }
  .ml-xxl-n7 {
    margin-left: -28px !important;
  }
  .ml-xxl-n8 {
    margin-left: -32px !important;
  }
  .ml-xxl-n9 {
    margin-left: -36px !important;
  }
  .ml-xxl-n10 {
    margin-left: -40px !important;
  }
  .ml-xxl-n11 {
    margin-left: -44px !important;
  }
  .ml-xxl-n12 {
    margin-left: -48px !important;
  }
  .ml-xxl-n13 {
    margin-left: -52px !important;
  }
  .ml-xxl-n14 {
    margin-left: -56px !important;
  }
  .ml-xxl-n15 {
    margin-left: -60px !important;
  }
  .ml-xxl-n16 {
    margin-left: -64px !important;
  }
  .ms-xxl-n1 {
    margin-inline-start: -4px !important;
  }
  .ms-xxl-n2 {
    margin-inline-start: -8px !important;
  }
  .ms-xxl-n3 {
    margin-inline-start: -12px !important;
  }
  .ms-xxl-n4 {
    margin-inline-start: -16px !important;
  }
  .ms-xxl-n5 {
    margin-inline-start: -20px !important;
  }
  .ms-xxl-n6 {
    margin-inline-start: -24px !important;
  }
  .ms-xxl-n7 {
    margin-inline-start: -28px !important;
  }
  .ms-xxl-n8 {
    margin-inline-start: -32px !important;
  }
  .ms-xxl-n9 {
    margin-inline-start: -36px !important;
  }
  .ms-xxl-n10 {
    margin-inline-start: -40px !important;
  }
  .ms-xxl-n11 {
    margin-inline-start: -44px !important;
  }
  .ms-xxl-n12 {
    margin-inline-start: -48px !important;
  }
  .ms-xxl-n13 {
    margin-inline-start: -52px !important;
  }
  .ms-xxl-n14 {
    margin-inline-start: -56px !important;
  }
  .ms-xxl-n15 {
    margin-inline-start: -60px !important;
  }
  .ms-xxl-n16 {
    margin-inline-start: -64px !important;
  }
  .me-xxl-n1 {
    margin-inline-end: -4px !important;
  }
  .me-xxl-n2 {
    margin-inline-end: -8px !important;
  }
  .me-xxl-n3 {
    margin-inline-end: -12px !important;
  }
  .me-xxl-n4 {
    margin-inline-end: -16px !important;
  }
  .me-xxl-n5 {
    margin-inline-end: -20px !important;
  }
  .me-xxl-n6 {
    margin-inline-end: -24px !important;
  }
  .me-xxl-n7 {
    margin-inline-end: -28px !important;
  }
  .me-xxl-n8 {
    margin-inline-end: -32px !important;
  }
  .me-xxl-n9 {
    margin-inline-end: -36px !important;
  }
  .me-xxl-n10 {
    margin-inline-end: -40px !important;
  }
  .me-xxl-n11 {
    margin-inline-end: -44px !important;
  }
  .me-xxl-n12 {
    margin-inline-end: -48px !important;
  }
  .me-xxl-n13 {
    margin-inline-end: -52px !important;
  }
  .me-xxl-n14 {
    margin-inline-end: -56px !important;
  }
  .me-xxl-n15 {
    margin-inline-end: -60px !important;
  }
  .me-xxl-n16 {
    margin-inline-end: -64px !important;
  }
  .pa-xxl-0 {
    padding: 0px !important;
  }
  .pa-xxl-1 {
    padding: 4px !important;
  }
  .pa-xxl-2 {
    padding: 8px !important;
  }
  .pa-xxl-3 {
    padding: 12px !important;
  }
  .pa-xxl-4 {
    padding: 16px !important;
  }
  .pa-xxl-5 {
    padding: 20px !important;
  }
  .pa-xxl-6 {
    padding: 24px !important;
  }
  .pa-xxl-7 {
    padding: 28px !important;
  }
  .pa-xxl-8 {
    padding: 32px !important;
  }
  .pa-xxl-9 {
    padding: 36px !important;
  }
  .pa-xxl-10 {
    padding: 40px !important;
  }
  .pa-xxl-11 {
    padding: 44px !important;
  }
  .pa-xxl-12 {
    padding: 48px !important;
  }
  .pa-xxl-13 {
    padding: 52px !important;
  }
  .pa-xxl-14 {
    padding: 56px !important;
  }
  .pa-xxl-15 {
    padding: 60px !important;
  }
  .pa-xxl-16 {
    padding: 64px !important;
  }
  .px-xxl-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .px-xxl-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-xxl-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-xxl-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
  .px-xxl-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-xxl-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .px-xxl-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-xxl-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }
  .px-xxl-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
  .px-xxl-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }
  .px-xxl-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .px-xxl-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }
  .px-xxl-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .px-xxl-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }
  .px-xxl-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }
  .px-xxl-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  .px-xxl-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }
  .py-xxl-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .py-xxl-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-xxl-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-xxl-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }
  .py-xxl-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-xxl-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
  .py-xxl-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-xxl-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }
  .py-xxl-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .py-xxl-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }
  .py-xxl-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .py-xxl-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }
  .py-xxl-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .py-xxl-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }
  .py-xxl-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }
  .py-xxl-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
  .py-xxl-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pt-xxl-0 {
    padding-top: 0px !important;
  }
  .pt-xxl-1 {
    padding-top: 4px !important;
  }
  .pt-xxl-2 {
    padding-top: 8px !important;
  }
  .pt-xxl-3 {
    padding-top: 12px !important;
  }
  .pt-xxl-4 {
    padding-top: 16px !important;
  }
  .pt-xxl-5 {
    padding-top: 20px !important;
  }
  .pt-xxl-6 {
    padding-top: 24px !important;
  }
  .pt-xxl-7 {
    padding-top: 28px !important;
  }
  .pt-xxl-8 {
    padding-top: 32px !important;
  }
  .pt-xxl-9 {
    padding-top: 36px !important;
  }
  .pt-xxl-10 {
    padding-top: 40px !important;
  }
  .pt-xxl-11 {
    padding-top: 44px !important;
  }
  .pt-xxl-12 {
    padding-top: 48px !important;
  }
  .pt-xxl-13 {
    padding-top: 52px !important;
  }
  .pt-xxl-14 {
    padding-top: 56px !important;
  }
  .pt-xxl-15 {
    padding-top: 60px !important;
  }
  .pt-xxl-16 {
    padding-top: 64px !important;
  }
  .pr-xxl-0 {
    padding-right: 0px !important;
  }
  .pr-xxl-1 {
    padding-right: 4px !important;
  }
  .pr-xxl-2 {
    padding-right: 8px !important;
  }
  .pr-xxl-3 {
    padding-right: 12px !important;
  }
  .pr-xxl-4 {
    padding-right: 16px !important;
  }
  .pr-xxl-5 {
    padding-right: 20px !important;
  }
  .pr-xxl-6 {
    padding-right: 24px !important;
  }
  .pr-xxl-7 {
    padding-right: 28px !important;
  }
  .pr-xxl-8 {
    padding-right: 32px !important;
  }
  .pr-xxl-9 {
    padding-right: 36px !important;
  }
  .pr-xxl-10 {
    padding-right: 40px !important;
  }
  .pr-xxl-11 {
    padding-right: 44px !important;
  }
  .pr-xxl-12 {
    padding-right: 48px !important;
  }
  .pr-xxl-13 {
    padding-right: 52px !important;
  }
  .pr-xxl-14 {
    padding-right: 56px !important;
  }
  .pr-xxl-15 {
    padding-right: 60px !important;
  }
  .pr-xxl-16 {
    padding-right: 64px !important;
  }
  .pb-xxl-0 {
    padding-bottom: 0px !important;
  }
  .pb-xxl-1 {
    padding-bottom: 4px !important;
  }
  .pb-xxl-2 {
    padding-bottom: 8px !important;
  }
  .pb-xxl-3 {
    padding-bottom: 12px !important;
  }
  .pb-xxl-4 {
    padding-bottom: 16px !important;
  }
  .pb-xxl-5 {
    padding-bottom: 20px !important;
  }
  .pb-xxl-6 {
    padding-bottom: 24px !important;
  }
  .pb-xxl-7 {
    padding-bottom: 28px !important;
  }
  .pb-xxl-8 {
    padding-bottom: 32px !important;
  }
  .pb-xxl-9 {
    padding-bottom: 36px !important;
  }
  .pb-xxl-10 {
    padding-bottom: 40px !important;
  }
  .pb-xxl-11 {
    padding-bottom: 44px !important;
  }
  .pb-xxl-12 {
    padding-bottom: 48px !important;
  }
  .pb-xxl-13 {
    padding-bottom: 52px !important;
  }
  .pb-xxl-14 {
    padding-bottom: 56px !important;
  }
  .pb-xxl-15 {
    padding-bottom: 60px !important;
  }
  .pb-xxl-16 {
    padding-bottom: 64px !important;
  }
  .pl-xxl-0 {
    padding-left: 0px !important;
  }
  .pl-xxl-1 {
    padding-left: 4px !important;
  }
  .pl-xxl-2 {
    padding-left: 8px !important;
  }
  .pl-xxl-3 {
    padding-left: 12px !important;
  }
  .pl-xxl-4 {
    padding-left: 16px !important;
  }
  .pl-xxl-5 {
    padding-left: 20px !important;
  }
  .pl-xxl-6 {
    padding-left: 24px !important;
  }
  .pl-xxl-7 {
    padding-left: 28px !important;
  }
  .pl-xxl-8 {
    padding-left: 32px !important;
  }
  .pl-xxl-9 {
    padding-left: 36px !important;
  }
  .pl-xxl-10 {
    padding-left: 40px !important;
  }
  .pl-xxl-11 {
    padding-left: 44px !important;
  }
  .pl-xxl-12 {
    padding-left: 48px !important;
  }
  .pl-xxl-13 {
    padding-left: 52px !important;
  }
  .pl-xxl-14 {
    padding-left: 56px !important;
  }
  .pl-xxl-15 {
    padding-left: 60px !important;
  }
  .pl-xxl-16 {
    padding-left: 64px !important;
  }
  .ps-xxl-0 {
    padding-inline-start: 0px !important;
  }
  .ps-xxl-1 {
    padding-inline-start: 4px !important;
  }
  .ps-xxl-2 {
    padding-inline-start: 8px !important;
  }
  .ps-xxl-3 {
    padding-inline-start: 12px !important;
  }
  .ps-xxl-4 {
    padding-inline-start: 16px !important;
  }
  .ps-xxl-5 {
    padding-inline-start: 20px !important;
  }
  .ps-xxl-6 {
    padding-inline-start: 24px !important;
  }
  .ps-xxl-7 {
    padding-inline-start: 28px !important;
  }
  .ps-xxl-8 {
    padding-inline-start: 32px !important;
  }
  .ps-xxl-9 {
    padding-inline-start: 36px !important;
  }
  .ps-xxl-10 {
    padding-inline-start: 40px !important;
  }
  .ps-xxl-11 {
    padding-inline-start: 44px !important;
  }
  .ps-xxl-12 {
    padding-inline-start: 48px !important;
  }
  .ps-xxl-13 {
    padding-inline-start: 52px !important;
  }
  .ps-xxl-14 {
    padding-inline-start: 56px !important;
  }
  .ps-xxl-15 {
    padding-inline-start: 60px !important;
  }
  .ps-xxl-16 {
    padding-inline-start: 64px !important;
  }
  .pe-xxl-0 {
    padding-inline-end: 0px !important;
  }
  .pe-xxl-1 {
    padding-inline-end: 4px !important;
  }
  .pe-xxl-2 {
    padding-inline-end: 8px !important;
  }
  .pe-xxl-3 {
    padding-inline-end: 12px !important;
  }
  .pe-xxl-4 {
    padding-inline-end: 16px !important;
  }
  .pe-xxl-5 {
    padding-inline-end: 20px !important;
  }
  .pe-xxl-6 {
    padding-inline-end: 24px !important;
  }
  .pe-xxl-7 {
    padding-inline-end: 28px !important;
  }
  .pe-xxl-8 {
    padding-inline-end: 32px !important;
  }
  .pe-xxl-9 {
    padding-inline-end: 36px !important;
  }
  .pe-xxl-10 {
    padding-inline-end: 40px !important;
  }
  .pe-xxl-11 {
    padding-inline-end: 44px !important;
  }
  .pe-xxl-12 {
    padding-inline-end: 48px !important;
  }
  .pe-xxl-13 {
    padding-inline-end: 52px !important;
  }
  .pe-xxl-14 {
    padding-inline-end: 56px !important;
  }
  .pe-xxl-15 {
    padding-inline-end: 60px !important;
  }
  .pe-xxl-16 {
    padding-inline-end: 64px !important;
  }
  .text-xxl-left {
    text-align: left !important;
  }
  .text-xxl-right {
    text-align: right !important;
  }
  .text-xxl-center {
    text-align: center !important;
  }
  .text-xxl-justify {
    text-align: justify !important;
  }
  .text-xxl-start {
    text-align: start !important;
  }
  .text-xxl-end {
    text-align: end !important;
  }
  .text-xxl-h1 {
    font-size: 6rem !important;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-h2 {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-h3 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-h4 {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-h5 {
    font-size: 1.5rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
  .text-xxl-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
  }
  .text-xxl-overline {
    font-size: 0.75rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
  }
}
@media print {
  .d-print-none {
    display: none !important;
  }
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
  .float-print-none {
    float: none !important;
  }
  .float-print-left {
    float: left !important;
  }
  .float-print-right {
    float: right !important;
  }
  .v-locale--is-rtl .float-print-end {
    float: left !important;
  }
  .v-locale--is-rtl .float-print-start {
    float: right !important;
  }
  .v-locale--is-ltr .float-print-end {
    float: right !important;
  }
  .v-locale--is-ltr .float-print-start {
    float: left !important;
  }
}`)),document.head.appendChild(n)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*.*?\*\//gs;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$1(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el2) => {
  const i = arr.indexOf(el2);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
function getDepFromReactive(object, key) {
  var _a;
  return (_a = targetMap.get(object)) === null || _a === void 0 ? void 0 : _a.get(key);
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const get$1 = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$1(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set$1 = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has$1(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get: get$1,
  set: set$1,
  deleteProperty,
  has: has$1,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$1(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject$1(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$1(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    {
      triggerEffects(dep);
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
var _a$1;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this[_a$1] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
_a$1 = "__v_isReadonly";
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
function warn(msg, ...args) {
  return;
}
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  queue.sort(comparator);
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$1(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$1(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false)
        ;
      result = normalizeVNode(render2.length > 1 ? render2(props, false ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit: emit2
      } : { attrs, slots, emit: emit2 }) : render2(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root.transition = vnode.transition;
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el2) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el2;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject$1(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else
      ;
  }
}
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  const instance = getCurrentScope() === (currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope) ? currentInstance : null;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else
        ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  const unwatch = () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
  if (ssrCleanup)
    ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject$1(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance$1();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        for (const c of children) {
          if (c.type !== Comment) {
            child = c;
            break;
          }
        }
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (instance.update.active !== false) {
              instance.update();
            }
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el2, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el2._leaveCb = () => {
              earlyRemove();
              el2._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray(hook)) {
      if (hook.every((hook2) => hook2.length <= 1))
        done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el2) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el2._leaveCb) {
        el2._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el2]);
    },
    enter(el2) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el2._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el2]);
        } else {
          callHook2(afterHook, [el2]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el2._enterCb = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el2, done]);
      } else {
        done();
      }
    },
    leave(el2, remove2) {
      const key2 = String(vnode.key);
      if (el2._enterCb) {
        el2._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el2]);
      let called = false;
      const done = el2._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el2]);
        } else {
          callHook2(onAfterLeave, [el2]);
        }
        el2._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el2, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent$1(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component, false);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  for (const key in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
  }
  return ret;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.vnode.el,
  $data: (i) => i.data,
  $props: (i) => i.props,
  $attrs: (i) => i.attrs,
  $slots: (i) => i.slots,
  $refs: (i) => i.refs,
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
  $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
  $watch: (i) => instanceWatch.bind(i)
});
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted: mounted2,
    beforeUpdate,
    updated: updated2,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted: unmounted2,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$1(data))
      ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted2);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated2);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted2);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$1(opt)) {
      if ("default" in opt) {
        injected = inject$1(opt.from || key, opt.default, true);
      } else {
        injected = inject$1(opt.from || key);
      }
    } else {
      injected = inject$1(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$1(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject$1(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$1(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : Object.assign({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$1(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false)
      ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject$1(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version: version$1,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive2) {
        if (!directive2) {
          return context.directives[name];
        }
        context.directives[name] = directive2;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el2 = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el2, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const moveStaticNode = ({ el: el2, anchor }, container, nextSibling) => {
    let next;
    while (el2 && el2 !== anchor) {
      next = hostNextSibling(el2);
      hostInsert(el2, container, nextSibling);
      el2 = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el: el2, anchor }) => {
    let next;
    while (el2 && el2 !== anchor) {
      next = hostNextSibling(el2);
      hostRemove(el2);
      el2 = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el2;
    let vnodeHook;
    const { type, props, shapeFlag, transition, dirs } = vnode;
    el2 = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
    if (shapeFlag & 8) {
      hostSetElementText(el2, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(vnode.children, el2, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el2, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el2, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if ("value" in props) {
        hostPatchProp(el2, "value", null, props.value);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el2);
    }
    hostInsert(el2, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el2);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el2, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el2, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el2, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el2, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el2 = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el2, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
    } else if (!optimized) {
      patchChildren(n1, n2, el2, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el2, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el2, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el2, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el2, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el2, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el2, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el2, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el2, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el2, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el2, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el: el2, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el2 && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(el2, instance.subTree, instance, parentSuspense, null);
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          hostParentNode(prevTree.el),
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance.scope
    );
    const update = instance.update = () => effect.run();
    update.id = instance.uid;
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs();
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el: el2, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el2, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el2);
        hostInsert(el2, container, anchor);
        queuePostRenderEffect(() => transition.enter(el2), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el2, container, anchor);
        const performLeave = () => {
          leave(el2, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el2, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el2, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el: el2, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el2, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el2);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el2, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPreFlushCbs();
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const target = n2.target = resolveTarget(n2.props, querySelector);
      const targetAnchor = n2.targetAnchor = createText("");
      if (target) {
        insert(targetAnchor, target);
        isSVG = isSVG || isTargetSVG(target);
      }
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(children, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      isSVG = isSVG || isTargetSVG(target);
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(n2, container, mainAnchor, internals, 1);
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0);
          }
        } else if (wasDisabled) {
          moveTeleport(n2, target, targetAnchor, internals, 1);
        }
      }
    }
    updateCssVars(n2);
  },
  remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
    if (target) {
      hostRemove(targetAnchor);
    }
    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);
      if (shapeFlag & 16) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el: el2, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el2, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2);
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
  const target = vnode.target = resolveTarget(vnode.props, querySelector);
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          targetAnchor = nextSibling(targetAnchor);
          if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
            vnode.targetAnchor = targetAnchor;
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        }
        hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }
    }
    updateCssVars(vnode);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node = vnode.children[0].el;
    while (node !== vnode.targetAnchor) {
      if (node.nodeType === 1)
        node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
const Fragment = Symbol(void 0);
const Text = Symbol(void 0);
const Comment = Symbol(void 0);
const Static = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$1(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(
      Fragment,
      null,
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance$1 = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$1(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target, key) {
      track(instance, "get", "$attrs");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$1(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const ssrContextKey = Symbol(``);
const useSSRContext = () => {
  {
    const ctx = inject$1(ssrContextKey);
    return ctx;
  }
};
const version$1 = "3.2.47";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el2 = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el2.setAttribute("multiple", props.multiple);
    }
    return el2;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el2, text) => {
    el2.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el2, id) {
    el2.setAttribute(id, "");
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el2, value, isSVG) {
  const transitionClasses = el2._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el2.removeAttribute("class");
  } else if (isSVG) {
    el2.setAttribute("class", value);
  } else {
    el2.className = value;
  }
}
function patchStyle(el2, prev, next) {
  const style = el2.style;
  const isCssString = isString(next);
  if (next && !isCssString) {
    if (prev && !isString(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el2.removeAttribute("style");
    }
    if ("_vod" in el2) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el2, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el2.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el2.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = isSpecialBooleanAttr(key);
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el2.removeAttribute(key);
    } else {
      el2.setAttribute(key, isBoolean ? "" : value);
    }
  }
}
function patchDOMProp(el2, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el2[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el2.tagName !== "PROGRESS" && !el2.tagName.includes("-")) {
    el2._value = value;
    const newValue = value == null ? "" : value;
    if (el2.value !== newValue || el2.tagName === "OPTION") {
      el2.value = newValue;
    }
    if (value == null) {
      el2.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el2[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el2[key] = value;
  } catch (e) {
  }
  needRemove && el2.removeAttribute(key);
}

function patchEvent(el2, rawName, prevValue, nextValue, instance = null) {
  const invokers = el2._vei || (el2._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      el2.addEventListener(name, invoker, options);
    } else if (existingInvoker) {
      el2.removeEventListener(name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el2, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el2, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el2, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el2, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el2, key, nextValue, isSVG)) {
    patchDOMProp(el2, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el2._trueValue = nextValue;
    } else if (key === "false-value") {
      el2._falseValue = nextValue;
    }
    patchAttr(el2, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el2, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el2 && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el2.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el2.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }
  return key in el2;
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  if (isArray(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el2, isAppear, done) => {
    removeTransitionClass(el2, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el2, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el2, done) => {
    el2._isLeaving = false;
    removeTransitionClass(el2, leaveFromClass);
    removeTransitionClass(el2, leaveToClass);
    removeTransitionClass(el2, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el2, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el2, isAppear, done);
      callHook(hook, [el2, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el2, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el2, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el2, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el2) {
      callHook(onBeforeEnter, [el2]);
      addTransitionClass(el2, enterFromClass);
      addTransitionClass(el2, enterActiveClass);
    },
    onBeforeAppear(el2) {
      callHook(onBeforeAppear, [el2]);
      addTransitionClass(el2, appearFromClass);
      addTransitionClass(el2, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el2, done) {
      el2._isLeaving = true;
      const resolve2 = () => finishLeave(el2, done);
      addTransitionClass(el2, leaveFromClass);
      forceReflow();
      addTransitionClass(el2, leaveActiveClass);
      nextFrame(() => {
        if (!el2._isLeaving) {
          return;
        }
        removeTransitionClass(el2, leaveFromClass);
        addTransitionClass(el2, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el2, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el2, resolve2]);
    },
    onEnterCancelled(el2) {
      finishEnter(el2, false);
      callHook(onEnterCancelled, [el2]);
    },
    onAppearCancelled(el2) {
      finishEnter(el2, true);
      callHook(onAppearCancelled, [el2]);
    },
    onLeaveCancelled(el2) {
      finishLeave(el2);
      callHook(onLeaveCancelled, [el2]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$1(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el2, cls) {
  cls.split(/\s+/).forEach((c) => c && el2.classList.add(c));
  (el2._vtc || (el2._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el2, cls) {
  cls.split(/\s+/).forEach((c) => c && el2.classList.remove(c));
  const { _vtc } = el2;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el2._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el2, expectedType, explicitTimeout, resolve2) {
  const id = el2._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el2._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el2, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el2.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el2 && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el2.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el2, expectedType) {
  const styles = window.getComputedStyle(el2);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const TransitionGroupImpl = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = getCurrentInstance$1();
    const state = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c) => {
        const el2 = c.el;
        const style = el2.style;
        addTransitionClass(el2, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el2._moveCb = (e) => {
          if (e && e.target !== el2) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el2.removeEventListener("transitionend", cb);
            el2._moveCb = null;
            removeTransitionClass(el2, moveClass);
          }
        };
        el2.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = toRaw(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || Fragment;
      prevChildren = children;
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.key != null) {
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
        }
      }
      if (prevChildren) {
        for (let i = 0; i < prevChildren.length; i++) {
          const child = prevChildren[i];
          setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
          positionMap.set(child, child.el.getBoundingClientRect());
        }
      }
      return createVNode(tag, null, children);
    };
  }
};
const removeMode = (props) => delete props.mode;
/* @__PURE__ */ removeMode(TransitionGroupImpl.props);
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
  const el2 = c.el;
  if (el2._moveCb) {
    el2._moveCb();
  }
  if (el2._enterCb) {
    el2._enterCb();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el2, root, moveClass) {
  const clone = el2.cloneNode();
  if (el2._vtc) {
    el2._vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const vShow = {
  beforeMount(el2, { value }, { transition }) {
    el2._vod = el2.style.display === "none" ? "" : el2.style.display;
    if (transition && value) {
      transition.beforeEnter(el2);
    } else {
      setDisplay(el2, value);
    }
  },
  mounted(el2, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el2);
    }
  },
  updated(el2, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el2);
        setDisplay(el2, true);
        transition.enter(el2);
      } else {
        transition.leave(el2, () => {
          setDisplay(el2, false);
        });
      }
    } else {
      setDisplay(el2, value);
    }
  },
  beforeUnmount(el2, { value }) {
    setDisplay(el2, value);
  }
};
function setDisplay(el2, value) {
  el2.style.display = value ? el2._vod : "none";
}
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
var mdiAlert = "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z";
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiCodeJson = "M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z";
var mdiOpenInApp = "M12,10L8,14H11V20H13V14H16M19,4H5C3.89,4 3,4.9 3,6V18A2,2 0 0,0 5,20H9V18H5V8H19V18H15V20H19A2,2 0 0,0 21,18V6A2,2 0 0,0 19,4Z";
async function message(text) {
  return await chrome.runtime.sendMessage({ sender: "ibox", content: text });
}
async function mainClickHandler() {
  console.log("mainClickMessage");
  await message("iboxEvent:click");
}
async function button1ClickHandler() {
  console.log("mainClickMessage2");
  await message("iboxEvent:button1click");
}
async function button2ClickHandler() {
  console.log("mainClickMessage3");
  await message("iboxEvent:button2click");
}
async function startup() {
  console.log("startup");
  await message("iboxEvent:start");
}
async function close_box() {
  console.log("close");
  await message("iboxEvent:close");
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash_merge = { exports: {} };
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function overArg(func, transform2) {
    return function(arg) {
      return func(transform2(arg));
    };
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid2 ? "Symbol(src)_1." + uid2 : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var objectCtorString = funcToString.call(Object);
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  var Buffer = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array = root.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeMax = Math.max, nativeNow = Date.now;
  var Map2 = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject2(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty2.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size2 = data.size;
    data.set(key, value);
    this.size += data.size == size2 ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  var baseFor = createBaseFor();
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString2(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsNative(value) {
    if (!isObject2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeysIn(object) {
    if (!isObject2(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack());
      if (isObject2(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray2(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject2(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject2(objValue) || isFunction2(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isIterateeCall(value, index, object) {
    if (!isObject2(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
      return eq(object[index], value);
    }
    return false;
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  function objectToString2(value) {
    return nativeObjectToString.call(value);
  }
  function overRest(func, start, transform2) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform2(array);
      return apply(func, this, otherArgs);
    };
  }
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var setToString = shortOut(baseSetToString);
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray2 = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction2(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isFunction2(value) {
    if (!isObject2(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject2(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  function isPlainObject2(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var merge2 = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });
  function constant(value) {
    return function() {
      return value;
    };
  }
  function identity(value) {
    return value;
  }
  function stubFalse() {
    return false;
  }
  module.exports = merge2;
})(lodash_merge, lodash_merge.exports);
const merge = lodash_merge.exports;
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const VApp$1 = "";
const IN_BROWSER = typeof window !== "undefined";
const SUPPORTS_INTERSECTION = IN_BROWSER && "IntersectionObserver" in window;
const SUPPORTS_TOUCH = IN_BROWSER && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
const SUPPORTS_FOCUS_VISIBLE = IN_BROWSER && typeof CSS !== "undefined" && CSS.supports("selector(:focus-visible)");
function useResizeObserver(callback) {
  const resizeRef = ref();
  const contentRect = ref();
  if (IN_BROWSER) {
    const observer = new ResizeObserver((entries) => {
      callback == null ? void 0 : callback(entries, observer);
      if (!entries.length)
        return;
      contentRect.value = entries[0].contentRect;
    });
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    watch(resizeRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        contentRect.value = void 0;
      }
      if (newValue)
        observer.observe(newValue);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef,
    contentRect: readonly(contentRect)
  };
}
function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0)
    return obj === void 0 ? fallback : obj;
  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }
    obj = obj[path[i]];
  }
  if (obj == null)
    return fallback;
  return obj[path[last]] === void 0 ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
    return false;
  }
  if (a !== Object(a) || b !== Object(b)) {
    return false;
  }
  const props = Object.keys(a);
  if (props.length !== Object.keys(b).length) {
    return false;
  }
  return props.every((p2) => deepEqual(a[p2], b[p2]));
}
function getObjectValueByPath(obj, path, fallback) {
  if (obj == null || !path || typeof path !== "string")
    return fallback;
  if (obj[path] !== void 0)
    return obj[path];
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  return getNestedValue(obj, path.split("."), fallback);
}
function createRange(length) {
  let start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length
  }, (v, k) => start + k);
}
function convertToUnit(str) {
  let unit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (str == null || str === "") {
    return void 0;
  } else if (isNaN(+str)) {
    return String(str);
  } else if (!isFinite(+str)) {
    return void 0;
  } else {
    return `${Number(str)}${unit}`;
  }
}
function isObject(obj) {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
}
function isComponentInstance(obj) {
  return obj == null ? void 0 : obj.$el;
}
const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function pick(obj, paths) {
  const found = /* @__PURE__ */ Object.create(null);
  const rest = /* @__PURE__ */ Object.create(null);
  for (const key in obj) {
    if (paths.some((path) => path instanceof RegExp ? path.test(key) : path === key)) {
      found[key] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  }
  return [found, rest];
}
function omit(obj, exclude) {
  const clone = {
    ...obj
  };
  exclude.forEach((prop) => delete clone[prop]);
  return clone;
}
function wrapInArray(v) {
  return v == null ? [] : Array.isArray(v) ? v : [v];
}
function clamp(value) {
  let min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  let max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(min, Math.min(max, value));
}
function chunk(str) {
  let size2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const chunked = [];
  let index = 0;
  while (index < str.length) {
    chunked.push(str.substr(index, size2));
    index += size2;
  }
  return chunked;
}
function mergeDeep() {
  let source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let arrayFn = arguments.length > 2 ? arguments[2] : void 0;
  const out = {};
  for (const key in source) {
    out[key] = source[key];
  }
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key];
    if (isObject(sourceProperty) && isObject(targetProperty)) {
      out[key] = mergeDeep(sourceProperty, targetProperty, arrayFn);
      continue;
    }
    if (Array.isArray(sourceProperty) && Array.isArray(targetProperty) && arrayFn) {
      out[key] = arrayFn(sourceProperty, targetProperty);
      continue;
    }
    out[key] = targetProperty;
  }
  return out;
}
function toKebabCase() {
  let str = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (toKebabCase.cache.has(str))
    return toKebabCase.cache.get(str);
  const kebab = str.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  toKebabCase.cache.set(str, kebab);
  return kebab;
}
toKebabCase.cache = /* @__PURE__ */ new Map();
function findChildrenWithProvide(key, vnode) {
  if (!vnode || typeof vnode !== "object")
    return [];
  if (Array.isArray(vnode)) {
    return vnode.map((child) => findChildrenWithProvide(key, child)).flat(1);
  } else if (Array.isArray(vnode.children)) {
    return vnode.children.map((child) => findChildrenWithProvide(key, child)).flat(1);
  } else if (vnode.component) {
    if (Object.getOwnPropertySymbols(vnode.component.provides).includes(key)) {
      return [vnode.component];
    } else if (vnode.component.subTree) {
      return findChildrenWithProvide(key, vnode.component.subTree).flat(1);
    }
  }
  return [];
}
function destructComputed(getter) {
  const refs = reactive({});
  const base = computed(getter);
  watchEffect(() => {
    for (const key in base.value) {
      refs[key] = base.value[key];
    }
  }, {
    flush: "sync"
  });
  return toRefs(refs);
}
function includes(arr, val) {
  return arr.includes(val);
}
function hasEvent(props, name) {
  name = "on" + capitalize(name);
  return !!(props[name] || props[`${name}Once`] || props[`${name}Capture`] || props[`${name}OnceCapture`] || props[`${name}CaptureOnce`]);
}
const block = ["top", "bottom"];
const inline = ["start", "end", "left", "right"];
function parseAnchor(anchor, isRtl) {
  let [side, align] = anchor.split(" ");
  if (!align) {
    align = includes(block, side) ? "start" : includes(inline, side) ? "top" : "center";
  }
  return {
    side: toPhysical(side, isRtl),
    align: toPhysical(align, isRtl)
  };
}
function toPhysical(str, isRtl) {
  if (str === "start")
    return isRtl ? "right" : "left";
  if (str === "end")
    return isRtl ? "left" : "right";
  return str;
}
function flipSide(anchor) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[anchor.side],
    align: anchor.align
  };
}
function flipAlign(anchor) {
  return {
    side: anchor.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[anchor.align]
  };
}
function flipCorner(anchor) {
  return {
    side: anchor.align,
    align: anchor.side
  };
}
function getAxis(anchor) {
  return includes(block, anchor.side) ? "y" : "x";
}
class Box {
  constructor(_ref) {
    let {
      x,
      y,
      width,
      height
    } = _ref;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function getOverflow(a, b) {
  return {
    x: {
      before: Math.max(0, b.left - a.left),
      after: Math.max(0, a.right - b.right)
    },
    y: {
      before: Math.max(0, b.top - a.top),
      after: Math.max(0, a.bottom - b.bottom)
    }
  };
}
function nullifyTransforms(el2) {
  const rect = el2.getBoundingClientRect();
  const style = getComputedStyle(el2);
  const tx = style.transform;
  if (tx) {
    let ta, sx, sy, dx, dy;
    if (tx.startsWith("matrix3d(")) {
      ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith("matrix(")) {
      ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return new Box(rect);
    }
    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    const w = sx ? rect.width / sx : el2.offsetWidth + 1;
    const h2 = sy ? rect.height / sy : el2.offsetHeight + 1;
    return new Box({
      x,
      y,
      width: w,
      height: h2
    });
  } else {
    return new Box(rect);
  }
}
function animate(el2, keyframes, options) {
  if (typeof el2.animate === "undefined")
    return {
      finished: Promise.resolve()
    };
  const animation = el2.animate(keyframes, options);
  if (typeof animation.finished === "undefined") {
    animation.finished = new Promise((resolve2) => {
      animation.onfinish = () => {
        resolve2(animation);
      };
    });
  }
  return animation;
}
function createMessage(message2, vm, parent) {
  if (parent) {
    vm = {
      __isVue: true,
      $parent: parent,
      $options: vm
    };
  }
  if (vm) {
    vm.$_alreadyWarned = vm.$_alreadyWarned || [];
    if (vm.$_alreadyWarned.includes(message2))
      return;
    vm.$_alreadyWarned.push(message2);
  }
  return `[Vuetify] ${message2}` + (vm ? generateComponentTrace(vm) : "");
}
function consoleWarn(message2, vm, parent) {
  const newMessage = createMessage(message2, vm, parent);
  newMessage != null && console.warn(newMessage);
}
function consoleError(message2, vm, parent) {
  const newMessage = createMessage(message2, vm, parent);
  newMessage != null && console.error(newMessage);
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function formatComponentName(vm, includeFile) {
  if (vm.$root === vm) {
    return "<Root>";
  }
  const options = typeof vm === "function" && vm.cid != null ? vm.options : vm.__isVue ? vm.$options || vm.constructor.options : vm || {};
  let name = options.name || options._componentTag;
  const file = options.__file;
  if (!name && file) {
    const match = file.match(/([^/\\]+)\.vue$/);
    name = match == null ? void 0 : match[1];
  }
  return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : "");
}
function generateComponentTrace(vm) {
  if (vm.__isVue && vm.$parent) {
    const tree = [];
    let currentRecursiveSequence = 0;
    while (vm) {
      if (tree.length > 0) {
        const last = tree[tree.length - 1];
        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++;
          vm = vm.$parent;
          continue;
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence];
          currentRecursiveSequence = 0;
        }
      }
      tree.push(vm);
      vm = vm.$parent;
    }
    return "\n\nfound in\n\n" + tree.map((vm2, i) => `${i === 0 ? "---> " : " ".repeat(5 + i * 2)}${Array.isArray(vm2) ? `${formatComponentName(vm2[0])}... (${vm2[1]} recursive calls)` : formatComponentName(vm2)}`).join("\n");
  } else {
    return `

(found in ${formatComponentName(vm)})`;
  }
}
const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]];
const srgbForwardTransform = (C) => C <= 31308e-7 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055;
const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]];
const srgbReverseTransform = (C) => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;
function fromXYZ$1(xyz) {
  const rgb = Array(3);
  const transform2 = srgbForwardTransform;
  const matrix = srgbForwardMatrix;
  for (let i = 0; i < 3; ++i) {
    rgb[i] = Math.round(clamp(transform2(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
  }
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2]
  };
}
function toXYZ$1(_ref) {
  let {
    r,
    g,
    b
  } = _ref;
  const xyz = [0, 0, 0];
  const transform2 = srgbReverseTransform;
  const matrix = srgbReverseMatrix;
  r = transform2(r / 255);
  g = transform2(g / 255);
  b = transform2(b / 255);
  for (let i = 0; i < 3; ++i) {
    xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
  }
  return xyz;
}
const delta = 0.20689655172413793;
const cielabForwardTransform = (t) => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;
const cielabReverseTransform = (t) => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);
function fromXYZ(xyz) {
  const transform2 = cielabForwardTransform;
  const transformedY = transform2(xyz[1]);
  return [116 * transformedY - 16, 500 * (transform2(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform2(xyz[2] / 1.08883))];
}
function toXYZ(lab) {
  const transform2 = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [transform2(Ln + lab[1] / 500) * 0.95047, transform2(Ln), transform2(Ln - lab[2] / 200) * 1.08883];
}
function isCssColor(color) {
  return !!color && /^(#|var\(--|(rgb|hsl)a?\()/.test(color);
}
function parseColor(color) {
  if (typeof color === "number") {
    if (isNaN(color) || color < 0 || color > 16777215) {
      consoleWarn(`'${color}' is not a valid hex color`);
    }
    return {
      r: (color & 16711680) >> 16,
      g: (color & 65280) >> 8,
      b: color & 255
    };
  } else if (typeof color === "string") {
    let hex = color.startsWith("#") ? color.slice(1) : color;
    if ([3, 4].includes(hex.length)) {
      hex = hex.split("").map((char) => char + char).join("");
    } else if (![6, 8].includes(hex.length)) {
      consoleWarn(`'${color}' is not a valid hex(a) color`);
    }
    const int = parseInt(hex, 16);
    if (isNaN(int) || int < 0 || int > 4294967295) {
      consoleWarn(`'${color}' is not a valid hex(a) color`);
    }
    return HexToRGB(hex);
  } else {
    throw new TypeError(`Colors can only be numbers or strings, recieved ${color == null ? color : color.constructor.name} instead`);
  }
}
function toHex(v) {
  const h2 = Math.round(v).toString(16);
  return ("00".substr(0, 2 - h2.length) + h2).toUpperCase();
}
function RGBtoHex(_ref2) {
  let {
    r,
    g,
    b,
    a
  } = _ref2;
  return `#${[toHex(r), toHex(g), toHex(b), a !== void 0 ? toHex(Math.round(a * 255)) : "FF"].join("")}`;
}
function HexToRGB(hex) {
  let [r, g, b, a] = chunk(hex, 2).map((c) => parseInt(c, 16));
  a = a === void 0 ? a : Math.round(a / 255 * 100) / 100;
  return {
    r,
    g,
    b,
    a
  };
}
function lighten(value, amount) {
  const lab = fromXYZ(toXYZ$1(value));
  lab[0] = lab[0] + amount * 10;
  return fromXYZ$1(toXYZ(lab));
}
function darken(value, amount) {
  const lab = fromXYZ(toXYZ$1(value));
  lab[0] = lab[0] - amount * 10;
  return fromXYZ$1(toXYZ(lab));
}
function getLuma(color) {
  const rgb = parseColor(color);
  return toXYZ$1(rgb)[1];
}
function getCurrentInstance(name, message2) {
  const vm = getCurrentInstance$1();
  if (!vm) {
    throw new Error(`[Vuetify] ${name} ${message2 || "must be called from inside a setup function"}`);
  }
  return vm;
}
function getCurrentInstanceName() {
  let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const vm = getCurrentInstance(name).type;
  return toKebabCase((vm == null ? void 0 : vm.aliasName) || (vm == null ? void 0 : vm.name));
}
let _uid = 0;
let _map = /* @__PURE__ */ new WeakMap();
function getUid() {
  const vm = getCurrentInstance("getUid");
  if (_map.has(vm))
    return _map.get(vm);
  else {
    const uid2 = _uid++;
    _map.set(vm, uid2);
    return uid2;
  }
}
getUid.reset = () => {
  _uid = 0;
  _map = /* @__PURE__ */ new WeakMap();
};
function injectSelf(key) {
  const {
    provides
  } = getCurrentInstance("injectSelf");
  if (provides && key in provides) {
    return provides[key];
  }
}
const DefaultsSymbol = Symbol.for("vuetify:defaults");
function createDefaults(options) {
  return ref(options);
}
function useDefaults() {
  const defaults = inject$1(DefaultsSymbol);
  if (!defaults)
    throw new Error("[Vuetify] Could not find defaults instance");
  return defaults;
}
function provideDefaults(defaults, options) {
  const injectedDefaults = useDefaults();
  const providedDefaults = ref(defaults);
  const newDefaults = computed(() => {
    const scoped = unref(options == null ? void 0 : options.scoped);
    const reset = unref(options == null ? void 0 : options.reset);
    const root = unref(options == null ? void 0 : options.root);
    let properties = mergeDeep(providedDefaults.value, {
      prev: injectedDefaults.value
    });
    if (scoped)
      return properties;
    if (reset || root) {
      const len = Number(reset || Infinity);
      for (let i = 0; i <= len; i++) {
        if (!properties.prev)
          break;
        properties = properties.prev;
      }
      return properties;
    }
    return mergeDeep(properties.prev, properties);
  });
  provide(DefaultsSymbol, newDefaults);
  return newDefaults;
}
function useToggleScope(source, fn) {
  let scope;
  function start() {
    scope = effectScope();
    scope.run(() => fn.length ? fn(() => {
      var _scope;
      (_scope = scope) == null ? void 0 : _scope.stop();
      start();
    }) : fn());
  }
  watch(source, (active) => {
    if (active && !scope) {
      start();
    } else if (!active) {
      var _scope2;
      (_scope2 = scope) == null ? void 0 : _scope2.stop();
      scope = void 0;
    }
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    var _scope3;
    (_scope3 = scope) == null ? void 0 : _scope3.stop();
  });
}
function propsFactory(props, source) {
  return (defaults) => {
    return Object.keys(props).reduce((obj, prop) => {
      const isObjectDefinition = typeof props[prop] === "object" && props[prop] != null && !Array.isArray(props[prop]);
      const definition = isObjectDefinition ? props[prop] : {
        type: props[prop]
      };
      if (defaults && prop in defaults) {
        obj[prop] = {
          ...definition,
          default: defaults[prop]
        };
      } else {
        obj[prop] = definition;
      }
      if (source && !obj[prop].source) {
        obj[prop].source = source;
      }
      return obj;
    }, {});
  };
}
function propIsDefined(vnode, prop) {
  var _vnode$props, _vnode$props2;
  return typeof ((_vnode$props = vnode.props) == null ? void 0 : _vnode$props[prop]) !== "undefined" || typeof ((_vnode$props2 = vnode.props) == null ? void 0 : _vnode$props2[toKebabCase(prop)]) !== "undefined";
}
const defineComponent = function defineComponent2(options) {
  var _a, _b;
  options._setup = (_a = options._setup) != null ? _a : options.setup;
  if (!options.name) {
    consoleWarn("The component is missing an explicit name, unable to generate default prop value");
    return options;
  }
  if (options._setup) {
    options.props = (_b = options.props) != null ? _b : {};
    options.props = propsFactory(options.props, toKebabCase(options.name))();
    options.props._as = String;
    options.setup = function setup(props, ctx) {
      const defaults = useDefaults();
      if (!defaults.value)
        return options._setup(props, ctx);
      const vm = getCurrentInstance$1();
      const componentDefaults = computed(() => {
        var _a2;
        return defaults.value[(_a2 = props._as) != null ? _a2 : options.name];
      });
      const _props = new Proxy(props, {
        get(target, prop) {
          var _a2, _b2;
          if (!propIsDefined(vm.vnode, prop)) {
            var _componentDefaults$va, _global;
            return (_b2 = (_a2 = (_componentDefaults$va = componentDefaults.value) == null ? void 0 : _componentDefaults$va[prop]) != null ? _a2 : (_global = defaults.value.global) == null ? void 0 : _global[prop]) != null ? _b2 : target[prop];
          }
          return Reflect.get(target, prop);
        }
      });
      const _subcomponentDefaults = shallowRef();
      watchEffect(() => {
        if (componentDefaults.value) {
          const subComponents = Object.entries(componentDefaults.value).filter((_ref) => {
            let [key] = _ref;
            return key.startsWith(key[0].toUpperCase());
          });
          if (subComponents.length)
            _subcomponentDefaults.value = Object.fromEntries(subComponents);
        }
      });
      const setupBindings = options._setup(_props, ctx);
      useToggleScope(_subcomponentDefaults, () => {
        var _a2;
        var _injectSelf;
        provideDefaults(mergeDeep((_a2 = (_injectSelf = injectSelf(DefaultsSymbol)) == null ? void 0 : _injectSelf.value) != null ? _a2 : {}, _subcomponentDefaults.value));
      });
      return setupBindings;
    };
  }
  return options;
};
function genericComponent() {
  let exposeDefaults = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (options) => (exposeDefaults ? defineComponent : defineComponent$1)(options);
}
function createSimpleFunctional(klass) {
  let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
  let name = arguments.length > 2 ? arguments[2] : void 0;
  return defineComponent({
    name: name != null ? name : capitalize(camelize(klass.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: tag
      }
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        var _slots$default;
        return h(props.tag, {
          class: klass
        }, (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots));
      };
    }
  });
}
function attachedRoot(node) {
  if (typeof node.getRootNode !== "function") {
    while (node.parentNode)
      node = node.parentNode;
    if (node !== document)
      return null;
    return document;
  }
  const root = node.getRootNode();
  if (root !== document && root.getRootNode({
    composed: true
  }) !== document)
    return null;
  return root;
}
const standardEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
function getScrollParent(el2) {
  while (el2) {
    if (hasScrollbar(el2))
      return el2;
    el2 = el2.parentElement;
  }
  return document.scrollingElement;
}
function getScrollParents(el2, stopAt) {
  const elements = [];
  if (stopAt && el2 && !stopAt.contains(el2))
    return elements;
  while (el2) {
    if (hasScrollbar(el2))
      elements.push(el2);
    if (el2 === stopAt)
      break;
    el2 = el2.parentElement;
  }
  return elements;
}
function hasScrollbar(el2) {
  if (!el2 || el2.nodeType !== Node.ELEMENT_NODE)
    return false;
  const style = window.getComputedStyle(el2);
  return style.overflowY === "scroll" || style.overflowY === "auto" && el2.scrollHeight > el2.clientHeight;
}
function isFixedPosition(el2) {
  while (el2) {
    if (window.getComputedStyle(el2).position === "fixed") {
      return true;
    }
    el2 = el2.offsetParent;
  }
  return false;
}
function useRender(render) {
  const vm = getCurrentInstance("useRender");
  vm.render = render;
}
const VuetifyLayoutKey = Symbol.for("vuetify:layout");
const VuetifyLayoutItemKey = Symbol.for("vuetify:layout-item");
const ROOT_ZINDEX = 1e3;
const makeLayoutProps = propsFactory({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout");
function useLayout() {
  const layout = inject$1(VuetifyLayoutKey);
  if (!layout)
    throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: layout.getLayoutItem,
    mainRect: layout.mainRect,
    mainStyles: layout.mainStyles
  };
}
const generateLayers = (layout, positions, layoutSizes, activeItems) => {
  let previousLayer = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const layers = [{
    id: "",
    layer: {
      ...previousLayer
    }
  }];
  for (const id of layout) {
    const position = positions.get(id);
    const amount = layoutSizes.get(id);
    const active = activeItems.get(id);
    if (!position || !amount || !active)
      continue;
    const layer = {
      ...previousLayer,
      [position.value]: parseInt(previousLayer[position.value], 10) + (active.value ? parseInt(amount.value, 10) : 0)
    };
    layers.push({
      id,
      layer
    });
    previousLayer = layer;
  }
  return layers;
};
function createLayout(props) {
  const parentLayout = inject$1(VuetifyLayoutKey, null);
  const rootZIndex = computed(() => parentLayout ? parentLayout.rootZIndex.value - 100 : ROOT_ZINDEX);
  const registered = ref([]);
  const positions = reactive(/* @__PURE__ */ new Map());
  const layoutSizes = reactive(/* @__PURE__ */ new Map());
  const priorities = reactive(/* @__PURE__ */ new Map());
  const activeItems = reactive(/* @__PURE__ */ new Map());
  const disabledTransitions = reactive(/* @__PURE__ */ new Map());
  const {
    resizeRef,
    contentRect: layoutRect
  } = useResizeObserver();
  const computedOverlaps = computed(() => {
    var _a;
    const map = /* @__PURE__ */ new Map();
    const overlaps = (_a = props.overlaps) != null ? _a : [];
    for (const overlap of overlaps.filter((item) => item.includes(":"))) {
      const [top, bottom] = overlap.split(":");
      if (!registered.value.includes(top) || !registered.value.includes(bottom))
        continue;
      const topPosition = positions.get(top);
      const bottomPosition = positions.get(bottom);
      const topAmount = layoutSizes.get(top);
      const bottomAmount = layoutSizes.get(bottom);
      if (!topPosition || !bottomPosition || !topAmount || !bottomAmount)
        continue;
      map.set(bottom, {
        position: topPosition.value,
        amount: parseInt(topAmount.value, 10)
      });
      map.set(top, {
        position: bottomPosition.value,
        amount: -parseInt(bottomAmount.value, 10)
      });
    }
    return map;
  });
  const layers = computed(() => {
    const uniquePriorities = [...new Set([...priorities.values()].map((p2) => p2.value))].sort((a, b) => a - b);
    const layout = [];
    for (const p2 of uniquePriorities) {
      const items2 = registered.value.filter((id) => {
        var _priorities$get;
        return ((_priorities$get = priorities.get(id)) == null ? void 0 : _priorities$get.value) === p2;
      });
      layout.push(...items2);
    }
    return generateLayers(layout, positions, layoutSizes, activeItems);
  });
  const transitionsEnabled = computed(() => {
    return !Array.from(disabledTransitions.values()).some((ref2) => ref2.value);
  });
  const mainRect = computed(() => {
    return layers.value[layers.value.length - 1].layer;
  });
  const mainStyles = computed(() => {
    return {
      "--v-layout-left": convertToUnit(mainRect.value.left),
      "--v-layout-right": convertToUnit(mainRect.value.right),
      "--v-layout-top": convertToUnit(mainRect.value.top),
      "--v-layout-bottom": convertToUnit(mainRect.value.bottom),
      ...transitionsEnabled.value ? void 0 : {
        transition: "none"
      }
    };
  });
  const items = computed(() => {
    return layers.value.slice(1).map((_ref, index) => {
      let {
        id
      } = _ref;
      const {
        layer
      } = layers.value[index];
      const size2 = layoutSizes.get(id);
      const position = positions.get(id);
      return {
        id,
        ...layer,
        size: Number(size2.value),
        position: position.value
      };
    });
  });
  const getLayoutItem = (id) => {
    return items.value.find((item) => item.id === id);
  };
  const rootVm = getCurrentInstance("createLayout");
  const isMounted = ref(false);
  onMounted(() => {
    isMounted.value = true;
  });
  provide(VuetifyLayoutKey, {
    register: (vm, _ref2) => {
      let {
        id,
        order,
        position,
        layoutSize,
        elementSize,
        active,
        disableTransitions,
        absolute
      } = _ref2;
      priorities.set(id, order);
      positions.set(id, position);
      layoutSizes.set(id, layoutSize);
      activeItems.set(id, active);
      disableTransitions && disabledTransitions.set(id, disableTransitions);
      const instances = findChildrenWithProvide(VuetifyLayoutItemKey, rootVm == null ? void 0 : rootVm.vnode);
      const instanceIndex = instances.indexOf(vm);
      if (instanceIndex > -1)
        registered.value.splice(instanceIndex, 0, id);
      else
        registered.value.push(id);
      const index = computed(() => items.value.findIndex((i) => i.id === id));
      const zIndex = computed(() => rootZIndex.value + layers.value.length * 2 - index.value * 2);
      const layoutItemStyles = computed(() => {
        const isHorizontal = position.value === "left" || position.value === "right";
        const isOppositeHorizontal = position.value === "right";
        const isOppositeVertical = position.value === "bottom";
        const styles = {
          [position.value]: 0,
          zIndex: zIndex.value,
          transform: `translate${isHorizontal ? "X" : "Y"}(${(active.value ? 0 : -110) * (isOppositeHorizontal || isOppositeVertical ? -1 : 1)}%)`,
          position: absolute.value || rootZIndex.value !== ROOT_ZINDEX ? "absolute" : "fixed",
          ...transitionsEnabled.value ? void 0 : {
            transition: "none"
          }
        };
        if (!isMounted.value)
          return styles;
        const item = items.value[index.value];
        if (!item)
          throw new Error(`[Vuetify] Could not find layout item "${id}"`);
        const overlap = computedOverlaps.value.get(id);
        if (overlap) {
          item[overlap.position] += overlap.amount;
        }
        return {
          ...styles,
          height: isHorizontal ? `calc(100% - ${item.top}px - ${item.bottom}px)` : elementSize.value ? `${elementSize.value}px` : void 0,
          left: isOppositeHorizontal ? void 0 : `${item.left}px`,
          right: isOppositeHorizontal ? `${item.right}px` : void 0,
          top: position.value !== "bottom" ? `${item.top}px` : void 0,
          bottom: position.value !== "top" ? `${item.bottom}px` : void 0,
          width: !isHorizontal ? `calc(100% - ${item.left}px - ${item.right}px)` : elementSize.value ? `${elementSize.value}px` : void 0
        };
      });
      const layoutItemScrimStyles = computed(() => ({
        zIndex: zIndex.value - 1
      }));
      return {
        layoutItemStyles,
        layoutItemScrimStyles,
        zIndex
      };
    },
    unregister: (id) => {
      priorities.delete(id);
      positions.delete(id);
      layoutSizes.delete(id);
      activeItems.delete(id);
      disabledTransitions.delete(id);
      registered.value = registered.value.filter((v) => v !== id);
    },
    mainRect,
    mainStyles,
    getLayoutItem,
    items,
    layoutRect,
    rootZIndex
  });
  const layoutClasses = computed(() => ["v-layout", {
    "v-layout--full-height": props.fullHeight
  }]);
  const layoutStyles = computed(() => ({
    zIndex: rootZIndex.value,
    position: parentLayout ? "relative" : void 0,
    overflow: parentLayout ? "hidden" : void 0
  }));
  return {
    layoutClasses,
    layoutStyles,
    getLayoutItem,
    items,
    layoutRect,
    layoutRef: resizeRef
  };
}
const mainTRC = 2.4;
const Rco = 0.2126729;
const Gco = 0.7151522;
const Bco = 0.072175;
const normBG = 0.55;
const normTXT = 0.58;
const revTXT = 0.57;
const revBG = 0.62;
const blkThrs = 0.03;
const blkClmp = 1.45;
const deltaYmin = 5e-4;
const scaleBoW = 1.25;
const scaleWoB = 1.25;
const loConThresh = 0.078;
const loConFactor = 12.82051282051282;
const loConOffset = 0.06;
const loClip = 1e-3;
function APCAcontrast(text, background) {
  const Rtxt = (text.r / 255) ** mainTRC;
  const Gtxt = (text.g / 255) ** mainTRC;
  const Btxt = (text.b / 255) ** mainTRC;
  const Rbg = (background.r / 255) ** mainTRC;
  const Gbg = (background.g / 255) ** mainTRC;
  const Bbg = (background.b / 255) ** mainTRC;
  let Ytxt = Rtxt * Rco + Gtxt * Gco + Btxt * Bco;
  let Ybg = Rbg * Rco + Gbg * Gco + Bbg * Bco;
  if (Ytxt <= blkThrs)
    Ytxt += (blkThrs - Ytxt) ** blkClmp;
  if (Ybg <= blkThrs)
    Ybg += (blkThrs - Ybg) ** blkClmp;
  if (Math.abs(Ybg - Ytxt) < deltaYmin)
    return 0;
  let outputContrast;
  if (Ybg > Ytxt) {
    const SAPC = (Ybg ** normBG - Ytxt ** normTXT) * scaleBoW;
    outputContrast = SAPC < loClip ? 0 : SAPC < loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC - loConOffset;
  } else {
    const SAPC = (Ybg ** revBG - Ytxt ** revTXT) * scaleWoB;
    outputContrast = SAPC > -loClip ? 0 : SAPC > -loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC + loConOffset;
  }
  return outputContrast * 100;
}
const ThemeSymbol = Symbol.for("vuetify:theme");
const makeThemeProps = propsFactory({
  theme: String
}, "theme");
const defaultThemeOptions = {
  defaultTheme: "light",
  variations: {
    colors: [],
    lighten: 0,
    darken: 0
  },
  themes: {
    light: {
      dark: false,
      colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        "surface-variant": "#424242",
        "on-surface-variant": "#EEEEEE",
        primary: "#6200EE",
        "primary-darken-1": "#3700B3",
        secondary: "#03DAC6",
        "secondary-darken-1": "#018786",
        error: "#B00020",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
      },
      variables: {
        "border-color": "#000000",
        "border-opacity": 0.12,
        "high-emphasis-opacity": 0.87,
        "medium-emphasis-opacity": 0.6,
        "disabled-opacity": 0.38,
        "idle-opacity": 0.04,
        "hover-opacity": 0.04,
        "focus-opacity": 0.12,
        "selected-opacity": 0.08,
        "activated-opacity": 0.12,
        "pressed-opacity": 0.12,
        "dragged-opacity": 0.08,
        "theme-kbd": "#212529",
        "theme-on-kbd": "#FFFFFF",
        "theme-code": "#F5F5F5",
        "theme-on-code": "#000000"
      }
    },
    dark: {
      dark: true,
      colors: {
        background: "#121212",
        surface: "#212121",
        "surface-variant": "#BDBDBD",
        "on-surface-variant": "#424242",
        primary: "#BB86FC",
        "primary-darken-1": "#3700B3",
        secondary: "#03DAC5",
        "secondary-darken-1": "#03DAC5",
        error: "#CF6679",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
      },
      variables: {
        "border-color": "#FFFFFF",
        "border-opacity": 0.12,
        "high-emphasis-opacity": 0.87,
        "medium-emphasis-opacity": 0.6,
        "disabled-opacity": 0.38,
        "idle-opacity": 0.1,
        "hover-opacity": 0.04,
        "focus-opacity": 0.12,
        "selected-opacity": 0.08,
        "activated-opacity": 0.12,
        "pressed-opacity": 0.16,
        "dragged-opacity": 0.08,
        "theme-kbd": "#212529",
        "theme-on-kbd": "#FFFFFF",
        "theme-code": "#343434",
        "theme-on-code": "#CCCCCC"
      }
    }
  }
};
function parseThemeOptions() {
  var _a;
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultThemeOptions;
  if (!options)
    return {
      ...defaultThemeOptions,
      isDisabled: true
    };
  const themes = {};
  for (const [key, theme] of Object.entries((_a = options.themes) != null ? _a : {})) {
    var _defaultThemeOptions$, _defaultThemeOptions$2;
    const defaultTheme = theme.dark || key === "dark" ? (_defaultThemeOptions$ = defaultThemeOptions.themes) == null ? void 0 : _defaultThemeOptions$.dark : (_defaultThemeOptions$2 = defaultThemeOptions.themes) == null ? void 0 : _defaultThemeOptions$2.light;
    themes[key] = mergeDeep(defaultTheme, theme);
  }
  return mergeDeep(defaultThemeOptions, {
    ...options,
    themes
  });
}
function createTheme(options) {
  const parsedOptions = reactive(parseThemeOptions(options));
  const name = ref(parsedOptions.defaultTheme);
  const themes = ref(parsedOptions.themes);
  const computedThemes = computed(() => {
    const acc = {};
    for (const [name2, original] of Object.entries(themes.value)) {
      const theme = acc[name2] = {
        ...original,
        colors: {
          ...original.colors
        }
      };
      if (parsedOptions.variations) {
        for (const name3 of parsedOptions.variations.colors) {
          const color = theme.colors[name3];
          if (!color)
            continue;
          for (const variation of ["lighten", "darken"]) {
            const fn = variation === "lighten" ? lighten : darken;
            for (const amount of createRange(parsedOptions.variations[variation], 1)) {
              theme.colors[`${name3}-${variation}-${amount}`] = RGBtoHex(fn(parseColor(color), amount));
            }
          }
        }
      }
      for (const color of Object.keys(theme.colors)) {
        if (/^on-[a-z]/.test(color) || theme.colors[`on-${color}`])
          continue;
        const onColor = `on-${color}`;
        const colorVal = parseColor(theme.colors[color]);
        const blackContrast = Math.abs(APCAcontrast(parseColor(0), colorVal));
        const whiteContrast = Math.abs(APCAcontrast(parseColor(16777215), colorVal));
        theme.colors[onColor] = whiteContrast > Math.min(blackContrast, 50) ? "#fff" : "#000";
      }
    }
    return acc;
  });
  const current = computed(() => computedThemes.value[name.value]);
  const styles = computed(() => {
    const lines = [];
    if (current.value.dark) {
      createCssClass(lines, ":root", ["color-scheme: dark"]);
    }
    for (const [themeName, theme] of Object.entries(computedThemes.value)) {
      const {
        variables,
        dark
      } = theme;
      createCssClass(lines, `.v-theme--${themeName}`, [`color-scheme: ${dark ? "dark" : "normal"}`, ...genCssVariables(theme), ...Object.keys(variables).map((key) => {
        const value = variables[key];
        const color = typeof value === "string" && value.startsWith("#") ? parseColor(value) : void 0;
        const rgb = color ? `${color.r}, ${color.g}, ${color.b}` : void 0;
        return `--v-${key}: ${rgb != null ? rgb : value}`;
      })]);
    }
    const bgLines = [];
    const fgLines = [];
    const colors = new Set(Object.values(computedThemes.value).flatMap((theme) => Object.keys(theme.colors)));
    for (const key of colors) {
      if (/^on-[a-z]/.test(key)) {
        createCssClass(fgLines, `.${key}`, [`color: rgb(var(--v-theme-${key})) !important`]);
      } else {
        createCssClass(bgLines, `.bg-${key}`, [`--v-theme-overlay-multiplier: var(--v-theme-${key}-overlay-multiplier)`, `background: rgb(var(--v-theme-${key})) !important`, `color: rgb(var(--v-theme-on-${key})) !important`]);
        createCssClass(fgLines, `.text-${key}`, [`color: rgb(var(--v-theme-${key})) !important`]);
        createCssClass(fgLines, `.border-${key}`, [`--v-border-color: var(--v-theme-${key})`]);
      }
    }
    lines.push(...bgLines, ...fgLines);
    return lines.map((str, i) => i === 0 ? str : `    ${str}`).join("");
  });
  function install(app) {
    const head = app._context.provides.usehead;
    if (head) {
      head.addHeadObjs(computed(() => {
        const style = {
          children: styles.value,
          type: "text/css",
          id: "vuetify-theme-stylesheet"
        };
        if (parsedOptions.cspNonce)
          style.nonce = parsedOptions.cspNonce;
        return {
          style: [style]
        };
      }));
      if (IN_BROWSER) {
        watchEffect(() => head.updateDOM());
      }
    } else {
      let updateStyles2 = function() {
        if (parsedOptions.isDisabled)
          return;
        if (typeof document !== "undefined" && !styleEl) {
          const el2 = document.createElement("style");
          el2.type = "text/css";
          el2.id = "vuetify-theme-stylesheet";
          if (parsedOptions.cspNonce)
            el2.setAttribute("nonce", parsedOptions.cspNonce);
          styleEl = el2;
          document.head.appendChild(styleEl);
        }
        if (styleEl)
          styleEl.innerHTML = styles.value;
      };
      var updateStyles = updateStyles2;
      let styleEl = IN_BROWSER ? document.getElementById("vuetify-theme-stylesheet") : null;
      watch(styles, updateStyles2, {
        immediate: true
      });
    }
  }
  const themeClasses = computed(() => parsedOptions.isDisabled ? void 0 : `v-theme--${name.value}`);
  return {
    install,
    isDisabled: parsedOptions.isDisabled,
    name,
    themes,
    current,
    computedThemes,
    themeClasses,
    styles,
    global: {
      name,
      current
    }
  };
}
function provideTheme(props) {
  getCurrentInstance("provideTheme");
  const theme = inject$1(ThemeSymbol, null);
  if (!theme)
    throw new Error("Could not find Vuetify theme injection");
  const name = computed(() => {
    var _a;
    return (_a = props.theme) != null ? _a : theme == null ? void 0 : theme.name.value;
  });
  const themeClasses = computed(() => theme.isDisabled ? void 0 : `v-theme--${name.value}`);
  const newTheme = {
    ...theme,
    name,
    themeClasses
  };
  provide(ThemeSymbol, newTheme);
  return newTheme;
}
function createCssClass(lines, selector, content) {
  lines.push(`${selector} {
`, ...content.map((line) => `  ${line};
`), "}\n");
}
function genCssVariables(theme) {
  const lightOverlay = theme.dark ? 2 : 1;
  const darkOverlay = theme.dark ? 1 : 2;
  const variables = [];
  for (const [key, value] of Object.entries(theme.colors)) {
    const rgb = parseColor(value);
    variables.push(`--v-theme-${key}: ${rgb.r},${rgb.g},${rgb.b}`);
    if (!key.startsWith("on-")) {
      variables.push(`--v-theme-${key}-overlay-multiplier: ${getLuma(value) > 0.18 ? lightOverlay : darkOverlay}`);
    }
  }
  return variables;
}
function useProxiedModel(props, prop, defaultValue) {
  let transformIn = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v;
  let transformOut = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const vm = getCurrentInstance("useProxiedModel");
  const internal = ref(props[prop] !== void 0 ? props[prop] : defaultValue);
  const kebabProp = toKebabCase(prop);
  const checkKebab = kebabProp !== prop;
  const isControlled = checkKebab ? computed(() => {
    var _vm$vnode$props, _vm$vnode$props2, _vm$vnode$props3, _vm$vnode$props4;
    void props[prop];
    return !!(((_vm$vnode$props = vm.vnode.props) != null && _vm$vnode$props.hasOwnProperty(prop) || (_vm$vnode$props2 = vm.vnode.props) != null && _vm$vnode$props2.hasOwnProperty(kebabProp)) && ((_vm$vnode$props3 = vm.vnode.props) != null && _vm$vnode$props3.hasOwnProperty(`onUpdate:${prop}`) || (_vm$vnode$props4 = vm.vnode.props) != null && _vm$vnode$props4.hasOwnProperty(`onUpdate:${kebabProp}`)));
  }) : computed(() => {
    var _vm$vnode$props5, _vm$vnode$props6;
    void props[prop];
    return !!((_vm$vnode$props5 = vm.vnode.props) != null && _vm$vnode$props5.hasOwnProperty(prop) && (_vm$vnode$props6 = vm.vnode.props) != null && _vm$vnode$props6.hasOwnProperty(`onUpdate:${prop}`));
  });
  useToggleScope(() => !isControlled.value, () => {
    watch(() => props[prop], (val) => {
      internal.value = val;
    });
  });
  const model = computed({
    get() {
      return transformIn(isControlled.value ? props[prop] : internal.value);
    },
    set(value) {
      const newValue = transformOut(value);
      if ((isControlled.value ? props[prop] : internal.value) === newValue || transformIn(isControlled.value ? props[prop] : internal.value) === value) {
        return;
      }
      internal.value = newValue;
      vm == null ? void 0 : vm.emit(`update:${prop}`, newValue);
    }
  });
  Object.defineProperty(model, "externalValue", {
    get: () => isControlled.value ? props[prop] : internal.value
  });
  return model;
}
const en = {
  badge: "Badge",
  close: "Close",
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    nextMonthAriaLabel: "Next month",
    nextYearAriaLabel: "Next year",
    prevMonthAriaLabel: "Previous month",
    prevYearAriaLabel: "Previous year"
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  }
};
const LANG_PREFIX = "$vuetify.";
const replace = (str, params) => {
  return str.replace(/\{(\d+)\}/g, (match, index) => {
    return String(params[+index]);
  });
};
const createTranslateFunction = (current, fallback, messages) => {
  return function(key) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    if (!key.startsWith(LANG_PREFIX)) {
      return replace(key, params);
    }
    const shortKey = key.replace(LANG_PREFIX, "");
    const currentLocale = current.value && messages.value[current.value];
    const fallbackLocale = fallback.value && messages.value[fallback.value];
    let str = getObjectValueByPath(currentLocale, shortKey, null);
    if (!str) {
      consoleWarn(`Translation key "${key}" not found in "${current.value}", trying fallback locale`);
      str = getObjectValueByPath(fallbackLocale, shortKey, null);
    }
    if (!str) {
      consoleError(`Translation key "${key}" not found in fallback`);
      str = key;
    }
    if (typeof str !== "string") {
      consoleError(`Translation key "${key}" has a non-string value`);
      str = key;
    }
    return replace(str, params);
  };
};
function createNumberFunction(current, fallback) {
  return (value, options) => {
    const numberFormat = new Intl.NumberFormat([current.value, fallback.value], options);
    return numberFormat.format(value);
  };
}
function useProvided(props, prop, provided) {
  var _a, _b;
  const internal = useProxiedModel(props, prop, (_a = props[prop]) != null ? _a : provided.value);
  internal.value = (_b = props[prop]) != null ? _b : provided.value;
  watch(provided, (v) => {
    if (props[prop] == null) {
      internal.value = provided.value;
    }
  });
  return internal;
}
function createProvideFunction(state) {
  return (props) => {
    const current = useProvided(props, "locale", state.current);
    const fallback = useProvided(props, "fallback", state.fallback);
    const messages = useProvided(props, "messages", state.messages);
    return {
      name: "vuetify",
      current,
      fallback,
      messages,
      t: createTranslateFunction(current, fallback, messages),
      n: createNumberFunction(current, fallback),
      provide: createProvideFunction({
        current,
        fallback,
        messages
      })
    };
  };
}
function createVuetifyAdapter(options) {
  var _a, _b;
  const current = ref((_a = options == null ? void 0 : options.locale) != null ? _a : "en");
  const fallback = ref((_b = options == null ? void 0 : options.fallback) != null ? _b : "en");
  const messages = ref({
    en,
    ...options == null ? void 0 : options.messages
  });
  return {
    name: "vuetify",
    current,
    fallback,
    messages,
    t: createTranslateFunction(current, fallback, messages),
    n: createNumberFunction(current, fallback),
    provide: createProvideFunction({
      current,
      fallback,
      messages
    })
  };
}
const defaultRtl = {
  af: false,
  ar: true,
  bg: false,
  ca: false,
  ckb: false,
  cs: false,
  de: false,
  el: false,
  en: false,
  es: false,
  et: false,
  fa: false,
  fi: false,
  fr: false,
  hr: false,
  hu: false,
  he: true,
  id: false,
  it: false,
  ja: false,
  ko: false,
  lv: false,
  lt: false,
  nl: false,
  no: false,
  pl: false,
  pt: false,
  ro: false,
  ru: false,
  sk: false,
  sl: false,
  srCyrl: false,
  srLatn: false,
  sv: false,
  th: false,
  tr: false,
  az: false,
  uk: false,
  vi: false,
  zhHans: false,
  zhHant: false
};
const LocaleSymbol = Symbol.for("vuetify:locale");
function isLocaleInstance(obj) {
  return obj.name != null;
}
function createLocale(options) {
  const i18n = options != null && options.adapter && isLocaleInstance(options == null ? void 0 : options.adapter) ? options == null ? void 0 : options.adapter : createVuetifyAdapter(options);
  const rtl = createRtl(i18n, options);
  return {
    ...i18n,
    ...rtl
  };
}
function createRtl(i18n, options) {
  var _a;
  const rtl = ref((_a = options == null ? void 0 : options.rtl) != null ? _a : defaultRtl);
  const isRtl = computed(() => {
    var _a2;
    return (_a2 = rtl.value[i18n.current.value]) != null ? _a2 : false;
  });
  return {
    isRtl,
    rtl,
    rtlClasses: computed(() => `v-locale--is-${isRtl.value ? "rtl" : "ltr"}`)
  };
}
function useRtl() {
  const locale = inject$1(LocaleSymbol);
  if (!locale)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: locale.isRtl,
    rtlClasses: locale.rtlClasses
  };
}
const VApp = defineComponent({
  name: "VApp",
  props: {
    ...makeLayoutProps({
      fullHeight: true
    }),
    ...makeThemeProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const theme = provideTheme(props);
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      rtlClasses
    } = useRtl();
    useRender(() => {
      var _slots$default;
      return createVNode("div", {
        "ref": layoutRef,
        "class": ["v-application", theme.themeClasses.value, layoutClasses.value, rtlClasses.value],
        "style": layoutStyles.value
      }, [createVNode("div", {
        "class": "v-application__wrap"
      }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)])]);
    });
    return {
      getLayoutItem,
      items,
      theme
    };
  }
});
const VBtn$1 = "";
const VBtnToggle = "";
const VBtnGroup$1 = "";
const makeBorderProps = propsFactory({
  border: [Boolean, Number, String]
}, "border");
function useBorder(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const borderClasses = computed(() => {
    const border = isRef(props) ? props.value : props.border;
    const classes = [];
    if (border === true || border === "") {
      classes.push(`${name}--border`);
    } else if (typeof border === "string" || border === 0) {
      for (const value of String(border).split(" ")) {
        classes.push(`border-${value}`);
      }
    }
    return classes;
  });
  return {
    borderClasses
  };
}
const allowedDensities = [null, "default", "comfortable", "compact"];
const makeDensityProps = propsFactory({
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  }
}, "density");
function useDensity(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const densityClasses = computed(() => {
    return `${name}--density-${props.density}`;
  });
  return {
    densityClasses
  };
}
const makeElevationProps = propsFactory({
  elevation: {
    type: [Number, String],
    validator(v) {
      const value = parseInt(v);
      return !isNaN(value) && value >= 0 && value <= 24;
    }
  }
}, "elevation");
function useElevation(props) {
  const elevationClasses = computed(() => {
    const elevation = isRef(props) ? props.value : props.elevation;
    const classes = [];
    if (elevation == null)
      return classes;
    classes.push(`elevation-${elevation}`);
    return classes;
  });
  return {
    elevationClasses
  };
}
const makeRoundedProps = propsFactory({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  }
}, "rounded");
function useRounded(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const roundedClasses = computed(() => {
    const rounded = isRef(props) ? props.value : props.rounded;
    const classes = [];
    if (rounded === true || rounded === "") {
      classes.push(`${name}--rounded`);
    } else if (typeof rounded === "string" || rounded === 0) {
      for (const value of String(rounded).split(" ")) {
        classes.push(`rounded-${value}`);
      }
    }
    return classes;
  });
  return {
    roundedClasses
  };
}
const makeTagProps = propsFactory({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");
function useColor(colors) {
  return destructComputed(() => {
    const classes = [];
    const styles = {};
    if (colors.value.background) {
      if (isCssColor(colors.value.background)) {
        styles.backgroundColor = colors.value.background;
      } else {
        classes.push(`bg-${colors.value.background}`);
      }
    }
    if (colors.value.text) {
      if (isCssColor(colors.value.text)) {
        styles.color = colors.value.text;
        styles.caretColor = colors.value.text;
      } else {
        classes.push(`text-${colors.value.text}`);
      }
    }
    return {
      colorClasses: classes,
      colorStyles: styles
    };
  });
}
function useTextColor(props, name) {
  const colors = computed(() => ({
    text: isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: textColorClasses,
    colorStyles: textColorStyles
  } = useColor(colors);
  return {
    textColorClasses,
    textColorStyles
  };
}
function useBackgroundColor(props, name) {
  const colors = computed(() => ({
    background: isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: backgroundColorClasses,
    colorStyles: backgroundColorStyles
  } = useColor(colors);
  return {
    backgroundColorClasses,
    backgroundColorStyles
  };
}
const allowedVariants = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function genOverlays(isClickable, name) {
  return createVNode(Fragment, null, [isClickable && createVNode("span", {
    "key": "overlay",
    "class": `${name}__overlay`
  }, null), createVNode("span", {
    "key": "underlay",
    "class": `${name}__underlay`
  }, null)]);
}
const makeVariantProps = propsFactory({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (v) => allowedVariants.includes(v)
  }
}, "variant");
function useVariant(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const variantClasses = computed(() => {
    const {
      variant
    } = unref(props);
    return `${name}--variant-${variant}`;
  });
  const {
    colorClasses,
    colorStyles
  } = useColor(computed(() => {
    const {
      variant,
      color
    } = unref(props);
    return {
      [["elevated", "flat"].includes(variant) ? "background" : "text"]: color
    };
  }));
  return {
    colorClasses,
    colorStyles,
    variantClasses
  };
}
const VBtnGroup = defineComponent({
  name: "VBtnGroup",
  props: {
    divided: Boolean,
    ...makeBorderProps(),
    ...makeDensityProps(),
    ...makeElevationProps(),
    ...makeRoundedProps(),
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeVariantProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBtn: {
        height: "auto",
        color: toRef(props, "color"),
        density: toRef(props, "density"),
        flat: true,
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-btn-group", {
          "v-btn-group--divided": props.divided
        }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value]
      }, slots);
    });
  }
});
const makeGroupProps = propsFactory({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group");
const makeGroupItemProps = propsFactory({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function useGroupItem(props, injectKey) {
  let required = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const vm = getCurrentInstance("useGroupItem");
  if (!vm) {
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  }
  const id = getUid();
  provide(Symbol.for(`${injectKey.description}:id`), id);
  const group = inject$1(injectKey, null);
  if (!group) {
    if (!required)
      return group;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
  }
  const value = toRef(props, "value");
  const disabled = computed(() => group.disabled.value || props.disabled);
  group.register({
    id,
    value,
    disabled
  }, vm);
  onBeforeUnmount(() => {
    group.unregister(id);
  });
  const isSelected = computed(() => {
    return group.isSelected(id);
  });
  const selectedClass = computed(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
  watch(isSelected, (value2) => {
    vm.emit("group:selected", {
      value: value2
    });
  });
  return {
    id,
    isSelected,
    toggle: () => group.select(id, !isSelected.value),
    select: (value2) => group.select(id, value2),
    selectedClass,
    value,
    disabled,
    group
  };
}
function useGroup(props, injectKey) {
  let isUnmounted = false;
  const items = reactive([]);
  const selected = useProxiedModel(props, "modelValue", [], (v) => {
    if (v == null)
      return [];
    return getIds(items, wrapInArray(v));
  }, (v) => {
    const arr = getValues(items, v);
    return props.multiple ? arr : arr[0];
  });
  const groupVm = getCurrentInstance("useGroup");
  function register(item, vm) {
    const unwrapped = item;
    const key = Symbol.for(`${injectKey.description}:id`);
    const children = findChildrenWithProvide(key, groupVm == null ? void 0 : groupVm.vnode);
    const index = children.indexOf(vm);
    if (index > -1) {
      items.splice(index, 0, unwrapped);
    } else {
      items.push(unwrapped);
    }
  }
  function unregister(id) {
    if (isUnmounted)
      return;
    forceMandatoryValue();
    const index = items.findIndex((item) => item.id === id);
    items.splice(index, 1);
  }
  function forceMandatoryValue() {
    const item = items.find((item2) => !item2.disabled);
    if (item && props.mandatory === "force" && !selected.value.length) {
      selected.value = [item.id];
    }
  }
  onMounted(() => {
    forceMandatoryValue();
  });
  onBeforeUnmount(() => {
    isUnmounted = true;
  });
  function select(id, value) {
    const item = items.find((item2) => item2.id === id);
    if (value && item != null && item.disabled)
      return;
    if (props.multiple) {
      const internalValue = selected.value.slice();
      const index = internalValue.findIndex((v) => v === id);
      const isSelected = ~index;
      value = value != null ? value : !isSelected;
      if (isSelected && props.mandatory && internalValue.length <= 1)
        return;
      if (!isSelected && props.max != null && internalValue.length + 1 > props.max)
        return;
      if (index < 0 && value)
        internalValue.push(id);
      else if (index >= 0 && !value)
        internalValue.splice(index, 1);
      selected.value = internalValue;
    } else {
      const isSelected = selected.value.includes(id);
      if (props.mandatory && isSelected)
        return;
      selected.value = (value != null ? value : !isSelected) ? [id] : [];
    }
  }
  function step(offset) {
    if (props.multiple)
      consoleWarn('This method is not supported when using "multiple" prop');
    if (!selected.value.length) {
      const item = items.find((item2) => !item2.disabled);
      item && (selected.value = [item.id]);
    } else {
      const currentId = selected.value[0];
      const currentIndex = items.findIndex((i) => i.id === currentId);
      let newIndex = (currentIndex + offset) % items.length;
      let newItem = items[newIndex];
      while (newItem.disabled && newIndex !== currentIndex) {
        newIndex = (newIndex + offset) % items.length;
        newItem = items[newIndex];
      }
      if (newItem.disabled)
        return;
      selected.value = [items[newIndex].id];
    }
  }
  const state = {
    register,
    unregister,
    selected,
    select,
    disabled: toRef(props, "disabled"),
    prev: () => step(items.length - 1),
    next: () => step(1),
    isSelected: (id) => selected.value.includes(id),
    selectedClass: computed(() => props.selectedClass),
    items: computed(() => items),
    getItemIndex: (value) => getItemIndex(items, value)
  };
  provide(injectKey, state);
  return state;
}
function getItemIndex(items, value) {
  const ids = getIds(items, [value]);
  if (!ids.length)
    return -1;
  return items.findIndex((item) => item.id === ids[0]);
}
function getIds(items, modelValue) {
  const ids = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.value != null) {
      if (modelValue.find((value) => deepEqual(value, item.value)) != null) {
        ids.push(item.id);
      }
    } else if (modelValue.includes(i)) {
      ids.push(item.id);
    }
  }
  return ids;
}
function getValues(items, ids) {
  const values = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (ids.includes(item.id)) {
      values.push(item.value != null ? item.value : i);
    }
  }
  return values;
}
const VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle");
genericComponent()({
  name: "VBtnToggle",
  props: makeGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      next,
      prev,
      select,
      selected
    } = useGroup(props, VBtnToggleSymbol);
    useRender(() => {
      var _slots$default;
      return createVNode(VBtnGroup, {
        "class": "v-btn-toggle"
      }, {
        default: () => [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots, {
          isSelected,
          next,
          prev,
          select,
          selected
        })]
      });
    });
    return {
      next,
      prev,
      select
    };
  }
});
const VDefaultsProvider = defineComponent$1({
  name: "VDefaultsProvider",
  props: {
    defaults: Object,
    reset: [Number, String],
    root: Boolean,
    scoped: Boolean
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      defaults,
      reset,
      root,
      scoped
    } = toRefs(props);
    provideDefaults(defaults, {
      reset,
      root,
      scoped
    });
    return () => {
      var _slots$default;
      return (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots);
    };
  }
});
const VIcon$1 = "";
const aliases$1 = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus"
};
const mdi$1 = {
  component: (props) => h(VClassIcon, {
    ...props,
    class: "mdi"
  })
};
const IconValue = [String, Function, Object];
const IconSymbol = Symbol.for("vuetify:icons");
const makeIconProps = propsFactory({
  icon: {
    type: IconValue
  },
  tag: {
    type: String,
    required: true
  }
}, "icon");
const VComponentIcon = defineComponent({
  name: "VComponentIcon",
  props: makeIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      var _slots$default;
      return createVNode(props.tag, null, {
        default: () => [props.icon ? createVNode(props.icon, null, null) : (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]
      });
    };
  }
});
const VSvgIcon = defineComponent({
  name: "VSvgIcon",
  inheritAttrs: false,
  props: makeIconProps(),
  setup(props, _ref2) {
    let {
      attrs
    } = _ref2;
    return () => {
      return createVNode(props.tag, mergeProps(attrs, {
        "style": null
      }), {
        default: () => [createVNode("svg", {
          "class": "v-icon__svg",
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": "0 0 24 24",
          "role": "img",
          "aria-hidden": "true"
        }, [createVNode("path", {
          "d": props.icon
        }, null)])]
      });
    };
  }
});
defineComponent({
  name: "VLigatureIcon",
  props: makeIconProps(),
  setup(props) {
    return () => {
      return createVNode(props.tag, null, {
        default: () => [props.icon]
      });
    };
  }
});
const VClassIcon = defineComponent({
  name: "VClassIcon",
  props: makeIconProps(),
  setup(props) {
    return () => {
      return createVNode(props.tag, {
        "class": props.icon
      }, null);
    };
  }
});
const defaultSets = {
  svg: {
    component: VSvgIcon
  },
  class: {
    component: VClassIcon
  }
};
function createIcons(options) {
  return mergeDeep({
    defaultSet: "mdi",
    sets: {
      ...defaultSets,
      mdi: mdi$1
    },
    aliases: aliases$1
  }, options);
}
const useIcon = (props) => {
  const icons = inject$1(IconSymbol);
  if (!icons)
    throw new Error("Missing Vuetify Icons provide!");
  const iconData = computed(() => {
    const iconAlias = isRef(props) ? props.value : props.icon;
    if (!iconAlias)
      return {
        component: VComponentIcon
      };
    let icon = iconAlias;
    if (typeof icon === "string") {
      icon = icon.trim();
      if (icon.startsWith("$")) {
        var _icons$aliases;
        icon = (_icons$aliases = icons.aliases) == null ? void 0 : _icons$aliases[icon.slice(1)];
      }
    }
    if (!icon)
      throw new Error(`Could not find aliased icon "${iconAlias}"`);
    if (typeof icon !== "string") {
      return {
        component: VComponentIcon,
        icon
      };
    }
    const iconSetName = Object.keys(icons.sets).find((setName) => typeof icon === "string" && icon.startsWith(`${setName}:`));
    const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon;
    const iconSet = icons.sets[iconSetName != null ? iconSetName : icons.defaultSet];
    return {
      component: iconSet.component,
      icon: iconName
    };
  });
  return {
    iconData
  };
};
const predefinedSizes = ["x-small", "small", "default", "large", "x-large"];
const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function useSize(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  return destructComputed(() => {
    let sizeClasses;
    let sizeStyles;
    if (includes(predefinedSizes, props.size)) {
      sizeClasses = `${name}--size-${props.size}`;
    } else if (props.size) {
      sizeStyles = {
        width: convertToUnit(props.size),
        height: convertToUnit(props.size)
      };
    }
    return {
      sizeClasses,
      sizeStyles
    };
  });
}
const makeVIconProps = propsFactory({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "i"
  }),
  ...makeThemeProps()
}, "v-icon");
const VIcon = defineComponent({
  name: "VIcon",
  props: makeVIconProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    let slotIcon;
    if (slots.default) {
      slotIcon = computed(() => {
        var _slots$default, _slot$filter$;
        const slot = (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots);
        if (!slot)
          return;
        return (_slot$filter$ = slot.filter((node) => node.type === Text && node.children && typeof node.children === "string")[0]) == null ? void 0 : _slot$filter$.children;
      });
    }
    const {
      themeClasses
    } = provideTheme(props);
    const {
      iconData
    } = useIcon(slotIcon || props);
    const {
      sizeClasses
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    useRender(() => {
      var _slots$default2;
      return createVNode(iconData.value.component, {
        "tag": props.tag,
        "icon": iconData.value.icon,
        "class": ["v-icon", "notranslate", themeClasses.value, sizeClasses.value, textColorClasses.value, {
          "v-icon--clickable": !!attrs.onClick,
          "v-icon--start": props.start,
          "v-icon--end": props.end
        }],
        "style": [!sizeClasses.value ? {
          fontSize: convertToUnit(props.size),
          height: convertToUnit(props.size),
          width: convertToUnit(props.size)
        } : void 0, textColorStyles.value],
        "role": attrs.onClick ? "button" : void 0,
        "aria-hidden": !attrs.onClick
      }, {
        default: () => [(_slots$default2 = slots.default) == null ? void 0 : _slots$default2.call(slots)]
      });
    });
    return {};
  }
});
const VProgressCircular$1 = "";
function useIntersectionObserver(callback) {
  const intersectionRef = ref();
  const isIntersecting = ref(false);
  if (SUPPORTS_INTERSECTION) {
    const observer = new IntersectionObserver((entries) => {
      callback == null ? void 0 : callback(entries, observer);
      isIntersecting.value = !!entries.find((entry) => entry.isIntersecting);
    });
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    watch(intersectionRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        isIntersecting.value = false;
      }
      if (newValue)
        observer.observe(newValue);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef,
    isIntersecting
  };
}
const VProgressCircular = defineComponent({
  name: "VProgressCircular",
  props: {
    bgColor: String,
    color: String,
    indeterminate: [Boolean, String],
    modelValue: {
      type: [Number, String],
      default: 0
    },
    rotate: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 4
    },
    ...makeSizeProps(),
    ...makeTagProps({
      tag: "div"
    }),
    ...makeThemeProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const MAGIC_RADIUS_CONSTANT = 20;
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
    const root = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const {
      textColorClasses: underlayColorClasses,
      textColorStyles: underlayColorStyles
    } = useTextColor(toRef(props, "bgColor"));
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    const normalizedValue = computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))));
    const width = computed(() => Number(props.width));
    const size2 = computed(() => {
      return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
    });
    const diameter = computed(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size2.value) * 2);
    const strokeWidth = computed(() => width.value / size2.value * diameter.value);
    const strokeDashOffset = computed(() => convertToUnit((100 - normalizedValue.value) / 100 * CIRCUMFERENCE));
    watchEffect(() => {
      intersectionRef.value = root.value;
      resizeRef.value = root.value;
    });
    useRender(() => createVNode(props.tag, {
      "ref": root,
      "class": ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!props.indeterminate,
        "v-progress-circular--visible": isIntersecting.value,
        "v-progress-circular--disable-shrink": props.indeterminate === "disable-shrink"
      }, themeClasses.value, sizeClasses.value, textColorClasses.value],
      "style": [sizeStyles.value, textColorStyles.value],
      "role": "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value
    }, {
      default: () => [createVNode("svg", {
        "style": {
          transform: `rotate(calc(-90deg + ${Number(props.rotate)}deg))`
        },
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": `0 0 ${diameter.value} ${diameter.value}`
      }, [createVNode("circle", {
        "class": ["v-progress-circular__underlay", underlayColorClasses.value],
        "style": underlayColorStyles.value,
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": 0
      }, null), createVNode("circle", {
        "class": "v-progress-circular__overlay",
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": strokeDashOffset.value
      }, null)]), slots.default && createVNode("div", {
        "class": "v-progress-circular__content"
      }, [slots.default({
        value: normalizedValue.value
      })])]
    }));
    return {};
  }
});
const VRipple = "";
const stopSymbol = Symbol("rippleStop");
const DELAY_RIPPLE = 80;
function transform(el2, value) {
  el2.style.transform = value;
  el2.style.webkitTransform = value;
}
function opacity(el2, value) {
  el2.style.opacity = `calc(${value} * var(--v-theme-overlay-multiplier))`;
}
function isTouchEvent(e) {
  return e.constructor.name === "TouchEvent";
}
function isKeyboardEvent(e) {
  return e.constructor.name === "KeyboardEvent";
}
const calculate = function(e, el2) {
  var _el$_ripple;
  let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  let localX = 0;
  let localY = 0;
  if (!isKeyboardEvent(e)) {
    const offset = el2.getBoundingClientRect();
    const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    localX = target.clientX - offset.left;
    localY = target.clientY - offset.top;
  }
  let radius = 0;
  let scale = 0.3;
  if ((_el$_ripple = el2._ripple) != null && _el$_ripple.circle) {
    scale = 0.15;
    radius = el2.clientWidth / 2;
    radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
  } else {
    radius = Math.sqrt(el2.clientWidth ** 2 + el2.clientHeight ** 2) / 2;
  }
  const centerX = `${(el2.clientWidth - radius * 2) / 2}px`;
  const centerY = `${(el2.clientHeight - radius * 2) / 2}px`;
  const x = value.center ? centerX : `${localX - radius}px`;
  const y = value.center ? centerY : `${localY - radius}px`;
  return {
    radius,
    scale,
    x,
    y,
    centerX,
    centerY
  };
};
const ripples = {
  show(e, el2) {
    var _el$_ripple2;
    let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!(el2 != null && (_el$_ripple2 = el2._ripple) != null && _el$_ripple2.enabled)) {
      return;
    }
    const container = document.createElement("span");
    const animation = document.createElement("span");
    container.appendChild(animation);
    container.className = "v-ripple__container";
    if (value.class) {
      container.className += ` ${value.class}`;
    }
    const {
      radius,
      scale,
      x,
      y,
      centerX,
      centerY
    } = calculate(e, el2, value);
    const size2 = `${radius * 2}px`;
    animation.className = "v-ripple__animation";
    animation.style.width = size2;
    animation.style.height = size2;
    el2.appendChild(container);
    const computed2 = window.getComputedStyle(el2);
    if (computed2 && computed2.position === "static") {
      el2.style.position = "relative";
      el2.dataset.previousPosition = "static";
    }
    animation.classList.add("v-ripple__animation--enter");
    animation.classList.add("v-ripple__animation--visible");
    transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
    opacity(animation, 0);
    animation.dataset.activated = String(performance.now());
    setTimeout(() => {
      animation.classList.remove("v-ripple__animation--enter");
      animation.classList.add("v-ripple__animation--in");
      transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
      opacity(animation, 0.08);
    }, 0);
  },
  hide(el2) {
    var _el$_ripple3;
    if (!(el2 != null && (_el$_ripple3 = el2._ripple) != null && _el$_ripple3.enabled))
      return;
    const ripples2 = el2.getElementsByClassName("v-ripple__animation");
    if (ripples2.length === 0)
      return;
    const animation = ripples2[ripples2.length - 1];
    if (animation.dataset.isHiding)
      return;
    else
      animation.dataset.isHiding = "true";
    const diff = performance.now() - Number(animation.dataset.activated);
    const delay = Math.max(250 - diff, 0);
    setTimeout(() => {
      animation.classList.remove("v-ripple__animation--in");
      animation.classList.add("v-ripple__animation--out");
      opacity(animation, 0);
      setTimeout(() => {
        const ripples3 = el2.getElementsByClassName("v-ripple__animation");
        if (ripples3.length === 1 && el2.dataset.previousPosition) {
          el2.style.position = el2.dataset.previousPosition;
          delete el2.dataset.previousPosition;
        }
        animation.parentNode && el2.removeChild(animation.parentNode);
      }, 300);
    }, delay);
  }
};
function isRippleEnabled(value) {
  return typeof value === "undefined" || !!value;
}
function rippleShow(e) {
  const value = {};
  const element = e.currentTarget;
  if (!(element != null && element._ripple) || element._ripple.touched || e[stopSymbol])
    return;
  e[stopSymbol] = true;
  if (isTouchEvent(e)) {
    element._ripple.touched = true;
    element._ripple.isTouch = true;
  } else {
    if (element._ripple.isTouch)
      return;
  }
  value.center = element._ripple.centered || isKeyboardEvent(e);
  if (element._ripple.class) {
    value.class = element._ripple.class;
  }
  if (isTouchEvent(e)) {
    if (element._ripple.showTimerCommit)
      return;
    element._ripple.showTimerCommit = () => {
      ripples.show(e, element, value);
    };
    element._ripple.showTimer = window.setTimeout(() => {
      var _element$_ripple;
      if (element != null && (_element$_ripple = element._ripple) != null && _element$_ripple.showTimerCommit) {
        element._ripple.showTimerCommit();
        element._ripple.showTimerCommit = null;
      }
    }, DELAY_RIPPLE);
  } else {
    ripples.show(e, element, value);
  }
}
function rippleStop(e) {
  e[stopSymbol] = true;
}
function rippleHide(e) {
  const element = e.currentTarget;
  if (!element || !element._ripple)
    return;
  window.clearTimeout(element._ripple.showTimer);
  if (e.type === "touchend" && element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit();
    element._ripple.showTimerCommit = null;
    element._ripple.showTimer = window.setTimeout(() => {
      rippleHide(e);
    });
    return;
  }
  window.setTimeout(() => {
    if (element._ripple) {
      element._ripple.touched = false;
    }
  });
  ripples.hide(element);
}
function rippleCancelShow(e) {
  const element = e.currentTarget;
  if (!element || !element._ripple)
    return;
  if (element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit = null;
  }
  window.clearTimeout(element._ripple.showTimer);
}
let keyboardRipple = false;
function keyboardRippleShow(e) {
  if (!keyboardRipple && (e.keyCode === keyCodes.enter || e.keyCode === keyCodes.space)) {
    keyboardRipple = true;
    rippleShow(e);
  }
}
function keyboardRippleHide(e) {
  keyboardRipple = false;
  rippleHide(e);
}
function focusRippleHide(e) {
  if (keyboardRipple) {
    keyboardRipple = false;
    rippleHide(e);
  }
}
function updateRipple(el2, binding, wasEnabled) {
  var _a;
  const {
    value,
    modifiers
  } = binding;
  const enabled = isRippleEnabled(value);
  if (!enabled) {
    ripples.hide(el2);
  }
  el2._ripple = (_a = el2._ripple) != null ? _a : {};
  el2._ripple.enabled = enabled;
  el2._ripple.centered = modifiers.center;
  el2._ripple.circle = modifiers.circle;
  if (isObject(value) && value.class) {
    el2._ripple.class = value.class;
  }
  if (enabled && !wasEnabled) {
    if (modifiers.stop) {
      el2.addEventListener("touchstart", rippleStop, {
        passive: true
      });
      el2.addEventListener("mousedown", rippleStop);
      return;
    }
    el2.addEventListener("touchstart", rippleShow, {
      passive: true
    });
    el2.addEventListener("touchend", rippleHide, {
      passive: true
    });
    el2.addEventListener("touchmove", rippleCancelShow, {
      passive: true
    });
    el2.addEventListener("touchcancel", rippleHide);
    el2.addEventListener("mousedown", rippleShow);
    el2.addEventListener("mouseup", rippleHide);
    el2.addEventListener("mouseleave", rippleHide);
    el2.addEventListener("keydown", keyboardRippleShow);
    el2.addEventListener("keyup", keyboardRippleHide);
    el2.addEventListener("blur", focusRippleHide);
    el2.addEventListener("dragstart", rippleHide, {
      passive: true
    });
  } else if (!enabled && wasEnabled) {
    removeListeners(el2);
  }
}
function removeListeners(el2) {
  el2.removeEventListener("mousedown", rippleShow);
  el2.removeEventListener("touchstart", rippleShow);
  el2.removeEventListener("touchend", rippleHide);
  el2.removeEventListener("touchmove", rippleCancelShow);
  el2.removeEventListener("touchcancel", rippleHide);
  el2.removeEventListener("mouseup", rippleHide);
  el2.removeEventListener("mouseleave", rippleHide);
  el2.removeEventListener("keydown", keyboardRippleShow);
  el2.removeEventListener("keyup", keyboardRippleHide);
  el2.removeEventListener("dragstart", rippleHide);
  el2.removeEventListener("blur", focusRippleHide);
}
function mounted$1(el2, binding) {
  updateRipple(el2, binding, false);
}
function unmounted$1(el2) {
  delete el2._ripple;
  removeListeners(el2);
}
function updated(el2, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }
  const wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el2, binding, wasEnabled);
}
const Ripple = {
  mounted: mounted$1,
  unmounted: unmounted$1,
  updated
};
const makeDimensionProps = propsFactory({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function useDimension(props) {
  const dimensionStyles = computed(() => ({
    height: convertToUnit(props.height),
    maxHeight: convertToUnit(props.maxHeight),
    maxWidth: convertToUnit(props.maxWidth),
    minHeight: convertToUnit(props.minHeight),
    minWidth: convertToUnit(props.minWidth),
    width: convertToUnit(props.width)
  }));
  return {
    dimensionStyles
  };
}
const VProgressLinear$1 = "";
const oppositeMap = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const makeLocationProps = propsFactory({
  location: String
}, "location");
function useLocation(props) {
  let opposite = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let offset = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl
  } = useRtl();
  const locationStyles = computed(() => {
    if (!props.location)
      return {};
    const {
      side,
      align
    } = parseAnchor(props.location.split(" ").length > 1 ? props.location : `${props.location} center`, isRtl.value);
    function getOffset2(side2) {
      return offset ? offset(side2) : 0;
    }
    const styles = {};
    if (side !== "center") {
      if (opposite)
        styles[oppositeMap[side]] = `calc(100% - ${getOffset2(side)}px)`;
      else
        styles[side] = 0;
    }
    if (align !== "center") {
      if (opposite)
        styles[oppositeMap[align]] = `calc(100% - ${getOffset2(align)}px)`;
      else
        styles[align] = 0;
    } else {
      if (side === "center")
        styles.top = styles.left = "50%";
      else {
        styles[{
          top: "left",
          bottom: "left",
          left: "top",
          right: "top"
        }[side]] = "50%";
      }
      styles.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[side];
    }
    return styles;
  });
  return {
    locationStyles
  };
}
const VProgressLinear = defineComponent({
  name: "VProgressLinear",
  props: {
    absolute: Boolean,
    active: {
      type: Boolean,
      default: true
    },
    bgColor: String,
    bgOpacity: [Number, String],
    bufferValue: {
      type: [Number, String],
      default: 0
    },
    clickable: Boolean,
    color: String,
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    reverse: Boolean,
    stream: Boolean,
    striped: Boolean,
    roundedBar: Boolean,
    ...makeLocationProps({
      location: "top"
    }),
    ...makeRoundedProps(),
    ...makeTagProps(),
    ...makeThemeProps()
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const progress = useProxiedModel(props, "modelValue");
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(props, "color");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(computed(() => props.bgColor || props.color));
    const {
      backgroundColorClasses: barColorClasses,
      backgroundColorStyles: barColorStyles
    } = useBackgroundColor(props, "color");
    const {
      roundedClasses
    } = useRounded(props);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const max = computed(() => parseInt(props.max, 10));
    const height = computed(() => parseInt(props.height, 10));
    const normalizedBuffer = computed(() => parseFloat(props.bufferValue) / max.value * 100);
    const normalizedValue = computed(() => parseFloat(progress.value) / max.value * 100);
    const isReversed = computed(() => isRtl.value !== props.reverse);
    const transition = computed(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
    const opacity2 = computed(() => {
      return props.bgOpacity == null ? props.bgOpacity : parseFloat(props.bgOpacity);
    });
    function handleClick(e) {
      if (!intersectionRef.value)
        return;
      const {
        left,
        right,
        width
      } = intersectionRef.value.getBoundingClientRect();
      const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
      progress.value = Math.round(value / width * max.value);
    }
    useRender(() => createVNode(props.tag, {
      "ref": intersectionRef,
      "class": ["v-progress-linear", {
        "v-progress-linear--absolute": props.absolute,
        "v-progress-linear--active": props.active && isIntersecting.value,
        "v-progress-linear--reverse": isReversed.value,
        "v-progress-linear--rounded": props.rounded,
        "v-progress-linear--rounded-bar": props.roundedBar,
        "v-progress-linear--striped": props.striped
      }, roundedClasses.value, themeClasses.value],
      "style": {
        bottom: props.location === "bottom" ? 0 : void 0,
        top: props.location === "top" ? 0 : void 0,
        height: props.active ? convertToUnit(height.value) : 0,
        "--v-progress-linear-height": convertToUnit(height.value),
        ...locationStyles.value
      },
      "role": "progressbar",
      "aria-hidden": props.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": props.max,
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value,
      "onClick": props.clickable && handleClick
    }, {
      default: () => [props.stream && createVNode("div", {
        "key": "stream",
        "class": ["v-progress-linear__stream", textColorClasses.value],
        "style": {
          ...textColorStyles.value,
          [isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
          borderTop: `${convertToUnit(height.value / 2)} dotted`,
          opacity: opacity2.value,
          top: `calc(50% - ${convertToUnit(height.value / 4)})`,
          width: convertToUnit(100 - normalizedBuffer.value, "%"),
          "--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
        }
      }, null), createVNode("div", {
        "class": ["v-progress-linear__background", backgroundColorClasses.value],
        "style": [backgroundColorStyles.value, {
          opacity: opacity2.value,
          width: convertToUnit(!props.stream ? 100 : normalizedBuffer.value, "%")
        }]
      }, null), createVNode(Transition, {
        "name": transition.value
      }, {
        default: () => [!props.indeterminate ? createVNode("div", {
          "class": ["v-progress-linear__determinate", barColorClasses.value],
          "style": [barColorStyles.value, {
            width: convertToUnit(normalizedValue.value, "%")
          }]
        }, null) : createVNode("div", {
          "class": "v-progress-linear__indeterminate"
        }, [["long", "short"].map((bar) => createVNode("div", {
          "key": bar,
          "class": ["v-progress-linear__indeterminate", bar, barColorClasses.value],
          "style": barColorStyles.value
        }, null))])]
      }), slots.default && createVNode("div", {
        "class": "v-progress-linear__content"
      }, [slots.default({
        value: normalizedValue.value,
        buffer: normalizedBuffer.value
      })])]
    }));
    return {};
  }
});
const makeLoaderProps = propsFactory({
  loading: [Boolean, String]
}, "loader");
function useLoader(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const loaderClasses = computed(() => ({
    [`${name}--loading`]: props.loading
  }));
  return {
    loaderClasses
  };
}
function LoaderSlot(props, _ref) {
  var _slots$default;
  let {
    slots
  } = _ref;
  return createVNode("div", {
    "class": `${props.name}__loader`
  }, [((_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots, {
    color: props.color,
    isActive: props.active
  })) || createVNode(VProgressLinear, {
    "active": props.active,
    "color": props.color,
    "height": "2",
    "indeterminate": true
  }, null)]);
}
const positionValues = ["static", "relative", "fixed", "absolute", "sticky"];
const makePositionProps = propsFactory({
  position: {
    type: String,
    validator: (v) => positionValues.includes(v)
  }
}, "position");
function usePosition(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const positionClasses = computed(() => {
    return props.position ? `${name}--${props.position}` : void 0;
  });
  return {
    positionClasses
  };
}
function useRouter() {
  var _getCurrentInstance, _getCurrentInstance$p;
  return (_getCurrentInstance = getCurrentInstance("useRouter")) == null ? void 0 : (_getCurrentInstance$p = _getCurrentInstance.proxy) == null ? void 0 : _getCurrentInstance$p.$router;
}
function useLink(props, attrs) {
  const RouterLink = resolveDynamicComponent("RouterLink");
  const isLink = computed(() => !!(props.href || props.to));
  const isClickable = computed(() => {
    return (isLink == null ? void 0 : isLink.value) || hasEvent(attrs, "click") || hasEvent(props, "click");
  });
  if (typeof RouterLink === "string") {
    return {
      isLink,
      isClickable,
      href: toRef(props, "href")
    };
  }
  const link = props.to ? RouterLink.useLink(props) : void 0;
  return {
    isLink,
    isClickable,
    route: link == null ? void 0 : link.route,
    navigate: link == null ? void 0 : link.navigate,
    isActive: link && computed(() => {
      var _link$isExactActive, _link$isActive;
      return props.exact ? (_link$isExactActive = link.isExactActive) == null ? void 0 : _link$isExactActive.value : (_link$isActive = link.isActive) == null ? void 0 : _link$isActive.value;
    }),
    href: computed(() => props.to ? link == null ? void 0 : link.route.value.href : props.href)
  };
}
const makeRouterProps = propsFactory({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let inTransition = false;
function useBackButton(router, cb) {
  let popped = false;
  let removeBefore;
  let removeAfter;
  if (IN_BROWSER) {
    nextTick(() => {
      window.addEventListener("popstate", onPopstate);
      removeBefore = router == null ? void 0 : router.beforeEach((to, from, next) => {
        if (!inTransition) {
          setTimeout(() => popped ? cb(next) : next());
        } else {
          popped ? cb(next) : next();
        }
        inTransition = true;
      });
      removeAfter = router == null ? void 0 : router.afterEach(() => {
        inTransition = false;
      });
    });
    onScopeDispose(() => {
      var _removeBefore, _removeAfter;
      window.removeEventListener("popstate", onPopstate);
      (_removeBefore = removeBefore) == null ? void 0 : _removeBefore();
      (_removeAfter = removeAfter) == null ? void 0 : _removeAfter();
    });
  }
  function onPopstate(e) {
    var _e$state;
    if ((_e$state = e.state) != null && _e$state.replaced)
      return;
    popped = true;
    setTimeout(() => popped = false);
  }
}
function useSelectLink(link, select) {
  watch(() => {
    var _link$isActive;
    return (_link$isActive = link.isActive) == null ? void 0 : _link$isActive.value;
  }, (isActive) => {
    if (link.isLink.value && isActive && select) {
      nextTick(() => {
        select(true);
      });
    }
  }, {
    immediate: true
  });
}
const VBtn = defineComponent({
  name: "VBtn",
  directives: {
    Ripple
  },
  props: {
    active: {
      type: Boolean,
      default: void 0
    },
    symbol: {
      type: null,
      default: VBtnToggleSymbol
    },
    flat: Boolean,
    icon: [Boolean, String, Function, Object],
    prependIcon: IconValue,
    appendIcon: IconValue,
    block: Boolean,
    stacked: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    ...makeBorderProps(),
    ...makeRoundedProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makeGroupItemProps(),
    ...makeLoaderProps(),
    ...makeLocationProps(),
    ...makePositionProps(),
    ...makeRouterProps(),
    ...makeSizeProps(),
    ...makeTagProps({
      tag: "button"
    }),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: "elevated"
    })
  },
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const group = useGroupItem(props, props.symbol, false);
    const link = useLink(props, attrs);
    const isActive = computed(() => {
      if (props.active !== void 0) {
        return props.active;
      }
      if (link.isLink.value) {
        var _link$isActive;
        return (_link$isActive = link.isActive) == null ? void 0 : _link$isActive.value;
      }
      return group == null ? void 0 : group.isSelected.value;
    });
    const isDisabled = computed(() => (group == null ? void 0 : group.disabled.value) || props.disabled);
    const isElevated = computed(() => {
      return props.variant === "elevated" && !(props.disabled || props.flat || props.border);
    });
    const valueAttr = computed(() => {
      if (props.value === void 0)
        return void 0;
      return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
    });
    useSelectLink(link, group == null ? void 0 : group.select);
    useRender(() => {
      var _link$isActive2, _link$isActive3, _slots$prepend, _slots$default, _slots$append, _slots$loader;
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasPrepend = !!(props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendIcon || slots.append);
      const hasIcon = !!(props.icon && props.icon !== true);
      const hasColor = (group == null ? void 0 : group.isSelected.value) && (!link.isLink.value || ((_link$isActive2 = link.isActive) == null ? void 0 : _link$isActive2.value)) || !group || ((_link$isActive3 = link.isActive) == null ? void 0 : _link$isActive3.value);
      return withDirectives(createVNode(Tag, {
        "type": Tag === "a" ? void 0 : "button",
        "class": ["v-btn", group == null ? void 0 : group.selectedClass.value, {
          "v-btn--active": isActive.value,
          "v-btn--block": props.block,
          "v-btn--disabled": isDisabled.value,
          "v-btn--elevated": isElevated.value,
          "v-btn--flat": props.flat,
          "v-btn--icon": !!props.icon,
          "v-btn--loading": props.loading,
          "v-btn--stacked": props.stacked
        }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : void 0, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value],
        "style": [hasColor ? colorStyles.value : void 0, dimensionStyles.value, locationStyles.value, sizeStyles.value],
        "disabled": isDisabled.value || void 0,
        "href": link.href.value,
        "onClick": (e) => {
          var _link$navigate;
          if (isDisabled.value)
            return;
          (_link$navigate = link.navigate) == null ? void 0 : _link$navigate.call(link, e);
          group == null ? void 0 : group.toggle();
        },
        "value": valueAttr.value
      }, {
        default: () => {
          var _a;
          return [genOverlays(true, "v-btn"), !props.icon && hasPrepend && createVNode(VDefaultsProvider, {
            "key": "prepend",
            "defaults": {
              VIcon: {
                icon: props.prependIcon
              }
            }
          }, {
            default: () => {
              var _a2;
              return [createVNode("span", {
                "class": "v-btn__prepend"
              }, [(_a2 = (_slots$prepend = slots.prepend) == null ? void 0 : _slots$prepend.call(slots)) != null ? _a2 : createVNode(VIcon, null, null)])];
            }
          }), createVNode("span", {
            "class": "v-btn__content",
            "data-no-activator": ""
          }, [createVNode(VDefaultsProvider, {
            "key": "content",
            "defaults": {
              VIcon: {
                icon: hasIcon ? props.icon : void 0
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)) != null ? _a2 : hasIcon && createVNode(VIcon, {
                "key": "icon"
              }, null)];
            }
          })]), !props.icon && hasAppend && createVNode(VDefaultsProvider, {
            "key": "append",
            "defaults": {
              VIcon: {
                icon: props.appendIcon
              }
            }
          }, {
            default: () => {
              var _a2;
              return [createVNode("span", {
                "class": "v-btn__append"
              }, [(_a2 = (_slots$append = slots.append) == null ? void 0 : _slots$append.call(slots)) != null ? _a2 : createVNode(VIcon, null, null)])];
            }
          }), !!props.loading && createVNode("span", {
            "key": "loader",
            "class": "v-btn__loader"
          }, [(_a = (_slots$loader = slots.loader) == null ? void 0 : _slots$loader.call(slots)) != null ? _a : createVNode(VProgressCircular, {
            "color": typeof props.loading === "boolean" ? void 0 : props.loading,
            "indeterminate": true,
            "size": "23",
            "width": "2"
          }, null)])];
        }
      }), [[resolveDirective("ripple"), !isDisabled.value && props.ripple, null]]);
    });
    return {};
  }
});
const VCard$1 = "";
const VCardActions = defineComponent({
  name: "VCardActions",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _slots$default;
      return createVNode("div", {
        "class": "v-card-actions"
      }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]);
    });
    return {};
  }
});
const VAvatar$1 = "";
const VImg$1 = "";
const VResponsive$1 = "";
function useAspectStyles(props) {
  return {
    aspectStyles: computed(() => {
      const ratio = Number(props.aspectRatio);
      return ratio ? {
        paddingBottom: String(1 / ratio * 100) + "%"
      } : void 0;
    })
  };
}
const VResponsive = defineComponent({
  name: "VResponsive",
  props: {
    aspectRatio: [String, Number],
    contentClass: String,
    ...makeDimensionProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      aspectStyles
    } = useAspectStyles(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => {
      var _slots$additional;
      return createVNode("div", {
        "class": "v-responsive",
        "style": dimensionStyles.value
      }, [createVNode("div", {
        "class": "v-responsive__sizer",
        "style": aspectStyles.value
      }, null), (_slots$additional = slots.additional) == null ? void 0 : _slots$additional.call(slots), slots.default && createVNode("div", {
        "class": ["v-responsive__content", props.contentClass]
      }, [slots.default()])]);
    });
    return {};
  }
});
function mounted(el2, binding) {
  if (!SUPPORTS_INTERSECTION)
    return;
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    handler,
    options
  } = typeof value === "object" ? value : {
    handler: value,
    options: {}
  };
  const observer = new IntersectionObserver(function() {
    var _el$_observe;
    let entries = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    let observer2 = arguments.length > 1 ? arguments[1] : void 0;
    const _observe = (_el$_observe = el2._observe) == null ? void 0 : _el$_observe[binding.instance.$.uid];
    if (!_observe)
      return;
    const isIntersecting = entries.some((entry) => entry.isIntersecting);
    if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) {
      handler(isIntersecting, entries, observer2);
    }
    if (isIntersecting && modifiers.once)
      unmounted(el2, binding);
    else
      _observe.init = true;
  }, options);
  el2._observe = Object(el2._observe);
  el2._observe[binding.instance.$.uid] = {
    init: false,
    observer
  };
  observer.observe(el2);
}
function unmounted(el2, binding) {
  var _el$_observe2;
  const observe = (_el$_observe2 = el2._observe) == null ? void 0 : _el$_observe2[binding.instance.$.uid];
  if (!observe)
    return;
  observe.observer.unobserve(el2);
  delete el2._observe[binding.instance.$.uid];
}
const Intersect = {
  mounted,
  unmounted
};
const intersect = Intersect;
const makeTransitionProps = propsFactory({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (val) => val !== true
  }
}, "transition");
const MaybeTransition = (props, _ref) => {
  let {
    slots
  } = _ref;
  const {
    transition,
    ...rest
  } = props;
  const {
    component = Transition,
    ...customProps
  } = typeof transition === "object" ? transition : {};
  return h(component, mergeProps(typeof transition === "string" ? {
    name: transition
  } : customProps, rest), slots);
};
const VImg = defineComponent({
  name: "VImg",
  directives: {
    intersect
  },
  props: {
    aspectRatio: [String, Number],
    alt: String,
    cover: Boolean,
    eager: Boolean,
    gradient: String,
    lazySrc: String,
    options: {
      type: Object,
      default: () => ({
        root: void 0,
        rootMargin: void 0,
        threshold: void 0
      })
    },
    sizes: String,
    src: {
      type: [String, Object],
      default: ""
    },
    srcset: String,
    width: [String, Number],
    ...makeTransitionProps()
  },
  emits: {
    loadstart: (event) => true,
    load: (event) => true,
    error: (event) => true
  },
  setup(props, _ref) {
    let {
      emit: emit2,
      slots
    } = _ref;
    const currentSrc = ref("");
    const image = ref();
    const state = ref(props.eager ? "loading" : "idle");
    const naturalWidth = ref();
    const naturalHeight = ref();
    const normalisedSrc = computed(() => {
      return props.src && typeof props.src === "object" ? {
        src: props.src.src,
        srcset: props.srcset || props.src.srcset,
        lazySrc: props.lazySrc || props.src.lazySrc,
        aspect: Number(props.aspectRatio || props.src.aspect || 0)
      } : {
        src: props.src,
        srcset: props.srcset,
        lazySrc: props.lazySrc,
        aspect: Number(props.aspectRatio || 0)
      };
    });
    const aspectRatio = computed(() => {
      return normalisedSrc.value.aspect || naturalWidth.value / naturalHeight.value || 0;
    });
    watch(() => props.src, () => {
      init(state.value !== "idle");
    });
    watch(aspectRatio, (val, oldVal) => {
      if (!val && oldVal && image.value) {
        pollForSize(image.value);
      }
    });
    onBeforeMount(() => init());
    function init(isIntersecting) {
      if (props.eager && isIntersecting)
        return;
      if (SUPPORTS_INTERSECTION && !isIntersecting && !props.eager)
        return;
      state.value = "loading";
      if (normalisedSrc.value.lazySrc) {
        const lazyImg = new Image();
        lazyImg.src = normalisedSrc.value.lazySrc;
        pollForSize(lazyImg, null);
      }
      if (!normalisedSrc.value.src)
        return;
      nextTick(() => {
        var _image$value, _image$value2;
        emit2("loadstart", ((_image$value = image.value) == null ? void 0 : _image$value.currentSrc) || normalisedSrc.value.src);
        if ((_image$value2 = image.value) != null && _image$value2.complete) {
          if (!image.value.naturalWidth) {
            onError();
          }
          if (state.value === "error")
            return;
          if (!aspectRatio.value)
            pollForSize(image.value, null);
          onLoad();
        } else {
          if (!aspectRatio.value)
            pollForSize(image.value);
          getSrc();
        }
      });
    }
    function onLoad() {
      var _image$value3;
      getSrc();
      state.value = "loaded";
      emit2("load", ((_image$value3 = image.value) == null ? void 0 : _image$value3.currentSrc) || normalisedSrc.value.src);
    }
    function onError() {
      var _image$value4;
      state.value = "error";
      emit2("error", ((_image$value4 = image.value) == null ? void 0 : _image$value4.currentSrc) || normalisedSrc.value.src);
    }
    function getSrc() {
      const img = image.value;
      if (img)
        currentSrc.value = img.currentSrc || img.src;
    }
    let timer = -1;
    function pollForSize(img) {
      let timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const poll = () => {
        clearTimeout(timer);
        const {
          naturalHeight: imgHeight,
          naturalWidth: imgWidth
        } = img;
        if (imgHeight || imgWidth) {
          naturalWidth.value = imgWidth;
          naturalHeight.value = imgHeight;
        } else if (!img.complete && state.value === "loading" && timeout != null) {
          timer = window.setTimeout(poll, timeout);
        } else if (img.currentSrc.endsWith(".svg") || img.currentSrc.startsWith("data:image/svg+xml")) {
          naturalWidth.value = 1;
          naturalHeight.value = 1;
        }
      };
      poll();
    }
    const containClasses = computed(() => ({
      "v-img__img--cover": props.cover,
      "v-img__img--contain": !props.cover
    }));
    const __image = () => {
      var _slots$sources;
      if (!normalisedSrc.value.src || state.value === "idle")
        return null;
      const img = createVNode("img", {
        "class": ["v-img__img", containClasses.value],
        "src": normalisedSrc.value.src,
        "srcset": normalisedSrc.value.srcset,
        "alt": "",
        "sizes": props.sizes,
        "ref": image,
        "onLoad": onLoad,
        "onError": onError
      }, null);
      const sources = (_slots$sources = slots.sources) == null ? void 0 : _slots$sources.call(slots);
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [withDirectives(sources ? createVNode("picture", {
          "class": "v-img__picture"
        }, [sources, img]) : img, [[vShow, state.value === "loaded"]])]
      });
    };
    const __preloadImage = () => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [normalisedSrc.value.lazySrc && state.value !== "loaded" && createVNode("img", {
        "class": ["v-img__img", "v-img__img--preload", containClasses.value],
        "src": normalisedSrc.value.lazySrc,
        "alt": ""
      }, null)]
    });
    const __placeholder = () => {
      if (!slots.placeholder)
        return null;
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [(state.value === "loading" || state.value === "error" && !slots.error) && createVNode("div", {
          "class": "v-img__placeholder"
        }, [slots.placeholder()])]
      });
    };
    const __error = () => {
      if (!slots.error)
        return null;
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [state.value === "error" && createVNode("div", {
          "class": "v-img__error"
        }, [slots.error()])]
      });
    };
    const __gradient = () => {
      if (!props.gradient)
        return null;
      return createVNode("div", {
        "class": "v-img__gradient",
        "style": {
          backgroundImage: `linear-gradient(${props.gradient})`
        }
      }, null);
    };
    const isBooted = ref(false);
    {
      const stop = watch(aspectRatio, (val) => {
        if (val) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              isBooted.value = true;
            });
          });
          stop();
        }
      });
    }
    useRender(() => withDirectives(createVNode(VResponsive, {
      "class": ["v-img", {
        "v-img--booting": !isBooted.value
      }],
      "style": {
        width: convertToUnit(props.width === "auto" ? naturalWidth.value : props.width)
      },
      "aspectRatio": aspectRatio.value,
      "aria-label": props.alt,
      "role": props.alt ? "img" : void 0
    }, {
      additional: () => createVNode(Fragment, null, [createVNode(__image, null, null), createVNode(__preloadImage, null, null), createVNode(__gradient, null, null), createVNode(__placeholder, null, null), createVNode(__error, null, null)]),
      default: slots.default
    }), [[resolveDirective("intersect"), {
      handler: init,
      options: props.options
    }, null, {
      once: true
    }]]));
    return {
      currentSrc,
      image,
      state,
      naturalWidth,
      naturalHeight
    };
  }
});
const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "v-avatar");
const VAvatar = defineComponent({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => {
      var _slots$default;
      return createVNode(props.tag, {
        "class": ["v-avatar", {
          "v-avatar--start": props.start,
          "v-avatar--end": props.end
        }, themeClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value],
        "style": [colorStyles.value, sizeStyles.value]
      }, {
        default: () => [props.image ? createVNode(VImg, {
          "key": "image",
          "src": props.image,
          "alt": "",
          "cover": true
        }, null) : props.icon ? createVNode(VIcon, {
          "key": "icon",
          "icon": props.icon
        }, null) : (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots), genOverlays(false, "v-avatar")]
      });
    });
    return {};
  }
});
const VCardSubtitle = createSimpleFunctional("v-card-subtitle");
const VCardTitle = createSimpleFunctional("v-card-title");
const VCardItem = defineComponent({
  name: "VCardItem",
  props: {
    appendAvatar: String,
    appendIcon: IconValue,
    prependAvatar: String,
    prependIcon: IconValue,
    subtitle: String,
    title: String,
    ...makeDensityProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _slots$prepend, _slots$title, _slots$subtitle, _slots$default, _slots$append;
      const hasPrepend = !!(props.prependAvatar || props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendAvatar || props.appendIcon || slots.append);
      const hasTitle = !!(props.title || slots.title);
      const hasSubtitle = !!(props.subtitle || slots.subtitle);
      return createVNode("div", {
        "class": "v-card-item"
      }, [hasPrepend && createVNode(VDefaultsProvider, {
        "key": "prepend",
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.prependIcon,
            image: props.prependAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.prependIcon
          }
        }
      }, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "class": "v-card-item__prepend"
          }, [(_a = (_slots$prepend = slots.prepend) == null ? void 0 : _slots$prepend.call(slots)) != null ? _a : createVNode(VAvatar, null, null)])];
        }
      }), createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => {
          var _a;
          return [(_a = (_slots$title = slots.title) == null ? void 0 : _slots$title.call(slots)) != null ? _a : props.title];
        }
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => {
          var _a;
          return [(_a = (_slots$subtitle = slots.subtitle) == null ? void 0 : _slots$subtitle.call(slots)) != null ? _a : props.subtitle];
        }
      }), (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]), hasAppend && createVNode(VDefaultsProvider, {
        "key": "append",
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.appendIcon,
            image: props.appendAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.appendIcon
          }
        }
      }, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "class": "v-card-item__append"
          }, [(_a = (_slots$append = slots.append) == null ? void 0 : _slots$append.call(slots)) != null ? _a : createVNode(VAvatar, null, null)])];
        }
      })]);
    });
    return {};
  }
});
const VCardText = createSimpleFunctional("v-card-text");
const VCard = defineComponent({
  name: "VCard",
  directives: {
    Ripple
  },
  props: {
    appendAvatar: String,
    appendIcon: IconValue,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    image: String,
    link: {
      type: Boolean,
      default: void 0
    },
    prependAvatar: String,
    prependIcon: IconValue,
    ripple: {
      type: Boolean,
      default: true
    },
    subtitle: String,
    text: String,
    title: String,
    ...makeThemeProps(),
    ...makeBorderProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makeLoaderProps(),
    ...makeLocationProps(),
    ...makePositionProps(),
    ...makeRoundedProps(),
    ...makeRouterProps(),
    ...makeTagProps(),
    ...makeVariantProps({
      variant: "elevated"
    })
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      var _slots$image, _slots$text, _slots$default;
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text);
      return withDirectives(createVNode(Tag, {
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value],
        "href": link.href.value,
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : void 0
      }, {
        default: () => [hasImage && createVNode(VDefaultsProvider, {
          "key": "image",
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, {
          default: () => {
            var _a;
            return [createVNode("div", {
              "class": "v-card__image"
            }, [(_a = (_slots$image = slots.image) == null ? void 0 : _slots$image.call(slots)) != null ? _a : createVNode(VImg, null, null)])];
          }
        }), createVNode(LoaderSlot, {
          "name": "v-card",
          "active": !!props.loading,
          "color": typeof props.loading === "boolean" ? void 0 : props.loading
        }, {
          default: slots.loader
        }), hasCardItem && createVNode(VCardItem, {
          "key": "item",
          "prependAvatar": props.prependAvatar,
          "prependIcon": props.prependIcon,
          "title": props.title,
          "subtitle": props.subtitle,
          "appendAvatar": props.appendAvatar,
          "appendIcon": props.appendIcon
        }, {
          default: slots.item,
          prepend: slots.prepend,
          title: slots.title,
          subtitle: slots.subtitle,
          append: slots.append
        }), hasText && createVNode(VCardText, {
          "key": "text"
        }, {
          default: () => {
            var _a;
            return [(_a = (_slots$text = slots.text) == null ? void 0 : _slots$text.call(slots)) != null ? _a : props.text];
          }
        }), (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots), slots.actions && createVNode(VCardActions, null, {
          default: slots.actions
        }), genOverlays(isClickable.value, "v-card")]
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});
const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function useDelay(props, cb) {
  const delays = {};
  const runDelayFactory = (prop) => () => {
    if (!IN_BROWSER)
      return Promise.resolve(true);
    const active = prop === "openDelay";
    delays.closeDelay && window.clearTimeout(delays.closeDelay);
    delete delays.closeDelay;
    delays.openDelay && window.clearTimeout(delays.openDelay);
    delete delays.openDelay;
    return new Promise((resolve2) => {
      var _a;
      const delay = parseInt((_a = props[prop]) != null ? _a : 0, 10);
      delays[prop] = window.setTimeout(() => {
        cb == null ? void 0 : cb(active);
        resolve2(active);
      }, delay);
    });
  };
  return {
    runCloseDelay: runDelayFactory("closeDelay"),
    runOpenDelay: runDelayFactory("openDelay")
  };
}
const VHover = defineComponent({
  name: "VHover",
  props: {
    disabled: Boolean,
    modelValue: {
      type: Boolean,
      default: void 0
    },
    ...makeDelayProps()
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isHovering = useProxiedModel(props, "modelValue");
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => !props.disabled && (isHovering.value = value));
    return () => {
      var _slots$default;
      return (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots, {
        isHovering: isHovering.value,
        props: {
          onMouseenter: runOpenDelay,
          onMouseleave: runCloseDelay
        }
      });
    };
  }
});
const VMain$1 = "";
function useSsrBoot() {
  const isBooted = ref(false);
  onMounted(() => {
    window.requestAnimationFrame(() => {
      isBooted.value = true;
    });
  });
  const ssrBootStyles = computed(() => !isBooted.value ? {
    transition: "none !important"
  } : void 0);
  return {
    ssrBootStyles,
    isBooted: readonly(isBooted)
  };
}
const VMain = defineComponent({
  name: "VMain",
  props: {
    scrollable: Boolean,
    ...makeTagProps({
      tag: "main"
    })
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => {
      var _slots$default, _slots$default2;
      return createVNode(props.tag, {
        "class": ["v-main", {
          "v-main--scrollable": props.scrollable
        }],
        "style": [mainStyles.value, ssrBootStyles.value]
      }, {
        default: () => [props.scrollable ? createVNode("div", {
          "class": "v-main__scroller"
        }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]) : (_slots$default2 = slots.default) == null ? void 0 : _slots$default2.call(slots)]
      });
    });
    return {};
  }
});
const VTooltip$1 = "";
const VOverlay$1 = "";
const VMenuSymbol = Symbol.for("vuetify:v-menu");
const makeActivatorProps = propsFactory({
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...makeDelayProps()
}, "v-overlay-activator");
function useActivator(props, _ref) {
  let {
    isActive,
    isTop
  } = _ref;
  const activatorEl = ref();
  let isHovered = false;
  let isFocused = false;
  let firstEnter = true;
  const openOnFocus = computed(() => props.openOnFocus || props.openOnFocus == null && props.openOnHover);
  const openOnClick = computed(() => props.openOnClick || props.openOnClick == null && !props.openOnHover && !openOnFocus.value);
  const {
    runOpenDelay,
    runCloseDelay
  } = useDelay(props, (value) => {
    if (value === (props.openOnHover && isHovered || openOnFocus.value && isFocused) && !(props.openOnHover && isActive.value && !isTop.value)) {
      if (isActive.value !== value) {
        firstEnter = true;
      }
      isActive.value = value;
    }
  });
  const availableEvents = {
    click: (e) => {
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      isActive.value = !isActive.value;
    },
    mouseenter: (e) => {
      isHovered = true;
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    mouseleave: (e) => {
      isHovered = false;
      runCloseDelay();
    },
    focus: (e) => {
      if (SUPPORTS_FOCUS_VISIBLE && !e.target.matches(":focus-visible"))
        return;
      isFocused = true;
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    blur: (e) => {
      isFocused = false;
      e.stopPropagation();
      runCloseDelay();
    }
  };
  const activatorEvents = computed(() => {
    const events = {};
    if (openOnClick.value) {
      events.click = availableEvents.click;
    }
    if (props.openOnHover) {
      events.mouseenter = availableEvents.mouseenter;
      events.mouseleave = availableEvents.mouseleave;
    }
    if (openOnFocus.value) {
      events.focus = availableEvents.focus;
      events.blur = availableEvents.blur;
    }
    return events;
  });
  const contentEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.mouseenter = () => {
        isHovered = true;
        runOpenDelay();
      };
      events.mouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    if (props.closeOnContentClick) {
      const menu = inject$1(VMenuSymbol, null);
      events.click = () => {
        isActive.value = false;
        menu == null ? void 0 : menu.closeParents();
      };
    }
    return events;
  });
  const scrimEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.mouseenter = () => {
        if (firstEnter) {
          isHovered = true;
          firstEnter = false;
          runOpenDelay();
        }
      };
      events.mouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    return events;
  });
  watch(isTop, (val) => {
    if (val && (props.openOnHover && !isHovered && (!openOnFocus.value || !isFocused) || openOnFocus.value && !isFocused && (!props.openOnHover || !isHovered))) {
      isActive.value = false;
    }
  });
  const activatorRef = ref();
  watchEffect(() => {
    if (!activatorRef.value)
      return;
    nextTick(() => {
      const activator = activatorRef.value;
      activatorEl.value = isComponentInstance(activator) ? activator.$el : activator;
    });
  });
  const vm = getCurrentInstance("useActivator");
  let scope;
  watch(() => !!props.activator, (val) => {
    if (val && IN_BROWSER) {
      scope = effectScope();
      scope.run(() => {
        _useActivator(props, vm, {
          activatorEl,
          activatorEvents
        });
      });
    } else if (scope) {
      scope.stop();
    }
  }, {
    flush: "post",
    immediate: true
  });
  onScopeDispose(() => {
    var _scope;
    (_scope = scope) == null ? void 0 : _scope.stop();
  });
  return {
    activatorEl,
    activatorRef,
    activatorEvents,
    contentEvents,
    scrimEvents
  };
}
function _useActivator(props, vm, _ref2) {
  let {
    activatorEl,
    activatorEvents
  } = _ref2;
  watch(() => props.activator, (val, oldVal) => {
    if (oldVal && val !== oldVal) {
      const activator = getActivator(oldVal);
      activator && unbindActivatorProps(activator);
    }
    if (val) {
      nextTick(() => bindActivatorProps());
    }
  }, {
    immediate: true
  });
  watch(() => props.activatorProps, () => {
    bindActivatorProps();
  });
  onScopeDispose(() => {
    unbindActivatorProps();
  });
  function bindActivatorProps() {
    let el2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el2)
      return;
    Object.entries(activatorEvents.value).forEach((_ref3) => {
      let [name, cb] = _ref3;
      el2.addEventListener(name, cb);
    });
    Object.keys(_props).forEach((k) => {
      if (_props[k] == null) {
        el2.removeAttribute(k);
      } else {
        el2.setAttribute(k, _props[k]);
      }
    });
  }
  function unbindActivatorProps() {
    let el2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el2)
      return;
    Object.entries(activatorEvents.value).forEach((_ref4) => {
      let [name, cb] = _ref4;
      el2.removeEventListener(name, cb);
    });
    Object.keys(_props).forEach((k) => {
      el2.removeAttribute(k);
    });
  }
  function getActivator() {
    var _activator;
    let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props.activator;
    let activator;
    if (selector) {
      if (selector === "parent") {
        var _vm$proxy, _vm$proxy$$el;
        let el2 = vm == null ? void 0 : (_vm$proxy = vm.proxy) == null ? void 0 : (_vm$proxy$$el = _vm$proxy.$el) == null ? void 0 : _vm$proxy$$el.parentNode;
        while (el2.hasAttribute("data-no-activator")) {
          el2 = el2.parentNode;
        }
        activator = el2;
      } else if (typeof selector === "string") {
        activator = document.querySelector(selector);
      } else if ("$el" in selector) {
        activator = selector.$el;
      } else {
        activator = selector;
      }
    }
    activatorEl.value = ((_activator = activator) == null ? void 0 : _activator.nodeType) === Node.ELEMENT_NODE ? activator : null;
    return activatorEl.value;
  }
}
const makeLazyProps = propsFactory({
  eager: Boolean
}, "lazy");
function useLazy(props, active) {
  const isBooted = ref(false);
  const hasContent = computed(() => isBooted.value || props.eager || active.value);
  watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager)
      isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}
function elementToViewport(point, offset) {
  return {
    x: point.x + offset.x,
    y: point.y + offset.y
  };
}
function getOffset(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function anchorToPoint(anchor, box) {
  if (anchor.side === "top" || anchor.side === "bottom") {
    const {
      side,
      align
    } = anchor;
    const x = align === "left" ? 0 : align === "center" ? box.width / 2 : align === "right" ? box.width : align;
    const y = side === "top" ? 0 : side === "bottom" ? box.height : side;
    return elementToViewport({
      x,
      y
    }, box);
  } else if (anchor.side === "left" || anchor.side === "right") {
    const {
      side,
      align
    } = anchor;
    const x = side === "left" ? 0 : side === "right" ? box.width : side;
    const y = align === "top" ? 0 : align === "center" ? box.height / 2 : align === "bottom" ? box.height : align;
    return elementToViewport({
      x,
      y
    }, box);
  }
  return elementToViewport({
    x: box.width / 2,
    y: box.height / 2
  }, box);
}
const locationStrategies = {
  static: staticLocationStrategy,
  connected: connectedLocationStrategy
};
const makeLocationStrategyProps = propsFactory({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (val) => typeof val === "function" || val in locationStrategies
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "v-overlay-location-strategies");
function useLocationStrategies(props, data) {
  const contentStyles = ref({});
  const updateLocation = ref();
  if (IN_BROWSER) {
    useToggleScope(() => !!(data.isActive.value && props.locationStrategy), (reset) => {
      watch(() => props.locationStrategy, reset);
      onScopeDispose(() => {
        updateLocation.value = void 0;
      });
      if (typeof props.locationStrategy === "function") {
        var _props$locationStrate;
        updateLocation.value = (_props$locationStrate = props.locationStrategy(data, props, contentStyles)) == null ? void 0 : _props$locationStrate.updateLocation;
      } else {
        var _locationStrategies$p;
        updateLocation.value = (_locationStrategies$p = locationStrategies[props.locationStrategy](data, props, contentStyles)) == null ? void 0 : _locationStrategies$p.updateLocation;
      }
    });
    window.addEventListener("resize", onResize, {
      passive: true
    });
    onScopeDispose(() => {
      window.removeEventListener("resize", onResize);
      updateLocation.value = void 0;
    });
  }
  function onResize(e) {
    var _updateLocation$value;
    (_updateLocation$value = updateLocation.value) == null ? void 0 : _updateLocation$value.call(updateLocation, e);
  }
  return {
    contentStyles,
    updateLocation
  };
}
function staticLocationStrategy() {
}
function getIntrinsicSize(el2) {
  const contentBox = nullifyTransforms(el2);
  contentBox.x -= parseFloat(el2.style.left || 0);
  contentBox.y -= parseFloat(el2.style.top || 0);
  return contentBox;
}
function connectedLocationStrategy(data, props, contentStyles) {
  const activatorFixed = isFixedPosition(data.activatorEl.value);
  if (activatorFixed) {
    Object.assign(contentStyles.value, {
      position: "fixed"
    });
  }
  const {
    preferredAnchor,
    preferredOrigin
  } = destructComputed(() => {
    const parsedAnchor = parseAnchor(props.location, data.isRtl.value);
    const parsedOrigin = props.origin === "overlap" ? parsedAnchor : props.origin === "auto" ? flipSide(parsedAnchor) : parseAnchor(props.origin, data.isRtl.value);
    if (parsedAnchor.side === parsedOrigin.side && parsedAnchor.align === flipAlign(parsedOrigin).align) {
      return {
        preferredAnchor: flipCorner(parsedAnchor),
        preferredOrigin: flipCorner(parsedOrigin)
      };
    } else {
      return {
        preferredAnchor: parsedAnchor,
        preferredOrigin: parsedOrigin
      };
    }
  });
  const [minWidth, minHeight, maxWidth, maxHeight] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((key) => {
    return computed(() => {
      const val = parseFloat(props[key]);
      return isNaN(val) ? Infinity : val;
    });
  });
  const offset = computed(() => {
    if (Array.isArray(props.offset)) {
      return props.offset;
    }
    if (typeof props.offset === "string") {
      const offset2 = props.offset.split(" ").map(parseFloat);
      if (offset2.length < 2)
        offset2.push(0);
      return offset2;
    }
    return typeof props.offset === "number" ? [props.offset, 0] : [0, 0];
  });
  let observe = false;
  const observer = new ResizeObserver(() => {
    if (observe)
      updateLocation();
  });
  watch([data.activatorEl, data.contentEl], (_ref, _ref2) => {
    let [newActivatorEl, newContentEl] = _ref;
    let [oldActivatorEl, oldContentEl] = _ref2;
    if (oldActivatorEl)
      observer.unobserve(oldActivatorEl);
    if (newActivatorEl)
      observer.observe(newActivatorEl);
    if (oldContentEl)
      observer.unobserve(oldContentEl);
    if (newContentEl)
      observer.observe(newContentEl);
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    observer.disconnect();
  });
  function updateLocation() {
    observe = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => observe = true);
    });
    if (!data.activatorEl.value || !data.contentEl.value)
      return;
    const targetBox = data.activatorEl.value.getBoundingClientRect();
    const contentBox = getIntrinsicSize(data.contentEl.value);
    const scrollParents = getScrollParents(data.contentEl.value);
    const viewportMargin = 12;
    if (!scrollParents.length) {
      scrollParents.push(document.documentElement);
      if (!(data.contentEl.value.style.top && data.contentEl.value.style.left)) {
        contentBox.x += parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0);
        contentBox.y += parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0);
      }
    }
    const viewport = scrollParents.reduce((box, el2) => {
      const rect = el2.getBoundingClientRect();
      const scrollBox = new Box({
        x: el2 === document.documentElement ? 0 : rect.x,
        y: el2 === document.documentElement ? 0 : rect.y,
        width: el2.clientWidth,
        height: el2.clientHeight
      });
      if (box) {
        return new Box({
          x: Math.max(box.left, scrollBox.left),
          y: Math.max(box.top, scrollBox.top),
          width: Math.min(box.right, scrollBox.right) - Math.max(box.left, scrollBox.left),
          height: Math.min(box.bottom, scrollBox.bottom) - Math.max(box.top, scrollBox.top)
        });
      }
      return scrollBox;
    }, void 0);
    viewport.x += viewportMargin;
    viewport.y += viewportMargin;
    viewport.width -= viewportMargin * 2;
    viewport.height -= viewportMargin * 2;
    let placement = {
      anchor: preferredAnchor.value,
      origin: preferredOrigin.value
    };
    function checkOverflow(_placement) {
      const box = new Box(contentBox);
      const targetPoint = anchorToPoint(_placement.anchor, targetBox);
      const contentPoint = anchorToPoint(_placement.origin, box);
      let {
        x: x2,
        y: y2
      } = getOffset(targetPoint, contentPoint);
      switch (_placement.anchor.side) {
        case "top":
          y2 -= offset.value[0];
          break;
        case "bottom":
          y2 += offset.value[0];
          break;
        case "left":
          x2 -= offset.value[0];
          break;
        case "right":
          x2 += offset.value[0];
          break;
      }
      switch (_placement.anchor.align) {
        case "top":
          y2 -= offset.value[1];
          break;
        case "bottom":
          y2 += offset.value[1];
          break;
        case "left":
          x2 -= offset.value[1];
          break;
        case "right":
          x2 += offset.value[1];
          break;
      }
      box.x += x2;
      box.y += y2;
      box.width = Math.min(box.width, maxWidth.value);
      box.height = Math.min(box.height, maxHeight.value);
      const overflows = getOverflow(box, viewport);
      return {
        overflows,
        x: x2,
        y: y2
      };
    }
    let x = 0;
    let y = 0;
    const available = {
      x: 0,
      y: 0
    };
    const flipped = {
      x: false,
      y: false
    };
    let resets = -1;
    while (true) {
      if (resets++ > 10) {
        consoleError("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: _x,
        y: _y,
        overflows
      } = checkOverflow(placement);
      x += _x;
      y += _y;
      contentBox.x += _x;
      contentBox.y += _y;
      {
        const axis2 = getAxis(placement.anchor);
        const hasOverflowX = overflows.x.before || overflows.x.after;
        const hasOverflowY = overflows.y.before || overflows.y.after;
        let reset = false;
        ["x", "y"].forEach((key) => {
          if (key === "x" && hasOverflowX && !flipped.x || key === "y" && hasOverflowY && !flipped.y) {
            const newPlacement = {
              anchor: {
                ...placement.anchor
              },
              origin: {
                ...placement.origin
              }
            };
            const flip = key === "x" ? axis2 === "y" ? flipAlign : flipSide : axis2 === "y" ? flipSide : flipAlign;
            newPlacement.anchor = flip(newPlacement.anchor);
            newPlacement.origin = flip(newPlacement.origin);
            const {
              overflows: newOverflows
            } = checkOverflow(newPlacement);
            if (newOverflows[key].before <= overflows[key].before && newOverflows[key].after <= overflows[key].after || newOverflows[key].before + newOverflows[key].after < (overflows[key].before + overflows[key].after) / 2) {
              placement = newPlacement;
              reset = flipped[key] = true;
            }
          }
        });
        if (reset)
          continue;
      }
      if (overflows.x.before) {
        x += overflows.x.before;
        contentBox.x += overflows.x.before;
      }
      if (overflows.x.after) {
        x -= overflows.x.after;
        contentBox.x -= overflows.x.after;
      }
      if (overflows.y.before) {
        y += overflows.y.before;
        contentBox.y += overflows.y.before;
      }
      if (overflows.y.after) {
        y -= overflows.y.after;
        contentBox.y -= overflows.y.after;
      }
      {
        const overflows2 = getOverflow(contentBox, viewport);
        available.x = viewport.width - overflows2.x.before - overflows2.x.after;
        available.y = viewport.height - overflows2.y.before - overflows2.y.after;
        x += overflows2.x.before;
        contentBox.x += overflows2.x.before;
        y += overflows2.y.before;
        contentBox.y += overflows2.y.before;
      }
      break;
    }
    const axis = getAxis(placement.anchor);
    Object.assign(contentStyles.value, {
      "--v-overlay-anchor-origin": `${placement.anchor.side} ${placement.anchor.align}`,
      transformOrigin: `${placement.origin.side} ${placement.origin.align}`,
      top: convertToUnit(pixelRound(y)),
      left: convertToUnit(pixelRound(x)),
      minWidth: convertToUnit(axis === "y" ? Math.min(minWidth.value, targetBox.width) : minWidth.value),
      maxWidth: convertToUnit(pixelCeil(clamp(available.x, minWidth.value === Infinity ? 0 : minWidth.value, maxWidth.value))),
      maxHeight: convertToUnit(pixelCeil(clamp(available.y, minHeight.value === Infinity ? 0 : minHeight.value, maxHeight.value)))
    });
    return {
      available,
      contentBox
    };
  }
  watch(() => [preferredAnchor.value, preferredOrigin.value, props.offset, props.minWidth, props.minHeight, props.maxWidth, props.maxHeight], () => updateLocation());
  nextTick(() => {
    const result = updateLocation();
    if (!result)
      return;
    const {
      available,
      contentBox
    } = result;
    if (contentBox.height > available.y) {
      requestAnimationFrame(() => {
        updateLocation();
        requestAnimationFrame(() => {
          updateLocation();
        });
      });
    }
  });
  return {
    updateLocation
  };
}
function pixelRound(val) {
  return Math.round(val * devicePixelRatio) / devicePixelRatio;
}
function pixelCeil(val) {
  return Math.ceil(val * devicePixelRatio) / devicePixelRatio;
}
let clean = true;
const frames = [];
function requestNewFrame(cb) {
  if (!clean || frames.length) {
    frames.push(cb);
    run();
  } else {
    clean = false;
    cb();
    run();
  }
}
let raf = -1;
function run() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const frame = frames.shift();
    if (frame)
      frame();
    if (frames.length)
      run();
    else
      clean = true;
  });
}
const scrollStrategies = {
  none: null,
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy
};
const makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (val) => typeof val === "function" || val in scrollStrategies
  }
}, "v-overlay-scroll-strategies");
function useScrollStrategies(props, data) {
  if (!IN_BROWSER)
    return;
  let scope;
  watchEffect(async () => {
    var _scope;
    (_scope = scope) == null ? void 0 : _scope.stop();
    if (!(data.isActive.value && props.scrollStrategy))
      return;
    scope = effectScope();
    await nextTick();
    scope.run(() => {
      if (typeof props.scrollStrategy === "function") {
        props.scrollStrategy(data, props, scope);
      } else {
        var _scrollStrategies$pro;
        (_scrollStrategies$pro = scrollStrategies[props.scrollStrategy]) == null ? void 0 : _scrollStrategies$pro.call(scrollStrategies, data, props, scope);
      }
    });
  });
  onScopeDispose(() => {
    var _scope2;
    (_scope2 = scope) == null ? void 0 : _scope2.stop();
  });
}
function closeScrollStrategy(data) {
  var _a;
  function onScroll(e) {
    data.isActive.value = false;
  }
  bindScroll((_a = data.activatorEl.value) != null ? _a : data.contentEl.value, onScroll);
}
function blockScrollStrategy(data, props) {
  var _data$root$value;
  const offsetParent = (_data$root$value = data.root.value) == null ? void 0 : _data$root$value.offsetParent;
  const scrollElements = [.../* @__PURE__ */ new Set([...getScrollParents(data.activatorEl.value, props.contained ? offsetParent : void 0), ...getScrollParents(data.contentEl.value, props.contained ? offsetParent : void 0)])].filter((el2) => !el2.classList.contains("v-overlay-scroll-blocked"));
  const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;
  const scrollableParent = ((el2) => hasScrollbar(el2) && el2)(offsetParent || document.documentElement);
  if (scrollableParent) {
    data.root.value.classList.add("v-overlay--scroll-blocked");
  }
  scrollElements.forEach((el2, i) => {
    el2.style.setProperty("--v-body-scroll-x", convertToUnit(-el2.scrollLeft));
    el2.style.setProperty("--v-body-scroll-y", convertToUnit(-el2.scrollTop));
    el2.style.setProperty("--v-scrollbar-offset", convertToUnit(scrollbarWidth));
    el2.classList.add("v-overlay-scroll-blocked");
  });
  onScopeDispose(() => {
    scrollElements.forEach((el2, i) => {
      const x = parseFloat(el2.style.getPropertyValue("--v-body-scroll-x"));
      const y = parseFloat(el2.style.getPropertyValue("--v-body-scroll-y"));
      el2.style.removeProperty("--v-body-scroll-x");
      el2.style.removeProperty("--v-body-scroll-y");
      el2.style.removeProperty("--v-scrollbar-offset");
      el2.classList.remove("v-overlay-scroll-blocked");
      el2.scrollLeft = -x;
      el2.scrollTop = -y;
    });
    if (scrollableParent) {
      data.root.value.classList.remove("v-overlay--scroll-blocked");
    }
  });
}
function repositionScrollStrategy(data, props, scope) {
  let slow = false;
  let raf2 = -1;
  let ric = -1;
  function update(e) {
    requestNewFrame(() => {
      var _data$updateLocation$, _data$updateLocation;
      const start = performance.now();
      (_data$updateLocation$ = (_data$updateLocation = data.updateLocation).value) == null ? void 0 : _data$updateLocation$.call(_data$updateLocation, e);
      const time = performance.now() - start;
      slow = time / (1e3 / 60) > 2;
    });
  }
  ric = requestIdleCallback(() => {
    scope.run(() => {
      var _a;
      bindScroll((_a = data.activatorEl.value) != null ? _a : data.contentEl.value, (e) => {
        if (slow) {
          cancelAnimationFrame(raf2);
          raf2 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => {
              update(e);
            });
          });
        } else {
          update(e);
        }
      });
    });
  });
  onScopeDispose(() => {
    cancelIdleCallback(ric);
    cancelAnimationFrame(raf2);
  });
}
function bindScroll(el2, onScroll) {
  const scrollElements = [document, ...getScrollParents(el2)];
  scrollElements.forEach((el3) => {
    el3.addEventListener("scroll", onScroll, {
      passive: true
    });
  });
  onScopeDispose(() => {
    scrollElements.forEach((el3) => {
      el3.removeEventListener("scroll", onScroll);
    });
  });
}
const DisplaySymbol = Symbol.for("vuetify:display");
const defaultDisplayOptions = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
};
const parseDisplayOptions = function() {
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultDisplayOptions;
  return mergeDeep(defaultDisplayOptions, options);
};
function getClientWidth(isHydrate) {
  return IN_BROWSER && !isHydrate ? window.innerWidth : 0;
}
function getClientHeight(isHydrate) {
  return IN_BROWSER && !isHydrate ? window.innerHeight : 0;
}
function getPlatform() {
  const userAgent = IN_BROWSER ? window.navigator.userAgent : "ssr";
  function match(regexp) {
    return Boolean(userAgent.match(regexp));
  }
  const android = match(/android/i);
  const ios = match(/iphone|ipad|ipod/i);
  const cordova = match(/cordova/i);
  const electron = match(/electron/i);
  const chrome2 = match(/chrome/i);
  const edge = match(/edge/i);
  const firefox = match(/firefox/i);
  const opera = match(/opera/i);
  const win = match(/win/i);
  const mac = match(/mac/i);
  const linux = match(/linux/i);
  const ssr = match(/ssr/i);
  return {
    android,
    ios,
    cordova,
    electron,
    chrome: chrome2,
    edge,
    firefox,
    opera,
    win,
    mac,
    linux,
    touch: SUPPORTS_TOUCH,
    ssr
  };
}
function createDisplay(options, ssr) {
  const {
    thresholds,
    mobileBreakpoint
  } = parseDisplayOptions(options);
  const height = ref(getClientHeight(ssr));
  const platform = getPlatform();
  const state = reactive({});
  const width = ref(getClientWidth(ssr));
  function update() {
    height.value = getClientHeight();
    width.value = getClientWidth();
  }
  watchEffect(() => {
    const xs = width.value < thresholds.sm;
    const sm = width.value < thresholds.md && !xs;
    const md = width.value < thresholds.lg && !(sm || xs);
    const lg = width.value < thresholds.xl && !(md || sm || xs);
    const xl = width.value < thresholds.xxl && !(lg || md || sm || xs);
    const xxl = width.value >= thresholds.xxl;
    const name = xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl ? "xl" : "xxl";
    const breakpointValue = typeof mobileBreakpoint === "number" ? mobileBreakpoint : thresholds[mobileBreakpoint];
    const mobile = !platform.ssr ? width.value < breakpointValue : platform.android || platform.ios || platform.opera;
    state.xs = xs;
    state.sm = sm;
    state.md = md;
    state.lg = lg;
    state.xl = xl;
    state.xxl = xxl;
    state.smAndUp = !xs;
    state.mdAndUp = !(xs || sm);
    state.lgAndUp = !(xs || sm || md);
    state.xlAndUp = !(xs || sm || md || lg);
    state.smAndDown = !(md || lg || xl || xxl);
    state.mdAndDown = !(lg || xl || xxl);
    state.lgAndDown = !(xl || xxl);
    state.xlAndDown = !xxl;
    state.name = name;
    state.height = height.value;
    state.width = width.value;
    state.mobile = mobile;
    state.mobileBreakpoint = mobileBreakpoint;
    state.platform = platform;
    state.thresholds = thresholds;
  });
  if (IN_BROWSER) {
    window.addEventListener("resize", update, {
      passive: true
    });
  }
  return {
    ...toRefs(state),
    update,
    ssr: !!ssr
  };
}
function useDisplay() {
  const display = inject$1(DisplaySymbol);
  if (!display)
    throw new Error("Could not find Vuetify display injection");
  return display;
}
function useHydration() {
  if (!IN_BROWSER)
    return ref(false);
  const {
    ssr
  } = useDisplay();
  if (ssr) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return isMounted;
  } else {
    return ref(true);
  }
}
function useScopeId() {
  const vm = getCurrentInstance("useScopeId");
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ""
    } : void 0
  };
}
const StackSymbol = Symbol.for("vuetify:stack");
const globalStack = reactive([]);
function useStack(isActive, zIndex, disableGlobalStack) {
  const vm = getCurrentInstance("useStack");
  const createStackEntry = !disableGlobalStack;
  const parent = inject$1(StackSymbol, void 0);
  const stack = reactive({
    activeChildren: /* @__PURE__ */ new Set()
  });
  provide(StackSymbol, stack);
  const _zIndex = ref(+zIndex.value);
  useToggleScope(isActive, () => {
    var _globalStack$at;
    const lastZIndex = (_globalStack$at = globalStack.at(-1)) == null ? void 0 : _globalStack$at[1];
    _zIndex.value = lastZIndex ? lastZIndex + 10 : +zIndex.value;
    if (createStackEntry) {
      globalStack.push([vm.uid, _zIndex.value]);
    }
    parent == null ? void 0 : parent.activeChildren.add(vm.uid);
    onScopeDispose(() => {
      if (createStackEntry) {
        const idx = globalStack.findIndex((v) => v[0] === vm.uid);
        globalStack.splice(idx, 1);
      }
      parent == null ? void 0 : parent.activeChildren.delete(vm.uid);
    });
  });
  const globalTop = ref(true);
  if (createStackEntry) {
    watchEffect(() => {
      var _globalStack$at2;
      const _isTop = ((_globalStack$at2 = globalStack.at(-1)) == null ? void 0 : _globalStack$at2[0]) === vm.uid;
      setTimeout(() => globalTop.value = _isTop);
    });
  }
  const localTop = computed(() => !stack.activeChildren.size);
  return {
    globalTop: readonly(globalTop),
    localTop,
    stackStyles: computed(() => ({
      zIndex: _zIndex.value
    }))
  };
}
function useTeleport(target) {
  const teleportTarget = computed(() => {
    const _target = target.value;
    if (_target === true || !IN_BROWSER)
      return void 0;
    const targetElement = _target === false ? document.body : typeof _target === "string" ? document.querySelector(_target) : _target;
    if (targetElement == null) {
      return void 0;
    }
    let container = targetElement.querySelector(".v-overlay-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "v-overlay-container";
      targetElement.appendChild(container);
    }
    return container;
  });
  return {
    teleportTarget
  };
}
function defaultConditional() {
  return true;
}
function checkEvent(e, el2, binding) {
  if (!e || checkIsActive(e, binding) === false)
    return false;
  const root = attachedRoot(el2);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot && root.host === e.target)
    return false;
  const elements = (typeof binding.value === "object" && binding.value.include || (() => []))();
  elements.push(el2);
  return !elements.some((el3) => el3 == null ? void 0 : el3.contains(e.target));
}
function checkIsActive(e, binding) {
  const isActive = typeof binding.value === "object" && binding.value.closeConditional || defaultConditional;
  return isActive(e);
}
function directive(e, el2, binding) {
  const handler = typeof binding.value === "function" ? binding.value : binding.value.handler;
  el2._clickOutside.lastMousedownWasOutside && checkEvent(e, el2, binding) && setTimeout(() => {
    checkIsActive(e, binding) && handler && handler(e);
  }, 0);
}
function handleShadow(el2, callback) {
  const root = attachedRoot(el2);
  callback(document);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
    callback(root);
  }
}
const ClickOutside = {
  mounted(el2, binding) {
    const onClick = (e) => directive(e, el2, binding);
    const onMousedown = (e) => {
      el2._clickOutside.lastMousedownWasOutside = checkEvent(e, el2, binding);
    };
    handleShadow(el2, (app) => {
      app.addEventListener("click", onClick, true);
      app.addEventListener("mousedown", onMousedown, true);
    });
    if (!el2._clickOutside) {
      el2._clickOutside = {
        lastMousedownWasOutside: true
      };
    }
    el2._clickOutside[binding.instance.$.uid] = {
      onClick,
      onMousedown
    };
  },
  unmounted(el2, binding) {
    if (!el2._clickOutside)
      return;
    handleShadow(el2, (app) => {
      var _el$_clickOutside;
      if (!app || !((_el$_clickOutside = el2._clickOutside) != null && _el$_clickOutside[binding.instance.$.uid]))
        return;
      const {
        onClick,
        onMousedown
      } = el2._clickOutside[binding.instance.$.uid];
      app.removeEventListener("click", onClick, true);
      app.removeEventListener("mousedown", onMousedown, true);
    });
    delete el2._clickOutside[binding.instance.$.uid];
  }
};
function Scrim(props) {
  const {
    modelValue,
    color,
    ...rest
  } = props;
  return createVNode(Transition, {
    "name": "fade-transition",
    "appear": true
  }, {
    default: () => [props.modelValue && createVNode("div", mergeProps({
      "class": ["v-overlay__scrim", props.color.backgroundColorClasses.value],
      "style": props.color.backgroundColorStyles.value
    }, rest), null)]
  });
}
const makeVOverlayProps = propsFactory({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: true
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [String, Boolean],
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...makeActivatorProps(),
  ...makeDimensionProps(),
  ...makeLazyProps(),
  ...makeLocationStrategyProps(),
  ...makeScrollStrategyProps(),
  ...makeThemeProps(),
  ...makeTransitionProps()
}, "v-overlay");
const VOverlay = genericComponent()({
  name: "VOverlay",
  directives: {
    ClickOutside
  },
  inheritAttrs: false,
  props: {
    _disableGlobalStack: Boolean,
    ...makeVOverlayProps()
  },
  emits: {
    "click:outside": (e) => true,
    "update:modelValue": (value) => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit: emit2
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const isActive = computed({
      get: () => model.value,
      set: (v) => {
        if (!(v && props.disabled))
          model.value = v;
      }
    });
    const {
      teleportTarget
    } = useTeleport(computed(() => props.attach || props.contained));
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses,
      isRtl
    } = useRtl();
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, isActive);
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const {
      globalTop,
      localTop,
      stackStyles
    } = useStack(isActive, toRef(props, "zIndex"), props._disableGlobalStack);
    const {
      activatorEl,
      activatorRef,
      activatorEvents,
      contentEvents,
      scrimEvents
    } = useActivator(props, {
      isActive,
      isTop: localTop
    });
    const {
      dimensionStyles
    } = useDimension(props);
    const isMounted = useHydration();
    const {
      scopeId
    } = useScopeId();
    watch(() => props.disabled, (v) => {
      if (v)
        isActive.value = false;
    });
    const root = ref();
    const contentEl = ref();
    const {
      contentStyles,
      updateLocation
    } = useLocationStrategies(props, {
      isRtl,
      contentEl,
      activatorEl,
      isActive
    });
    useScrollStrategies(props, {
      root,
      contentEl,
      activatorEl,
      isActive,
      updateLocation
    });
    function onClickOutside(e) {
      emit2("click:outside", e);
      if (!props.persistent)
        isActive.value = false;
      else
        animateClick();
    }
    function closeConditional() {
      return isActive.value && globalTop.value;
    }
    IN_BROWSER && watch(isActive, (val) => {
      if (val) {
        window.addEventListener("keydown", onKeydown);
      } else {
        window.removeEventListener("keydown", onKeydown);
      }
    }, {
      immediate: true
    });
    function onKeydown(e) {
      if (e.key === "Escape" && globalTop.value) {
        if (!props.persistent) {
          isActive.value = false;
        } else
          animateClick();
      }
    }
    const router = useRouter();
    useToggleScope(() => props.closeOnBack, () => {
      useBackButton(router, (next) => {
        if (globalTop.value && isActive.value) {
          next(false);
          if (!props.persistent)
            isActive.value = false;
          else
            animateClick();
        } else {
          next();
        }
      });
    });
    const top = ref();
    watch(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, (val) => {
      if (val) {
        const scrollParent = getScrollParent(root.value);
        if (scrollParent && scrollParent !== document.scrollingElement) {
          top.value = scrollParent.scrollTop;
        }
      }
    });
    function animateClick() {
      if (props.noClickAnimation)
        return;
      contentEl.value && animate(contentEl.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: standardEasing
      });
    }
    useRender(() => {
      var _slots$activator, _slots$default;
      return createVNode(Fragment, null, [(_slots$activator = slots.activator) == null ? void 0 : _slots$activator.call(slots, {
        isActive: isActive.value,
        props: mergeProps({
          ref: activatorRef
        }, toHandlers(activatorEvents.value), props.activatorProps)
      }), isMounted.value && createVNode(Teleport, {
        "disabled": !teleportTarget.value,
        "to": teleportTarget.value
      }, {
        default: () => [hasContent.value && createVNode("div", mergeProps({
          "class": ["v-overlay", {
            "v-overlay--absolute": props.absolute || props.contained,
            "v-overlay--active": isActive.value,
            "v-overlay--contained": props.contained
          }, themeClasses.value, rtlClasses.value],
          "style": [stackStyles.value, {
            top: convertToUnit(top.value)
          }],
          "ref": root
        }, scopeId, attrs), [createVNode(Scrim, mergeProps({
          "color": scrimColor,
          "modelValue": isActive.value && !!props.scrim
        }, toHandlers(scrimEvents.value)), null), createVNode(MaybeTransition, {
          "appear": true,
          "persisted": true,
          "transition": props.transition,
          "target": activatorEl.value,
          "onAfterLeave": () => {
            onAfterLeave();
            emit2("afterLeave");
          }
        }, {
          default: () => [withDirectives(createVNode("div", mergeProps({
            "ref": contentEl,
            "class": ["v-overlay__content", props.contentClass],
            "style": [dimensionStyles.value, contentStyles.value]
          }, toHandlers(contentEvents.value), props.contentProps), [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots, {
            isActive
          })]), [[vShow, isActive.value], [resolveDirective("click-outside"), {
            handler: onClickOutside,
            closeConditional,
            include: () => [activatorEl.value]
          }]])]
        })])]
      })]);
    });
    return {
      activatorEl,
      animateClick,
      contentEl,
      globalTop,
      localTop,
      updateLocation
    };
  }
});
function filterVOverlayProps(props) {
  return pick(props, Object.keys(VOverlay.props));
}
const Refs = Symbol("Forwarded refs");
function forwardRefs(target) {
  for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    refs[_key - 1] = arguments[_key];
  }
  target[Refs] = refs;
  return new Proxy(target, {
    get(target2, key) {
      if (Reflect.has(target2, key)) {
        return Reflect.get(target2, key);
      }
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          const val = Reflect.get(ref2.value, key);
          return typeof val === "function" ? val.bind(ref2.value) : val;
        }
      }
    },
    getOwnPropertyDescriptor(target2, key) {
      const descriptor = Reflect.getOwnPropertyDescriptor(target2, key);
      if (descriptor)
        return descriptor;
      if (typeof key === "symbol" || key.startsWith("__"))
        return;
      for (const ref2 of refs) {
        if (!ref2.value)
          continue;
        const descriptor2 = Reflect.getOwnPropertyDescriptor(ref2.value, key);
        if (descriptor2)
          return descriptor2;
        if ("_" in ref2.value && "setupState" in ref2.value._) {
          const descriptor3 = Reflect.getOwnPropertyDescriptor(ref2.value._.setupState, key);
          if (descriptor3)
            return descriptor3;
        }
      }
      for (const ref2 of refs) {
        let obj = ref2.value && Object.getPrototypeOf(ref2.value);
        while (obj) {
          const descriptor2 = Reflect.getOwnPropertyDescriptor(obj, key);
          if (descriptor2)
            return descriptor2;
          obj = Object.getPrototypeOf(obj);
        }
      }
      for (const ref2 of refs) {
        const childRefs = ref2.value && ref2.value[Refs];
        if (!childRefs)
          continue;
        const queue2 = childRefs.slice();
        while (queue2.length) {
          const ref3 = queue2.shift();
          const descriptor2 = Reflect.getOwnPropertyDescriptor(ref3.value, key);
          if (descriptor2)
            return descriptor2;
          const childRefs2 = ref3.value && ref3.value[Refs];
          if (childRefs2)
            queue2.push(...childRefs2);
        }
      }
      return void 0;
    }
  });
}
const VTooltip = genericComponent()({
  name: "VTooltip",
  props: {
    id: String,
    text: String,
    ...omit(makeVOverlayProps({
      closeOnBack: false,
      location: "end",
      locationStrategy: "connected",
      minWidth: 0,
      offset: 10,
      openOnClick: false,
      openOnHover: true,
      origin: "auto",
      scrim: false,
      scrollStrategy: "reposition",
      transition: false
    }), ["absolute", "persistent", "eager"])
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid2 = getUid();
    const id = computed(() => props.id || `v-tooltip-${uid2}`);
    const overlay = ref();
    const location = computed(() => {
      return props.location.split(" ").length > 1 ? props.location : props.location + " center";
    });
    const origin = computed(() => {
      return props.origin === "auto" || props.origin === "overlap" || props.origin.split(" ").length > 1 || props.location.split(" ").length > 1 ? props.origin : props.origin + " center";
    });
    const transition = computed(() => {
      if (props.transition)
        return props.transition;
      return isActive.value ? "scale-transition" : "fade-transition";
    });
    const activatorProps = computed(() => mergeProps({
      "aria-describedby": id.value
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = filterVOverlayProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-tooltip"],
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "persistent": true,
        "role": "tooltip",
        "eager": true,
        "activatorProps": activatorProps.value,
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          var _a;
          var _slots$default;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return (_a = (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots, ...args)) != null ? _a : props.text;
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
function createCssTransition(name) {
  let origin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top center 0";
  let mode = arguments.length > 2 ? arguments[2] : void 0;
  return defineComponent({
    name,
    props: {
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: {
        type: String,
        default: mode
      },
      origin: {
        type: String,
        default: origin
      }
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        const tag = props.group ? TransitionGroup : Transition;
        return h(tag, {
          name,
          mode: props.mode,
          onBeforeEnter(el2) {
            el2.style.transformOrigin = props.origin;
          },
          onLeave(el2) {
            if (props.leaveAbsolute) {
              const {
                offsetTop,
                offsetLeft,
                offsetWidth,
                offsetHeight
              } = el2;
              el2._transitionInitialStyles = {
                position: el2.style.position,
                top: el2.style.top,
                left: el2.style.left,
                width: el2.style.width,
                height: el2.style.height
              };
              el2.style.position = "absolute";
              el2.style.top = `${offsetTop}px`;
              el2.style.left = `${offsetLeft}px`;
              el2.style.width = `${offsetWidth}px`;
              el2.style.height = `${offsetHeight}px`;
            }
            if (props.hideOnLeave) {
              el2.style.setProperty("display", "none", "important");
            }
          },
          onAfterLeave(el2) {
            if (props.leaveAbsolute && el2 != null && el2._transitionInitialStyles) {
              const {
                position,
                top,
                left,
                width,
                height
              } = el2._transitionInitialStyles;
              delete el2._transitionInitialStyles;
              el2.style.position = position || "";
              el2.style.top = top || "";
              el2.style.left = left || "";
              el2.style.width = width || "";
              el2.style.height = height || "";
            }
          }
        }, slots.default);
      };
    }
  });
}
function createJavascriptTransition(name, functions) {
  let mode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return defineComponent({
    name,
    props: {
      mode: {
        type: String,
        default: mode
      }
    },
    setup(props, _ref2) {
      let {
        slots
      } = _ref2;
      return () => {
        return h(Transition, {
          name,
          ...functions
        }, slots.default);
      };
    }
  });
}
function ExpandTransitionGenerator() {
  let expandedParentClass = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const sizeProperty = x ? "width" : "height";
  const offsetProperty = camelize(`offset-${sizeProperty}`);
  return {
    onBeforeEnter(el2) {
      el2._parent = el2.parentNode;
      el2._initialStyle = {
        transition: el2.style.transition,
        overflow: el2.style.overflow,
        [sizeProperty]: el2.style[sizeProperty]
      };
    },
    onEnter(el2) {
      const initialStyle = el2._initialStyle;
      el2.style.setProperty("transition", "none", "important");
      el2.style.overflow = "hidden";
      const offset = `${el2[offsetProperty]}px`;
      el2.style[sizeProperty] = "0";
      void el2.offsetHeight;
      el2.style.transition = initialStyle.transition;
      if (expandedParentClass && el2._parent) {
        el2._parent.classList.add(expandedParentClass);
      }
      requestAnimationFrame(() => {
        el2.style[sizeProperty] = offset;
      });
    },
    onAfterEnter: resetStyles,
    onEnterCancelled: resetStyles,
    onLeave(el2) {
      el2._initialStyle = {
        transition: "",
        overflow: el2.style.overflow,
        [sizeProperty]: el2.style[sizeProperty]
      };
      el2.style.overflow = "hidden";
      el2.style[sizeProperty] = `${el2[offsetProperty]}px`;
      void el2.offsetHeight;
      requestAnimationFrame(() => el2.style[sizeProperty] = "0");
    },
    onAfterLeave,
    onLeaveCancelled: onAfterLeave
  };
  function onAfterLeave(el2) {
    if (expandedParentClass && el2._parent) {
      el2._parent.classList.remove(expandedParentClass);
    }
    resetStyles(el2);
  }
  function resetStyles(el2) {
    const size2 = el2._initialStyle[sizeProperty];
    el2.style.overflow = el2._initialStyle.overflow;
    if (size2 != null)
      el2.style[sizeProperty] = size2;
    delete el2._initialStyle;
  }
}
createCssTransition("fab-transition", "center center", "out-in");
createCssTransition("dialog-bottom-transition");
createCssTransition("dialog-top-transition");
createCssTransition("fade-transition");
createCssTransition("scale-transition");
createCssTransition("scroll-x-transition");
createCssTransition("scroll-x-reverse-transition");
createCssTransition("scroll-y-transition");
createCssTransition("scroll-y-reverse-transition");
createCssTransition("slide-x-transition");
createCssTransition("slide-x-reverse-transition");
createCssTransition("slide-y-transition");
createCssTransition("slide-y-reverse-transition");
const VExpandTransition = createJavascriptTransition("expand-transition", ExpandTransitionGenerator());
createJavascriptTransition("expand-x-transition", ExpandTransitionGenerator("", true));
const appearanceDefault = {
  shown: false,
  main_button: {
    wheel: false,
    pc: 0,
    color: "success",
    tooltip_text: "MyShopDash Button: click to download all your eReceipts",
    tooltip_text2: null,
    show_tooltip: true,
    active: false,
    indeterminate: false
  },
  show_side_buttons: false,
  button1: {
    color: "orange-lighten-1",
    tooltip_text: "Make it a dashboard",
    tooltip_text2: "(your data will be securely transferred and displayed in your personal shopping dashboard at myshopdash.app)",
    show_tooltip: true,
    loading: false,
    active: true
  },
  button2: {
    color: "orange-lighten-1",
    tooltip_text: "Download your data as a JSON file",
    tooltip_text2: null,
    show_tooltip: true,
    loading: false,
    active: true
  },
  button3: {
    color: "orange-lighten-1",
    tooltip_text: "Close panel (downloaded data will not be saved)",
    show_tooltip: true,
    loading: false,
    active: true
  }
};
const _sfc_main = {
  name: "msdInterBox",
  components: {
    mainClickHandler,
    button2ClickHandler,
    button1ClickHandler,
    startup,
    appearanceDefault,
    close_box
  },
  data: () => ({
    mdiAlert,
    mdiCodeJson,
    mdiOpenInApp,
    mdiClose,
    appearance: appearanceDefault,
    placementNodeName: "body"
  }),
  computed: {},
  watch: {},
  mounted() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log("request", request);
      if (request.target == "ibox" && request.subject == "appearance") {
        this.appearance = merge(this.appearance, request.content);
      }
      if (request.target == "ibox" && request.subject == "error") {
        this.error_state = true;
        this.error_message = request.content;
      }
      if (request.target == "ibox" && request.subject == "alert") {
        this.alert_state = true;
        this.alert_message = request.content;
      }
      if (request.target == "ibox" && request.subject == "placementNodeName") {
        this.placementNodeName = request.content;
      }
      sendResponse({ status: "ok" });
    });
    startup();
  },
  methods: {
    click() {
      if (!this.appearance.main_button.active)
        return;
      mainClickHandler();
    },
    async button1_click() {
      await button1ClickHandler();
    },
    async button2_click() {
      await button2ClickHandler();
    },
    async reset() {
      await close_box();
    }
  }
};
const _hoisted_1 = { style: { "overflow-x": "hidden", "width": "80px" } };
const _hoisted_2 = {
  class: "d-flex align-center",
  style: { height: "80px", width: "160px" }
};
const _hoisted_3 = {
  style: { "z-index": "1000020", "width": "80px", "height": "80px", "position": "relative" },
  class: "ma-auto d-flex"
};
const _hoisted_4 = { key: 0 };
const _hoisted_5 = {
  style: { "z-index": 1000010, position: "relative", left: "-80px", height: "80px", overflow: "hidden" },
  class: "d-flex align-center"
};
const _hoisted_6 = {
  key: 0,
  class: "mx-3"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_8 = { key: 0 };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_10 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VApp, null, {
    default: withCtx(() => [
      createVNode(VMain, null, {
        default: withCtx(() => [
          _ctx.appearance.shown ? (openBlock(), createBlock(Teleport, {
            key: 0,
            to: _ctx.placementNodeName
          }, [
            createVNode(VHover, null, {
              default: withCtx(({ isHovering, props }) => [
                createVNode(VCard, mergeProps({
                  style: { position: "fixed", bottom: "50px", left: "80px", opacity: isHovering ? 1 : 0.5 },
                  class: "d-flex align-center"
                }, props, {
                  variant: "flat",
                  color: "rgba(0,0,0,0.1)",
                  rounded: "pill"
                }), {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, [
                      createBaseVNode("div", _hoisted_2, [
                        createBaseVNode("div", _hoisted_3, [
                          createVNode(VHover, null, {
                            default: withCtx(({ isHovering: isHovering2, props: props2 }) => [
                              createVNode(VTooltip, {
                                activator: "parent",
                                location: "top",
                                "close-on-content-click": false,
                                "close-delay": 200,
                                "open-on-hover": true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.appearance.main_button.tooltip_text) + " ", 1),
                                  _ctx.appearance.main_button.tooltip_text2 ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(_ctx.appearance.main_button.tooltip_text2), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                class: "ma-auto",
                                size: isHovering2 ? `62px` : `58px`,
                                rounded: "pill",
                                color: _ctx.appearance.main_button.color,
                                disabled: !_ctx.appearance.main_button.active,
                                onClick: $options.click
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: "https://myshopdash.app/img/sicon48.png",
                                    width: "30px"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["size", "color", "disabled", "onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createBaseVNode("div", _hoisted_5, [
                          createVNode(VProgressCircular, {
                            size: "80",
                            width: "10",
                            color: "red",
                            "model-value": _ctx.appearance.main_button.pc,
                            style: normalizeStyle({ visibility: _ctx.appearance.main_button.wheel ? "visible" : "hidden" }),
                            indeterminate: _ctx.appearance.main_button.indeterminate
                          }, null, 8, ["model-value", "style", "indeterminate"])
                        ])
                      ])
                    ]),
                    createVNode(VExpandTransition, null, {
                      default: withCtx(() => [
                        _ctx.appearance.show_side_buttons ? (openBlock(), createElementBlock("div", _hoisted_6, [
                          createVNode(VHover, null, {
                            default: withCtx(({ isHovering: isHovering2, props: props2 }) => [
                              createVNode(VBtn, mergeProps({
                                icon: "",
                                rounded: "pill",
                                class: "ma-2",
                                size: "65",
                                elevation: isHovering2 ? "5" : "1"
                              }, props2, {
                                color: _ctx.appearance.button1.color,
                                loading: _ctx.appearance.button1.loading,
                                disabled: !_ctx.appearance.button1.active,
                                onClick: $options.button1_click
                              }), {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: _ctx.mdiOpenInApp,
                                    size: "40"
                                  }, null, 8, ["icon"]),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top",
                                    "close-on-content-click": true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.appearance.button1.tooltip_text), 1),
                                      _hoisted_7,
                                      _ctx.appearance.button1.tooltip_text2 ? (openBlock(), createElementBlock("span", _hoisted_8, toDisplayString(_ctx.appearance.button1.tooltip_text2), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1040, ["elevation", "color", "loading", "disabled", "onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VHover, null, {
                            default: withCtx(({ isHovering: isHovering2, props: props2 }) => [
                              createVNode(VBtn, mergeProps({
                                icon: "",
                                rounded: "pill",
                                class: "ma-2",
                                elevation: isHovering2 ? "5" : "1"
                              }, props2, {
                                loading: _ctx.appearance.button2.loading,
                                disabled: !_ctx.appearance.button2.active,
                                onClick: $options.button2_click
                              }), {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: _ctx.mdiCodeJson,
                                    size: "large"
                                  }, null, 8, ["icon"]),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top",
                                    "close-on-content-click": true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.appearance.button2.tooltip_text), 1),
                                      _hoisted_9,
                                      _ctx.appearance.button2.tooltip_text2 ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(_ctx.appearance.button2.tooltip_text2), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1040, ["elevation", "loading", "disabled", "onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VHover, null, {
                            default: withCtx(({ isHovering: isHovering2, props: props2 }) => [
                              createVNode(VBtn, mergeProps({
                                icon: "",
                                rounded: "pill",
                                class: "ma-2",
                                elevation: isHovering2 ? "5" : "1"
                              }, props2, { onClick: $options.reset }), {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: _ctx.mdiClose }, null, 8, ["icon"]),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top",
                                    "close-on-content-click": true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.appearance.button3.tooltip_text), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1040, ["elevation", "onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1040, ["style"])
              ]),
              _: 1
            })
          ], 8, ["to"])) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
function createVuetify() {
  let vuetify2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint,
    ...rest
  } = vuetify2;
  const options = mergeDeep(blueprint, rest);
  const {
    aliases: aliases2 = {},
    components = {},
    directives = {}
  } = options;
  const defaults = createDefaults(options.defaults);
  const display = createDisplay(options.display, options.ssr);
  const theme = createTheme(options.theme);
  const icons = createIcons(options.icons);
  const locale = createLocale(options.locale);
  const install = (app) => {
    for (const key in directives) {
      app.directive(key, directives[key]);
    }
    for (const key in components) {
      app.component(key, components[key]);
    }
    for (const key in aliases2) {
      app.component(key, defineComponent({
        ...aliases2[key],
        name: key,
        aliasName: aliases2[key].name
      }));
    }
    theme.install(app);
    app.provide(DefaultsSymbol, defaults);
    app.provide(DisplaySymbol, display);
    app.provide(ThemeSymbol, theme);
    app.provide(IconSymbol, icons);
    app.provide(LocaleSymbol, locale);
    if (IN_BROWSER && options.ssr) {
      if (app.$nuxt) {
        app.$nuxt.hook("app:suspense:resolve", () => {
          display.update();
        });
      } else {
        const {
          mount
        } = app;
        app.mount = function() {
          const vm = mount(...arguments);
          nextTick(() => display.update());
          app.mount = mount;
          return vm;
        };
      }
    }
    getUid.reset();
    {
      app.mixin({
        computed: {
          $vuetify() {
            return reactive({
              defaults: inject.call(this, DefaultsSymbol),
              display: inject.call(this, DisplaySymbol),
              theme: inject.call(this, ThemeSymbol),
              icons: inject.call(this, IconSymbol),
              locale: inject.call(this, LocaleSymbol)
            });
          }
        }
      });
    }
  };
  return {
    install,
    defaults,
    display,
    theme,
    icons,
    locale
  };
}
const version = "3.1.3";
createVuetify.version = version;
function inject(key) {
  var _a;
  var _vm$parent, _vm$vnode$appContext;
  const vm = this.$;
  const provides = (_a = (_vm$parent = vm.parent) == null ? void 0 : _vm$parent.provides) != null ? _a : (_vm$vnode$appContext = vm.vnode.appContext) == null ? void 0 : _vm$vnode$appContext.provides;
  if (provides && key in provides) {
    return provides[key];
  }
}
const main = "";
const aliases = {
  collapse: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",
  complete: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
  cancel: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  close: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  delete: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  clear: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  success: "M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",
  info: "M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  warning: "M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",
  error: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",
  prev: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  next: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  checkboxOn: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  checkboxOff: "M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
  checkboxIndeterminate: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  delimiter: "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  sortAsc: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
  sortDesc: "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",
  expand: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  menu: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
  subgroup: "M7,10L12,15L17,10H7Z",
  dropdown: "M7,10L12,15L17,10H7Z",
  radioOn: "M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",
  radioOff: "M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  edit: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
  ratingEmpty: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  ratingFull: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
  ratingHalf: "M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  loading: "M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",
  first: "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",
  last: "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",
  unfold: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
  file: "M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",
  plus: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
  minus: "M19,13H5V11H19V13Z"
};
const mdi = {
  component: VSvgIcon
};
const vuetify = createVuetify(
  {
    theme: {},
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi
      }
    }
  }
);
const bod = document.getElementsByTagName("body")[0];
const div = document.createElement("div");
const el = bod.appendChild(div);
createApp(App).use(vuetify).mount(el);

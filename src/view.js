/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
const spoilerButtons = document.querySelectorAll(".spoiler-section-button");
const spoilerContents = document.querySelectorAll(".spoiler-section-contents");

console.log("num of buttons: "+spoilerButtons.length);

spoilerButtons.forEach((button, key)=>{
    button.addEventListener('click', ()=>{
        if (spoilerContents[key].classList.contains("spoiler-section-hidden") ){
            spoilerContents[key].classList.replace("spoiler-section-hidden", "spoiler-section-visible");
        }
        else {
            spoilerContents[key].classList.replace("spoiler-section-visible", "spoiler-section-hidden");
        }

        button.querySelectorAll("span").forEach((elem)=>{
            elem.classList.toggle("spoiler-section-button-curr");
        });
    })
})
/* eslint-enable no-console */

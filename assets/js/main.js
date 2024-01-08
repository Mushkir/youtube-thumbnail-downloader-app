import JustValidate from "just-validate"
import isUrl from 'is-url'


const urlFormEl = document.querySelector("#urlForm")
const validate = new JustValidate(urlFormEl, {
    validateBeforeSubmitting: true
})


validate.addField("#youtube-url-input", [
    {
        rule: 'required',
    },

], {
    errorLabelCssClass: ['form-error']
})


validate.onSuccess((e) => {
    e.preventDefault();

    const formData = new FormData(urlFormEl)


    // Get the youtube URL https://www.youtube.com/watch?v=ehhIzVYD-M8
    const youtubeURLObj = Object.fromEntries(formData.entries())
    const UrlData = youtubeURLObj["youtube-url-input"]
    // console.log(UrlData);

    // Get ID
    const splittedURL = UrlData.split("v=")
    

    // Need to add ID with https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg
    const urlID = splittedURL[1].split("").slice(0,11)
    const thumbnailURL = `https://i.ytimg.com/vi/${urlID.join("")}/maxresdefault.jpg`

    // console.log();
    // console.log(thumbnailURL);

    // Need to show Thumbnail image in UI

})






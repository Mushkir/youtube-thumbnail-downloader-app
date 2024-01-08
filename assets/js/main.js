// JS Library for Form Validation
import JustValidate from "just-validate";

// JS Library for Validate YouTube URL
import youtubeUrl from "youtube-url";

const urlFormEl = document.querySelector("#urlForm");
const validate = new JustValidate(urlFormEl, {
  validateBeforeSubmitting: true,
});

validate.addField(
  "#youtube-url-input",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validate.onSuccess((e) => {
  e.preventDefault();

  // Get the youtube URL https://www.youtube.com/watch?v=ehhIzVYD-M8
  const formData = new FormData(urlFormEl);
  const youtubeURLObj = Object.fromEntries(formData.entries());
  const UrlData = youtubeURLObj["youtube-url-input"];
  // console.log(UrlData);


  // Verify the URL is valid or not
  if (youtubeUrl.valid(UrlData) == true) {
    // Get ID
    const splittedURL = UrlData.split("v=");

    // Need to add ID with https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg
    const urlID = splittedURL[1].split("").slice(0, 11);
    const thumbnailURL = `https://i.ytimg.com/vi/${urlID.join("")}/maxresdefault.jpg`;

    // console.log();
    console.log(thumbnailURL);

    // Need to show Thumbnail image in UI
  const thumbnailViewer = document.querySelector("#thumbnail-viewer")

  const thumbnailImageEl = document.createElement("img")
  thumbnailImageEl.src = thumbnailURL
  thumbnailImageEl.classList.add("w-[1000px]", "h-[1000px]", "object-cover", "mx-auto")
  thumbnailViewer.appendChild(thumbnailImageEl)


//   Download Button
const downloadButtonEl = document.createElement("a");
downloadButtonEl.href = thumbnailURL;
downloadButtonEl.download = `Thumbnail Image ${0 + 1}`;
downloadButtonEl.textContent = "Download Thumbnail";
downloadButtonEl.classList.add("text-white"); 
// thumbnailViewer.appendChild(downloadButtonEl);

  

  urlFormEl.reset()

  } else {

    alert ("Sorry! This field requires only YouTube URL.")
  }

});
